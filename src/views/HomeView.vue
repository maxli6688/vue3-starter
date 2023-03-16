<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Header/index.vue'
import { Button } from 'ant-design-vue'
import { useStore } from 'vuex';


const store = useStore();
const handleClick = async () => {
  store.dispatch("getUserInfo")
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Header />
    <Button type="primary" @click="handleClick">Primary Button</Button>
  </main>
</template>