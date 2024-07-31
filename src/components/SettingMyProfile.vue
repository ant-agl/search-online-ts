<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import AppInput from "./App/AppInput.vue";
import SelectChoice from "@/components/App/SelectChoice.vue";
import { minLength, helpers, email, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { onImgUpload } from "@/utils/utilsFunctions";
import { debounce } from "lodash";

const store = useStore();

const userDataDefault = computed(() => store.getters.userData);

const userData = ref({ ...userDataDefault.value });
const options = ref([userDataDefault.value.location]);
const selectValue = ref(userDataDefault.value.location.id);
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

const rules = computed(() => ({
  userData: {
    email: {
      email: helpers.withMessage("Вы ввели неверный email", email),
      required: helpers.withMessage("Email обязателен", required),
    },
    name: {
      required: helpers.withMessage("ФИО обязательны", required),
      minLength: helpers.withMessage("Введите минимум 3 символа", minLength(3)),
    },
  },
}));

const v$ = useVuelidate(rules, { userData });

const isFormDirty = computed(() => {
  if (selectValue.value != userData.value.location.id) {
    return true;
  }

  return !Object.keys({ ...userDataDefault.value, ...userData.value }).every(
    (key) => userDataDefault.value[key] === userData.value[key]
  );
});

const onSubmit = () => {
  if (v$.value.$invalid) {
    v$.value.$touch();
    return false;
  }

  store.commit("updateUserData", userData.value);
  console.log("Данные сохранены успешно:", userData.value);
};

const handleImageUpload = (e) => {
  console.log(userDataDefault.value.img);
  if (onImgUpload(e)) {
    // store.commit("updateUserImg", URL.createObjectURL(e.target.files[0]));
    userData.value.img = URL.createObjectURL(e.target.files[0]);
  }
};
</script>

<template>
  <div
    class="tab-pane fade show active"
    id="settings"
    role="tabpanel"
    aria-labelledby="settings-tab"
  >
    <form @submit.prevent="onSubmit">
      <div>
        <h5 class="fs-17 fw-semibold mb-3 mb-0">Мой профиль</h5>
        <div class="text-center">
          <div class="mb-4 profile-user">
            <img
              :src="userData.img"
              class="rounded-circle img-thumbnail profile-img"
              id="profile-img"
              alt=""
            />
            <div class="p-0 rounded-circle profile-photo-edit">
              <input
                id="profile-img-file-input_my"
                type="file"
                class="profile-img-file-input"
                @change="handleImageUpload"
              />
              <label
                for="profile-img-file-input_my"
                class="profile-photo-edit avatar-xs"
              >
                <i class="uil uil-edit"></i>
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="userData.name"
                :errors="v$.userData.name.$silentErrors"
                placeholder="Введите ФИО"
                label="ФИО"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="userData.email"
                :errors="v$.userData.email.$silentErrors"
                type="email"
                placeholder="Введите электронную почту"
                label="Электронная почта"
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-mask="'+7 (###) ###-##-##'"
                v-model:value="userData.phone"
                type="tel"
                placeholder="Введите номер телефона"
                label="Телефонный номер"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <SelectChoice
                label="Город"
                :options="options"
                name="city"
                v-model:modelValue="selectValue"
                @update:searchValue="updateSearchValue"
              />
            </div>
          </div>

          <div class="col-lg-6">
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
          value="Сохранить"
          :disabled="!isFormDirty"
        />
      </div>
    </form>
  </div>
</template>
