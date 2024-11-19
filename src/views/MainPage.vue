<script setup>
import { ref } from "vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import ConnectUs from "@/pagesComponents/ConnectUs.vue";
import FooterSearchOnline from "@/pagesComponents/FooterSearchOnline.vue";
import HomeComponent from "@/pagesComponents/HomeComponent.vue";

import PopularCards from "@/pagesComponents/PopularCards.vue";
import StagesCard from "@/pagesComponents/StagesCard.vue";
import SwiperCategory from "@/pagesComponents/SwiperCategory.vue";
import SwiperClients from "@/pagesComponents/SwiperClients.vue";

let lastScrollY = window.scrollY;
const parallaxFactor = 0.1;
const bgEllipses = ref();

function updateParallax() {
  const scrollPosition = window.scrollY;

  if (bgEllipses.value && Math.abs(scrollPosition - lastScrollY) > 1) {
    bgEllipses.value.style.transform = `translateY(${
      scrollPosition * parallaxFactor
    }px)`;
    lastScrollY = scrollPosition;
  }

  requestAnimationFrame(updateParallax);
}
requestAnimationFrame(updateParallax);
</script>
<template>
  <div class="main-page">
    <HeaderMenu />
    <HomeComponent />
    <SwiperCategory />
    <div class="main-section">
      <StagesCard />
      <PopularCards />
      <SwiperClients />
      <ConnectUs />

      <div class="bg-ellipses" ref="bgEllipses">
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <!-- <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" />
        <img src="@/img/main/ellipse.png" class="bg-ellipses__item" /> -->
      </div>
    </div>

    <FooterSearchOnline />
  </div>
</template>

<style>
.main-page {
  background-color: #fcf8ff;
}

a {
  text-decoration: none;
  color: black;
}
.padding-section {
  padding: 80px 10px;
}
@media (max-width: 500px) {
  .title {
    font-size: 16px;
    margin-bottom: 24px;
  }
  .padding-section {
    padding: 24px 10px;
  }
}

.main-section {
  max-width: 1440px;
  margin: auto;
  position: relative;
  overflow: hidden;
}
.bg-ellipses {
  position: absolute;
  inset: 0;
  width: 100%;
  pointer-events: none;
}
.bg-ellipses__item {
  position: absolute;
}
.bg-ellipses__item:nth-child(1) {
  width: 170px;
  left: 125px;
  top: 186px;
}
.bg-ellipses__item:nth-child(2) {
  width: 100px;
  right: 184px;
  top: 57px;
}
.bg-ellipses__item:nth-child(3) {
  width: 272px;
  right: 12px;
  top: 615px;
}
.bg-ellipses__item:nth-child(4) {
  width: 86px;

  right: 183px;
  top: 792px;
}
.bg-ellipses__item:nth-child(5) {
  width: 150px;
  left: 421px;
  top: 667px;
}
.bg-ellipses__item:nth-child(6) {
  width: 226px;

  left: 66px;
  top: 1173px;
}
.bg-ellipses__item:nth-child(7) {
  width: 103px;
  right: 62px;
  top: 1324px;
}
.bg-ellipses__item:nth-child(8) {
  width: 103px;
  left: 204px;
  top: 1558px;
}
/* .bg-ellipses__item:nth-child(9) {
  width: 150px;
  right: 118px;
  top: 1856px;
}
.bg-ellipses__item:nth-child(10) {
  width: 187px;
  left: 40px;
  top: 2083px;
}
.bg-ellipses__item:nth-child(11) {
  width: 104px;
  left: 133px;
  top: 2176px;
} */
@media (max-width: 500px) {
  .bg-ellipses__item {
    position: absolute;
  }
  .bg-ellipses__item:nth-child(1) {
    width: 106px;
    left: -36px;
    top: 175px;
  }
  .bg-ellipses__item:nth-child(2) {
    width: 65px;
    right: -12px;
    top: 0px;
  }
  .bg-ellipses__item:nth-child(3) {
    display: none;
  }
  .bg-ellipses__item:nth-child(4) {
    width: 58px;
    right: 110px;
    top: 641px;
  }
  .bg-ellipses__item:nth-child(5) {
    width: 85px;
    left: -17px;
    top: 791px;
  }
  .bg-ellipses__item:nth-child(6) {
    width: 54px;
    left: 223px;
    top: 1145px;
  }
  .bg-ellipses__item:nth-child(7) {
    width: 54px;
    right: 242px;
    top: 1268px;
  }
  .bg-ellipses__item:nth-child(8) {
    width: 40px;
    left: 256px;
    top: 1485px;
  }
}
</style>
