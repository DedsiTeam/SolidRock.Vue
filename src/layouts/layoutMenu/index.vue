<template>
  <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="menuData"
  ></a-menu>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { menuData } from '@/configs/menuData.ts'

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});
</script>

<style scoped>

</style>