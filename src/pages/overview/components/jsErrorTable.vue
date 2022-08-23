<template>
  <el-table :data="jsErrorList" stripe style="width: 100%">
    <el-table-column prop="Msg" label="报错信息" />
    <el-table-column prop="Time" label="时间"  />
    <el-table-column prop="Position" label="报错位置" />
  </el-table>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { getJSerrorByPage } from '../../../services/overview'

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

const startTime = Math.floor((new Date().getTime() - 3600 * 1000 * 24 * 1) / 1000)
const endTime = Math.floor(new Date().getTime() / 1000)

const jsErrorList = ref([])

/**
 * 获取页面的js报错信息
 */
const jsErrorData = async () => {
  const postData = {
    projectKey: project_key,
    startTime,
    endTime,
    path: path.value
  }
  const { data } = await getJSerrorByPage(postData)
  jsErrorList.value = data
}
</script>

<style lang='scss' scoped>

</style>
