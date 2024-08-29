<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import HowItWorks from "@/pagesComponents/HowItWorks.vue";
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
</style>
