<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AppInput from "./App/AppInput.vue";
import SelectChoice from "@/components/App/SelectChoice.vue";
import { minLength, helpers, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { debounce } from "lodash";

const store = useStore();

const userData = ref({
  location: "",
  phone: "",
  vk: "",
  telegram: "",
  hideNumber: false,
});
const options = ref([]);
const searchValue = ref("");
const debouncedSearch = debounce((value) => {
  store
    .dispatch("searchCity", { name: value })
    .then((citys) => (options.value = citys.data));
}, 1000);

const updateSearchValue = (value) => {
  searchValue.value = value;
  debouncedSearch(value);
};
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
  userData: {
    phone: {
      minLength: helpers.withMessage(
        "Номер телофона нужно указать полностью",
        minLength(18)
      ),
    },
    location: {
      required: helpers.withMessage("Выбор города обязателен", required),
    },
    vk: {
      containsVkCom,
    },
    telegram: {
      containsTelegram,
    },
  },
}));

const v$ = useVuelidate(rules, { userData });

const onSubmit = () => {
  if (v$.value.$invalid) {
    v$.value.$touch();
    return false;
  }

  store.commit("updateUserData", userData.value);
  console.log("Данные сохранены успешно:", userData.value);
};
</script>
<style scoped>
h1 {
  font-size: 50px;
  margin-bottom: 80px;
}
</style>
<template>
  <form @submit.prevent="onSubmit">
    <div>
      <h1 class="fw-semibold">Расскажи о себе</h1>

      <div class="column">
        <div class="col-lg-3">
          <div class="mb-5">
            <SelectChoice
              label="Город"
              :options="options"
              name="city"
              v-model:modelValue="userData.location"
              @update:searchValue="updateSearchValue"
              :errors="v$.userData.location.$silentErrors"
            />
          </div>
        </div>
        <h5 class="fs-17 fw-semibold mb-3">Контакты</h5>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-mask="'+7 (###) ###-##-##'"
              v-model:value="userData.phone"
              :errors="v$.userData.phone.$silentErrors"
              type="tel"
              placeholder="Введите номер телефона"
              label="Телефон"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="userData.vk"
              :errors="v$.userData.vk.$silentErrors"
              placeholder="Введите ссылку ВК"
              label="VK"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3">
            <AppInput
              v-model:value="userData.telegram"
              :errors="v$.userData.telegram.$silentErrors"
              placeholder="Введите ссылку Telegram"
              label="Telegram"
            />
          </div>
        </div>

        <div class="col-lg-3">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              :checked="userData.hideNumber"
              @click="(e) => (userData.hideNumber = e.target.checked)"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >Скрыть номер</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-end">
      <input
        type="submit"
        class="btn btn-primary"
        :disabled="!userData.location.length > 0"
        value="Далее"
      />
    </div>
  </form>
</template>
