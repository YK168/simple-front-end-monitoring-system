<template>
  <div ref="backFor_chart_drop" class="backFor_chart_drop">
    <!-- 总背景容器 -->
    <div ref="Echarts_container" class="Echarts_container"></div>
    <!-- Echarts表格组件 -->
    <!-- 下拉菜单组件 -->
    <!--<div ref="drop" class="drop">
      <el-dropdown size="large" trigger="click">
        <span ref="DropdownList" class="el-dropdown-link"></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="yesterday">昨天</el-dropdown-item>
            <el-dropdown-item command="lastWeek">最近一周</el-dropdown-item>
            <el-dropdown-item command="lastMonth">最近一月</el-dropdown-item>
            <el-dropdown-item command="personalDefine">自定义</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>-->
    <!-- 日期选择组件 -->
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        :shortcuts="shortcuts"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        @change='changeDate'
      />
    </div>
  </div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, watch, getCurrentInstance, onMounted } from 'vue'
/********************************************************************/
const props = defineProps({
  width: {
    type: String,
    default: '600'
  },
  height: {
    type: String,
    default: '400'
  },
  option: {
    type: Object
  }
})
const value1 = ref([new Date() - 3600 * 1000 * 24 * 1, new Date()])
let myEchart = ref('6')
const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
const emits = defineEmits(['acceptData'])
/********************************************************************/
onMounted(() => {
  init()
})

watch([() => value1, props.option], ([newValue1, newOption], [oldValue, oldOption]) => {
  if (newOption && myEchart) {
    myEchart.value.setOption(newOption)
  }
})
/********************************************************************/
function init () {
  myEchart = echarts.init(
    getCurrentInstance().proxy.$refs.Echarts_container,
    null,
    {
      width: parseInt(props.width),
      height: parseInt(props.height)
    }
  )
  const option = props.option
  myEchart.value.setOption(option)
  emits('acceptData', [value1, myEchart])
}

const changeDate = () => {
  console.log('改变了时间')
  emits('acceptData', [value1, myEchart])
}
</script>

<style lang="scss">
.block {
  position: absolute;
  top: 0px;
}
/* .drop {
  position: absolute;
  top: 20px;
  right: v-bind(CSS_icon_right);
} */
.backFor_chart_drop {
  display: flex;
  justify-content: center;
  position: relative;
}
/* .example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
} */
</style>
