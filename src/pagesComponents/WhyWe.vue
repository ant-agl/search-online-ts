<template>
  <div class="whyme">
    <h2 class="title">Почему выбирают нас?</h2>
    <div class="cards">
      <div class="card">
        <img src="@/img/main/whyme_1.svg" alt="" />
        <div class="card-title">Безопасно</div>
        <div class="card-description">Безопасная оплата товаров и услуг</div>
      </div>
      <div class="card">
        <img src="@/img/main/whyme_2.svg" alt="" />
        <div class="card-title">Много</div>
        <div class="card-description">Большой выбор продавцов</div>
      </div>
      <div class="card">
        <img src="@/img/main/whyme_3.svg" alt="" />
        <div class="card-title">Удобно</div>
        <div class="card-description">Удобный и понятный интерфейс</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.whyme {
  background: #f9f3ff;
  padding: 80px 0;
}
.title {
  text-align: center;
  margin-bottom: 40px;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 42px 25px;
  background-color: white;
  width: 230px;
  height: 220px;
  text-align: center;
  border-radius: 10px;
}
.card-title {
  font-size: 20px;
  color: #7318c4;
}
img {
  width: 40px;
}
</style>
