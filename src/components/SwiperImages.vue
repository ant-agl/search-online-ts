<template>
  <div class="images">
    <Swiper
      ref="swiperInstance"
      :pagination="{ clickable: true }"
      :hashNavigation="{ watchState: true }"
      :freeMode="false"
      :navigation="true"
      :modules="[Navigation, FreeMode, HashNavigation]"
      class="mySwiper"
    >
      <SwiperSlide
        v-for="(img, index) in props.images"
        :key="index"
        class="swiper-slide_left"
      >
        <img :src="img" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, HashNavigation } from "swiper/modules";

// Получаем пропсы
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
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
  background-color: gray;
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
    max-width: 217px;
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
