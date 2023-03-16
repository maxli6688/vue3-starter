<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Header/index.vue'
import { Button } from 'ant-design-vue'
import { useStore } from 'vuex';


const store = useStore();
const handleClick = async (username: string) => {
  // store.dispatch("getUserInfo")
  store.dispatch({
    type: "getUserInfo",
    data: {
      username,
    }
  })
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Header />
    <Button type="primary" @click="handleClick('aa')">Button aa</Button>
    <br>
    <Button type="primary" @click="handleClick('bb')"> Button bb</Button>
  </main>
</template>