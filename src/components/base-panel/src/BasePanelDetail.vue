<template>
  <div ref="CpBasePanelDetail" :class="{'cp-base-panel-detail': true, 'cp-base-panel-detail-right': position === 'right' }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BasePanelDetail',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      position: 'right'
    }
  },
  mounted() {
    this.judgePosition()
  },
  methods: {
    // 判断面板方向
    judgePosition() {
      if(this.$refs.CpBasePanelDetail.getBoundingClientRect().left < document.documentElement.clientWidth / 2) {
        this.position = 'left'
      }else{
        this.position = 'right'
      }
    }
  }
}
</script>

<style lang="scss">
.cp-base-panel-detail{
  width: 494px;
  height: 664px;
  padding: 22px;
  box-sizing: border-box;
  background: url('../images/base-panel-detail-left.png');
  background-size: 100% 100%;
}
.cp-base-panel-detail-right{
  padding: 22px;
  box-sizing: border-box;
  background: url('../images/base-panel-detail-right.png');
  background-size: 100% 100%;
}
</style>
