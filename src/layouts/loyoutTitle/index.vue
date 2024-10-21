<template>
  <div class="w-208px h-full text-align-center mt-4 font-size-6 font-bold cursor-pointer" @click="titleClick">
    SolidRock.Vue
  </div>
</template>

<script setup lang="ts">
function titleClick() {
  window.location.href = '/'
}
</script>