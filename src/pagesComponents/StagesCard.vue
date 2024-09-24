<template>
  <div class="cards">
    <a-popover title="Заява" trigger="hover">
      <template #content>
        <p>Шла сасака по соше и теперь вертсальщик</p>
        <p>Кто лучший!? Я!</p>
      </template>

      <a-button>
        <div class="popover-child">
          <div class="number">1</div>
          <div class="text">Создайте заявку</div>
        </div></a-button
      >
    </a-popover>
    <a-popover title="Заява" trigger="hover">
      <template #content>
        <p>
          Аааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааайаафправрафырпвафрпывапрфыавпрфаврпфаврпфавпрыфаврпфоыварфпоавлопфывлорфдгвапо]ыпадропыолрвапорыпагшцупдфгмсшпдцроупапфыдорбапцунгоап
        </p>
      </template>

      <a-button>
        <div class="popover-child">
          <div class="number">2</div>
          <div class="text">Получите предложения</div>
        </div></a-button
      >
    </a-popover>
    <a-popover title="Заява" trigger="hover">
      <template #content>
        <p>Шла сасака по соше и теперь вертсальщик</p>
        <p>Кто лучший!? Я!</p>
      </template>

      <a-button>
        <div class="popover-child">
          <div class="number">3</div>
          <div class="text">Выберите лучшее предложение</div>
        </div></a-button
      >
    </a-popover>
    <a-popover title="Заява" trigger="hover">
      <template #content>
        <p>Шла сасака по соше и теперь вертсальщик</p>
        <p>Кто лучший!? Я!</p>
      </template>

      <a-button>
        <div class="popover-child">
          <div class="number">4</div>
          <div class="text">Заключите сделку и оплатите</div>
        </div></a-button
      >
    </a-popover>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding: 63px 0;
  background-color: var(--color-back);
}

.number {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 22px;
  background: linear-gradient(180deg, #a768df, #5d169c);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popover-child {
  margin: 30px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}
:deep(.ant-btn) {
  background-color: #5d169c;
  width: 231px;
  height: 175px;
  padding: 1px;
  border-radius: 30px;
  background: rgb(255, 255, 255, 0.6);
  border: 1px solid transparent;

  background-image: linear-gradient(
      rgb(255, 255, 255, 0.6),
      rgb(255, 255, 255, 0.6)
    ),
    linear-gradient(to right bottom, #ffffff, transparent 11%, #e3e3e3);
  background-origin: border-box;
  background-clip: content-box, border-box;
  backdrop-filter: blur(10px);
}
.text {
  text-wrap: wrap;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.7);
}
</style>
