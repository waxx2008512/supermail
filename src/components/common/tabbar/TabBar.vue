<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#tabBar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -4px 10px rgba(100, 100, 100, 0.2);
}


</style>