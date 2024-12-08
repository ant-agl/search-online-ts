<template>
  <div class="images" @click="hide">
    <div class="wrapper-swiper" @click.stop>
      <img @click="hide" class="cross" src="@/img/icons/cross.svg" alt="" />
      <Swiper
        @swiper="onSwiper"
        :pagination="{
          clickable: true,
        }"
        :hashNavigation="{
          watchState: true,
        }"
        :initialSlide="activeSlideIndex"
        :breakpoints="{
          300: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }"
        :freeMode="false"
        :navigation="true"
        :modules="[Navigation, FreeMode, HashNavigation]"
        class="mySwiper"
      >
        <SwiperSlide
          v-for="(img, index) in props.images"
          :key="index"
          class="swiper-slide"
        >
          <img :src="img" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, HashNavigation } from "swiper/modules";
import { computed, ref, watch } from "vue";

// Получаем пропсы
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  activeSlide: {
    type: Number,
  },
});
const isOpen = defineModel("open");
const hide = () => {
  isOpen.value = false;
};
const activeSlideIndex = computed(() => props.activeSlide);
// Создаём реактивную переменную для хранения экземпляра Swiper
const swiperInstance = ref(null);

// Обработчик события получения экземпляра Swiper
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};
const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index);
  }
};
watch(props, (newProps) => {
  //   console.log(newProps.activeSlide);
  goToSlide(newProps.activeSlide);
});
</script>

<style scoped lang="scss">
.images {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 29%);
}
.mySwiper {
  width: 584px;
  height: 584px;
  padding: 45px;
  background-color: white;
  position: static;
  border-radius: 20px;
}
.wrapper-swiper {
  display: flex;
  justify-content: center;
  position: relative;
  width: 680px;
}
.cross {
  position: absolute;
  top: 10px;
  right: 60px;
  z-index: 2;
  width: 27px;
  cursor: pointer;
}
.swiper-slide {
  max-width: 584px;
  img {
    object-fit: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
}

:deep(.swiper-button-prev) {
  left: -52px;
  background-image: url("@/img/arrow_left.svg");
}

:deep(.swiper-button-next) {
  right: -52px;
  background-image: url("@/img/arrow_right.svg");
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background-color: #f0f0f0;
}
</style>
