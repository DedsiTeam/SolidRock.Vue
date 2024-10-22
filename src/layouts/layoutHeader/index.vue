<template>
  <section class="flex">
  <loyoutTitle></loyoutTitle>
  <section class="flex justify-between flex-auto px-4">
    <a-space>
      <div class="menu-icon">
        <MenuFoldOutlined  @click="menuIconClick" v-if="layoutSettingStore.menuIconValue" class="font-size-5 cursor-pointer" />
        <MenuUnfoldOutlined @click="menuIconClick" v-else class="font-size-5 cursor-pointer" />
      </div>
    </a-space>
    <a-space>
      <a-dropdown placement="bottom">
        <div class="user-info cursor-pointer">
          <a-avatar>C</a-avatar>
          <span class="ml-2 font-bold">Cohen</span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>用户信息</a-menu-item>
            <a-menu-item>退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-space>
  </section>
</section>
</template>

<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import loyoutTitle from '../loyoutTitle/index.vue'
import { useLayoutSettingStore } from '@/store/layout/layoutSetting.ts'

const layoutSettingStore = useLayoutSettingStore()
function menuIconClick() {
  layoutSettingStore.setMenuIconValue()
}
</script>

<style scoped>
div.user-info {
  height: 60px;
  line-height: 60px;
}
</style>