<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  minLength,
  helpers,
  email,
  required,
  sameAs,
} from "@vuelidate/validators";
import AppInput from "@/components/App/AppInput.vue";
import AppButton from "@/components/App/AppButton.vue";
import AppError from "@/components/App/AppError.vue";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const login = ref("");
const emailField = ref("");
const passwordField = ref("");
const checkField = ref(false);
const errorMessage = ref("");
const rules = computed(() => ({
  login: {
    minLength: helpers.withMessage(
      "Минимальная длина 6 символов",
      minLength(6)
    ),
    required: helpers.withMessage("Вы должны написать логин", required),
  },
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
    required: helpers.withMessage("Вы должны написать email", required),
  },
  passwordField: {
    minLength: helpers.withMessage(
      "Минимальная длина 8 символов",
      minLength(8)
    ),
    required: helpers.withMessage("Вы должны написать пароль", required),
  },
  checkField: {
    sameAsRawValue: helpers.withMessage(
      "Вы должны принять условия",
      sameAs(true)
    ),
  },
}));
const v$ = useVuelidate(rules, {
  login,
  emailField,
  passwordField,
  checkField,
});

const onSubmit = async () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    try {
      errorMessage.value = "";
      const data: AuthUp = {
        name: login.value.trim(),
        email: emailField.value.trim(),
        password: passwordField.value.trim(),
      };
      await store.dispatch("registrationUserData", data);

      router.push("/CheckCode");
    } catch (error) {
      const err = error as ErrorResponse;

      // Проверяем наличие нужных свойств
      if (err.response && err.response.data && err.response.data.detail) {
        errorMessage.value = err.response.data.detail;
      } else {
        // Обработка случая, когда свойство detail отсутствует
        errorMessage.value = "Неизвестная ошибка";
      }
    }
  }
};
</script>

<template>
  <div class="w-100">
    <div class="text-center">
      <h5>Давайте начнем</h5>
      <p class="text-white-70">
        Зарегистрируйтесь и получите доступ ко всем функциям Jobcy.
      </p>
    </div>
    <form @submit.prevent="onSubmit" class="auth-form">
      <div class="mb-3">
        <AppInput
          v-model:value="v$.login.$model"
          :errors="v$.login.$errors"
          type="text"
          placeholder="Введите имя и фамилию"
          label="Имя и фамилия"
        />
      </div>
      <div class="mb-3">
        <AppInput
          v-model:value="v$.emailField.$model"
          :errors="v$.emailField.$errors"
          type="email"
          placeholder="Введите электронную почту"
          label="Электронная почта"
        />
      </div>
      <div class="mb-3">
        <AppInput
          v-model:value="v$.passwordField.$model"
          :errors="v$.passwordField.$errors"
          type="password"
          placeholder="Введите пароль"
          label="Пароль"
        />
      </div>
      <div class="mb-4">
        <div class="form-check">
          <AppInput
            :errors="v$.checkField.$errors"
            class="form-check-input"
            type="checkbox"
            v-model:checked="v$.checkField.$model"
            label="я согласен"
          >
            <router-link to="#" class="text-white text-decoration-underline">
              Условия и положения
            </router-link>
          </AppInput>
        </div>
      </div>
      <div class="text-center">
        <AppButton>Зарегистрироваться</AppButton>
      </div>
    </form>
    <div class="mt-3 text-center">
      <p class="mb-0">
        Уже зарегистрировались?
        <router-link
          to="/signin"
          class="fw-medium text-white text-decoration-underline"
        >
          Войти</router-link
        >
      </p>
    </div>
    <AppError :value="errorMessage" />
  </div>
</template>
