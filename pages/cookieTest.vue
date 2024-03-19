<template>
  <div>
    cookie test
    <div>cookie:: {{counter}}</div>
    <div>data:: {{data}}</div>
    <button @click="execute">测试</button>
  </div>
</template>

<script setup lang="ts">
const counter = useCookie('counter', {watch: true})

const {data, execute} = await useAsyncData('/api/counter', ()=>$fetch('/api/counter', {
  headers: useRequestHeaders() // 当 immediate: false的时候,不用.
}), {immediate: true})

watch(data, (newValue)=> {
  if (newValue) {
    counter.value = newValue.counter
  }
}, {immediate: true})
</script>

<style scoped>

</style>