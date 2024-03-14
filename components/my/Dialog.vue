<template>
  <div class="fixed inset-0 backdrop-blur flex items-center justify-center" @click="$el.parentNode.remove()">
    <component :is="component"></component>
  </div>
</template>

<script setup lang="ts">
defineProps(['component'])
</script>

<style scoped>

</style>