<script setup>
import AppButton from "@/components/App/AppButton";
import AppInput from "@/components/App/AppInput";
import AppError from "@/components/App/AppError";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
const store = useStore();
const emailField = ref("");
const router = useRouter();
const errorMessage = ref("");
const rules = computed(() => ({
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
    required: helpers.withMessage("Вы должны написать email", required),
  },
}));
const v$ = useVuelidate(rules, { emailField });

const onSubmit = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    try {
      errorMessage.value = "";
      await store.dispatch("userResetPassword", {
        email: emailField.value.trim(),
      });
      router.push("/CheckCode/resetpassword");
    } catch (error) {
      errorMessage.value = error.response.data.detail;
    }
  }
};
</script>

<template>
  <div class="text-center mb-4">
    <h5>Сброс пароля</h5>
    <p class="text-white-50">Сбросьте пароль с помощью Jobcy.</p>
  </div>

  <form @submit.prevent="onSubmit" class="auth-form text-white">
    <div class="alert alert-warning text-center mb-4" role="alert">
      Введите свой адрес электронной почты и вы получите инструкцию для
      восстановления!
    </div>
    <div class="mb-4">
      <AppInput
        type="email"
        placeholder="Введите адресс электронной почты"
        v-model:value="v$.emailField.$model"
        label="Электронная почта"
        :errors="v$.emailField.$errors"
      />
    </div>
    <div class="mt-3">
      <AppButton>Отправить</AppButton>
    </div>
  </form>

  <div class="mt-5 text-center text-white-50">
    <p>
      Вспомнили пароль?
      <router-link
        to="/SignInView"
        class="fw-medium text-white text-decoration-underline"
      >
        Войти
      </router-link>
    </p>
    <AppError :value="errorMessage" />
  </div>
</template>
