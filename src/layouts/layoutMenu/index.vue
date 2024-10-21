<template>
  <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="items"
  ></a-menu>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

const items = reactive([
  {
    key: '1',
    label: 'Option 1',
    title: 'Option 1',
  }
])
</script>

<style scoped>

</style>