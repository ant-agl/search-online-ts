<script setup lang="ts">
import type { SelectProps } from "ant-design-vue";
import { ref, computed } from "vue";
import { InputField, TextArea } from "@/shared/ui";
import { SellerFormState } from "../model";

const props = defineProps<{
  sellerData: SellerFormState;
}>();

const sellerData = computed(() => props.sellerData);

const options = ref<SelectProps["options"]>([
  { value: "ООО", label: "ООО" },
  { value: "ИП", label: "ИП" },
  { value: "Самозанятый", label: "Самозанятый" },
  { value: "Физлицо", label: "Физлицо" },
]);

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>

<template>
  <a-row>
    <a-flex class="row">
      <InputField
        name="companyName"
        v-model:value.trim="sellerData.companyName"
        :label="$t.company.companyName"
        :placeholder="$t.company.enterCompanyName"
        allow-clear
      />
      <a-form-item name="companyType" :label="$t.company.companyType">
        <a-select
          v-model:value="sellerData.companyType"
          :options="options"
          :placeholder="$t.company.enterCompanyType"
          @change="handleChange"
        ></a-select>
      </a-form-item>
    </a-flex>
    <a-flex class="row">
      <InputField
        name="legalAddress"
        v-model:value.trim="sellerData.legalAddress"
        :label="$t.company.legalAddress"
        :placeholder="$t.company.enterLegalAddress"
        allow-clear
      />
      <InputField
        name="inn"
        v-model:value.trim="sellerData.inn"
        :label="$t.company.inn"
        :placeholder="$t.company.enterInn"
        allow-clear
      />
    </a-flex>
    <a-flex class="row">
      <InputField
        name="ogrn"
        v-model:value.trim="sellerData.ogrn"
        :label="$t.company.ogrn"
        :placeholder="$t.company.enterOgrn"
        allow-clear
      />
      <InputField
        name="ogrnIp"
        v-model:value.trim="sellerData.ogrnIp"
        :label="$t.company.orngIp"
        :placeholder="$t.company.enterOgrnIp"
        allow-clear
      />
    </a-flex>
    <a-flex class="row">
      <InputField
        name="kpp"
        v-model:value.trim="sellerData.kpp"
        :label="$t.company.kpp"
        :placeholder="$t.company.enterKpp"
        allow-clear
      />
    </a-flex>
    <a-flex class="row full">
      <TextArea
        name="companyDescription"
        v-model:value.trim="sellerData.companyDescription"
        :label="$t.company.companyDescription"
        :placeholder="$t.company.enterCompanyDescription"
        :rows="4"
        allow-clear
      />
    </a-flex>
  </a-row>
</template>

<style scoped lang="scss">
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 14px;

  &.full {
    grid-template-columns: 1fr;
  }
}

.city-email {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 14px;
}

@media (max-width: 700px) {
  .fio {
    flex-direction: column;
  }
  .city-email {
    grid-template-columns: 1fr;
  }
}
</style>
