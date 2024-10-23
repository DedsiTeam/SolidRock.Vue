<template>
  <a-menu
      mode="inline"
      theme="dark"
      @click="menuClick"
      v-model:openKeys="menuState.openKeys"
      v-model:selectedKeys="menuState.selectedKeys"
      :items="menuData"
  ></a-menu>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { menuData } from '@/configs/menuData.ts'
import {useRouter } from 'vue-router'

const router = useRouter()

const menuState = reactive({
  selectedKeys: [],
  openKeys: []
});

function menuClick({ key }){
  menuState.selectedKeys = [key]

  router.push({ name: key })
}
</script>

<style scoped>

</style>