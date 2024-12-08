<template>
  <div class="wrapper-filling">
    <div class="filling">
      <div class="title-form">
        {{ getTitle }} <span @click="handleSkip">Пропустить</span>
      </div>
      <div class="progress-bar" :style="{ width: percentBar + '%' }"></div>
      <div class="bloks-filling">
        <UserProfile
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
        />
        <AddServiceProductTwo
          v-if="activeMenu === 'serviceProductTwo'"
          :serviceProduct="data.serviceProduct"
          @stepPrevNext="stepPrevNext"
          @updateServiceProductData="updateServiceProductData"
        />
        <AddServiceProductThree
          v-if="activeMenu === 'serviceProductThree'"
          :serviceProduct="data.serviceProduct"
          @stepPrevNext="stepPrevNext"
          @updateServiceProductData="updateServiceProductData"
        />
        <AddServiceProductFour
          v-if="activeMenu === 'serviceProductFour'"
          :serviceProduct="data.serviceProduct"
          @stepPrevNext="stepPrevNext"
          @updateServiceProductData="updateServiceProductData"
          :flagBuy="flagBuy"
        />
      </div>
    </div>
    <ModalWarning v-model:open="openWarning" @callback="skip">{{
      flagBuy
        ? "Вы уверены, что хотите пропустить добавление заявки?"
        : "Вы уверены, что хотите пропустить добавление товара/услуги?"
    }}</ModalWarning>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import UserProfile from "./UserProfile.vue";
import OrganizationData from "./OrganizationData.vue";
import AddServiceProduct from "./AddServiceProduct.vue";
import AddServiceProductTwo from "./AddServiceProductTwo.vue";
import AddServiceProductThree from "./AddServiceProductThree.vue";
import AddServiceProductFour from "./AddServiceProductFour.vue";
import ModalWarning from "../modals/ModalWarning.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const flagBuy = route.params.param === "buy" ? true : false;
console.log(route.params.param);
const openWarning = ref(false);
const skip = () => {
  console.log("skip");
};
const handleSkip = () => {
  openWarning.value = true;
};
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
  images: Array<string>;
}
interface Forma {
  userData: User;
  organizationData: Organization;
  serviceProduct: ServiceProduct;
}
const data = reactive<Forma>({
  userData: {
    name: "",
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
let menu = [
  "user",
  "org",
  "serviceProduct",
  "serviceProductTwo",
  "serviceProductThree",
  "serviceProductFour",
];
const getTitle = computed(() => {
  let title = "error";

  switch (activeMenu.value) {
    case "user":
      title = "Заполнение профиля";
      break;
    case "org":
      title = "Информация о продавце";
      break;
    default:
      title = flagBuy
        ? "Поиск товара или услуги"
        : "Добавление товара или услуги";
  }
  return title;
});

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
    console.log(menu[index - 1]);
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
onMounted(() => {
  if (flagBuy) {
    menu = menu.filter((val) => val !== "serviceProductThree" && val !== "org");
  }
  console.log(menu);
});
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.filling {
  // padding: 0px 30px 60px;
  margin-top: 100px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: var(--color-second-primary);
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }
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
