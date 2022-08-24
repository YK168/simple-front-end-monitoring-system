<template>
  <div class="cus-flex cus-row-left">

    <div class="list">
      <el-affix :offset="70">
      <div class='cusFiexd'>
        <div class="title">API请求排行榜</div>
        <div class="ulDiv">
          <div class="ul"
               :class="{action:selected === item}"
               v-for="(item, index) in pageList"
               :key="index" @click='selectedUrl(item)'>
            {{ item }}
          </div>
        </div>
      </div>
      </el-affix>
    </div>

    <div class="content">
      <div class='data'>
        <Api_echarts :path='selected'/>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Api_echarts from './components/api_echarts.vue'

import { getAPIrank } from '../../services/overview'
import { useAppStore } from '@/store/modules/app'

const userStore = useAppStore()
const { project_key } = userStore.getSelectProject

const pageList = ref([])
const selected = ref()

onMounted(() => {
  queryList()
})

const queryList = async () => {
  const post = {
    projectKey: project_key
  }
  const { data } = await getAPIrank(post)
  pageList.value = data
  const len = pageList.value.length
  if (len > 0) {
    await selectedUrl(pageList.value[0])
  }
}

// 选中排行榜上的数据
const selectedUrl = async (e) => {
  selected.value = e
}
</script>
<style lang="scss" scoped>
.list {
  position: relative;
  height: calc(100vh - 70px);
  overflow-y: auto;
  flex: 2;
  padding: 20px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: white;
  &::-webkit-scrollbar{
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    width: 270px;
  }
  .ulDiv {
    margin-top: 50px;
    .ul {
      word-break: break-all;
      word-wrap: break-word;
      padding: 20px 10px;
      cursor: pointer;
    }
    .action {
      border-radius: 10px;
      background-color: #ecf5ff;
    }
    .ul:hover {
      border-radius: 10px;
      background-color: #ecf5ff;
    }
  }
}
.content {
  flex: 4;
  .data{
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
  }
}
</style>
