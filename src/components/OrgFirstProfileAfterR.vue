<script setup>
import { ref, computed, watch } from "vue";
// import { useStore } from "vuex";
import AppInput from "./App/AppInput.vue";
import SelectChoice from "@/components/App/SelectChoice.vue";
import { minLength, helpers, required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

// const store = useStore();
const selectedUr = ref(null);
const selectedCategory = ref(null);
const buttonFlagUslugi = ref(false);
const totalInformation = ref({
  name: "",
  adress: "",
});
const nameSelected = ref(null);
const options = [
  { id: "1", name: "ООО" },
  { id: "2", name: "ИП" },
  { id: "3", name: "Самозанятый" },
  { id: "4", name: "Физлицо" },
];
const optionsCategory = [
  { id: "1", name: "Категория 1" },
  { id: "2", name: "Категория 2" },
  { id: "3", name: "Категория 3" },
  { id: "4", name: "Категория 4" },
];
watch(() => {
  switch (selectedUr.value) {
    case "1":
      nameSelected.value = "ООО";
      break;
    case "2":
      nameSelected.value = "ИП";
      break;
    case "3":
      nameSelected.value = "Самозанятый";
      break;
    case "4":
      nameSelected.value = "Физлицо";
      break;
  }
});
const orgData = ref({
  phone: "",
  vk: "",
  telegram: "",
  email: "",
  inn: "",
  name: "",
  kpp: "",
  ogrn: "",
  adress: "",
  ogrnIp: "",
});

const containsVkCom = helpers.withMessage(
  "Пример ссылки https://vk.com/никнейм",
  (value) =>
    !value || (typeof value === "string" && value.includes("https://vk.com/"))
);
const containsTelegram = helpers.withMessage(
  "Пример ссылки https://t.m/никнейм",
  (value) =>
    !value || (typeof value === "string" && value.includes("https://t.m/"))
);
const rules = computed(() => ({
  orgData: {
    phone: {
      minLength: helpers.withMessage(
        "Номер телофона нужно указать полностью",
        minLength(18)
      ),
    },
    inn: {
      minLength: helpers.withMessage("ИНН состоит из 11 цифр", minLength(14)),
    },
    kpp: {
      minLength: helpers.withMessage("ИНН состоит из 9 цифр", minLength(11)),
    },
    ogrnIp: {
      minLength: helpers.withMessage(
        "ОГРНИП состоит из 13 цифр",
        minLength(17)
      ),
    },
    ogrn: {
      minLength: helpers.withMessage("ОГРН состоит из 11 цифр", minLength(15)),
    },
    vk: {
      containsVkCom,
    },
    telegram: {
      containsTelegram,
    },
    email: {
      email: helpers.withMessage("Вы ввели неверный email", email),
    },
  },
  selectedUr: {
    required: helpers.withMessage("Обязательное поле", required),
  },
}));

const v$ = useVuelidate(rules, { orgData, selectedUr });

const onSubmit = () => {
  if (v$.value.$invalid) {
    v$.value.$touch();
    return false;
  }
};
</script>
<style scoped>
h1 {
  font-size: 50px;
  margin-bottom: 80px;
}
.input_w {
  width: 100%;
}
.select_button {
  display: flex;
  gap: 10px;
}

.btn-soft-primary {
  height: 44.5px;
  margin-top: 23px;
}
:deep(.choices__inner) {
  min-height: 44.5px !important;
}
@media (min-width: 992px) {
  .btn-soft-primary {
    margin-right: 15px;
  }
}
@media (max-width: 992px) {
  .select_button .col-lg-3 {
    width: 100% !important;
  }
}
</style>
<template>
  <form @submit.prevent="onSubmit">
    <div>
      <h1 class="fw-semibold">Расскажи о себе</h1>
      <div class="column">
        <h5 class="fs-17 fw-semibold mb-3">Юридические данные</h5>
        <div class="col-lg-3">
          <div class="mb-3">
            <SelectChoice
              v-model="selectedUr"
              :options="options"
              label="Форма предприятия"
              name="formUr"
              :errors="v$.selectedUr.$errors"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <h5 class="fs-17 fw-semibold mb-3">Общие данные</h5>
        <div class="select_button">
          <div class="col-lg-3">
            <div class="mb-3">
              <SelectChoice
                v-model="selectedCategory"
                :options="optionsCategory"
                label="Категория услуг"
                name="formCategory"
                v-if="buttonFlagUslugi == false"
              />
              <div class="input_w" v-show="buttonFlagUslugi">
                <AppInput
                  v-model:value="orgData.email"
                  placeholder="Введите свою категорию услуги"
                  label="Ввод своей категории"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-soft-primary"
            @click="buttonFlagUslugi = !buttonFlagUslugi"
          >
            {{ buttonFlagUslugi ? "-" : "+" }}
          </button>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="totalInformation.name"
              placeholder="Введите название компании"
              label="Название компании"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="totalInformation.adress"
              placeholder="Введите адресс магазина"
              label="Адресс магазина (при наличии)"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="position-relative mb-3">
            <label for="comments" class="form-label">Описание компании</label>
            <textarea
              name="comments"
              id="comments"
              rows="4"
              class="form-control"
              placeholder="Напишити о компании"
            ></textarea>
          </div>
        </div>
      </div>
      <div
        class="column"
        v-show="['ООО', 'ИП', 'Самозанятый'].includes(nameSelected)"
      >
        <h5 class="fs-17 fw-semibold mb-3">
          {{ nameSelected }}
        </h5>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.name"
              :placeholder="
                nameSelected == 'ООО'
                  ? 'Введите наименование организации'
                  : 'Введите ФИО'
              "
              :label="
                nameSelected == 'ООО' ? 'Наименование организации' : 'ФИО'
              "
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.inn"
              :errors="v$.orgData.inn.$silentErrors"
              v-mask="'###-###-### ##'"
              placeholder="Введите ИНН"
              label="ИНН"
            />
          </div>
        </div>
        <div class="col-lg-3" v-show="['ООО'].includes(nameSelected)">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.kpp"
              :errors="v$.orgData.kpp.$silentErrors"
              v-mask="'#### ## ###'"
              placeholder="Введите КПП"
              label="КПП"
            />
          </div>
        </div>
        <div class="col-lg-3" v-show="['ИП'].includes(nameSelected)">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.ogrnIp"
              :errors="v$.orgData.ogrnIp.$silentErrors"
              v-mask="'#-##-##-#######-#'"
              placeholder="Введите ОГРНИП"
              label="ОГРНИП"
            />
          </div>
        </div>
        <div class="col-lg-3" v-show="['ООО'].includes(nameSelected)">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.ogrn"
              :errors="v$.orgData.ogrn.$silentErrors"
              v-mask="'#-##-##-#####-#'"
              placeholder="Введите ОГРН"
              label="ОГРН"
            />
          </div>
        </div>
        <div class="col-lg-3" v-show="['ООО'].includes(nameSelected)">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.adress"
              placeholder="Введите юридичкский адресс"
              label="Юридический адресс"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <h5 class="fs-17 fw-semibold mb-3">Контакты</h5>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.email"
              :errors="v$.orgData.email.$silentErrors"
              type="email"
              placeholder="Введите электронную почту"
              label="Электронная почта"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-mask="'+7 (###) ###-##-##'"
              v-model:value="orgData.phone"
              :errors="v$.orgData.phone.$silentErrors"
              type="tel"
              placeholder="Введите номер телефона"
              label="Телефон"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.vk"
              :errors="v$.orgData.vk.$silentErrors"
              placeholder="Введите ссылку ВК"
              label="VK"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="orgData.telegram"
              :errors="v$.orgData.telegram.$silentErrors"
              placeholder="Введите ссылку Telegram"
              label="Telegram"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-end">
      <input
        type="submit"
        class="btn btn-primary"
        value="Далее"
        :disabled="!selectedUr"
        @click="onSubmit"
      />
    </div>
  </form>
</template>
