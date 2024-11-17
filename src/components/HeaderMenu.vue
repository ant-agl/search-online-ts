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
      <div class="search-mobile">
        <SearchOutlined />
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
            <div @click="isAuth = false" class="log-out">Выйти</div>
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
      <div
        v-if="isAuth"
        class="mobile-menu-flag"
        @click="isOpenMenu = !isOpenMenu"
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div v-show="isOpenMenu" class="wrapper-mobile-menu">
      <div class="mobile-menu">
        <div class="closed" @click="isOpenMenu = !isOpenMenu">
          <img src="@/img/closed.svg" alt="" />
        </div>
        <div class="information">
          <div class="avatar">
            <a-avatar :size="100" class="custom-avatar">
              <template #icon>
                <a-image
                  :width="100"
                  :preview="false"
                  :src="userDataDefault.img"
                  v-if="userDataDefault.img != ''"
                />
                <UserOutlined
                  class="icon-style"
                  v-if="userDataDefault.img === ''"
                />
              </template>
            </a-avatar>
            <img src="@/img/menuProfile/pencil.svg" alt="" />
          </div>

          <div class="fio">{{ userDataDefault?.name }}</div>
          <div class="rating">
            4.6<img src="@/img/menuProfile/start.svg" alt="" />
          </div>
        </div>

        <div class="items">
          <div v-for="item in items" :key="item?.key" :class="['item']">
            {{ item?.title }}
          </div>
          <!-- <div class="item">Профиль</div> -->
        </div>
        <div class="under-items">
          <RouterLink
            v-for="menu in underItems"
            :key="menu.key"
            :to="menu.link"
            :class="['under-item']"
          >
            {{ menu.title }}
          </RouterLink>
          <div @click="isAuth = false" class="log-out">Выйти</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { MenuProps } from "ant-design-vue";
import { SearchOutlined, UserOutlined } from "@ant-design/icons-vue";
import { h } from "vue";

const userStore = useUserStore();
const userDataDefault = computed(() => userStore.userData);
const showMenu = ref(false);
console.log(showMenu.value);
const isOpenMenu = ref(false);
const isAuth = computed({
  get: () => userStore.isAuth,
  set: (newValue) => {
    userStore.isAuth = newValue;
  },
});
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
.wrapper-mobile-menu {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 2;
  background-color: var(--color-back);
  width: 100%;
  height: 100%;
}
.mobile-menu {
  margin-top: 60px;
  position: relative;
  background-color: white;
  width: 90%;
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 24px;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 15%);
  .closed {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .under-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 12px;
    opacity: 68%;
    a {
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .under-item {
    cursor: pointer;
  }
  .custom-avatar {
    background-color: #d2bff7;
  }
  .avatar {
    position: relative;
    margin-bottom: 24px;
    display: block;
    border-radius: 50px;
    img {
      position: absolute;
      bottom: -13px;
      right: -5px;
    }
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: 68%;
  }
  .item {
    cursor: pointer;
  }
  .activeItem {
    color: var(--color-primary);
    position: relative;
    padding-left: 10px;
    display: block;
    &::before {
      content: "";
      width: 17px;
      display: block;
      border: 1px solid var(--color-primary);
      position: absolute;
      bottom: 50%;
      left: -10px;
      rotate: 90deg;
      border-radius: 20px;
    }
  }
  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rating {
    font-size: 20px;
    margin-top: 11px;
    img {
      margin-left: 8px;
    }
  }
}

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
.log-out {
  color: #8d4949;
  cursor: pointer;
}
// :global(.ant-popover .ant-popover-inner) {
//   padding: 0 !important;
//   overflow-y: hidden;
// }
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
