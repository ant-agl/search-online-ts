<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { minLength, helpers, email, required } from "@vuelidate/validators";
import AppInput from "@/components/App/AppInput.vue";
import AppButton from "@/components/App/AppButton.vue";
import AppError from "@/components/App/AppError.vue";

const store = useStore();

const emailField = ref(localStorage.getItem("email") || "");
const passwordField = ref(localStorage.getItem("password") || "");
const errorMessage = ref<string | null>(null);
const checkbox = ref(false);
const rules = computed(() => ({
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
}));
const v$ = useVuelidate(rules, {
  emailField,
  passwordField,
});

const onSubmit = async () => {
  v$.value.$touch();
  console.log(checkbox.value);
  if (!v$.value.$invalid) {
    try {
      errorMessage.value = "";
      const data: AuthIn = {
        email: emailField.value.trim(),
        password: passwordField.value.trim(),
      };
      await store.dispatch("login", data);
      if (checkbox.value) {
        localStorage.setItem("email", emailField.value.trim());
        localStorage.setItem("password", passwordField.value.trim());
      }
      // router.push("/CheckAuth");
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
    <div class="text-center mb-6">
      <h5>Добро пожаловать !</h5>
      <p class="text-white-70">Войдите, чтобы продолжить работу с Jobcy.</p>
    </div>
    <form @submit.prevent="onSubmit" class="auth-form">
      <div class="mb-3">
        <AppInput
          v-model:value="v$.emailField.$model"
          placeholder="Введите вашу электронную почту"
          label="Электронная почта"
          type="email"
          :errors="v$.emailField.$errors"
        />
      </div>
      <div class="mb-3">
        <AppInput
          v-model:value="v$.passwordField.$model"
          placeholder="Введите ваш пароль"
          label="Пароль"
          type="password"
          :errors="v$.passwordField.$errors"
        />
      </div>
      <div class="mb-4">
        <div class="form-check">
          <AppInput
            class="form-check-input"
            type="checkbox"
            label="Запомнить меня"
            v-model:checked="checkbox"
            ><router-link to="/ResetPasswordView" class="float-end text-white">
              Забыли пароль?
            </router-link></AppInput
          >
        </div>
      </div>
      <div class="text-center">
        <AppButton> Войти</AppButton>
      </div>
    </form>
    <div class="mt-4 text-center">
      <p class="mb-0">
        У вас нет учетной записи?
        <router-link
          to="signup"
          class="fw-medium text-white text-decoration-underline"
        >
          Зарегистрироваться
        </router-link>
      </p>
    </div>
    <AppError :value="errorMessage" />
  </div>
</template>
