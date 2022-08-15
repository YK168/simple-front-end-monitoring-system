<template>
  <div class="home">
    <div class="Top"></div>
    <div class="Left">
      <div class="all">总览</div>
      <div class="detail">页面访问详情</div>
      <div class="monitor">网络请求监控</div>
    </div>
    <div class="middle">
      <div class="rank">网页访问量排行</div>
      <div class="HomePage">/home</div>
      <div class="about">/about</div>
    </div>
    <div class="data">
      <div class="PV">PV/UV</div>
      <select v-model="selected" class="select1">
        <option>今天</option>
        <option>昨天</option>
        <option>前天</option>
      </select>
      <echart
        :option="API_option"
        width="1217px"
        height="497px"
        class="data1"
      ></echart>
    </div>
    <div class="exhibition">
      <div class="title">
        <div class="options">JS错误</div>
        <select v-model="selected" class="select">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <div class="ErrorNumber">报错数：1</div>
        <div class="ErrorRate">报错率：1%</div>
        <table
          border="1"
          cellpadding="15"
          cellspacing="0"
          style="text-align: center"
          class="table"
        >
          <tr>
            <td width="267" height="40">错误信息</td>
            <td width="267" height="40">报错时间</td>
            <td width="267" height="40">报错位置</td>
          </tr>
          <tr>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
          </tr>
          <tr>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
          </tr>
          <tr>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
          </tr>
        </table>
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
      background: white;
      top: 30px;
    }
    .detail {
      background: rgba(0, 0, 0, 0.61);
      top: 129px;
    }
    .monitor {
      background: white;
      top: 231px;
    }
  }
  .middle {
    width: 360px;
    height: 993px;
    background: #ffffff;
    border: 1px solid #797979;
    border-radius: 0px;
    margin-left: 258px;
    display: inline-block;
    position: absolute;
    top: auto;
    text-align: center;
    .rank {
      width: 196px;
      height: 39px;
      font-size: 28px;
      margin: auto;
      margin-top: 46px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      color: #333333;
      line-height: 25px;
    }
    .HomePage,
    .about {
      width: 321px;
      height: 39px;
      border: 1px solid #797979;
      border-radius: 0px;
      font-size: 28px;
      margin: auto;
      margin-top: 45px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      color: #333333;
      line-height: 35px;
    }
  }
  .data {
    width: 1217px;
    height: 497px;
    border: 1px solid #797979;
    border-radius: 0px;
    background-color: white;
    margin-left: 662px;
    margin-top: 30px;
    display: inline-block;
    position: relative;
  }
  .PV {
    width: 88px;
    height: 39px;
    border-radius: 0px;
    font-size: 28px;
    font-family: Microsoft YaHei, Microsoft YaHei-Normal;
    font-weight: normal;
    text-align: LEFT;
    color: #333333;
    position: absolute;
    top: 7px;
    left: 20px;
    display: inline-block;
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
  .exhibition {
    width: 1217px;
    height: 414px;
    border: 1px solid #797979;
    border-radius: 0px;
    background-color: white;
    margin-left: 662px;
    margin-top: 30px;
    position: relative;
    .options,
    .select,
    .ErrorNumber,
    .ErrorRate {
      display: inline-block;
      margin-top: 26px;
      position: absolute;
    }
    .options {
      width: 84px;
      height: 39px;
      border-radius: 0px;
      font-size: 28px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: LEFT;
      color: #333333;
      left: 36px;
    }
    .select {
      width: 150px;
      height: 30px;
      background: #ffffff;
      border: 1px solid #797979;
      border-radius: 2px;
      font-size: 20px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: LEFT;
      color: #333333;
      line-height: 20px;
      left: 148px;
      margin-top: 29px;
    }
    .ErrorNumber {
      width: 129px;
      height: 39px;
      border-radius: 0px;
      font-size: 28px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: LEFT;
      color: #333333;
      right: 324px;
    }
    .ErrorRate {
      width: 154px;
      height: 39px;
      border-radius: 0px;
      font-size: 28px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: LEFT;
      color: #333333;
      right: 73px;
    }
    .table {
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
