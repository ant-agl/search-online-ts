<template>
  <div>
    <v-select
      :options="cities"
      v-model="selectedCity"
      placeholder="Выберите город"
      label="name"
      :reduce="(city) => city.id"
      class="v-select"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, onMounted } from "vue";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

const props = defineProps({
  cities: {
    type: Array,
    required: true,
    default: () => [
      { id: 1, name: "Москва" },
      { id: 2, name: "Санкт-Петербург" },
      { id: 3, name: "Новосибирск" },
      { id: 4, name: "Москва" },
      { id: 5, name: "Санкт-Петербург" },
      { id: 6, name: "Новосибирск" },
      { id: 7, name: "Санкт-Петербург" },
      { id: 8, name: "Новосибирск" },
      { id: 9, name: "Москва" },
      { id: 10, name: "Санкт-Петербург" },
      { id: 11, name: "Новосибирск" },
      { id: 12, name: "Новосибирск" },
      { id: 13, name: "Москва" },
      { id: 14, name: "Санкт-Петербург" },
      { id: 15, name: "Новосибирск" },
    ],
  },
  defaultCityId: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(["update:selectedCity"]);

const selectedCity = ref(null);

const setDefaultCity = () => {
  if (props.defaultCityId !== null) {
    const defaultCity = props.cities.find(
      (city) => city.id === props.defaultCityId
    );
    selectedCity.value = defaultCity ? defaultCity.id : null;
  }
};

onMounted(setDefaultCity);

watch(() => props.defaultCityId, setDefaultCity);

watch(selectedCity, (newVal) => {
  emit("update:selectedCity", newVal);
});
</script>

<style>
/* Дополнительные стили, если необходимо */
.form-label {
  width: 100%;
}
.vs__search {
  padding: 10px 20px;
  margin: 0;
}
.vs__dropdown-toggle {
  border: 1px solid #e2e5e8;
  padding: 0;
}
#vs1__listbox,
#vs2__listbox {
  height: 100px;
}
</style>
