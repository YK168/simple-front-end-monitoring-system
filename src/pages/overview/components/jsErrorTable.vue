<template>
  <div>
    <div class="">
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        :shortcuts="shortcuts"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        value-format="x"
        @change='changeDate'
      />
    </div>
    <el-table-v2
      :columns="columns"
      :data="jsErrorList"
      :width="900"
      :height="400"
    />
<!--    <el-table :data="jsErrorList" stripe style="width: 100%">-->
<!--      <el-table-column prop="Msg" label="报错信息" />-->
<!--      <el-table-column prop="Time" label="时间"  />-->
<!--      <el-table-column prop="Position" label="报错位置" />-->
<!--    </el-table>-->
  </div>

</template>

<script setup>
import { ref, watch, toRefs } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { getJSerrorByPage } from '../../../services/overview'
// import { timestampToTime } from '../../../utils/utils'

const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const { path } = toRefs(props)

watch(path, (newVal) => {
  jsErrorData()
})

const userStore = useAppStore()
const { project_key } = userStore.getSelectProject

// const startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
// const endTime = Math.floor(new Date().getTime() / 1000)

const value1 = ref([new Date() - 3600 * 1000 * 24 * 1, new Date()])

const shortcuts = [
  {
    text: '上周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '上个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]

const jsErrorList = ref([])

const columns = [
  {
    key: 'Msg',
    title: '报错信息',
    dataKey: 'Msg',
    width: 380
  },
  {
    key: 'Time',
    title: '时间',
    dataKey: 'Time',
    width: 280
  },
  {
    key: 'Position',
    title: '报错位置',
    dataKey: 'Position',
    width: 180
  }
]

/**
 * 获取页面的js报错信息
 */
const jsErrorData = async () => {
  const postData = {
    projectKey: project_key,
    startTime: Math.floor(value1.value[0] / 1000),
    endTime: Math.floor(value1.value[1] / 1000),
    path: path.value
  }
  const { data } = await getJSerrorByPage(postData)
  jsErrorList.value = data
}

const changeDate = (e) => {
  jsErrorData()
}
</script>

<style lang='scss' scoped>

</style>
