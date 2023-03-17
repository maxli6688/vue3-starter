<script setup lang="ts">
// import type { LocaleType } from '/#/config';
// import type { DropMenu } from '/@/components/Dropdown';
import { ref, watchEffect, computed } from 'vue';
// import { Dropdown } from '/@/components/Dropdown';
import { Dropdown, Menu } from 'ant-design-vue'
// import { Dropdown } from '/@/components/Dropdown';
// import { Icon } from '/@/components/Icon';
import { localeList } from '@/config/localeSetting';
import i18n from '@/locales';
const props = defineProps({
  /**
   * Whether to display text
   */
  showText: { type: Boolean, default: true },
  /**
   * Whether to refresh the interface when changing
   */
  reload: { type: Boolean },
});
const selectedKeys = ref<string[]>([]);
const getLocaleText = computed(() => {
  const key = selectedKeys.value[0];
  if (!key) {
    return '';
  }
  return localeList.find((item) => item.event === key)?.text;
});
watchEffect(() => {
  // selectedKeys.value = [unref(getLocale)];
});
async function toggleLocale(lang: LocaleType | string) {
  // await changeLocale(lang as LocaleType);
  selectedKeys.value = [lang as string];
  props.reload && location.reload();
}
function handleMenuEvent(menu: DropMenuItem) {
  // if (unref(getLocale) === menu.event) {
  //   return;
  // }
  toggleLocale(menu.event as string);
  i18n.global.locale.value = 'ru'
  // console.log('i18n', i18n.global.availableLocales)
  // i18n.global.t("key.of.your.translation")

  /*
  https://juejin.cn/post/7123471441168695310
  */
}
console.log(111, localeList);
</script>

<template>
  <div class="div">
    <Dropdown>
      <span class="cursor-pointer flex items-center">
        语言
        <translation-outlined />
        <span v-if="showText" class="ml-1">{{ getLocaleText }}</span>
      </span>
      <template #overlay>
        <Menu :selectedKeys="selectedKeys">
          <Menu.Item v-for="item in localeList" :key="item.text" @click="handleMenuEvent(item)">
            <a href="javascript:;">{{ item.text }}</a>
          </Menu.Item>
        </Menu>
      </template>
    </Dropdown>
  </div>
</template>

<style>
.app-locale-picker-overlay .ant-dropdown-menu-item {
  min-width: 160px;
}
</style>