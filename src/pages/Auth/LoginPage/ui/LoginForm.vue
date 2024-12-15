<script lang="ts" setup>
import type { FormProps } from "ant-design-vue";

import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { MailOutlined, LockOutlined } from "@ant-design/icons-vue";

import { InputField, PasswordInput } from "@/shared/ui";
import { useUserStore, UserLoginType } from "@/entities/user";
import { LoginFormState, rules } from "../model";

const router = useRouter();
const { loginUser, setAuthToken } = useUserStore();

const formState = reactive<LoginFormState>({
  email: "",
  password: "",
});

const loading = ref<boolean>(false);

const handleFinish = async () => {
  const data = <UserLoginType>{
    email: formState.email,
    password: formState.password,
  };

  try {
    loading.value = true;
    const { data: resData } = await loginUser(data);
    setAuthToken(resData.accessToken, resData.refreshToken);
    router.push("/menuprofile");
  } finally {
    loading.value = false;
  }
};
const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
  console.log(errors);
};
</script>

<template>
  <a-flex vertical align="center">
    <a-flex vertical align="center">
      <span class="title">{{ $t.auth.login }}</span>
      <span class="subtitle">{{ $t.auth.loginToContinue }}</span>
    </a-flex>

    <a-form
      layout="inline"
      :model="formState"
      :rules="rules"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
      class="form"
    >
      <InputField
        name="email"
        v-model:value.trim="formState.email"
        :placeholder="$t.auth.email"
        allow-clear
        :icon="MailOutlined"
      />

      <PasswordInput
        name="password"
        v-model:value.trim="formState.password"
        :placeholder="$t.auth.password"
        :icon="LockOutlined"
      />

      <a-flex justify="flex-end">
        <RouterLink class="forgot" to="/repair-password">
          {{ $t.auth.forgotPassword }}</RouterLink
        >
      </a-flex>
      <a-button
        class="form-button"
        type="primary"
        html-type="submit"
        :loading="loading"
      >
        {{ $t.auth.login }}
      </a-button>
    </a-form>
    <div class="rule">
      {{ $t.auth.agreeWithTermsStart }}
      <RouterLink to="#" class="router">
        {{ $t.auth.agreeWithTermsEnd }}
      </RouterLink>
    </div>
    <RouterLink to="#">
      <img class="tg" src="@/assets/img/socials/tg.svg" alt="" />
    </RouterLink>

    <div class="login-stroke">
      {{ $t.auth.noAccount }}
      <RouterLink to="/registration" class="router">{{
        $t.auth.registerNow
      }}</RouterLink>
    </div>
  </a-flex>
</template>

<style scoped lang="scss">
.title {
  font-size: 24px;
  margin: 0;
  padding: 0;
}

.subtitle {
  color: rgb(0, 0, 0, 0.7);
  padding-bottom: 24px;
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

.forgot {
  font-size: 10px;
  max-width: fit-content;
  margin-bottom: 9px;
}

.rule {
  width: 311px;
  font-size: 11px;
  color: rgb(69, 68, 68, 78%);
  line-height: 15px;
  text-align: center;
  margin-top: 7px;
}

.tg {
  margin: 24px 0;
}

.login-stroke {
  color: rgb(0, 0, 0, 0.7);
  font-size: 13px;
}

:deep(.ant-form-item-control-input-content) {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
