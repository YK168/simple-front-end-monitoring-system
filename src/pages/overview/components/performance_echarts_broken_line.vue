<template>
  <div>
    <echart width='900' :option="performanceOption" @acceptData="acceptData_performance"/>
  </div>
</template>

<script setup>
import { reactive, watch, toRefs } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { getperformanceByPage } from '../../../services/overview'
import echart from '../../../components/EchartsCom.vue'

const userStore = useAppStore()
const { project_key } = userStore.getSelectProject

const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const { path } = toRefs(props)

const performanceOption = reactive({
  title: {
    text: '页面性能分析'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '40',
    left: '100',
    data: ['首次渲染耗时', '首屏时间', '首次可交互', 'DOM Ready', '页面完全加载']
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
      boundaryGap: false,
      data: []
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '毫秒'
    }
  ],
  series: [
    {
      name: '首次渲染耗时',
      type: 'line',
      data: []
    }, {
      name: '首屏时间',
      type: 'line',
      data: []
    }, {
      name: '首次可交互',
      type: 'line',
      data: []
    }, {
      name: 'DOM Ready',
      type: 'line',
      data: []
    }, {
      name: '页面完全加载',
      type: 'line',
      data: []
    }]
})

// const typeValue = ref('RunderTime')

// const options = [
//   {
//     value: 'RunderTime',
//     label: '首次渲染耗时'
//   },
//   {
//     value: 'FMPTime',
//     label: '首屏时间'
//   },
//   {
//     value: 'InteractableTime',
//     label: '首次可交互'
//   },
//   {
//     value: 'DomReadyTime',
//     label: 'DOM Ready'
//   },
//   {
//     value: 'LoadCompleteTime',
//     label: '页面完全加载'
//   }
// ]

watch(path, (newVal) => {
  acceptData_performance()
})

let startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
let endTime = Math.floor(new Date().getTime() / 1000)

// 获取页面的pv、uv数据
const performanceData = async (path) => {
  if (!path.value) return
  const postData = {
    projectKey: project_key,
    startTime,
    endTime,
    path: path.value
  }
  const { data } = await getperformanceByPage(postData)

  performanceOption.xAxis[0].data = data.RunderTime.X
  performanceOption.series[0].data = data.RunderTime.Y
  performanceOption.series[1].data = data.FMPTime.Y
  performanceOption.series[2].data = data.InteractableTime.Y
  performanceOption.series[3].data = data.DomReadyTime.Y
  performanceOption.series[0].data = data.LoadCompleteTime.Y
}

const acceptData_performance = async (e) => {
  if (e) {
    startTime = Math.floor(e[0].value[0] / 1000)
    endTime = Math.floor(e[0].value[1] / 1000)
  }
  await performanceData(path)
}

</script>

<style lang='scss' scoped>
.selectDiv{
  margin-bottom: 10px;
}
</style>
