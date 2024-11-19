<template>
  <div @click="mobileMenu = false" class="wrapper-mobile-menu">
    <div @click.stop class="mobile-menu">
      <div class="closed" @click="mobileMenu = !mobileMenu">
        <img src="@/img/closed.svg" alt="" />
      </div>
      <div class="information">
        <div class="avatar">
          <a-avatar :size="100" class="custom-avatar">
            <template #icon>
              <a-image
                :width="100"
                :preview="false"
                :src="userStore.userData.img"
                v-if="userStore.userData.img != ''"
              />
              <UserOutlined
                class="icon-style"
                v-if="userStore.userData.img === ''"
              />
            </template>
          </a-avatar>
          <img src="@/img/menuProfile/pencil.svg" alt="" />
        </div>

        <div class="fio">{{ userStore.userData.name }}</div>
        <div class="rating">
          4.6<img src="@/img/menuProfile/start.svg" alt="" />
        </div>
      </div>

      <div class="mainMenu">
        <RouterLink
          v-for="item in mainMenu"
          :key="item?.key"
          :class="['item', item.title === 'Профиль' && 'profile']"
          :to="item.link"
        >
          {{ item?.title }}
        </RouterLink>
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
        <div @click="handleModalShow" class="log-out">Выйти</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "@/stores/user";
import { UserOutlined } from "@ant-design/icons-vue";
const userStore = useUserStore();
const mobileMenu = defineModel("open");
const emit = defineEmits("handleModalShow");
const handleModalShow = () => {
  emit("handleModalShow");
};

const mainMenu = [
  { key: 1, title: "Главная", link: "#" },
  { key: 2, title: "Товары", link: "#" },
  { key: 3, title: "Услуги", link: "#" },
  { key: 4, title: "Профиль", link: "/menuprofile" },
];
const underItems = [
  { key: 1, title: "Финансы", link: "#" },
  { key: 2, title: "Сообщения", link: "#" },
  { key: 3, title: "Мои заказы", link: "#" },
  { key: 4, title: "Избранное", link: "#" },
  { key: 5, title: "Центр поддержки", link: "#" },
  { key: 6, title: "Мои предложения", link: "#" },
];
</script>

<style lang="scss" scoped>
.wrapper-mobile-menu {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: var(--color-back);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.mobile-menu {
  margin-top: 60px;
  position: relative;
  background-color: white;
  width: 90%;
  height: 562px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    margin-top: 12px;
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
  .mainMenu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: 68%;
    margin-top: 21px;
  }
  .item {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  .profile::after {
    content: "";
    display: flex;
    background-image: url("@/img/icons/arrowUp.svg");
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
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
</style>
