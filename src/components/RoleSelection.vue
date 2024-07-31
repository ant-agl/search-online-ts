<template>
  <div class="main-block">
    <h1>Я сейчас Хочу</h1>
    <div class="main-router">
      <router-link to="#">
        <div class="popu-category-box rounded text-center">
          <div class="popu-category-icon icons-md fix-popu">
            <span class="uim-svg"
              ><img src="@/assets/images/payment.svg" alt=""
            /></span>
          </div>
          <div class="popu-category-content">Купить</div>
        </div>
      </router-link>
      <router-link to="#">
        <div class="popu-category-box rounded text-center">
          <div class="popu-category-icon icons-md fix-popu">
            <span class="uim-svg"
              ><img src="@/assets/images/sell.svg" alt=""
            /></span>
          </div>
          <div class="popu-category-content">Продать</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 120px !important;
}
.main-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.main-router {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 5%;
}
.popu-category-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fix-popu {
  width: 300px !important;
  height: 300px !important;
}
img {
  padding: 10px;
}
.popu-category-content {
  font-size: 40px;
}
</style>
