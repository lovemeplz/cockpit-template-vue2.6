<template>
  <div class="layout-content">
    <CountSwitch
      :value="value"
      suffix="元"
      prefix="￥"
      fontSize="20"
      color="red"
      separator=""
      digitalColor="#fff"
      decimal="2"></CountSwitch>
  </div>
</template>

<script>
import CountSwitch from '@/components/cp-count-switch/src/CountSwitch.vue'

export default {
  components: {
    CountSwitch
  },
  data() {
    return {
      value: 100
    }
  }
}
</script>
