<template>
  <div class="wrapper">
    <RouterLink class="logo" to="/">
      <img src="@/img/Logo.svg" alt="" />
    </RouterLink>
    <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
    <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />

    <div class="modal">
      <img src="@/img/main/ellipse.png" class="bg-ellipses-modal__item" />
      <img src="@/img/main/ellipse.png" class="bg-ellipses-modal__item" />
      <img src="@/img/main/ellipse.png" class="bg-ellipses-modal__item" />
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
  .bg-ellipses-modal__item {
    position: absolute;
  }
  .bg-ellipses-modal__item:nth-child(1) {
    width: 187px;
    left: -179px;
    bottom: -10px;
    z-index: 2;
  }
  .bg-ellipses-modal__item:nth-child(2) {
    width: 99px;
    left: -51px;

    bottom: 20px;
    z-index: 1;
    opacity: 0.7;
  }
  .bg-ellipses-modal__item:nth-child(3) {
    width: 154px;
    right: -68px;
    top: -17px;
    z-index: -1;
  }
  .router {
    font-weight: 500;
  }
}
:deep(.ant-form-item) {
  margin-right: 0;
}
@media (max-width: 700px) {
  .wrapper {
    overflow-x: hidden;
    align-items: flex-start;
    padding-top: 76px;
  }
  .modal {
    margin: 0 16px;
    .bg-ellipses-modal__item:nth-child(1) {
      width: 72px;
      left: -13px;
      bottom: -35px;
      z-index: 2;
    }
    .bg-ellipses-modal__item:nth-child(2) {
      width: 38px;
      left: 32px;
      bottom: -20px;
      z-index: 1;
      opacity: 0.7;
    }
    .bg-ellipses-modal__item:nth-child(3) {
      width: 72px;
      right: -20px;
      top: -17px;
      z-index: -1;
    }
    padding: 30px 18px;
    :deep(.title) {
      font-size: 20px;
    }
    :deep(.form) {
      width: 248px;
    }
    :deep(.subtitle) {
      padding: 7px 0 18px;
    }
    :deep(.ant-input-affix-wrapper) {
      padding: 7px 14px;
    }
    :deep(.form .form-button) {
      height: 38px;
    }
  }
  .logo {
    width: 100%;
    left: 0;
    top: 12px;
    display: flex;
    justify-content: center;
    img {
      width: 168px;
    }
  }
}
@media (max-width: 700px) {
  .wrapper .bg-ellipses__item:nth-child(3) {
    display: none;
  }
}
</style>
