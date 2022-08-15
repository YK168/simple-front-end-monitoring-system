<template>
  <div class="home">
    <div class="Top"></div>
    <div class="Left">
      <div class="all">总览</div>
      <div class="detail">页面访问详情</div>
      <div class="monitor">网络请求监控</div>
    </div>
    <div class="middle">
      <div class="API">API请求</div>
      <div class="list">
        <div class="baidu">www.baidu.com</div>
        <div class="taobao">www.taobao.com</div>
        <div class="jd">www.jd.com</div>
      </div>
    </div>
    <div class="data">
      <echart
        :option="API_option"
        width="1217px"
        height="497px"
        class="data1"
      ></echart>
    </div>
    <div class="exhibition">
      <div class="title">
        <div class="succeed">请求成功列表</div>
        <div class="fail">请求成功列表</div>
        <!-- <div class="options">请求失败列表</div> -->
        <table
          border="1"
          cellpadding="15"
          cellspacing="0"
          style="text-align: center"
          class="table"
        >
          <tr>
            <td width="267" height="40">上报时间</td>
            <td width="267" height="40">请求耗时</td>
            <td width="267" height="40">API</td>
            <td width="267" height="40">http状态码</td>
          </tr>
          <tr>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
          </tr>
          <tr>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
            <td width="267" height="40"></td>
          </tr>
          <tr>
            <td width="267" height="40"></td>
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
        title: {
          text: 'World Population'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
html,body{
  background: rgba(196, 193, 193, 0.425);
}
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
      background: white;
      top: 129px;
    }
    .monitor {
      background: rgba(0, 0, 0, 0.61);
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
    .API {
      width: 102;
      height: 39px;
      border-radius: 0px;
      font-size: 28px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: LEFT;
      color: #333333;
      position: absolute;
      top: 51px;
      left: 28px;
    }
    .list {
      width: 300px;
      height: 90px;
      background: #ffffff;
      border: 1px solid #797979;
      position: absolute;
      top: 129px;
      left: 19px;
      .API,
      .baidu,
      .taobao,
      .jd {
        width: 300px;
        height: 30px;
        font-size: 14px;
        font-family: Microsoft YaHei, Microsoft YaHei-Normal;
        font-weight: normal;
        text-align: center;
        color: #333333;
        line-height: 26px;
        border: 1px solid gray;
        border-bottom: 0;
        margin: 0;
      }
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
    .options {
      width: 600px;
      height: 150px;
    }
    .succeed,
    .fail{
      width: 126px;
      height: 17px;
      font-size: 20px;
      font-family: Microsoft YaHei, Microsoft YaHei-Normal;
      font-weight: normal;
      text-align: CENTER;
      color: #777777;
      line-height: 20px;
      display: inline-block;
      position: absolute;
      top: 33.5px;
    }
    .succeed {
      left: 29.4px;
    }
    .fail {
      left: 164.5px;
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
