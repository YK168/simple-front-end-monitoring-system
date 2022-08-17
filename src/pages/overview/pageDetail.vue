<template>
  <!--  <div class="home">-->
  <!--    <div class="middle">-->
  <!--      <div class="rank">网页访问量排行</div>-->
  <!--      <div class="HomePage">/home</div>-->
  <!--      <div class="about">/about</div>-->
  <!--    </div>-->
  <!--    <div class="data">-->
  <!--      <div class="PV">PV/UV</div>-->
  <!--      <select v-model="selected" class="select1">-->
  <!--        <option>今天</option>-->
  <!--        <option>昨天</option>-->
  <!--        <option>前天</option>-->
  <!--      </select>-->
  <!--      <echart-->
  <!--        :option="API_option"-->
  <!--        width="1217px"-->
  <!--        height="497px"-->
  <!--        class="data1"-->
  <!--      ></echart>-->
  <!--    </div>-->
  <!--    <div class="exhibition">-->
  <!--      <div class="title">-->
  <!--        <div class="options">JS错误</div>-->
  <!--        <select v-model="selected" class="select">-->
  <!--          <option>A</option>-->
  <!--          <option>B</option>-->
  <!--          <option>C</option>-->
  <!--        </select>-->
  <!--        <div class="ErrorNumber">报错数：1</div>-->
  <!--        <div class="ErrorRate">报错率：1%</div>-->
  <!--        <table-->
  <!--          border="1"-->
  <!--          cellpadding="15"-->
  <!--          cellspacing="0"-->
  <!--          style="text-align: center"-->
  <!--          class="table"-->
  <!--        >-->
  <!--          <tr>-->
  <!--            <td width="267" height="40">错误信息</td>-->
  <!--            <td width="267" height="40">报错时间</td>-->
  <!--            <td width="267" height="40">报错位置</td>-->
  <!--          </tr>-->
  <!--          <tr>-->
  <!--            <td width="267" height="40"></td>-->
  <!--            <td width="267" height="40"></td>-->
  <!--            <td width="267" height="40"></td>-->
  <!--          </tr>-->
  <!--          <tr>-->
  <!--            <td width="267" height="40"></td>-->
  <!--            <td width="267" height="40"></td>-->
  <!--            <td width="267" height="40"></td>-->
  <!--          </tr>-->
  <!--          <tr>-->
  <!--            <td width="267" height="40"></td>-->
  <!--            <td width="267" height="40"></td>-->
  <!--            <td width="267" height="40"></td>-->
  <!--          </tr>-->
  <!--        </table>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="cus-flex cus-row-left">
    <div class="list">
      <div class="title">网页访问量排行</div>
      <div class="ulDiv">
        <div class="ul" v-for="(item, index) in apiList" :key="index">
          {{ item.url }}
        </div>
      </div>
    </div>
    <div class="content">
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
        <div class="exhibition">
          <div class="title" style="margin-bottom: 60px">
            <div class="options">JS错误</div>
            <select v-model="selected" class="select">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <div class="ErrorNumber">报错数：1</div>
            <div class="ErrorRate">报错率：1%</div>
          </div>
          <div class="www">
            <el-table
            :data="tableData"
            :row-style="{height:'70px'}"
            style="font-size: 28px"
            class="zxc"
          >
            <el-table-column prop="message" label="错误信息" width="267" />
            <el-table-column prop="time" label="报错时间" width="267" />
            <el-table-column prop="address" label="报错位置" width="267" />
          </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { size } from 'lodash';
import echart from '../../components/EchartsCom.vue'
export default {
  name: 'HomeView',
  components: {
    echart
  },
  data() {
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
      },
      apiList: [
        {
          id: 1,
          url: 'http://ke_yang1024.cloud/test'
        },
        {
          id: 2,
          url: 'http://ke_yang1024.cloud/color'
        }
      ],
      tableData: [
        {
          message: ' ',
          time: ' ',
          address: ' '
        },
        {
          message: ' ',
          time: ' ',
          address: ' '
        },
        {
          message: ' ',
          time: ' ',
          address: ' '
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.zxc {
  line-height: 70px;
}
.www{
  margin-left: 250px;
}
.list {
  min-height: calc(100vh - 100px);
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: white;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .ulDiv {
    margin-top: 50px;
    .ul {
      padding: 20px 10px;
      cursor: pointer;
    }
    .action {
      background-color: #ecf5ff;
    }
    .ul:hover {
      border-radius: 10px;
      background-color: #ecf5ff;
    }
  }
}
.content {
  flex: 4;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  .data {
    width: 1217px;
    height: 497px;
    border: 1px solid #797979;
    border-radius: 0px;
    background-color: white;
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
    margin-top: 30px;
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
    }
  }
}
</style>
