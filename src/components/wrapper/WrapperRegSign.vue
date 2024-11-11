<template>
  <div class="wrapper">
    <RouterLink class="logo" to="/">
      <img src="@/img/Logo.svg" alt="" />
    </RouterLink>
    <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
    <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
    <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
    <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
    <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  height: 100vh;
  position: relative;
  .bg-ellipses__item {
    position: absolute;
  }
  .bg-ellipses__item:nth-child(2) {
    width: 72px;
    left: 215px;
    top: 145px;
  }
  .bg-ellipses__item:nth-child(3) {
    width: 154px;
    right: 424px;
    top: 145px;
  }
  .bg-ellipses__item:nth-child(4) {
    width: 187px;
    left: 315px;
    top: 536px;
    z-index: 2;
  }
  .bg-ellipses__item:nth-child(5) {
    width: 99px;
    left: 439px;
    top: 594px;
    z-index: 1;
    opacity: 0.7;
  }
  .bg-ellipses__item:nth-child(6) {
    width: 99px;
    right: 91px;
    top: 594px;
  }
}
.logo {
  position: fixed;
  left: 60px;
  top: 30px;
  img {
    width: 260px;
  }
}
.modal {
  padding: 36px 76px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255, 0.9);
  position: relative;
  .router {
    font-weight: 500;
  }
}
</style>
