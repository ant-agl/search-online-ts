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
const parallaxFactor = 0.5;
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

    <div class="main-section">
      <SwiperCategory />
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
      </div>
    </div>

    <FooterSearchOnline />
  </div>
</template>

<style>
.main-page {
  max-width: 1440px;
  margin: auto;
  background-color: #fcf8ff;
}
.title {
  font-size: 28px;
  font-family: "Russo One", sans-serif;
}
a {
  text-decoration: none;
  color: black;
}
.padding-section {
  padding: 80px 0;
}
@media (max-width: 500px) {
  .title {
    font-size: 16px;
  }
  .padding-section {
    padding: 40px 0;
  }
}

.main-section {
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
  left: -60px;
  top: 200px;
}
.bg-ellipses__item:nth-child(2) {
  width: 100px;
  right: -60px;
  top: 180px;
}
.bg-ellipses__item:nth-child(3) {
  width: 300px;
  right: -60px;
  top: 600px;
}
.bg-ellipses__item:nth-child(4) {
  width: 150px;
  left: -40px;
  top: 700px;
}
.bg-ellipses__item:nth-child(5) {
  width: 200px;
  left: 10px;
  top: 1250px;
}
.bg-ellipses__item:nth-child(6) {
  width: 140px;
  right: 60px;
  top: 1300px;
}
.bg-ellipses__item:nth-child(7) {
  width: 110px;
  left: 70px;
  top: 1800px;
}
.bg-ellipses__item:nth-child(8) {
  width: 150px;
  right: 48px;
  top: 1900px;
}
</style>
