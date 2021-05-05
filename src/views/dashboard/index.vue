<template>
  <div class="dashboard-container">
<!--    <div class="dashboard-text">name: {{ name }}</div>-->
<!--    <div @click="updata">++++</div>-->
<!--    <div @click="blur">确认</div>-->
    <div class="com-container map">
      <div class="com-chart maps" ref="seller"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mixn from "@/common/mixn";
export default {
  name: 'Dashboard',
  mixins:[mixn],
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return{
      count:1,
      check:false,
      path:"ws://localhost:3001",
      socket:"",
      chartInstance: null,
      allData: null,
      currentPage: 1, //当前页数
      totalPage: 0, //总页数
      timerId: null, //定时器标识
    }
  },
  // sockets: {
  //   //这里是监听connect事件
  //   connect: function () {
  //     // 获取每台客服端生成的id
  //     this.websocketid = this.$socket.id;
  //     console.log('链接服务器');
  //   },
  //   // 监听断开连接，函数
  //   disconnect() {
  //     console.log('断开服务器连接');
  //   },
  //   // 服务端指定有msg监听的客服端，可接对应发来的收消息，data服务端传的消息
  //   msg(data) {
  //
  //   },
  // },
  created() {
    this.selectPage();
    // this.init();
  },
  mounted() {
    this.init()
    // window.addEventListener('resize', debounce(this.screenAdapter, 200))//监听窗口大小变化
    // this.screenAdapter()//屏幕首次加载完成 需要主动适配
  },
  methods:{
    updata(){
      this.count += 1
    },
    blur(){
      this.check = true;
    },

    //初始化echarts图表
    init() {
      this.chartInstance = this.$echarts.init(this.$refs.seller, 'dark')
      const initOption = {
        title: {
          text: '堆叠区域图'
        },
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
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
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
      }
      this.chartInstance.setOption(initOption)
      // // 对图标对象进行鼠标事件的监听
      // this.chartInstance.on('mouseover', () => {
      //   clearInterval(this.timerId)
      // })
      // this.chartInstance.on('mouseout', () => {
      //   this.startInterval()
      // })
    },



    //屏幕大小分辨率适配
    screenAdapter() {
      const titleFontsize = this.$refs.seller.offsetWidth / 100 * 3.6 || 69.12
      const adapterOption = {
      }
      this.chartInstance.setOption(adapterOption)
      // 手动调用图表对象的resize 才能产生效果
      this.chartInstance.resize()
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)//避免内存泄漏 移除事件
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.map{
  width: 1000px;
  height: 500px;
}

.maps{
  width: 100%;
  height: 100%;
}
</style>
