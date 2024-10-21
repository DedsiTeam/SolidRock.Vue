<template>
<section id="layout-section">
  <section id="layout-header-section">
  <layoutHeader />
  </section>
  <section id="layout-body-section">
    <section id="layout-body-left-section" class="pt-4">
      <layoutMenu />
    </section>
    <section id="layout-body-right-section">
      <router-view />
    </section>
  </section>
</section>
</template>

<script setup lang="ts">
import layoutHeader from './layoutHeader/index.vue'
import layoutMenu from './layoutMenu/index.vue'
</script>

<style scoped>
@import "./index.css";
</style>