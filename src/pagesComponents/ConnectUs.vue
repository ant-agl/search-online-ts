<template>
  <div class="connect-us">
    <div class="connect-us-left">
      <div class="title">Присоединяйтесь к нам!</div>
      <router-link to="#">
        <a-button class="connect-us_btn" type="primary"> Войти </a-button>
      </router-link>
      <router-link to="#">
        <a-button ghost type="primary" class="connect-us_btn">
          Зарегистрироваться
        </a-button>
      </router-link>
    </div>
    <img class="connect-us_img" src="@/img/main/connect_us.png" alt="" />
  </div>
</template>

<style scoped>
.connect-us {
  padding: 80px 0;
  display: flex;
  justify-content: space-evenly;
}
.connect-us-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 32px;
  color: var(--color-primary);
  margin-bottom: 10px;
}
.connect-us_btn {
  width: 241px;
}
.connect-us_img {
  max-width: 554px;
  max-height: 354px;
  border-radius: 8px;
  opacity: 0.9;
}
</style>
