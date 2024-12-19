<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { InputField } from "@/shared/ui";
import { LocationFormState } from "@/shared/types";
import { useUserStore } from "@/entities/user";
import { UserFormState } from "../model";

const { getCities } = useUserStore();

const props = defineProps<{
  userData: UserFormState;
}>();

const userData = computed(() => props.userData);
const optionsCities = ref<LocationFormState[]>([]);

onMounted(async () => {
  optionsCities.value = await getCities();
});
</script>

<template>
  <a-row>
    <a-flex class="fio">
      <InputField
        name="lastName"
        v-model:value.trim="userData.lastName"
        :label="$t.profile.lastName"
        :placeholder="$t.profile.enterLastName"
        allow-clear
      />
      <InputField
        name="firstName"
        v-model:value.trim="userData.firstName"
        :label="$t.profile.firstName"
        :placeholder="$t.profile.enterFirstName"
        allow-clear
      />
      <InputField
        name="patronymic"
        v-model:value.trim="userData.patronymic"
        :label="$t.profile.patronymic"
        :placeholder="$t.profile.enterPatronymic"
        allow-clear
      />
    </a-flex>
    <a-flex class="city-email">
      <a-form-item name="location" label="Город">
        <a-select v-model:value="userData.location" :options="optionsCities" />
      </a-form-item>
      <InputField
        name="email"
        v-model:value.trim="userData.email"
        :label="$t.profile.email"
        :placeholder="$t.profile.enterEmail"
        :disabled="true"
        allow-clear
      />
    </a-flex>
  </a-row>
</template>

<style scoped lang="scss">
.fio {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 14px;
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
