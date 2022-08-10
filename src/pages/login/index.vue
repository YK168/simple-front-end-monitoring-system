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
      <div class='right'>

      </div>
    </div>

  </div>
</template>

<script setup>
import loginIconImage from '@/assets/logoIcon.png'

// const loginIcon = r

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
    }
  }
}
</style>
