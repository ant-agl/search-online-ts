<script setup lang="ts">
import { ref } from "vue";
const value = ref<string>("");

const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
};
</script>
<template>
  <div class="home">
    <div class="home-middle">
      <div class="circles">
        <div class="circle-large"></div>
        <div class="circle-small"></div>
      </div>
      <div class="wrapper-middle">
        <div class="logo-text">НАЙТИ.ОНЛАЙН</div>
        <h1 class="title-home">
          ПРОСТАЯ ПЛАТФОРМА ДЛЯ <span>БОЛЬШИХ</span> ВОЗМОЖНОСТЕЙ
        </h1>

        <a-input-search
          v-model:value="value"
          placeholder="Поиск"
          enter-button
          @search="onSearch"
          class="search"
        />
        <!-- <div class="buttons">
          <a-button class="btn_1" type="primary">Оставить запрос</a-button>
          <a-button class="btn_2">Добавить услугу</a-button>
        </div> -->
      </div>
    </div>
    <img class="home-city" src="@/img/main/home_city.png" alt="" />
  </div>
</template>
<style lang="scss" scoped>
// .buttons {
//   display: flex;
//   gap: 20px;
//   margin-top: 20px;
// }
// .btn_1,
// .btn_2 {
//   border-radius: 20px;
//   width: 220px;
//   height: 44px;
// }
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 610px;
  overflow: hidden;
}
.home-city {
  max-height: 353px;
  position: absolute;
  bottom: 0;
}
.home-middle {
  color: white;
  max-width: 787px;
  height: 437px;
  position: absolute;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  //   background: url("@/img/main/blur_home.png");
}
.circles {
  max-width: 862px;
  //   overflow: hidden;
  position: relative;
  filter: blur(100px);
}
.circle-large {
  width: 787px;
  height: 437px;
  background-color: rgba(93, 22, 156, 0.77);
  border-radius: 50%;
}
.circle-small {
  width: 473px;
  height: 347px;
  background-color: #d9adff;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: -75px;
}
.wrapper-middle {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-weight: 700;
}
.title-home {
  font-size: 48px;
  max-width: 612px;
  text-align: center;

  span {
    // font-weight: bold;
    background: linear-gradient(
      20deg,
      rgba(93, 22, 156, 1),
      rgba(183, 126, 233, 1)
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
}
.search {
  width: 100%;
  :deep(.ant-input) {
    height: 52px;
    border-radius: 30px !important;
  }
  :deep(.ant-input-group-addon) {
    position: absolute !important;
    left: 92% !important;
    bottom: 5px !important;
    z-index: 1;
  }
  :deep(.ant-btn) {
    border-radius: 30px !important;
    width: 42px !important;
    height: 42px !important;
    padding: 2px 0px 0px 6px !important;
    svg {
      width: 22px !important;
      height: 22px !important;
      padding-right: 5px;
    }
  }
  :deep(.ant-input) {
    padding-right: 55px !important;
    padding-left: 20px !important;
  }
}
</style>
