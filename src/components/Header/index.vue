<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LocalePicker from "../LocalePicker.vue";
import { useI18n } from "vue-i18n";
// import { message } from "ant-design-vue";
export default defineComponent({
  name: "LayoutHeader",
  components: { LocalePicker },
  setup() {
    const router = useRouter();
    const store = useStore();
    const userName = computed(() => store.state.username);
    const t = useI18n()
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
      t,
      router,
      userName,
      handelLogout,
    };
  },
});
</script>

<template>
  <div class="item">
    <LocalePicker />
    header, {{ userName }}
    <div class="test">
      {{ $t('test') }}
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
}
</style>
