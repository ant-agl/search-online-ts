<template>
  <footer>
    <div class="informations">
      <ul>
        <li><router-link to="#">О нас</router-link></li>
        <li><router-link to="#">Контакты</router-link></li>
        <li><router-link to="#">Политика конфедициальности</router-link></li>
      </ul>
    </div>
    <div class="logo-block">
      <img class="logo" src="@/img/Logo.svg" alt="" />
      <div class="text">© 2024 Найти онлайн. Все права защищены.</div>
    </div>
    <div class="contacts">
      <ul class="ul-right">
        <li>brthehrtebe@gmail.com</li>
        <li>+79780000000</li>
        <li>Россия, г.Москва, ул.Ленина, д.232</li>
      </ul>
      <div class="socials hide">
        <router-link to="#">
          <img src="@/img/instagram.svg" alt=""
        /></router-link>
        <router-link to="#">
          <img src="@/img/telegram.svg" alt=""
        /></router-link>
        <router-link to="#">
          <img src="@/img/facebook.svg" alt=""
        /></router-link>
      </div>
    </div>
    <div class="logo-block logo-block-mobile">
      <img class="logo" src="@/img/Logo.svg" alt="" />
      <div class="socials">
        <router-link to="#">
          <img src="@/img/instagram.svg" alt=""
        /></router-link>
        <router-link to="#">
          <img src="@/img/telegram.svg" alt=""
        /></router-link>
        <router-link to="#">
          <img src="@/img/facebook.svg" alt=""
        /></router-link>
      </div>
      <div class="text">© 2024 Найти онлайн. Все права защищены.</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 43px 0;
  background: var(--color-back);
  display: flex;
  justify-content: space-around;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.ul-right {
  align-items: flex-end;
}
.contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
}
.socials {
  display: flex;
  gap: 22px;
}
li {
  line-height: 22px;
  color: black;
  opacity: 0.68;
  font-size: 13px;
}
.logo-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 73px;
}
.logo-block-mobile {
  display: none;
}
.logo {
  width: 258px;
}
.text {
  font-size: 12px;
}

@media (max-width: 1020px) {
  .logo-block {
    display: none;
  }
  .logo-block-mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    grid-column: 1/-1;
  }
  .hide {
    display: none;
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}

@media (max-width: 500px) {
  footer {
    padding: 16px 20px;
  }
  .logo {
    width: 132px;
  }
  ul {
    gap: 0;
    padding: 0;
  }
  .ul-right {
    text-align: end;
  }
  li {
    font-size: 10px;
  }
  .text {
    font-size: 7px;
  }
  .socials img {
    width: 25px;
  }
}
</style>
