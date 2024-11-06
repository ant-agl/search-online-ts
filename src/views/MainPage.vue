<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import ConnectUs from "@/pagesComponents/ConnectUs.vue";
import FooterSearchOnline from "@/pagesComponents/FooterSearchOnline.vue";
import HomeComponent from "@/pagesComponents/HomeComponent.vue";

import PopularCards from "@/pagesComponents/PopularCards.vue";
import StagesCard from "@/pagesComponents/StagesCard.vue";
import SwiperCategory from "@/pagesComponents/SwiperCategory.vue";
import SwiperClients from "@/pagesComponents/SwiperClients.vue";
</script>
<template>
  <div class="main-page">
    <HeaderMenu />
    <HomeComponent />

    <SwiperCategory />
    <StagesCard />

    <PopularCards />
    <SwiperClients />
    <ConnectUs />
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
</style>
