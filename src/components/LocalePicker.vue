<script setup lang="ts">

import { ref, watchEffect, computed } from 'vue';
import { Dropdown, Menu } from 'ant-design-vue'
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
  let language = localStorage.getItem("locale");
  if (!language) {
    localStorage.setItem("locale", 'zh')
    language = 'zh'
  }
  selectedKeys.value = [language];
});
async function toggleLocale(lang: LocaleType | string) {
  // await changeLocale(lang as LocaleType);
  selectedKeys.value = [lang as string];
  props.reload && location.reload();
}
function handleMenuEvent(menu: DropMenuItem) {
  console.log(menu);
  if (i18n.global.locale.value === menu.event) {
    return;
  }
  toggleLocale(menu.event as string);
  localStorage.setItem("locale", menu.event as string)
  i18n.global.locale.value = menu.event as string
  // console.log('i18n', i18n.global.availableLocales)
  // i18n.global.t("key.of.your.translation")
}
console.log(111, i18n.global.locale.value);
</script>

<template>
  <Dropdown trigger="hover">
    <span class="cursor-pointer flex items-center px-8">
      <translation-outlined />
      <span v-if="showText" class="ml-4">{{ getLocaleText }}</span>
    </span>
    <template #overlay>
      <Menu :selectedKeys="selectedKeys">
        <Menu.Item v-for="item in localeList" :key="item.event" @click="handleMenuEvent(item)">
          <a href="javascript:;">{{ item.text }}</a>
        </Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>

<style>
.app-locale-picker-overlay .ant-dropdown-menu-item {
  min-width: 160px;
}
</style>