<template>
  <div class="connect-us padding-section">
    <div class="connect-us-middle">
      <div class="title-connect">Присоединяйтесь к нам!</div>
      <router-link to="#">
        <a-button class="connect-us_btn" type="primary"> Войти </a-button>
      </router-link>
      <router-link to="#">
        <a-button ghost type="primary" class="connect-us_btn">
          Зарегистрироваться
        </a-button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.connect-us-middle {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-image: url("@/img/main/connect_us.png");
  background-repeat: no-repeat;
  max-width: 1078px;
  height: 312px;
  margin: auto;
  border-radius: 20px;
}
.title-connect {
  font-size: 32px;
  color: var(--color-primary);
  margin-bottom: 10px;
}
.connect-us_btn {
  width: 241px;
  font-size: 16px;
  padding: 0;
}
.connect-us_img {
  max-width: 554px;
  max-height: 354px;
  border-radius: 8px;
  opacity: 0.9;
}

@media (max-width: 500px) {
  .title-connect {
    font-size: 16px;
  }
  .connect-us-middle {
    height: 218px;
    gap: 9px;
  }
  .connect-us_btn {
    width: 198px;
    font-size: 12px;
  }
}
</style>
