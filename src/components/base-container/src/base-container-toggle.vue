<template>
  <div class="cp-base-container-toggle">
    <div
      v-for="(item, index) in toggleItems"
      :key="item.id"
      :class="{'toggle-item': true, 'toggle-item-active': index === activeItem}"
      @click="handleItemClick(item, index)"
    >
      <span>{{ item.title }}</span>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    toggleItems: {
      type: Array,
      default() {
        return []
      },
      required: true
    },
    activeItem: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleItemClick(item, index) {
      this.$emit('toggleItemClick', item, index)
    }
  }
}
</script>

<style lang="scss">
.cp-base-container-toggle{
  .toggle-item{
    width: 35px;
    height: 124px;
    color: #ccc;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    background: url('../images/toggle-item.png') no-repeat;
    background-size: 100% 100%;
    &:not(:first-child) {
      margin-top: -15px;
    }
  }
  .toggle-item-active{
    color: #fff;
    background: url('../images/toggle-item-active.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    z-index: 1;
  }
}
.left-area{
  .toggle-item{
    transform: rotate(180deg);
    span{
      transform: rotate(180deg);
    }
  }
}
</style>
