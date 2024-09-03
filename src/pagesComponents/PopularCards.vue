<template>
  <div class="populars">
    <h2 class="title">Популярные услуги</h2>
    <div class="cards">
      <div class="card">
        <img class="top-img" src="@/img/main/popularUslugi.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Укладка ламината</div>
          <div class="card-price">от 250 р за услугу</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
      <div class="card">
        <img class="top-img" src="@/img/main/popularUslugi.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Укладка ламината</div>
          <div class="card-price">от 250 р за услугу</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
      <div class="card">
        <img class="top-img" src="@/img/main/popularUslugi.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Укладка ламината</div>
          <div class="card-price">от 250 р за услугу</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
      <div class="card">
        <img class="top-img" src="@/img/main/popularUslugi.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Укладка ламината</div>
          <div class="card-price">от 250 р за услугу</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
    </div>
    <a-button class="button" type="primary" ghost>Больше услуг</a-button>
  </div>
  <div class="populars">
    <h2 class="title">Популярные товары</h2>
    <div class="cards">
      <div class="card">
        <img class="top-img" src="@/img/main/popularProduct.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Шкаф</div>
          <div class="card-price">10 000 р</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
      <div class="card">
        <img class="top-img" src="@/img/main/popularProduct.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Шкаф</div>
          <div class="card-price">10 000 р</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
      <div class="card">
        <img class="top-img" src="@/img/main/popularProduct.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Шкаф</div>
          <div class="card-price">10 000 р</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
      <div class="card">
        <img class="top-img" src="@/img/main/popularProduct.png" alt="" />
        <div class="card-bottom">
          <div class="card-title">Шкаф</div>
          <div class="card-price">10 000 р</div>
          <div class="card-city">Москва</div>
          <div class="card-time">Сегодня в 12:54</div>
          <router-link to="">
            <div class="card-arrow">
              <div class="text-arrow">Подробнее</div>
              <img
                class="arrow"
                src="@/img/main/popularArrow.svg"
                alt=""
              /></div
          ></router-link>
        </div>
      </div>
    </div>
    <a-button class="button" type="primary" ghost>Больше товаров</a-button>
  </div>
</template>
<style scoped>
.populars {
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.card {
  width: 247px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  overflow: hidden;
  line-height: 22px;
}
.top-img {
  max-height: 157px;
}
.card-bottom {
  padding: 20px 25px 59px 25px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.card-title {
  font-weight: 600;
}
.card-price {
  font-size: 15px;
}
.card-city {
  font-size: 14px;
  opacity: 68%;
}
.card-time {
  font-size: 12px;
  opacity: 50%;
}
.card-arrow {
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 25px;

  transition: all 1s ease-in-out;
}

.card-arrow:hover {
  width: 197px;
  padding-left: 15px;
}

.card-arrow {
  transition: all 1s ease-in-out;
}

.card-arrow:hover {
  transition: all 0.5s ease-out;
}

.text-arrow {
  position: absolute;
  left: 15px;
  color: white;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  font-weight: 300;
}

.card-arrow:hover .text-arrow {
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease-in;
}

.card-arrow:not(:hover) .text-arrow {
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
}

.arrow {
  width: 16px;
  position: absolute;
  right: 8px;
}
.button {
  width: 168px;
}
</style>
