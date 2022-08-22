<template>
  <echart width='800' :option="pv_uvOption" @acceptData="acceptData_PV_UV"/>
</template>

<script setup>
import { reactive, watch, toRefs } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { getAccessPV_UV } from '../../../services/overview'
import echart from '../../../components/EchartsCom.vue'
const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const { path } = toRefs(props)

watch(path, (newVal) => {
  acceptData_PV_UV()
})

const userStore = useAppStore()
const { project_key } = userStore.getSelectProject

let startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
let endTime = Math.floor(new Date().getTime() / 1000)

const pv_uvOption = reactive({
  title: {
    text: 'PV_UV'
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
    data: ['PV', 'UV']
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
      name: 'PV',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'UV',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: []
    }]
})

// 获取页面的pv、uv数据
const pv_uv = async (path) => {
  const postData = {
    projectKey: project_key,
    startTime,
    endTime,
    path: path.value
  }
  const { data } = await getAccessPV_UV(postData)
  const { PVData, UVData } = data
  pv_uvOption.xAxis[0].data = PVData.X
  pv_uvOption.series[0].data = PVData.Y
  pv_uvOption.series[1].data = UVData.Y
}

const acceptData_PV_UV = async (e) => {
  if (e) {
    startTime = Math.floor(e[0].value[0] / 1000)
    endTime = Math.floor(e[0].value[1] / 1000)
  }
  await pv_uv(path)
}
</script>

<style lang='scss' scoped>

</style>
