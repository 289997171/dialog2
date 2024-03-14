<template>
  <div>
    <button class="px-4 py-2 border" @click="showLoginDialog">ShowDialog</button>
  </div>
</template>

<script setup lang="ts">
const showLoginDialog = async ()=> {
  const MyLogin = (await import('~/components/my/Login.vue')).default
  await showDialog(MyLogin)
}
</script>
