<template>
  <a-flex vertical>
    <div class="title">Я хочу...</div>
    <div class="sell_buy">
      <RouterLink to="/profile-filling">
        <div class="buy">
          <img src="@/assets/img/choose/buy.png" alt="" />
          <div class="title text">Купить</div>
        </div>
      </RouterLink>
      <div class="sell">
        <img src="@/assets/img/choose/sell.png" alt="" />
        <div class="title text">Продать</div>
      </div>
      <!-- <RouterLink
        :to="{ name: 'AfterRegistration', params: { param: 'sell' } }"
      >
    </RouterLink> -->
    </div>
  </a-flex>
</template>

<style lang="scss" scoped>
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
