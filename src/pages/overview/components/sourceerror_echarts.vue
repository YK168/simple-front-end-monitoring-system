<template>
  <echart width='900' :option="sourceerrorOption" @acceptData="acceptData_sourceerror"/>
</template>

<script setup>
import { reactive, watch, toRefs } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { getSourceerrorByPage } from '../../../services/overview'
import echart from '../../../components/EchartsCom.vue'
const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const { path } = toRefs(props)

watch(path, (newVal) => {
  acceptData_sourceerror()
})

const userStore = useAppStore()
const { project_key } = userStore.getSelectProject

let startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
let endTime = Math.floor(new Date().getTime() / 1000)

const sourceerrorOption = reactive({
  title: {
    text: '资源加载异常'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: []
    }
  ]
})

// 获取页面的pv、uv数据
const getSourceerror = async (path) => {
  if (!path.value) return
  const postData = {
    projectKey: project_key,
    startTime,
    endTime,
    path: path.value
  }
  const { data } = await getSourceerrorByPage(postData)
  const { Data } = data
  sourceerrorOption.xAxis[0].data = Data.X
  sourceerrorOption.series[0].data = Data.Y
}

const acceptData_sourceerror = async (e) => {
  if (e) {
    startTime = Math.floor(e[0].value[0] / 1000)
    endTime = Math.floor(e[0].value[1] / 1000)
  }
  await getSourceerror(path)
}
</script>

<style lang='scss' scoped>

</style>
