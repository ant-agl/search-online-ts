<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import AppInput from "@/components/App/AppInput";
import AppButton from "@/components/App/AppButton";
import AppError from "@/components/App/AppError";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();
const resetPassword = route.params.resetpassword;
const errorMessage = ref("");
const codeField = ref("");
const rules = computed(() => ({
  codeField: {
    required: helpers.withMessage("Вставьте код", required),
  },
}));
const v$ = useVuelidate(rules, {
  codeField,
});

const authUser = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    try {
      errorMessage.value = "";
      if (resetPassword) {
        await store.dispatch("userRecoverPassword", {
          code: codeField.value.trim(),
        });
      } else {
        await store.dispatch("authActivate", { code: codeField.value.trim() });
      }

      router.push("/");
    } catch (error) {
      errorMessage.value = error.response.data.detail;
    }
  }
};
</script>

<template>
  <div class="w-100">
    <div class="text-center">
      <template v-if="resetPassword">
        <h5>Введите код для восстановления пароля</h5>
      </template>
      <template v-else>
        <h5>Введите код для подтверждения авторизации</h5>
      </template>
    </div>
    <form @submit.prevent="authUser">
      <div class="mb-4">
        <AppInput
          type="text"
          v-model:value="v$.codeField.$model"
          placeholder="Введите код"
          :label="resetPassword ? 'Код восстановления' : 'Код активации'"
          :errors="v$.codeField.$errors"
        />
      </div>

      <AppButton>Отправить</AppButton>
    </form>
    <AppError :value="errorMessage" />
  </div>
</template>
