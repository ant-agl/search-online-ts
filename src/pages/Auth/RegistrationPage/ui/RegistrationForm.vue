<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

import { InputField, PasswordInput } from "@/shared/ui";
import { useUserStore, UserRegistrationType } from "@/entities/user";
import { RegistrationFormState, rules } from "../model";

const router = useRouter();
const { registrationUserData, setAuthToken } = useUserStore();

const formState = reactive<RegistrationFormState>({
  name: "",
  surname: "",
  email: "",
  password: "",
});

const loading = ref<boolean>(false);

const handleFinish = async () => {
  const data = <UserRegistrationType>{
    first_name: formState.name,
    last_name: formState.surname,
    email: formState.email,
    password: formState.password,
  };

  try {
    loading.value = true;
    const { data: resData } = await registrationUserData(data);
    setAuthToken(resData.accessToken, resData.accessToken);
    router.push("/user-type-selection");
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <a-flex vertical align="center">
    <div class="title">{{ $t.auth.register }}</div>
    <div class="subtitle">{{ $t.auth.createAccount }}</div>

    <a-form
      class="form"
      layout="inline"
      :model="formState"
      :rules="rules"
      @finish="handleFinish"
    >
      <InputField
        name="name"
        v-model:value.trim="formState.name"
        :placeholder="$t.auth.firstName"
        allow-clear
        :icon="UserOutlined"
      />
      <InputField
        name="surname"
        v-model:value.trim="formState.surname"
        :placeholder="$t.auth.lastName"
        allow-clear
        :icon="UserOutlined"
      />
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
      <a-button
        class="form-button"
        type="primary"
        html-type="submit"
        :loading="loading"
      >
        <span>{{ $t.auth.register }}</span>
      </a-button>
    </a-form>

    <div class="rule">
      {{ $t.auth.agreeWithTermsStart }}
      <RouterLink to="#" class="router">
        {{ $t.auth.agreeWithTermsEnd }}
      </RouterLink>
    </div>

    <div class="register-stroke">
      {{ $t.auth.alreadyHaveAccount }}
      <RouterLink to="/login" class="router">{{ $t.auth.loginNow }}</RouterLink>
    </div>
  </a-flex>
</template>

<style scoped lang="scss">
.title {
  font-size: 24px;
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
  gap: 20px;
  .form-button {
    height: 42px;
  }
}

.rule {
  width: 311px;
  font-size: 11px;
  color: rgb(69, 68, 68, 78%);
  line-height: 15px;
  text-align: center;
  margin: 7px 0 24px 0;
}

.register-stroke {
  color: rgb(0, 0, 0, 0.7);
  font-size: 13px;
}
</style>
