<template>
  <div
    ref="cpBaseContainer"
    :class="{'cp-base-container': true, 'cp-base-container-position-right': position === 'right'}"
    @mouseenter="handleMouseenter()"
    @mouseleave="handleMouseleave()">
    <!-- 切换按钮组 -->
    <base-container-toggle
      v-show="showToggle"
      :toggleItems="slotPanels"
      :activeItem="activePanelLocal"
      @toggleItemClick="handleToggleItemClick"/>
    <!-- 内容插槽 -->
    <div v-if="$slots.default" class="slot-box">
      <slot/>
    </div>
    <!-- 伸缩功能 -- todo -->
    <div class="toggle">
      
    </div>
  </div>
</template>

<script>
import BaseContainerToggle  from './BaseContainerToggle.vue'
export default {
  name: 'BaseContainer',
  components: {
    BaseContainerToggle
  },
  props: {
    // 类型控制  0:全部展示 ｜ 1:切换展示
    displayType: {
      type: Number,
      default: 0
    },
    // 中屏模式（16:9）下，当前活跃面板
    activePanel: {
      type: Number,
      default: 0
    },
    // 自动轮播 --todo
    autoPlay: {
      type: Boolean,
      default: false
    },
    // 轮播时间间隔，仅当autoPlay开启有效  --todo
    loopInterval: {
      type: Number,
      default: 3 * 1000  // 10s
    }
  },
  data() {
    this.LOOP_TIMER =  null  // 放data里防止实例化多个组件后，执行方法只对其中一个timer起作用,同时该属性不需要响应式
    return {
      slotPanels: [],  // slot组
      activePanelLocal: this.activePanel,  // 当前活跃面板，默认为第0个，可外部传入
      showToggle: false,   // 是否显示toggle
      position: 'left'  // container位于页面方向  left ｜ right
    }
  },
  mounted() {
    this.getSlotPanels()
    this.$nextTick(() => {
      this.judgeDirection()
    })
    this.initLoopJob()
    // --todo  改为统一获取、处理 目前需要刷新页面才生效
    window.addEventListener('resize', this.judgeDisplayMode(), false)
  },
  beforeDestroy() {
    this.stopLoopJob()
  },
  methods: {
    // 获取slot内容进处理
    getSlotPanels() {
      if (!this.$slots.default) return  // 无插槽，直接返回
      this.$slots.default.forEach( item => {
        if (item.elm.nodeType !== 3) {
          this.slotPanels.push({
            title: item && item.componentInstance && item.componentInstance.panelTitle,  // 获取实例标题
            ...item
          })
        }
      })
    },
    // 响应切换按钮点击
    handleToggleItemClick(item, index) {
      if(this.activePanelLocal === index) return
      this.activePanelLocal = index
      this.intoIntensiveMode()
    },
    // 展开模式：面板全部展现
    intoExpandMode() {
      this.slotPanels.forEach( item=> {
        item.elm.style.display = 'block'
      })
      this.showToggle = false
    },
    // 集约模式：按钮点击切换面板
    intoIntensiveMode() {
      this.slotPanels.forEach( item=> {
        item.elm.style.display = 'none'
      })
      this.slotPanels[this.activePanelLocal].elm.style.display = 'block'
      if(this.slotPanels.length && this.slotPanels.length > 1) {
        this.showToggle = true
      }
    },
    // 判断使用何种模式  --todo 4608待改进
    judgeDisplayMode() {
      if(document.documentElement.clientWidth < 4608 * window.globalRatio) {
        this.intoIntensiveMode()
      }else{
        this.intoExpandMode()
      }
    },
    // 判断toggle按钮组与面板排列方向
    judgeDirection() {
      if(this.$refs.cpBaseContainer.offsetLeft < document.documentElement.clientWidth / 2) {
        this.position = 'left'
      }else{
        this.position = 'right'
      }
    },
    handleMouseenter() {
      this.stopLoopJob()
    },
    handleMouseleave() {
      this.initLoopJob()
    },
    // 面板自动轮播
    initLoopJob() {
      if(!this.autoPlay) {
        return
      }
      const len = this.slotPanels && this.slotPanels.length
      this.LOOP_TIMER = setInterval(() => {
        if(this.activePanelLocal <= len - 2) {
          this.activePanelLocal ++
        }else{
          this.activePanelLocal = 0
        }
        this.intoIntensiveMode()
      }, this.loopInterval)
    },
    // 停止面板自动轮播
    stopLoopJob() {
      clearInterval(this.LOOP_TIMER)
    }

  }
}
</script>

<style lang="scss" scoped>
.cp-base-container{
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  z-index: 2;
  .cp-base-panel:nth-child(n+1){
    margin: 0 0 0 20px;
  }
  .slot-box{
    display: flex;
  }
}
.cp-base-container-position-right{
  flex-direction: row;
  .cp-base-panel:nth-child(n+1){
    margin: 0 20px 0 0;
  }
}
</style>
