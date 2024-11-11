<template>
  <footer>
    <div class="wrapper-footer">
      <div class="informations">
        <ul>
          <li><router-link to="#">О нас</router-link></li>
          <li><router-link to="#">Контакты</router-link></li>
          <li><router-link to="#">Политика конфедициальности</router-link></li>
        </ul>
      </div>
      <div class="logo-block">
        <router-link to="/">
          <img class="logo" src="@/img/Logo.svg" alt=""
        /></router-link>
      </div>
      <div class="contacts">
        <ul class="ul-right">
          <li>brthehrtebe@gmail.com</li>
          <li>+79780000000</li>
          <li>Россия, г.Москва, ул.Ленина, д.232</li>
        </ul>
        <div class="socials hide">
          <router-link to="#">
            <img src="@/img/telegram.svg" alt=""
          /></router-link>
        </div>
      </div>
    </div>
    <div class="text">© 2024 Найти онлайн. Все права защищены.</div>
  </footer>
</template>

<style scoped>
footer {
  padding: 43px 0;
  background: var(--color-back);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper-footer {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
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
}
ul {
  padding: 0;
}
.logo {
  width: 258px;
}
.text {
  font-size: 12px;
}
@media (max-width: 700px) {
  .wrapper-footer {
    grid-template-columns: repeat(1, 1fr);
    justify-items: flex-start;
    padding: 0 16px;
  }
  .logo-block {
    grid-row-start: 1;
    width: 100%;
    align-items: center;
  }
  .ul-right {
    align-items: flex-start;
  }
  .contacts {
    width: 100%;
    align-items: flex-start;
    gap: 0;
  }
  .socials {
    width: 100%;
    justify-content: center;
    margin: 18px 0;
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
