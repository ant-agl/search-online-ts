<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import ConnectUs from "@/pagesComponents/ConnectUs.vue";
import FooterSearchOnline from "@/pagesComponents/FooterSearchOnline.vue";
import HowItWorks from "@/pagesComponents/HowItWorks.vue";
import PopularCards from "@/pagesComponents/PopularCards.vue";
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
      <HowItWorks />
      <WhyWe />
      <PopularCards />
      <ConnectUs />
      <FooterSearchOnline />
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
</style>
