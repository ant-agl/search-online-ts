<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import ConnectUs from "@/pagesComponents/ConnectUs.vue";
import FooterSearchOnline from "@/pagesComponents/FooterSearchOnline.vue";
import HomeComponent from "@/pagesComponents/HomeComponent.vue";
import HowItWorks from "@/pagesComponents/HowItWorks.vue";
import PopularCards from "@/pagesComponents/PopularCards.vue";
import StagesCard from "@/pagesComponents/StagesCard.vue";
import SwiperCategory from "@/pagesComponents/SwiperCategory.vue";
import SwiperClients from "@/pagesComponents/SwiperClients.vue";
import WhyWe from "@/pagesComponents/WhyWe.vue";
</script>
<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#7318C4',
      },
    }"
  >
    <div class="main-page">
      <HeaderMenu />
      <HomeComponent />

      <SwiperCategory />
      <StagesCard />
      <!-- <HowItWorks />
      <WhyWe />
      <PopularCards />
      <SwiperClients />
      <ConnectUs />
      <FooterSearchOnline /> -->
    </div>
  </a-config-provider>
</template>

<style>
.main-page {
  max-width: 1440px;
  margin: auto;
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
