<template>
  <div class="layout-main">
    <layout-header/>
    <layout-content/>
    <layout-menu/>
  </div>
</template>

<script>

import LayoutHeader from './layout-header'
import LayoutMenu from './layout-menu'
import LayoutContent from './layout-content'

export default {
  name: 'LayoutMain',
  components: {
    LayoutHeader,
    LayoutMenu,
    LayoutContent
  },
  mounted() {
    
  },

}
</script>

<style lang="scss" scoped>
.layout-main{
  position: relative;
  
  .layout-menu{
    position: absolute;
    bottom: 0;
    left: 50%;
  }
}
</style>