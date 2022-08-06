<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <sidebar id="guide-sidebar" class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 -->
        <Header />
      </div>
      <!-- 内容 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar/index.vue'
import Header from './Header.vue'
import AppMain from './AppMain.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;

  .main-container {
    transition: margin-left 0.3s;
    position: relative;
    flex: 1;
  }
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  transition: width 0.3s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 210px);
}
</style>
