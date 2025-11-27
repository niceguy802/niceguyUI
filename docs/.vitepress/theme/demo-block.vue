<!-- Demo展示组件（支持代码框） -->
 <script setup>
defineProps({ title: String });
</script>

<template>
  <div class="demo-block">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<style scoped>
.demo-block {
  border: 1px solid #eee;
  padding: 14px;
  margin: 16px 0;
  border-radius: 6px;
}
</style>
