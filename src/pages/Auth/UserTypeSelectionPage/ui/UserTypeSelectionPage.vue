<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const selectAccount = (type: "user" | "sell") => {
  router.push({
    name: "profile-filling",
    query: { accountType: type },
  });
};
</script>

<template>
  <a-flex vertical>
    <div class="title">Я хочу...</div>
    <div class="sell_buy">
      <div class="buy" @click="selectAccount('user')">
        <img src="@/assets/img/UserType.webp" alt="" />
        <div class="title text">Купить</div>
      </div>
      <div class="sell" @click="selectAccount('sell')">
        <img src="@/assets/img/SellType.webp" alt="" />
        <div class="title text">Продать</div>
      </div>
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

    & img {
      width: 250px;
      height: 250px;
    }
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
