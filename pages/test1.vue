<template>
  <div>
    index
    <div class="w-32 h-32 bg-red-500"></div>
    <MyDialog :component="MyLogin"></MyDialog>
  </div>
</template>

<script setup lang="ts">
import {MyLogin} from "#components";
</script>

<style scoped>

</style>