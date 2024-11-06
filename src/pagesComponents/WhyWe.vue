<template>
  <div class="whyme padding-section">
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
  gap: 10px;
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
  margin-bottom: 6px;
}
.card-description {
  line-height: 22px;
}
@media (max-width: 800px) {
  .cards {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}
@media (max-width: 500px) {
  .card {
    width: 217px;
    height: 177px;
    padding: 23px 22px;
  }
  .card-title {
    font-size: 16px;
  }
  .card-description {
    font-size: 12px;
  }
}
</style>
