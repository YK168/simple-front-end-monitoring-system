<template>
  <div>
    <div class='selectDiv'>
      <el-select v-model="typeValue" class="m-2" placeholder="Select" size="small" @change='changeType'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <echart width='800' :option="performanceOption" @acceptData="acceptData_performance"/>
  </div>
</template>

<script setup>
import { reactive, watch, ref, toRefs } from 'vue'
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
    text: '首次渲染耗时'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['']
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
      type: 'value'
    }
  ],
  series: [
    {
      name: '',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: []
    }]
})

const typeValue = ref('RunderTime')

const options = [
  {
    value: 'RunderTime',
    label: '首次渲染耗时'
  },
  {
    value: 'FMPTime',
    label: '首屏时间'
  },
  {
    value: 'InteractableTime',
    label: '首次可交互'
  },
  {
    value: 'DomReadyTime',
    label: 'DOM Ready'
  },
  {
    value: 'LoadCompleteTime',
    label: '页面完全加载'
  }
]

watch(path, (newVal) => {
  acceptData_performance()
})

let startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
let endTime = Math.floor(new Date().getTime() / 1000)

// 获取页面的pv、uv数据
const performanceData = async (path) => {
  const postData = {
    projectKey: project_key,
    startTime,
    endTime,
    path: path.value
  }
  const { data } = await getperformanceByPage(postData)

  performanceOption.xAxis[0].data = data[typeValue.value].X
  performanceOption.series[0].data = data[typeValue.value].Y
}

const acceptData_performance = async (e) => {
  if (e) {
    startTime = Math.floor(e[0].value[0] / 1000)
    endTime = Math.floor(e[0].value[1] / 1000)
  }
  await performanceData(path)
}

/**
 * 改变图表类型
 */
const changeType = (e) => {
  const temp = options.find(d => d.value === e)
  performanceOption.title.text = temp.label
  acceptData_performance()
}
</script>

<style lang='scss' scoped>
.selectDiv{
  margin-bottom: 10px;
}
</style>
