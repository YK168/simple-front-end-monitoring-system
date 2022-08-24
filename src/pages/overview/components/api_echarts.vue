<template>
  <div>
    <echart width='900' :option='apiErrorOption' @acceptData='acceptData_apiError' />
    <div>
      <el-table-v2
        :columns="columns"
        :data="apiList"
        :width="900"
        :height="400"
      />
<!--      <el-table :data="apiList" stripe style="width: 100%">-->
<!--        <el-table-column prop="Status" label="请求状态"/>-->
<!--        <el-table-column prop="TimeStamp" label="上报时间" >-->
<!--          <template #-->
<!--        </el-table-column>-->
<!--        <el-table-column prop="Duration" label="请求耗时(毫秒)"  />-->
<!--        <el-table-column prop="Msg" label="请求消息" />-->
<!--      </el-table>-->
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, toRefs } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { getApiErrPage } from '../../../services/overview'
import echart from '../../../components/EchartsCom.vue'
import { timestampToTime } from '../../../utils/utils'

const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const { path } = toRefs(props)

watch(path, (newVal) => {
  acceptData_apiError()
})

const userStore = useAppStore()
const { project_key } = userStore.getSelectProject

let startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
let endTime = Math.floor(new Date().getTime() / 1000)

const apiList = ref([])

const apiErrorOption = reactive({
  title: {
    text: 'API请求'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      magicType: {
        show: true,
        type: ['line', 'bar']
      }
    }
  },
  legend: {
    data: ['成功', '失败', '成功率']
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '次数',
      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      type: 'value',
      name: '成功率',
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '成功',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 次'
        }
      },
      data: []
    },
    {
      name: '失败',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 次'
        }
      },
      data: []
    },
    {
      name: '成功率',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value * 100 + ' %'
        }
      },
      data: []
    }
  ]
})

const columns = [
  {
    key: 'Status',
    title: '请求状态',
    dataKey: 'Status',
    width: 180
  },
  {
    key: 'TimeStamp',
    title: '上报时间',
    dataKey: 'TimeStamp',
    cellRenderer: ({ cellData: TimeStamp }) => timestampToTime(TimeStamp),
    width: 280
  },
  {
    key: 'Msg',
    title: '请求消息',
    dataKey: 'Msg',
    width: 180
  },
  {
    key: 'Duration',
    title: '请求耗时(毫秒)',
    dataKey: 'Duration',
    width: 180
  }
]

// 获取页面的pv、uv数据
const pv_uv = async (path) => {
  if (!path.value) return
  const postData = {
    projectKey: project_key,
    startTime,
    endTime,
    path: path.value
  }
  const { data } = await getApiErrPage(postData)
  const {
    SuccCnt,
    ErrCnt,
    SuccRate,
    List
  } = data
  apiErrorOption.xAxis[0].data = SuccCnt.X
  apiErrorOption.series[0].data = SuccCnt.Y
  apiErrorOption.series[1].data = ErrCnt.Y
  apiErrorOption.series[2].data = SuccRate.Y
  apiList.value = List
}

const acceptData_apiError = async (e) => {
  if (e) {
    startTime = Math.floor(e[0].value[0] / 1000)
    endTime = Math.floor(e[0].value[1] / 1000)
  }
  await pv_uv(path)
}
</script>

<style lang='scss' scoped>

</style>
