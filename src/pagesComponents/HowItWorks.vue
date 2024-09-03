<template>
  <div class="how-works">
    <img src="@/img/main/howitworks.png" alt="" />
    <div class="how-works-right">
      <h2 class="title">Как это работает</h2>
      <div class="offers">
        <div class="offer">
          <div class="number">1.</div>
          <div class="description">Создайте заявку</div>
          <img class="offer_img" src="@/img/main/offers_1.svg" alt="" />
        </div>
        <div class="offer">
          <div class="number">2.</div>
          <div class="description">Получите предложения</div>
          <img class="offer_img" src="@/img/main/offers_2.svg" alt="" />
        </div>
        <div class="offer">
          <div class="number">3.</div>
          <div class="description">Выберите лучшее предложение</div>
          <img class="offer_img" src="@/img/main/offers_3.svg" alt="" />
        </div>
        <div class="offer">
          <div class="number">4.</div>
          <div class="description">Заключите сделку и оплатите</div>
          <img class="offer_img" src="@/img/main/offers_4.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.how-works {
  display: flex;
  align-items: center;
  padding: 80px 0;
  justify-content: center;
  gap: 12%;
}
h2 {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}
.offers {
  max-height: 454px;
  max-width: 577px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 60px;
  row-gap: 40px;
}
.offer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 20px;
  width: 175px;
  height: 146px;
}
.offer_img {
  max-width: 103px;
  position: absolute;
  right: 4px;
  bottom: 11px;
}
.number {
  font-size: 32px;
  color: var(--color-primary);
  font-weight: 600px;
}
.description {
  font-size: 14px;
}
</style>
