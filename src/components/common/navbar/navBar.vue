<template>
  <div class="nav-bar">
    <div class="navLeft">
      <slot name="navLeft"></slot>
    </div>
    <div class="navCenter">
      <slot name="navCenter"></slot>
    </div>
    <div class="navRight">
      <slot name="navRight"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
}
.navLeft,
.navRight {
  width: 60px;
}
.navCenter {
  flex: 1;
}
</style>