<script setup lang="ts">
import { ElButton } from 'element-plus';
import { defineProps, PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<'primary' | 'success' | 'danger'>,
    default: 'primary'
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <ElButton :type="type" class="niceguy-button">
    <slot>{{ label }}</slot>
  </ElButton>
</template>

<style scoped>
.niceguy-button {
  margin: 0 5px;
  color: greenyellow;
}
</style>
