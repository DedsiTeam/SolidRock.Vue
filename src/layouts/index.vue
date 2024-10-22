<template>
<section id="layout-section">
  <section id="layout-header-section">
  <layoutHeader />
  </section>
  <section id="layout-body-section">
    <section id="layout-body-left-section" class="pt-4" :style="{ width: layoutSettingStore.menuIconValue ? '0px': '208px' }">
      <layoutMenu />
    </section>
    <section id="layout-body-right-section">
      <a-breadcrumb class="mb-4">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view />
    </section>
  </section>
</section>
</template>

<script setup lang="ts">
import layoutHeader from './layoutHeader/index.vue'
import layoutMenu from './layoutMenu/index.vue'

import { useLayoutSettingStore } from '@/store/layout/layoutSetting.ts'
const layoutSettingStore = useLayoutSettingStore()
</script>

<style scoped>
@import "./index.css";
</style>