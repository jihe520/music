<script setup>
import { ref,onMounted } from 'vue'
import {getTestList} from './apis/testAPI'

const testList = ref([])

// 测试接口
onMounted(async () => {
  testList.value = await getTestList()
  console.log(testList.value)
})

</script>

<template>
<ul>
  <li v-for="item in testList" :key="item.id">{{ item.name }}</li>
</ul>
</template>

<style scoped>

</style>
