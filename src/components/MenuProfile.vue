<template>
  <div class="wrapper">
    <div class="menu-profile">
      <div class="information">
        <UploadImage v-model:image-url="userData.img">
          <div class="avatar">
            <a-avatar :size="100" class="custom-avatar">
              <template #icon>
                <a-image
                  :width="100"
                  :preview="false"
                  :src="userData.img"
                  v-if="userData.img != ''"
                />
                <UserOutlined class="icon-style" v-if="userData.img === ''" />
              </template>
            </a-avatar>
            <img src="@/img/menuProfile/pencil.svg" alt="" />
          </div>
        </UploadImage>

        <div class="fio">{{ userData?.name }}</div>
        <div class="rating">
          4.6<img src="@/img/menuProfile/start.svg" alt="" />
        </div>
      </div>

      <div class="items">
        <div
          v-for="item in items"
          :key="item"
          :class="['item', item === active ? 'activeItem' : '']"
          @click="active = item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <ProfileMenu v-if="active === 'Профиль'" />
  </div>
</template>

<script setup>
import { UserOutlined } from "@ant-design/icons-vue";
import UploadImage from "./App/UploadImage.vue";
import { useUserStore } from "@/stores/user";
import { ref, computed } from "vue";
import ProfileMenu from "./ProfileMenu.vue";
const userStore = useUserStore();
const userDataDefault = computed(() => userStore.userData);
const userData = ref({ ...userDataDefault.value });
const items = [
  "Отзывы",
  "Профиль",
  "Финансы",
  "Сообщения",
  "Мои заказы",
  "Избранное",
  "Центр поддержки",
  "Мои предложения",
];
const active = ref(items[1]);
console.log(userData.value);
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  margin-top: 30px;
}
.menu-profile {
  background-color: var(--color-back-modal);
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 24px;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 15%);
}
.custom-avatar {
  background-color: #d2bff7;
}
.avatar {
  position: relative;
  margin-bottom: 24px;
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
</style>
