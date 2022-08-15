<template>
  <div class="cp-base-panel-mini">
    <div :class="{'header': true, 'header-without-bg': !showBg}">
      <span class="title">{{ title }}</span>
    </div>
    <slot />
    <div v-if="!$slots.default" class="empty-box">
      <img src="../images/noData.webp">
      <span class="text">暂无数据</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePanelMini',
  props: {
    title: {
      type: String,
      default: ''
    },
    showBg: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.cp-base-panel-mini{
  width: 100%;
  .header{
    height: 42px;
    background: url('../images/base-panel-mini-header-bg.png') no-repeat center;
    background-size: 100% 100%;
    .title{
      width: 120px;
      height: 40px;
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #fff;
      line-height: 40px;
      text-shadow: 0px 1px 4px 0px #004fff;
      margin-left: 16px;
    }
  }
  .header-without-bg{
    background: none;
  }
  .empty-box{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .text{
      font-size: 14px;
      color: #fff
    }
  }
}
</style>
