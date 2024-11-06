<template>
  <div class="clients padding-section">
    <h2 class="title">Что говорят наши клиенты</h2>
    <Swiper
      :slidesPerView="1"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :hashNavigation="{
        watchState: true,
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1023: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      }"
      :freeMode="false"
      :navigation="true"
      :modules="[Navigation, FreeMode]"
      class="mySwiper"
    >
      <SwiperSlide class="swiper-slide_left">
        <div class="card">
          <div class="card-top">
            <img class="avatar" src="@/img/main/avatar.png" alt="" />
            <div class="contacts">
              <div class="fio">Иван Иванов</div>
              <div class="city">Москва</div>
            </div>
          </div>
          <div class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div class="card-stars">
            <a-rate class="stars" value="4" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide_left">
        <div class="card">
          <div class="card-top">
            <img class="avatar" src="@/img/main/avatar.png" alt="" />
            <div class="contacts">
              <div class="fio">Иван Иванов</div>
              <div class="city">Москва</div>
            </div>
          </div>
          <div class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div class="card-stars">
            <a-rate class="stars" value="4" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide_left">
        <div class="card">
          <div class="card-top">
            <img class="avatar" src="@/img/main/avatar.png" alt="" />
            <div class="contacts">
              <div class="fio">Иван Иванов</div>
              <div class="city">Москва</div>
            </div>
          </div>
          <div class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div class="card-stars">
            <a-rate class="stars" value="4" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation } from "swiper/modules";
</script>

<style scoped lang="scss">
.clients {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}
.title {
  font-size: 28px;
  text-align: center;
}
.mySwiper {
  height: 192px;
  max-width: 930px;
  display: flex;
  align-items: center;
}

.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.card {
  background-color: white;
  padding: 18px 25px;
  max-width: 433px;
  border-radius: 16px;
  overflow: hidden;
}
.card-top {
  display: flex;
  align-items: center;
  gap: 15px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.fio {
  font-size: 14px;
  font-weight: 600;
}
.city {
  font-size: 10px;
}
.card-text {
  font-size: 12px;
  margin: 5px 0;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  position: absolute;
  cursor: pointer;
}

:deep(.swiper-button-prev) {
  left: 9%;
  background-image: url("@/img/arrow_left.svg");
  background-size: 8px;
  background-repeat: no-repeat;
  background-position: center;
}

:deep(.swiper-button-next) {
  right: 9%;
  background-image: url("@/img/arrow_right.svg");
  background-size: 8px;
  background-repeat: no-repeat;
  background-position: center;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background-color: #f0f0f0;
}
:deep(.swiper) {
  position: static;
}

@media (max-width: 1300px) {
  :deep(.swiper-button-next) {
    right: 5%;
  }
  :deep(.swiper-button-prev) {
    left: 4%;
  }
  .mySwiper {
    max-width: 890px;
  }
}

@media (max-width: 1100px) {
  :deep(.swiper-button-next) {
    right: 3%;
  }
  :deep(.swiper-button-prev) {
    left: 2%;
  }
}

@media (max-width: 1000px) {
  .mySwiper {
    max-width: 433px;
  }
}

@media (max-width: 600px) {
  .mySwiper {
    max-width: 197px;
    height: 224px;
  }

  .fio {
    font-size: 12px;
  }
  .city {
    font-size: 9px;
  }
  .card-text {
    font-size: 9px;
    margin: 5px 0;
  }
  .avatar {
    width: 30px;
    height: 30px;
  }
  .card-top {
    gap: 10px;
  }
  .stars {
    font-size: 10px;
  }
  :deep(
      :where(.css-dev-only-do-not-override-keyed0).ant-rate
        .ant-rate-star:not(:last-child)
    ) {
    margin-inline-end: 2px;
  }
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 24px;
    height: 24px;

    transform: translateY(70%);
  }
}
</style>
