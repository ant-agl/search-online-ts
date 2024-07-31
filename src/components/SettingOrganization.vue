<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import SelectChoice from "@/components/App/SelectChoice.vue";
import useVuelidate from "@vuelidate/core";
import AppInput from "@/components/App/AppInput";
import { onImgUpload } from "@/utils/utilsFunctions";
import { minLength, helpers, email } from "@vuelidate/validators";
import { debounce } from "lodash";
const store = useStore();

const userDataDefault = computed(() => store.getters.userOrganization);
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
    },

    inn: {
      minLength: helpers.withMessage(
        "ИНН состоит из 11 символов",
        minLength(14)
      ),
    },
    name: {
      minLength: helpers.withMessage("Введите минимум 3 символа", minLength(3)),
    },
  },
}));
const v$ = useVuelidate(rules, {
  userData,
});
const onSubmit = () => {
  v$.value.$touch();
};
const isFormDirty = computed(() => {
  if (selectValue.value != userData.value.location.id) {
    return true;
  }
  return !Object.keys({ ...userDataDefault.value, ...userData.value }).every(
    (key) => userDataDefault.value[key] === userData.value[key]
  );
});
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
    <form action="#" @submit.prevent="onSubmit">
      <div>
        <h5 class="fs-17 fw-semibold mb-3 mb-0">Моя организация</h5>
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
                id="profile-img-file-input"
                type="file"
                class="profile-img-file-input"
                @change="handleImageUpload"
              />
              <label
                for="profile-img-file-input"
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
                placeholder="Введите название организации"
                label="Название организации"
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
            <div class="mb-3">
              <AppInput
                v-model:value="userData.address"
                placeholder="Введите адресс"
                label="Адрес"
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <AppInput
                v-model:value="userData.inn"
                v-mask="'###-###-### ##'"
                :errors="v$.userData.inn.$silentErrors"
                placeholder="Введите ИНН"
                label="ИНН"
              />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h5 class="fs-17 fw-semibold mb-3">Об организации</h5>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="about" class="form-label"
                  >Представьте вашу организацию</label
                >
                <textarea
                  v-model="userData.about"
                  class="form-control"
                  id="about"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <!--end row-->
        </div>
      </div>
      <!--end row-->

      <div class="mt-4 text-end">
        <input
          type="submit"
          :disabled="!isFormDirty"
          class="btn btn-primary"
          value="Сохранить"
          @click="onSubmit"
        />
      </div>
    </form>
    <!--end form-->
  </div>
</template>
