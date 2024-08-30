<template>
  <!-- Контейнер для всего тура -->
  <div class="tour-container" v-if="currentStep >= 0">
    <!-- Модалки для шага 0 и финальной модалки -->
    <div v-if="isMainModalVisible" class="main-modal">
      <h2 class="modal-title">{{ modalTitle }}</h2>
      <div class="modal-body">
        <img
          src="./маскот - 1 1.png"
          alt="description image"
          class="modal-image"
        />
        <div class="modal-description">{{ modalDescription }}</div>
      </div>
      <div class="modal-buttons">
        <button class="modal-buttons_one" v-if="!isFinalStep" @click="endTour">
          Я уже все знаю
        </button>
        <button
          class="modal-buttons_two"
          @click="isFinalStep ? endTour() : nextStep()"
        >
          {{ isFinalStep ? "Завершить" : "Показывай" }}
        </button>
      </div>
    </div>

    <!-- Промежуточные шаги -->
    <div v-else class="step-modal">
      <div class="step-body">
        <img src="./маскот - 1 1.png" alt="step image" class="step-image" />
        <div class="step-description">
          {{ stepDescriptions[currentStep - 1] }}
        </div>
      </div>
      <div class="step-modal-buttons">
        <button class="step-modal-buttons_one" @click="nextStep">Далее</button>
        <button class="step-modal-buttons_two" @click="endTour">
          Завершить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Текущее состояние шага тура
const currentStep = ref(0);

// Описание для каждого шага
const stepDescriptions = [
  'Это раздел "Мои боты" — здесь происходит основная магия. Чтобы создать бота, нажми кнопку "Новый бот". Ты можешь настроить бота вручную или воспользоваться нашими готовыми шаблонами. Рядом с любыми непонятными элементами есть подсказки (?), нажав на которые, ты узнаешь, что это и как использовать.',
  "Сам бот состоит из 4 частей: Основное: название бота и системный промпт. Системный промпт — это инструкция для бота, определяющая его роль и функции. Условия срабатывания: настройка каналов и времени работы бота, определение, когда бот будет активен. Автоматизация: настройка различных функций и возможностей бота. Действия: главная ценность нашего сервиса. Здесь создаются действия, которые бот выполняет при взаимодействии с вашими системами, например, получение данных из вашей CRM.",
  'Теперь раздел "Проверить"... Этот раздел позволяет убедиться, что настроенный чат-бот работает правильно. Для этого нужно выбрать созданного бота и отправить ему сообщение.',
  'Перейдём к разделу "История" Здесь сохраняется вся история взаимодействий с чат-ботом. Ты сможешь увидеть, какое сообщение отправил клиент, как ответил чат-бот, и сколько это стоило.',
  'И теперь о финансах — раздел "Баланс" Схема оплаты проста: сначала нужно пополнить баланс, с которого приобретаются необходимые подписки. Также с баланса списываются средства за обработку сообщений. На балансе должно быть не менее 50 рублей.',
  "Теперь мой любимый раздел — “Интеграции” Здесь подключаются различные каналы (через которые приходят сообщения и бот взаимодействует) и системы (источники данных). Если нужной интеграции нет, сообщи нашей поддержке — мы рассмотрим запрос, и я постараюсь договориться, чтобы её добавили 😉.",
];

const isMainModalVisible = computed(
  () => currentStep.value === 0 || currentStep.value === 7
);
const isFinalStep = computed(() => currentStep.value === 7);

// Данные для начальной и финальной модалок
const modalTitle = computed(() =>
  currentStep.value === 0 ? "Спасибо за регистрацию" : "Завершение тура"
);
const modalDescription = computed(() =>
  currentStep.value === 0
    ? '<p>Привет! Я Рекс, и я помогу тебе разобраться в нашем сервисе и создать своего первого чат-бота на базе ИИ!</p> Не переживай, всё просто — мы сделали процесс максимально удобным. Нажми "Показывай", и я проведу экскурсию. Если ты уже знаком с сервисом, нажми "Я уже всё знаю".'
    : "Благодарим за участие в туре!"
);

// Метод для перехода к следующему шагу
const nextStep = () => {
  if (currentStep.value < 7) {
    currentStep.value += 1;
  }
};

// Метод для завершения тура
const endTour = () => {
  currentStep.value = -1; // Скрыть тур
  console.log("Тур завершен");
};
</script>

<style scoped>
/* Основной контейнер тура */
.tour-container {
  position: relative;

  min-height: 673px;
  width: 100%;
}

/* Стили для основной (начальной и финальной) модалки */
.main-modal {
  position: absolute;
  right: 0;
  background-color: #2b73eb; /* Синий фон */
  padding: 20px;
  width: 392px;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-body {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;
}

.modal-image {
  width: 115px;
  position: relative;
  top: -10px;
}
.modal-title {
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 17px;
}
.modal-description {
  background-color: white;
  color: black;
  padding: 9px 10px;
  margin-right: 5px;
  min-width: 270px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
}

.modal-buttons {
  display: flex;
  gap: 33px;
  position: absolute;
  bottom: 24px;
  font-size: 12px;
}
.modal-buttons_one,
.step-modal-buttons_two {
  padding: 9.5px 0px;
  background-color: #2b73eb;
  border-radius: 5px;
  width: 132px;
  border-color: white;
  color: white;
}
.modal-buttons_two,
.step-modal-buttons_one {
  padding: 9.5px 0;
  border-radius: 5px;
  font-weight: 500;
  background-color: white;
  border-color: white;
  width: 132px;
}
/* Стили для промежуточных шагов */
.step-modal {
  width: 1049px;
  min-height: 161px;
  background-color: #2b73eb;
  position: absolute;
  bottom: 0;
  left: 15%;
  padding: 23px;
  padding-right: 32px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 79px;
}

.step-body {
  display: flex;
  align-items: center;
}

.step-description {
  background-color: white;
  padding: 9px 10px;
  flex: 1;
  border-radius: 4px;
}

.step-image {
  width: 117px;
}

.step-modal-buttons {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
}

.step-modal-buttons_one,
.step-modal-buttons_two {
  padding: 2.5px 21px;
}
</style>
