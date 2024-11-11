<template>
  <WrapperRegSign>
    <div class="code">
      <div class="subtitle" v-if="resetPassword">
        Введи код для восстановления
      </div>
      <div class="subtitle" v-else>Введи код регистрации</div>

      <a-form
        ref="formRef"
        layout="inline"
        :model="formState"
        :rules="rules"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
        class="form"
      >
        <a-form-item v-if="!resetPassword" name="email">
          <a-input v-model:value="formState.email" placeholder="E-mail">
            <template #prefix><MailOutlined /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="code">
          <a-input v-model:value="formState.code" placeholder="Код" allow-clear>
            <template #prefix><KeyOutlined /></template>
          </a-input>
        </a-form-item>

        <a-button
          type="primary"
          html-type="submit"
          class="form-button"
          :disabled="false"
        >
          Отправить код
        </a-button>
      </a-form>
    </div>
  </WrapperRegSign>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { UnwrapRef } from "vue";
import type { FormProps, FormInstance } from "ant-design-vue";
import WrapperRegSign from "@/components/wrapper/WrapperRegSign.vue";
import { message } from "ant-design-vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { MailOutlined, KeyOutlined } from "@ant-design/icons-vue";

interface FormState {
  code: string;
  email: string;
}

const route = useRoute();
const resetPassword = route.params.resetpassword;
const userStore = useUserStore();

const success = (detail: string) => {
  message.success(detail, 2);
};
const error = (detail: string) => {
  message.error(detail, 2);
};

const formRef = ref<FormInstance>();
const formState: UnwrapRef<FormState> = reactive({
  code: "",
  email: "",
});

const rules = {
  email: [
    { required: true, message: "Введите E-mail", trigger: "blur" },
    { type: "email", message: "Введите корректный E-mail", trigger: "blur" },
  ],
  code: [
    { required: true, message: "Введите код", trigger: "blur" },
    { min: 6, message: "Код должен содержать 6 символов", trigger: "blur" },
  ],
};

const handleFinish: FormProps["onFinish"] = async (values) => {
  try {
    await formRef.value?.validate();
    const action = resetPassword
      ? userStore.userRecoverPassword
      : userStore.authActivate;
    const result = await action({ code: formState.code.trim() });

    if (result.data.status === 200) {
      success(result.data.detail);
    } else {
      error(result.data.detail);
    }
  } catch (error) {
    console.error("Серьезная ошибка:", error);
  }
  console.log(values, formState);
};

const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
  console.log(errors);
};
</script>

<style scoped lang="scss">
.code {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  color: rgba(0, 0, 0, 0.7);
  padding: 10px 0 24px 0;
  font-size: 13px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 311px;
  gap: 10px;
  .form-button {
    height: 42px;
  }
}
</style>
