<template>
  <div class="cp-base-panel">
    <div class="header">
      <span v-if="$slots.title" class="title">{{ title }}</span>
      <slot name="title"/>
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
  width: 480px;
  height: 940px;
  background: rgba(0,53,138,0.60);
  border: 1px solid rgba(255,255,255,0.16);
  backdrop-filter: blur(6px);
  .header{
    height: 92px;
    background: url('../assets/base-panel-bg.png') no-repeat center center;
    background-size: 100%;
  }
}
</style>