<template>
  <div>
    <Header></Header>
    <div class="cus-padding">
      <div>
        <el-button type="primary" @click="isAddProject = true"
          >新建项目</el-button
        >
      </div>

     <div class='main'>
       <el-table :data="tableData" style="width: 100%">
         <el-table-column prop="title" label="title" width='180' />
         <el-table-column prop="project_key" label="project_key" />
         <el-table-column fixed='right' width='180'>
           <template #default="scope">
             <el-button size="small" @click="handleEdit(scope.row)"
             >进入项目</el-button>
             <el-popconfirm title="你确定要删除项目吗?项目删除后不可恢复!"
                            confirm-button-text='确认'
                            cancel-button-text='取消'
                            @confirm='handleDelete(scope.row)'>
               <template #reference>
                 <el-button
                   size="small"
                   type="danger"
                 >删除项目</el-button>
               </template>
             </el-popconfirm>
           </template>
         </el-table-column>
       </el-table>
     </div>

    </div>

    <el-dialog
      v-model="isAddProject"
      title="新建项目"
    >
      <el-form :model="form">
        <el-form-item label="项目名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isAddProject = false">取消</el-button>
          <el-button type="primary" @click="handleAddProject">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { ElNotification } from 'element-plus'
import Header from '@/layouts/Header.vue'
import { addProject, listProject, delProjecyById } from '@/services/home'
import { toOverview } from '../../utils/auth'
import { useAppStore } from '@/store/modules/app'

const userStore = useAppStore()

const formLabelWidth = '140px'
const isAddProject = ref(false)
const tableData = ref([])
const form = reactive({
  title: ''
})

onMounted(() => {
  queryList()
})

const queryList = async () => {
  const { data } = await listProject()
  console.log('项目列表哦数据', data)
  tableData.value = data
  console.log('tableData', tableData)
}

/**
 * 进入项目
 */
const handleEdit = (data) => {
  userStore.setSelectProject(data)
  toOverview()
}

/**
 * 删除项目
 * @returns {Promise<void>}
 */
const handleDelete = async (delData) => {
  const { project_key } = delData
  const { msg, status } = await delProjecyById(project_key)
  ElNotification({
    title: msg,
    type: status === 200 ? 'success' : 'error'
  })
  await queryList()
}

const handleAddProject = async () => {
  try {
    await addProject(form)
    await queryList()
    ElNotification({
      title: '新建成功',
      type: 'success'
    })
    isAddProject.value = false
    // 刷新列表
  } catch (error) {
    ElNotification({
      title: `新建失败${error.message || ''}`,
      type: 'error'
    })
  }
}
</script>

<style lang="scss" scoped>
.main{
  margin-top: 100px;
}
</style>
