<template>
  <div class="home">
    <div class="head">
      <div class="head_left">
        <echart :option="P_U_V_option" @acceptData="acceptData"></echart>
      </div>
      <div class="head_right">
        <div class="datail_value_select">
          <el-date-picker v-model="value2" type="datetimerange" :shortcuts="shortcuts2" range-separator="To"
            start-placeholder="Start date" end-placeholder="End date" value-format="x" @change='changeDate2' />
        </div>
        <div class="h_r_head">
          <div class="h_r_11th">
            <el-card shadow="always" class="card">
              <div class="new_data">
                <el-button type="success" link>{{ FirstRenderCostTime }}ms</el-button>
              </div>
              <div>
                <el-button type="primary" link>首次渲染耗时</el-button>
              </div>
            </el-card>
          </div>
          <div class="h_r_12th">
            <el-card shadow="always" class="card">
              <div class="new_data">
                <el-button type="success" link>{{ allPV }}</el-button>
              </div>
              <div class="new_data">
                <el-button type="primary" link>总PV</el-button>
              </div>
              <div class="new_data">
                <el-button type="success" link>{{ allUV }}</el-button>
              </div>
              <div class="new_data">
                <el-button type="primary" link>总UV</el-button>
              </div>
            </el-card>
          </div>
        </div>
        <div class="h_r_center">
          <div class="h_r_2th">
            <el-card shadow="always" class="card">
              <div class="new_data">
                <el-button type="danger" link>{{ JSErrorCount }}</el-button>
              </div>
              <div>
                <el-button type="primary" link>JS错误数</el-button>
              </div>
              <!-- <div class="new_data">
                <el-button type="danger" link>{{ blankRate }}%</el-button>
              </div>
              <div>
                <el-button type="primary" link>白屏率</el-button>
              </div> -->
            </el-card>
          </div>
          <div class="h_r_3th">
            <el-card shadow="always" class="card">
              <div class="new_data">
                <el-button type="danger" link>{{ APIErrorCount }}</el-button>
              </div>
              <div>
                <el-button type="primary" link>API错误数</el-button>
              </div>
              <div class="new_data">
                <el-button type="danger" link>{{ APIErrorRate }}%</el-button>
              </div>
              <div>
                <el-button type="primary" link>API错误率</el-button>
              </div>
            </el-card>
          </div>
        </div>
        <div class="h_r_4th">
          <el-card shadow="always" class="card">
            <div class="new_data">
              <el-button type="danger" link>{{ ResourceLoadingError }}次</el-button>
            </div>
            <div>
              <el-button type="primary" link>资源加载错误</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="body">
      <echart :option="JS_option" @acceptData="acceptData" width="1000" height="400" class="body_echart"></echart>
    </div>
    <div class="foot">
      <div class="foot_left">
        <echart :option="API_option" @acceptData="acceptData"></echart>
      </div>
      <div class="foot_right">
        <echart :option="InSpeed_option" @acceptData="acceptData"></echart>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useAppStore } from '@/store/modules/app'
