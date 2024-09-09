<template>
  <Swiper
    :slidesPerView="'auto'"
    :spaceBetween="0"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      410: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 9,
        spaceBetween: 0,
      },
    }"
    :modules="[Autoplay]"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :speed="2000"
    :loop="true"
    class="mySwiper"
  >
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>

    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    v
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <img src="@/img/main/swiper_1.png" alt="Slide 1" />
      <div>Категория</div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
</script>

<style scoped lang="scss">
.mySwiper {
  background-color: var(--color-back);
  height: 209px;
  display: flex;
  align-items: center;
}

.swiper-slide {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  img {
    width: 97px;
    border-radius: 50%;
    height: 97px;
  }
}
@media (max-width: 500px) {
  .swiper-slide img {
    width: 60px;
    height: 60px;
  }
  .mySwiper {
    height: 129px;
  }
}
</style>
