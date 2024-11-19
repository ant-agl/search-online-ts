<template>
  <div class="connect-us padding-section">
    <img src="@/img/main/ellipse.png" class="bg-ellipses__connect" />
    <img src="@/img/main/ellipse.png" class="bg-ellipses__connect" />
    <img src="@/img/main/ellipse.png" class="bg-ellipses__connect" />
    <div class="connect-us-middle">
      <div class="title-connect">Присоединяйтесь к нам!</div>
      <router-link to="/signin">
        <a-button class="connect-us_btn" type="primary"> Войти </a-button>
      </router-link>
      <router-link to="/signup">
        <a-button ghost type="primary" class="connect-us_btn">
          Зарегистрироваться
        </a-button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.connect-us {
  position: relative;
}
.bg-ellipses__connect:nth-child(1) {
  width: 187px;
  left: 4.5%;
  z-index: 1;
  top: 243px;
}
.bg-ellipses__connect:nth-child(2) {
  width: 104px;
  left: 11%;
  z-index: 1;
  top: 323px;
}
.bg-ellipses__connect:nth-child(3) {
  width: 150px;
  right: 8.5%;
  top: 24px;
  z-index: 0;
}
.bg-ellipses__connect {
  position: absolute;
}
.connect-us-middle {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-image: url("@/img/main/connect_us.png");
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 10%);
  border: 1px solid rgb(0, 0, 0, 10%);
  background-repeat: no-repeat;
  max-width: 75%;
  height: 312px;
  margin: auto;
  border-radius: 20px;
  position: relative;
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
@media (max-width: 1024px) {
  .bg-ellipses__connect:nth-child(1) {
    left: 2.5%;
  }
  .bg-ellipses__connect:nth-child(2) {
    left: 13%;
  }
  .bg-ellipses__connect:nth-child(3) {
    right: 6.5%;
  }
}
@media (max-width: 500px) {
  .title-connect {
    font-size: 16px;
  }
  .connect-us-middle {
    height: 218px;
    max-width: 95%;
    gap: 9px;
  }
  .connect-us_btn {
    width: 198px;
    font-size: 12px;
  }
  .bg-ellipses__connect:nth-child(1) {
    width: 53px;
    top: 205px;
    left: -1.5%;
  }
  .bg-ellipses__connect:nth-child(2) {
    width: 22px;
    left: 9%;
    top: 237px;
  }
  .bg-ellipses__connect:nth-child(3) {
    width: 56px;
    top: 7px;
    right: -0.5%;
  }
}
</style>
