<template>
  <div class="home">
    <div class="Top"></div>
    <div class="Left">
      <div class="all">总览</div>
      <div class="detail">页面访问详情</div>
      <div class="monitor">网络请求监控</div>
    </div>
    <div class="data">
      <div class="DetailData1">
        <div class="Data1">总PV</div>
        <div class="Data1">60</div>
      </div>
      <div class="DetailData2">
        <div class="Data1">总UV</div>
        <div class="Data1">100</div>
      </div>
      <select v-model="selected" class="select1">
        <option>今天</option>
        <option>昨天</option>
        <option>前天</option>
      </select>
      <echart
        :option="API_option"
        width="985px"
        height="738px"
        class="data1"
      ></echart>
    </div>
    <div class="card">
      <div class="card1">
        <div class="time">0ms</div>
        <div class="first">首次渲染</div>
      </div>
      <div class="card2">
        <div class="card21">
          <div class="number">100</div>
          <div class="number1">JS错误数</div>
        </div>
        <div class="card22">
          <div class="percent">82%</div>
          <div class="rate">JS错误率</div>
        </div>
      </div>
      <div class="card3">
        <div class="card31">
          <div class="number">1</div>
          <div class="number1">API错误数</div>
        </div>
        <div class="card32">
          <div class="percent">2%</div>
          <div class="rate">API错误率</div>
        </div>
      </div>
      <div class="card4">
        <div class="number">2</div>
        <div class="number">资源加载错误</div>
      </div>
    </div>
  </div>
</template>
<script>
import echart from '../../components/EchartsCom.vue'
export default {
  name: 'HomeView',
  components: {
    echart
  },
  data () {
    return {
      API_option: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  background-color: rgba(196, 193, 193, 0.425);
  width: 100%;
  height: 100%;
  .Top {
    width: 1920px;
    height: 88px;
    background-color: white;
    border: 1px solid grey;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .Left {
    width: 258px;
    height: 992px;
    background-color: white;
    border: 1px solid grey;
    border-top: 0;
    float: left;
    position: fixed;
    .all,
    .detail,
    .monitor {
      width: 258px;
      height: 61px;
      border: 1px solid #797979;
      border-radius: 0px;
      font-size: 30px;
      text-align: center;
      line-height: 61px;
      display: inline-block;
      position: absolute;
    }
    .all {
      background: rgba(0, 0, 0, 0.61);
      top: 30px;
    }
    .detail {
      background: white;
      top: 129px;
    }
    .monitor {
      background: white;
      top: 231px;
    }
  }
  .data {
    width: 985px;
    background-color: white;
    position: relative;
    margin-left: 265px;
    margin-top: 4px;
    display: inline-block;
    .DetailData1,
    .DetailData2,
    Data1{
      display: inline-block;
    }
    .DetailData1,
    .DetailData2{
      width: 120px;
      font-size: 20px;
      position: absolute;
    }
    .DetailData2{
      left: 100px;
    }
    .Data1{
      text-align: center;
    }
    .select1 {
    width: 150px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #797979;
    border-radius: 2px;
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Normal;
    font-weight: normal;
    text-align: LEFT;
    color: #333333;
    line-height: 20px;
    position: absolute;
    top: 7px;
    right: 20px;
    display: inline-block;
    z-index: 1;
  }
  }
  .card {
    width: 537px;
    height: 738px;
    display: inline-block;
    margin-left: 49px;
    position: absolute;
    top: 92px;
    .card1 {
      width: 537px;
      height: 179px;
      font-size: 48px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: center;
      color: #333333;
      line-height: 84.5px;
      background-color: white;
      border: 1px solid gray;
      .first{
        font-size: 36px;
      }
    }
    .card2{
      margin-top: 27px;
      width: 537px;
      height: 155px;
      font-size: 36px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: center;
      line-height: 77.5px;
      color: #333333;
      background-color: white;
      display: inline-block;
      border: 1px solid gray;
      .card21{
        display: inline-block;
        width: 228.5px;
      }
      .card22{
        display: inline-block;
        width: 228.5px;
      }
    }
    .card3{
      margin-top: 32px;
      width: 537px;
      height: 138px;
      font-size: 36px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: center;
      line-height: 69px;
      color: #333333;
      background-color: white;
      display: inline-block;
      border: 1px solid gray;
      .card31{
        display: inline-block;
        width: 228.5px;
      }
      .card32{
        display: inline-block;
        width: 228.5px;
      }
    }
    .card4{
      margin-top: 35px;
      width: 537px;
      height: 167px;
      font-size: 36px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: center;
      line-height: 83.5px;
      color: #333333;
      background-color: white;
      display: inline-block;
      border: 1px solid gray;
    }
  }
}
</style>
