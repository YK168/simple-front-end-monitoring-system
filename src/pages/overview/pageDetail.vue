<template>
  <div class="cus-flex cus-row-left">
    <div class="list">
      <div class="title">网页访问量排行</div>
      <div class="ulDiv">
        <div class="ul"
             :class="{action:selected === item}"
             v-for="(item, index) in pageList"
             :key="index" @click='selectedUrl(item)'>
          {{ item }}
        </div>
      </div>
    </div>
    <div class="content">
      <div class='data'>
        <PV_UV_echarts :path='selected'/>
      </div>
      <div class='data'>
        <jsErrorTable :path='selected'/>
      </div>
      <div class='data'>
        <performance_echarts :path='selected'/>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import PV_UV_echarts from './components/PV_UV_echarts.vue'
import jsErrorTable from './components/jsErrorTable.vue'
import performance_echarts from './components/performance_echarts.vue'

import { getAccessRank } from '../../services/overview'
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
  const { data } = await getAccessRank(post)
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
  min-height: calc(100vh - 100px);
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: white;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .ulDiv {
    margin-top: 50px;
    .ul {
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
