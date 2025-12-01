<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }
])
</script>

<template>
  <ElTable :data="tableData" style="width: 100%">
    <ElTableColumn prop="date" label="日期" width="180" />
    <ElTableColumn prop="name" label="姓名" width="180" />
    <ElTableColumn prop="address" label="地址" />
  </ElTable>
</template>