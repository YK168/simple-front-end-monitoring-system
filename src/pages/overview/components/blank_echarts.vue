<template>
  <echart width='900' :option="blankOption" @acceptData="acceptData_blank"/>
</template>

<script setup>
import { reactive, watch, toRefs } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { getBlankByPage } from '../../../services/overview'
import echart from '../../../components/EchartsCom.vue'
const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const { path } = toRefs(props)

watch(path, (newVal) => {
  acceptData_blank()
})

const userStore = useAppStore()
const { project_key } = userStore.getSelectProject

let startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
let endTime = Math.floor(new Date().getTime() / 1000)

const blankOption = reactive({
  title: {
    text: '白屏异常'
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
const getBlank = async (path) => {
  if (!path.value) return
  const postData = {
    projectKey: project_key,
    startTime,
    endTime,
    path: path.value
  }
  const { data } = await getBlankByPage(postData)
  const { Data } = data
  blankOption.xAxis[0].data = Data.X
  blankOption.series[0].data = Data.Y
}

const acceptData_blank = async (e) => {
  if (e) {
    startTime = Math.floor(e[0].value[0] / 1000)
    endTime = Math.floor(e[0].value[1] / 1000)
  }
  await getBlank(path)
}
</script>

<style lang='scss' scoped>

</style>
