<template>
  <div class="layout-main">
    <layout-header/>
    <layout-menu/>
  </div>
</template>

<script>

import LayoutHeader from './layout-header'
import LayoutMenu from './layout-menu'

export default {
  name: 'LayoutMain',
  components: {
    LayoutHeader,
    LayoutMenu
  },
  mounted() {
    
  },

}
</script>

<style lang="scss">
</style>