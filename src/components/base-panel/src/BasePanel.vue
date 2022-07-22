<template>
  <div class="cp-base-panel">
    <div class="header">
      <img class="line" src="../images/base-panel-line-left.png" > 
      <span class="title">{{ title }}</span>
      <img class="line" src="../images/base-panel-line-right.png" >
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BasePanel',
  props: {
    title: {
      type: String,
      default: ''
    }
  },

}
</script>

<style lang="scss">
.cp-base-panel{
  width: 458px;
  height: 950px;
  border: 2px solid;
  border-image: linear-gradient(270deg, #26bafb, rgba(38,186,251,0.00) 50%) 2 2;
  box-shadow: 0px 0px 100px 11px rgba(0,111,255,0.20) inset; 
  backdrop-filter: blur(8px);
  background: url('../images/base-panel-bg.png') no-repeat center;
  background-size: 100% 100%;
  padding: 24px 20px 20px;
  box-sizing: border-box;
  .header{
    .title{
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(255,255,255,0.90);
      line-height: 32px;
      text-shadow: 0px 1px 4px 0px #004fff; 
      margin: 0 23px;
    }
    .line{
      margin-bottom: -8px;
    }
  }
}
</style>