<template>
  <div class="home">
    <div class="head">
      <div class="head_left">
        <echart :option="P_U_V_option" @acceptData="acceptData"></echart>
      </div>
      <div class="head_right">
        <div class="h_r_1th">
          <el-card shadow="always" class="card">
            <div class="new_data">
              <el-button type="success" link>0ms</el-button>
            </div>
            <div><el-button type="primary" link>首次渲染耗时</el-button></div>
          </el-card>
        </div>
        <div class="h_r_center">
          <div class="h_r_2th">
            <el-card shadow="always" class="card">
              <div class="new_data">
                <el-button type="danger" link>10</el-button>
              </div>
              <div><el-button type="primary" link>JS错误数</el-button></div>
              <div class="new_data">
                <el-button type="danger" link>80%</el-button>
              </div>
              <div><el-button type="primary" link>JS错误率</el-button></div>
            </el-card>
          </div>
          <div class="h_r_3th">
            <el-card shadow="always" class="card">
              <div class="new_data">
                <el-button type="danger" link>6</el-button>
              </div>
              <div><el-button type="primary" link>API错误数</el-button></div>
              <div class="new_data">
                <el-button type="danger" link>10%</el-button>
              </div>
              <div><el-button type="primary" link>API错误率</el-button></div>
            </el-card>
          </div>
        </div>
        <div class="h_r_4th">
          <el-card shadow="always" class="card">
            <div class="new_data">
              <el-button type="danger" link>5次</el-button>
            </div>
            <div><el-button type="primary" link>资源加载错误</el-button></div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="body">
      <echart
        :option="JS_option"
        width="1000"
        height="400"
        class="body_echart"
      ></echart>
    </div>
    <div class="foot">
      <div class="foot_left">
        <echart :option="API_option"></echart>
      </div>
      <div class="foot_right">
        <echart :option="InSpeed_option"></echart>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useAppStore } from '@/store/modules/app'
import echart from '../../components/EchartsCom.vue'
import { getPVandUVdata } from '../../services/overview'
export default {
  name: 'HomeView',
  components: {
    echart
  },
  data () {
    return {
      flag: 0,
      P_U_V_option: {
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
          left: 0,
          orient: 'vertical',
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
            data: ['1天', '2天', '3天', '2天', '3天']
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
        title: {
          text: 'JS错误'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      },
      API_option: {
        title: {
          text: 'API请求'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%']
        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: 'rgba(0, 0, 180, 0.4)'
            },
            {
              gt: 5,
              lt: 7,
              color: 'rgba(0, 0, 180, 0.4)'
            }
          ]
        },
        series: [
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 5
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
              ['2019-10-10', 200],
              ['2019-10-11', 560],
              ['2019-10-12', 750],
              ['2019-10-13', 580],
              ['2019-10-14', 250],
              ['2019-10-15', 300],
              ['2019-10-16', 450],
              ['2019-10-17', 300],
              ['2019-10-18', 100]
            ]
          }
        ]
      },
      InSpeed_option: {
        title: {
          text: '访问速度'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      }
    }
  },
  methods: {
    async acceptData (e) {
      // console.log('******************')
      // console.log(e[0].value)
      // console.log('////////////////')
      // console.log(e[0].value[0])
      // console.log(e[0].value[1])
      const userStore = useAppStore()
      const { project_key } = userStore.getSelectProject
      console.log(project_key)
      const postData = {
        // projectKey:project_key,
        projectKey: '17459aaf3a37a5c91e04a8dcccb8e993',
        startTime: 1640966400,
        endTime: 1643644800
      }
      const { data } = await getPVandUVdata(postData)
      // console.log('PV_UV',data)
      this.P_U_V_option.series[0].data = data.PVData.Y
      this.P_U_V_option.series[1].data = data.UVData.Y
      this.P_U_V_option.xAxis[0].data = data.PVData.X
      console.log('修改日期请求成功', this.P_U_V_option)
      console.log(this.P_U_V_option)
      e[1].setOption(this.P_U_V_option)
      // this.$axios
      //   .get(
      //     'http://hts0000.top:3001/api/get/totalaccess?projectKey=17459aaf3a37a5c91e04a8dcccb8e993&startTime=1640966400&endTime=1643644800'
      //   )
      //   .then((Response) => {
      //     console.log(Response)
      //     this.P_U_V_option.series[0].data = Response.data.data.PVData.Y
      //     this.P_U_V_option.series[1].data = Response.data.data.UVData.Y
      //     this.P_U_V_option.xAxis.data = Response.data.data.PVData.X
      //     console.log('修改日期请求成功')
      //     console.log(this.P_U_V_option.xAxis.data)
      //     e[1].setOption(this.P_U_V_option)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    }
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column nowrap;
  .head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .head_right {
      width: 400px;
      .h_r_1th {
        height: 100px;
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
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  .foot {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
}
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.new_data {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
