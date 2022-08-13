<template>
  <div>
    <Header></Header>
    <div class="cus-padding">
      <div>
        <el-button type="primary" @click="isAddProject = true"
          >新建项目</el-button
        >
      </div>
    </div>

    <el-dialog
      v-model="isAddProject"
      title="新建项目"
      :before-close="handleClose"
    >
      <el-form :model="form">
        <el-form-item label="项目名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isAddProject = false">取消</el-button>
          <el-button type="primary" @click="handleAddProject">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'
import Header from '@/layouts/Header.vue'
import { addProject } from '@/services/home'

const formLabelWidth = '140px'
const isAddProject = ref(false)
const form = reactive({
  title: ''
})

const handleAddProject = async () => {
  try {
    await addProject(form)
    ElNotification({
      title: '新建成功',
      type: 'success'
    })
    // 刷新列表
  } catch (error) {
    ElNotification({
      title: `新建失败${error.message || ''}`,
      type: 'error'
    })
  }
}
</script>

<style lang="scss" scoped></style>
