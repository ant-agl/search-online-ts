<template>
  <div class="stage-cards padding-section">
    <div class="wrapper-cards">
      <h2 class="title">Как это работает?</h2>
      <div class="cards">
        <a-popover title="Заява" placement="topLeft" trigger="hover">
          <template #content>
            <p>Создайте заявку</p>
          </template>

          <a-button>
            <div class="popover-child">
              <div class="number">1</div>
              <div class="text">Создайте заявку</div>
            </div></a-button
          >
        </a-popover>
        <a-popover title="Заява" placement="topLeft" trigger="hover">
          <template #content>
            <p>Получите предложения</p>
          </template>

          <a-button>
            <div class="popover-child">
              <div class="number">2</div>
              <div class="text">Получите предложения</div>
            </div></a-button
          >
        </a-popover>
        <a-popover title="Заява" placement="topRight" trigger="hover">
          <template #content>
            <p>Выберите лучшее предложение</p>
          </template>

          <a-button>
            <div class="popover-child">
              <div class="number">3</div>
              <div class="text">Выберите лучшее предложение</div>
            </div></a-button
          >
        </a-popover>
        <a-popover title="Заява" placement="topRight" trigger="hover">
          <template #content>
            <p>Заключите сделку и оплатите</p>
          </template>

          <a-button>
            <div class="popover-child">
              <div class="number">4</div>
              <div class="text">Заключите сделку и оплатите</div>
            </div></a-button
          >
        </a-popover>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stage-cards::-webkit-scrollbar {
  display: none;
}
.stage-cards {
  position: relative;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 231px);
  gap: 25px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.title {
  text-align: center;
  margin-bottom: 44px;
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
  line-height: 22px;
}
:deep(.ant-btn) {
  height: 175px;
  padding: 1px;
  border-radius: 30px;
  background: rgb(255, 255, 255, 0.9);
  border: 1px solid transparent;
  box-shadow: -1px 2px 14px -11px;
}
.text {
  text-wrap: wrap;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.7);
}
@media (max-width: 1000px) {
  .cards {
    grid-template-columns: repeat(2, 231px);
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: repeat(2, 140px);
    gap: 8px;
  }
  .text {
    font-size: 10px;
  }
  :deep(.ant-btn) {
    height: 114px;
  }
  .popover-child {
    margin: 16px 17px;
    gap: 10px;
  }

  .title {
    margin-bottom: 24px;
  }
}
</style>
