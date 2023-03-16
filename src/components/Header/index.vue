<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { message } from "ant-design-vue";
export default defineComponent({
  name: "LayoutHeader",
  setup() {
    const router = useRouter();
    const store = useStore();
    const userName = computed(() => store.state.username);

    // const getUserInfo = async () => {
    //   // const tokenInStorage = localStorage.getItem(KEY_TOKEN);
    //   // if (!tokenInStorage) {
    //   //   router.push("/login");
    //   //   return;
    //   // }
    //   const res = await store.dispatch("getUserInfo")
    // };
    // getUserInfo();

    const handelLogout = async () => {

    };

    return {
      router,
      userName,
      handelLogout,
    };
  },
});
</script>

<template>
  <div class="item">
    header, {{ userName }}
  </div>
</template>

<style scoped>
.item {
  width: 100%;
}
</style>
