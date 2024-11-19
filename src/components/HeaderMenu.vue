<template>
  <div class="wrapper-header">
    <div class="header-menu-logo">
      <RouterLink to="/">
        <img class="logo" src="@/img/Logo.svg" alt="" />
      </RouterLink>

      <a-menu
        :class="['menu']"
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
      />
    </div>

    <div class="header-main">
      <div class="search">
        <a-input placeholder="Поиск" class="search_input" />
        <a-button class="search_icon" type="none" :icon="h(SearchOutlined)" />
      </div>

      <RouterLink v-if="!isAuth" to="/signIn">
        <a-button type="primary">Войти</a-button>
      </RouterLink>

      <a-popover
        v-else-if="isAuth"
        class="menu-popover ant-popover-open"
        placement="bottomLeft"
      >
        <template #content>
          <div class="popover-link" overlayClassName="custom-popover">
            <RouterLink
              v-for="menu in underItems"
              :key="menu.key"
              :to="menu.link"
            >
              {{ menu.title }}</RouterLink
            >
            <div @click="handleModalShow" class="log-out">Выйти</div>
          </div>
        </template>
        <template #title>
          <span class="popover-title"
            ><img src="@/img/location.svg" alt="" /> Москва</span
          >
        </template>
        <a-button class="secodary-menu">
          <a-avatar :size="42" class="avatar">
            <template #icon>
              <a-image
                :width="42"
                :preview="false"
                :src="userDataDefault.img"
                v-if="userDataDefault.img != ''"
              />
              <UserOutlined
                class="icon-style"
                v-if="userDataDefault.img === ''"
              />
            </template> </a-avatar
        ></a-button>
      </a-popover>
      <div @click="searchMobile = true" class="search-mobile">
        <SearchOutlined />
      </div>
      <div
        v-if="isAuth"
        class="mobile-menu-flag"
        @click="mobileMenu = !mobileMenu"
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <MobileMenu
      v-if="mobileMenu"
      v-model:open="mobileMenu"
      @handleModalShow="handleModalShow"
    />
    <ModalOut
      v-if="modalOut"
      v-model:open="modalOut"
      @handleModalOut="handleModalOut"
    />
    <SearchMobile v-if="searchMobile" v-model:open="searchMobile" />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { SearchOutlined, UserOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
import MobileMenu from "./mobile/MobileMenu.vue";
import ModalOut from "./modals/ModalOut.vue";
import SearchMobile from "./modals/SearchMobile.vue";
const userStore = useUserStore();
const userDataDefault = computed(() => userStore.userData);

const mobileMenu = ref(false);
const modalOut = ref(false);
const searchMobile = ref(false);
const isAuth = computed({
  get: () => userStore.isAuth,
  set: (newValue) => {
    userStore.isAuth = newValue;
  },
});

const handleModalOut = () => {
  modalOut.value = false;
  isAuth.value = false;
  mobileMenu.value = false;
};

const handleModalShow = () => {
  modalOut.value = true;
};
const current = ref<string[]>(["main"]);
const items = ref([
  {
    key: "main",
    label: "Главная",
    title: "Главная",
  },
  {
    key: "products",

    label: "Товары",
    title: "Товары",
  },
  {
    key: "services",

    label: "Услуги",
    title: "Услуги",
  },
]);
const underItems = [
  { key: 1, title: "Отзывы", link: "#" },
  { key: 2, title: "Профиль", link: "/menuprofile" },
  { key: 3, title: "Финансы", link: "#" },
  { key: 4, title: "Сообщения", link: "#" },
  { key: 5, title: "Мои заказы", link: "#" },
  { key: 6, title: "Избранное", link: "#" },
  { key: 7, title: "Центр поддержки", link: "#" },
  { key: 8, title: "Мои предложения", link: "#" },
];
</script>
<style scoped lang="scss">
.header-menu-logo {
  display: flex;
  gap: 4px;
}
.wrapper-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  box-shadow: 0px 0px 17px -10px;
  padding-left: 10px;
  padding-right: 20px;
  background-color: white;
  position: relative;
  width: 100%;
  z-index: 3;
}
.logo {
  max-width: 178px;
}

.popover-link {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
  padding: 0 30px;
  a {
    color: var(--color-text);
    &:hover {
      color: var(--color-primary);
    }
  }
}
:deep(.log-out) {
  color: #8d4949;
  cursor: pointer;
}

.custom-popover .ant-popover-inner {
  padding: 0 !important;
  .ant-popover-arrow::after {
    background-color: #e9e9e9;
  }
}

.popover-title {
  background-color: #e9e9e9;
  padding: 6px 10px;
  width: 100%;
  display: flex;
  gap: 6px;
  border-radius: 6px;
}
.secodary-menu {
  width: 37px;
  height: 100%;
  padding: 0;
  border: none;
}

.avatar {
  background-color: #d2bff7;
  cursor: pointer;
}
.header-main {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  height: 64px;
}
.search {
  position: relative;
}
.search_icon {
  position: absolute;
  right: 4px;
}
.search_input {
  width: 296px;
  border-radius: 25px;
  padding-right: 38px;
}
:deep(.ant-input) {
  background: inherit;
  padding: 5px 14px;
}
.header-button {
  width: 104px;
  height: 34px;
}
:deep(.menu .ant-menu-item) {
  margin-right: 20px !important;
  height: 64px;
  align-content: center;
  opacity: 68% !important;
}
:deep(.menu .ant-menu) {
  border-bottom: none;
}
:deep(.menu .ant-menu-item-selected) {
  opacity: 1 !important;
}
.mobile-menu-flag {
  display: none;
  flex-direction: column;
  gap: 6px;
  border: none;
}
.search-mobile {
  font-size: 24px;
  color: var(--color-primary);
  cursor: pointer;
  display: none;
}
.line {
  border: 1.7px solid var(--color-primary);
  width: 24px;
}

@media (max-width: 1000px) {
  .search {
    display: none;
  }
  .search-mobile {
    display: block;
  }
}
@media (max-width: 700px) {
  .menu {
    display: none;
  }
  .mobile-menu-flag {
    display: flex;
  }
  .secodary-menu {
    display: none;
  }
  .show-menu {
    right: 0;
  }
  .header-main {
    height: 48px;
    gap: 10px;
  }
  .avatar {
    display: none;
  }
  .header-button {
    border-radius: 8px;
    width: auto;
    height: auto;
    font-size: 11px;
  }
  .logo {
    width: 122px;
  }
}
</style>
