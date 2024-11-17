<template>
  <div class="populars padding-section">
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
  <div class="populars padding-section">
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
<style scoped lang="scss">
.populars {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 30px;
  margin: 0 30px;
}

.card {
  max-width: 247px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  overflow: hidden;
  line-height: 22px;
  border: 0px;
  box-shadow: -1px 2px 14px -11px;
  border-radius: 20px;
  background: rgb(255, 255, 255, 0.9);
  cursor: pointer;
  &:hover {
    .card-arrow {
      transition: all 0.3s ease-out;
      width: 80%;
      padding-left: 15px;
    }
    .text-arrow {
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease-in;
    }
  }
  &:not(:hover) .text-arrow {
    transition: opacity 0.1s ease-out, visibility 0.1s ease-out;
  }
}
.top-img {
  height: 157px;
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
  transition: all 0.5s ease-in-out;
}

.text-arrow {
  position: absolute;
  left: 15px;
  color: white;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease-in-out;
  font-weight: 300;
}

.arrow {
  width: 16px;
  position: absolute;
  right: 8px;
}
.button {
  width: 168px;
}
@media (max-width: 1020px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .populars {
    gap: 20px;
  }
  .cards {
    gap: 8px;
  }
  .card {
    max-width: 136px;
    line-height: 13px;
  }
  .top-img {
    max-height: 89px;
  }
  .card-bottom {
    padding: 5px 10px 35px 10px;
  }
  .card-title {
    font-size: 10px;
  }
  .card-price {
    font-size: 9px;
  }
  .card-city {
    font-size: 9px;
  }
  .card-time {
    font-size: 8px;
  }
  .card-arrow {
    width: 26px;
    height: 26px;
    bottom: 5px;
    right: 10px;
  }
  .arrow {
    right: 5px;
  }
  .text-arrow {
    font-size: 11px;
  }
  .card-arrow:hover {
    width: 84%;
    padding-left: 8px;
  }
  .button {
    width: 168px;
  }
  .cards {
    margin: 0;
  }
}
</style>
