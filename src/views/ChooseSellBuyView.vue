<template>
  <WrapperRegSign>
    <div class="choose">
      <div class="title">Я хочу...</div>
      <div class="sell_buy">
        <RouterLink
          :to="{ name: 'AfterRegistration', params: { param: 'buy' } }"
        >
          <div class="buy">
            <img src="@/img/choose/buy.png" alt="" />
            <div class="title text">Купить</div>
          </div>
        </RouterLink>
        <RouterLink
          :to="{ name: 'AfterRegistration', params: { param: 'sell' } }"
        >
          <div class="sell">
            <img src="@/img/choose/sell.png" alt="" />
            <div class="title text">Продать</div>
          </div>
        </RouterLink>
      </div>
    </div>
  </WrapperRegSign>
</template>

<script setup>
import WrapperRegSign from "@/components/wrapper/WrapperRegSign.vue";
</script>

<style scoped lang="scss">
.title {
  font-size: 32px;
  text-align: center;
}
.sell_buy {
  display: flex;
  gap: 77px;
  margin-top: 34px;
  .buy,
  .sell {
    padding: 20px 30px;
    border-radius: 20px;
    transition: box-shadow 0.3s ease-in-out;
  }
  .buy:hover,
  .sell:hover {
    box-shadow: 1px 1px 10px rgb(0, 0, 0, 15%);

    cursor: pointer;
  }
  .text {
    font-size: 20px;
    text-align: center;
    color: black;
  }
}
</style>