import echart from '../../components/EchartsCom.vue'
import { getPVandUVdata, getJsErrorData, getAPIdata, getInspeedData, getSourceErrorData, getBlankByPage } from '../../services/overview'
export default {
  Created() {
  },
  name: 'HomeView',
  components: {
    echart
  },
  data() {
    return {
      value2: [new Date().getTime() - 3600 * 1000 * 24 * 1, new Date().getTime()],
      shortcuts2: [
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
      ],
      FirstRenderCostTime: 0,
      allPV: 0,
      allUV: 0,
      JSErrorCount: 0,
      //blankRate: 0,
      APIErrorCount: 0,
      APIErrorRate: 0,
      ResourceLoadingError: 0,
      P_U_V_option: {
        title: {
          text: 'P_U_V'
        },
        get_MethodName: "getPVandUVdata",
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
          top: '40',
          left: '20%',
          orient: 'horizontal',
          data: ['总PV', '总UV']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
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
            name: '总PV',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '总UV',
            type: 'line',
            stack: 'Total',
            label: {
              // show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: []
          }
        ]
      },
      JS_option: {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        get_MethodName: "getJsErrorData",
        title: {
          text: 'JS错误'
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
            type: 'line',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [],
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      },
      API_option: {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        title: {
          text: 'API请求',
        },
        get_MethodName: "getAPIdata",
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
          top: 40,
          left: '20%',
          orient: 'horizontal',
          data: ['错误API', '正确API']
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
            type: 'value'
          }
        ],
        series: [
          {
            name: '错误API',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: '正确API',
            type: 'line',
            stack: 'Total',
            label: {
              // show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: []
          }
        ]
      },
      InSpeed_option: {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        get_MethodName: "getInspeedData",
        title: {
          text: '访问速度'
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          top: '40',
          left: '10%',
          orient: 'horizontal',
          data: ['首屏时间', '首次渲染耗时', '首次可交互', 'DomReady', '完全加载耗时', '白屏耗时']
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '首屏时间',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '首次渲染耗时',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '首次可交互',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'DomReady',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '完全加载耗时',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name: '白屏耗时',
            type: 'line',
            stack: 'Total',
            data: [810, 832, 801, 834, 290, 1030, 1020]
          }
        ]
      },
      postData: {
        projectKey: '',
        startTime: 0,
        endTime: 0
      },
      postData2: {
        projectKey: '',
        startTime: 0,
        endTime: 0
      }
    }
  },
  methods: {
    async acceptData(e) {
      console.log('父组件收到日期变化emit')
      console.log('开始日期 :' + (e[0].value[0] * 1).toString().slice(0, 10))
      console.log('结束日期 :' + (e[0].value[1] * 1).toString().slice(0, 10))
      const userStore = useAppStore()
      const { project_key } = userStore.getSelectProject
      console.log(project_key)
      this.postData = {//目前还只能填startTime: 1640966400, endTime: 1643644800
        projectKey: project_key,
        //projectKey: '17459aaf3a37a5c91e04a8dcccb8e993',
        startTime: Number((e[0].value[0] * 1).toString().slice(0, 10)),
        endTime: Number((e[0].value[1] * 1).toString().slice(0, 10))
      }

      // 表格和卡片的projectKey相同
      this.postData2.projectKey = project_key
      this.changeDate2()

      const InstenceGetMethod = e[1].getOption().get_MethodName.toString()
      switch (InstenceGetMethod) {
        case 'getPVandUVdata': {
          const { data } = await getPVandUVdata(this.postData)
          if (!data) { break }
          this.P_U_V_option.series[0].data = data.PVData.Y
          this.P_U_V_option.series[1].data = data.UVData.Y
          this.P_U_V_option.xAxis[0].data = data.PVData.X
          e[1].setOption(this.P_U_V_option)

          break;
        }
        case 'getJsErrorData': {
          const { data } = await getJsErrorData(this.postData)
          if (!data) { break }
          this.JS_option.series[0].data = data.Data.Y
          this.JS_option.xAxis[0].data = data.Data.X
          e[1].setOption(this.JS_option)
          break;
        }
        case 'getAPIdata': {
          const { data } = await getAPIdata(this.postData)
          if (!data) { break }
          this.API_option.series[0].data = data.ErrCnt.Y
          this.API_option.series[1].data = data.SuccCnt.Y
          this.API_option.xAxis[0].data = data.ErrCnt.X
          e[1].setOption(this.API_option)
          break;
        }
        case 'getInspeedData': {
          const { data } = await getInspeedData(this.postData)
          if (!data) { break }
          this.InSpeed_option.xAxis[0].data = data.FMPTime.X
          this.InSpeed_option.series[1].data = data.RunderTime.Y
          this.InSpeed_option.series[2].data = data.InteractableTime.Y
          this.InSpeed_option.series[3].data = data.DomReadyTime.Y
          this.InSpeed_option.series[4].data = data.LoadCompleteTime.Y
          this.InSpeed_option.series[5].data = data.BlankTime.Y
          e[1].setOption(this.InSpeed_option)
          break;
        }
        default: {
          console.log('找不到该表的API请求')
        }
      }
    },
    async changeDate2() {
      this.postData2.startTime = Number((this.value2[0] * 1).toString().slice(0, 10))
      this.postData2.endTime = Number((this.value2[1] * 1).toString().slice(0, 10))
      let data = await getPVandUVdata(this.postData2)
      if (data) {
        data = data.data
        this.allPV = data.TotalPV
        this.allUV = data.TotalUV
      }
      data = await getAPIdata(this.postData2)
      if (data) {
        data = data.data
        this.APIErrorCount = data.TotalErr
        this.APIErrorRate = data.TotalErrRate
      }
      data = await getJsErrorData(this.postData2)
      if (data) {
        data = data.data
        this.JSErrorCount = data.TotalErr
      }
      data = await getSourceErrorData(this.postData2)
      if (data) {
        data = data.data
        this.ResourceLoadingError = data.TotalErr
      }
      data = await getInspeedData(this.postData2)
      if (data) {
        data = data.data
        this.FirstRenderCostTime = data.FirstRunderTime
      }
      /* data = await getBlankByPage(this.postData2)
      if (data) {
        data = data.data
        this.blankRate = data.BlankRate
      } */
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.home {
  display: flex;
  flex-flow: column nowrap;

  .head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: white;

    .head_right {
      width: 400px;

      .h_r_head {
        display: flex;
        flex-flow: row nowrap;

        .h_r_11th {
          height: 100px;
          width: 200px;
        }

        .h_r_12th {
          height: 100px;
          width: 200px;
        }
      }


      .h_r_center {
        display: flex;
        flex-flow: row nowrap;

        .h_r_2th {
          height: 85px;
          width: 200px;
        }

        .h_r_3th {
          height: 85px;
          width: 200px;
        }
      }

      .h_r_4th {
        height: 100px;
      }
    }
  }

  .body {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    border-radius: 20px;
    background-color: white;
  }

  .foot {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    border-radius: 20px;
    background-color: white;
  }
}

.new_data {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
