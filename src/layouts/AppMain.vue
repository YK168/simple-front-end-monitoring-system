<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-main {
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  padding: 16px;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #F5F5F5 ;
}
</style>
