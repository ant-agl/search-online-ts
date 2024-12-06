<template>
  <div class="wrapper-filling">
    <div class="filling">
      <div class="title-form">Заполнение профиля</div>
      <div class="progress-bar" :style="{ width: percentBar + '%' }"></div>
      <div class="bloks-filling">
        <!-- <UserProfile
          v-if="activeMenu === 'user'"
          v-bind:userData="data.userData"
          @stepPrevNext="stepPrevNext"
          @updateUserData="updateUserData"
        />
        <OrganizationData
          v-if="activeMenu === 'org'"
          v-bind:orgData="data.organizationData"
          @stepPrevNext="stepPrevNext"
          @updateOrgData="updateOrgData"
        />
        <AddServiceProduct
          v-if="activeMenu === 'serviceProduct'"
          :serviceProduct="data.serviceProduct"
          @stepPrevNext="stepPrevNext"
          @updateServiceProductData="updateServiceProductData"
        /> -->
        <!-- <AddServiceProductTwo /> -->
        <!-- <AddServiceProductThree /> -->
        <AddServiceProductFour />
      </div>

      <!-- <div class="back-next">
        <a-button class="back" type="primary" ghost>Назад</a-button>
        <a-button class="next" type="primary">Далее</a-button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import UserProfile from "./UserProfile.vue";
import OrganizationData from "./OrganizationData.vue";
import AddServiceProduct from "./AddServiceProduct.vue";
import AddServiceProductTwo from "./AddServiceProductTwo.vue";
import AddServiceProductThree from "./AddServiceProductThree.vue";
import AddServiceProductFour from "./AddServiceProductFour.vue";

type OptionType = "vk" | "tg" | "site" | "phone" | "email";
interface Location {
  value: string;
  label: string;
}
interface Contact {
  type: OptionType;
  value: string;
  hide: boolean;
}
interface User {
  name: string;
  surname: string;
  patronymic: string;
  location: Location | null;
  email: string;
  contacts: Array<Contact>;
}
interface Organization {
  selectOrg: string;
  name: string;
  inn: string;
  kpp: string;
  ogrn: string;
  ogrnIp: string;
  adressUr: string;
  categorys: Array<string>;
  descriptionCompany: string;
}
interface ServiceProduct {
  select: string;
  categorys: Array<string>;
  name: string;
  description: string;
  priceSelect: string;
  price: number;
  minPrice: number;
  maxPrice: number;
  delivery: boolean;
  time: string;
  informationText: string;
  images: Array<any>;
}
interface Forma {
  userData: User;
  organizationData: Organization;
  serviceProduct: ServiceProduct;
}
const data = reactive<Forma>({
  userData: {
    name: "Fill",
    surname: "",
    patronymic: "",
    location: null,
    email: "",
    contacts: [],
  },
  organizationData: {
    selectOrg: "",
    name: "",
    inn: "",
    kpp: "",
    ogrn: "",
    ogrnIp: "",
    adressUr: "",
    categorys: [],
    descriptionCompany: "",
  },
  serviceProduct: {
    select: "",
    categorys: [],
    name: "",
    description: "",
    priceSelect: "",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    delivery: false,
    time: "",
    informationText: "",
    images: [],
  },
});
const activeMenu = ref("user");
const menu = ["user", "org", "serviceProduct"];

const percentBar = computed(() => {
  const counts = menu.length;
  const index = menu.indexOf(activeMenu.value) + 1;
  const step = 100 / counts;
  return step * index;
});
const stepPrevNext = (step: "next" | "prev" | "prevRouter") => {
  const index = menu.indexOf(activeMenu.value);
  if (step === "next") {
    activeMenu.value = menu[index + 1];
  } else if (step === "prev") {
    activeMenu.value = menu[index - 1];
  } else if (step === "prevRouter") {
    console.log("prevRouter");
  }
  console.log(index);
};
const updateUserData = (newUserData: User) => {
  data.userData = newUserData;
  console.log(data);
};
const updateOrgData = (newOrgData: Organization) => {
  data.organizationData = newOrgData;
  console.log(data);
};
const updateServiceProductData = (newOrgData: ServiceProduct) => {
  data.serviceProduct = { ...data.serviceProduct, ...newOrgData };
  console.log(data);
};
</script>
<style lang="scss" scoped>
.padding {
  padding: 24px 60px 84px;
}
.progress-bar {
  width: 50%;
  height: 3px;
  background-color: var(--color-primary);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.wrapper-filling {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filling {
  // padding: 0px 30px 60px;
  border-radius: 20px;
  background-color: white;
  width: 1180px;
  box-shadow: 1px 1px 10px rgb(0, 0, 0, 15%);
  border: 1px solid #f0f0f0;
  overflow: hidden;
  padding-bottom: 30px;
  position: relative;
}
.bloks-filling {
  padding-right: 159px;
}
.title-form {
  font-size: 24px;
  font-weight: 500;
  padding: 30px 60px;
  color: var(--color-text);
  width: 100%;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 10%);
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}
:deep(.back-next) {
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  position: absolute;
  bottom: 30px;
  right: 160px;
  .back,
  .next {
    padding: 2px 34px;
  }
}
</style>
