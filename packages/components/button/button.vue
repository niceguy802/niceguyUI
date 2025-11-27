<script setup lang="ts">
import { ElButton } from 'element-plus'

defineProps<{
  type?: 'primary' | 'success' | 'danger'
  label?: string
}>()
</script>

<template>
  <ElButton :type="type">{{ label }}</ElButton>
</template>
