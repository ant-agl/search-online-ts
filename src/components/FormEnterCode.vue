<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { message } from "ant-design-vue";
const success = (detail: string) => {
  message.success(detail, 2);
};
const error = (detail: string) => {
  message.error(detail, 5);
};
const userStore = useUserStore();
const route = useRoute();
const resetPassword = route.params.resetpassword;
const formState = reactive({
  code: "",
});
const onFinish = async (values: string) => {
  console.log("Success:", values);
  try {
    if (resetPassword) {
      const result = await userStore.userRecoverPassword({
        code: values,
      });
      if (result.data.status == 200) {
        success(result.data.detail);
      } else {
        error(result.data.detail);
      }
    } else {
      const result = await userStore.authActivate({ code: values });
      if (result.data.status == 200) {
        success(result.data.detail);
      } else {
        error(result.data.detail);
      }
    }
  } catch (error) {
    console.error("Серьезная ошибка:", error);
  }
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
</script>
<template>
  <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <h1 v-if="resetPassword">Введи код для восстановления</h1>
    <h1 v-else>Введи код регистрации</h1>

    <a-form-item label="Код подтверждения" name="code">
      <a-input v-model:value="formState.code" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Потвердить</a-button>
    </a-form-item>
  </a-form>
</template>
