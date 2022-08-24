<template>
  <div>
    <div class="sidebar-container" style='position: fixed;z-index: 2'>
      <div class="logo-container">
        <el-avatar
          :size="logoHeight"
          shape="square"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.taoguba.com.cn%2Fimg%2F2020%2F04%2F16%2F3pvuo4l5xpsh.jpg_max.png&refer=http%3A%2F%2Fimage.taoguba.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662319990&t=b0277c635044cca755a89fcb03fdd51a"
        />
        <h1 class="logo-title">{{projected.title || '29Ah' }}</h1>
      </div>
      <el-scrollbar>
        <sidebar-menu></sidebar-menu>
      </el-scrollbar>
    </div>

    <div class="sidebar-container">
      <div class="logo-container">
        <el-avatar
          :size="logoHeight"
          shape="square"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.taoguba.com.cn%2Fimg%2F2020%2F04%2F16%2F3pvuo4l5xpsh.jpg_max.png&refer=http%3A%2F%2Fimage.taoguba.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662319990&t=b0277c635044cca755a89fcb03fdd51a"
        />
        <h1 class="logo-title">{{ projected.title || '29Ah' }}</h1>
      </div>
      <el-scrollbar>
        <sidebar-menu></sidebar-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import SidebarMenu from './SidebarMenu.vue'

const logoHeight = 48

const userStore = useAppStore()

// console.log('userStore.getSelectProject()',userStore.getSelectProject)

const projected = computed(() => {
  return userStore.getSelectProject
})
</script>

<style lang="scss" scoped>
@import './sidebar.scss';

.logo-container {
  height: v-bind(logoHeight) + 'px';
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
