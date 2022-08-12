<template>
  <div class="Login">
    <div class='rightTop'>
      <div class='bgCircle one'></div>
      <div class='bgCircle two'></div>
      <div class='bgCircle three'></div>
    </div>

    <div class='leftBottom'>
      <div class='bgCircle one'></div>
      <div class='bgCircle two'></div>
      <div class='bgCircle three'></div>
    </div>

    <div class='main cus-flex cus-radius'>
      <div class='left cus-flex cus-row-center cus-col-center'>
        <img :src='loginIconImage'>
      </div>
      <div class='right cus-flex cus-col-center'>
        <div class='title'>前端监控系统</div>
        <el-form :model="form" size='large' ref='ruleFormRef' :rules='rules'>
          <el-form-item label="" prop='phone'>
            <el-input v-model="form.phone" placeholder='手机号码' :prefix-icon="Avatar"/>
          </el-form-item>
          <el-form-item label="" prop='pwd'>
            <el-input v-model="form.pwd" show-password placeholder='密码' :prefix-icon="Lock"/>
          </el-form-item>
          <el-form-item label="" prop='rpwd'>
            <el-input v-model="form.rpwd" show-password placeholder='确认密码' :prefix-icon="Lock"/>
          </el-form-item>
          <el-form-item>
            <el-button style='width: 100%' round :loading='loading' type="primary" @click="onSubmit(ruleFormRef)">马上注册</el-button>
          </el-form-item>
          <el-form-item>
            <div style='width: 100%' class='cus-flex cus-row-center'>
              <el-button type='warning' text @click='toLogin'>立即登录</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import loginIconImage from '@/assets/logoIcon.png'
import { Avatar, Lock } from '@element-plus/icons-vue'
import { toLogin } from '@/utils/auth.js'
import { registerHttp } from '../../services/login'
import { ElNotification } from 'element-plus'

const ruleFormRef = ref()

let loading = ref(false)

const form = reactive({
  phone: '',
  pwd: '',
  rpwd: ''
})

const validatePhone = (rule, value, callback) => {
  const tg = /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/
  if (!tg.test(value)) {
    callback(new Error('手机号码格式不正确'))
  } else {
    callback()
  }
}

const validateRpwd = (rule, value, callback) => {
  if (value !== form.pwd) {
    callback(new Error('两次密码不一致'))
  } else {
    callback()
  }
}

const rules = reactive({
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' }
    // { type:'phone', message: '手机号码格式不正确', trigger: 'blur' },
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少需要6位', trigger: 'blur' }
  ],
  rpwd: [
    { validator: validateRpwd, trigger: 'blur' }
  ]
})

const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const postData = {
        number: form.phone,
        passwd: form.pwd
      }
      loading = true
      const { msg } = await registerHttp(postData)
      ElNotification({
        title: '注册成功',
        message: msg,
        type: 'success'
      })
      setTimeout(() => {
        loading = false
        toLogin()
      }, 500)
      // console.log(data)
    }
  })
}

</script>

<style lang="scss" scoped>
.Login{

  .leftBottom,.rightTop{
    width: 308px;
    height: 316px;
    position: fixed;

    .bgCircle{
      opacity: 0.11;
      background: #1384ff;
      border: 1px solid #797979;
      border-radius: 50%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    .one{
      width: 308px;
      height: 316px;
      z-index: 1;
    }
    .two{
      width: 268px;
      height: 277px;
      z-index: 2;
    }
    .three{
      width: 220px;
      height: 230px;
      z-index: 3;
    }
  }

  .leftBottom{
    left: -114px;
    bottom: -118px;
  }
  .rightTop{
    right: -114px;
    top: -118px;
  }

  .main{
    width: 887px;
    height: 543px;
    background: #ffffff;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    color: #333333;
    line-height: 20px;
    text-shadow: 0px 3px 6px 0px rgba(0,0,0,0.15);
    -webkit-box-shadow:14px 16px 31px 0px rgba(62,66,66,0.22);
    -moz-box-shadow: 14px 16px 31px 0px rgba(62,66,66,0.22);
    box-shadow: 14px 16px 31px 0px rgba(62,66,66,0.22);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    .left{
      width: 501px;
      height: 543px;
      background: rgba(19,132,255,0.90);
      font-size: 14px;
      font-weight: normal;
      text-align: center;
      color: #333333;
      line-height: 20px;
      border-radius: 20px 0 0 20px;
    }
    .right{
      width: 386px;
      height: 543px;
      font-size: 14px;
      font-weight: normal;
      text-align: center;
      color: #333333;
      line-height: 20px;
      border-radius: 0 20px 20px 0;
      .title{
        width: 168px;
        height: 39px;
        border-radius: 0px;
        font-size: 28px;
        font-family: Microsoft YaHei, Microsoft YaHei-Normal;
        font-weight: normal;
        text-align: LEFT;
        color: rgba(19,132,255,0.90);
        margin-top: 57px;
        margin-bottom: 67px;
      }
    }
  }
}
</style>
