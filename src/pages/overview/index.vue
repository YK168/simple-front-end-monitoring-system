<template>
  <div class="home">
    <div class="head">
      <div class="head_left">
        <echart :option="P_U_V_option" @getData="acceptData()"></echart>
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
import echart from '../../components/EchartsCom.vue'

export default {
  name: 'HomeView',
  components: {
    echart
  },
  data() {
    return {
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
          data: ['总PA', '总UA']
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
            name: '总PA',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '总UA',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
    /* acceptData (val) {
      console.log(val + '******************')
      this.$axios
        .get('/task/all')
        .then((Response) => {
          console.log('成功')
        })
        .catch((error) => {
          console.log(error)
        })
    } */
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
