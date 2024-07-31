<template>
  <label>
    {{ label }}
    <select class="form-control mt-3" :name="name" ref="select"></select>
  </label>
  <div class="error" v-show="errors">
    <div v-for="error of errors" :key="error.$uid">
      <span v-if="error" class="badge bg-danger">{{ error.$message }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Choices from "choices.js";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  errors: {
    type: Array,
    required: false,
  },
});

const emit = defineEmits(["update:modelValue", "update:searchValue"]);
const select = ref(null);
let choicesInstance = null;

const initializeChoices = () => {
  choicesInstance = new Choices(select.value, {
    allowHTML: true,
    removeItemButton: true,
    noResultsText: "Ничего не найдено",
    noChoicesText: "Введите для отображения списка",
    searchEnabled: true,
  });

  choicesInstance.setChoices(props.options, "id", "name", false);

  if (props.modelValue) {
    choicesInstance.setChoiceByValue(props.modelValue);
  }

  select.value.addEventListener("change", (event) => {
    updateValue(event);
  });

  select.value.addEventListener("search", () => {
    const searchInput = choicesInstance.input.element.value;
    emit("update:searchValue", searchInput);
  });
};

const updateValue = (event) => {
  const value = event.target.value;
  emit("update:modelValue", value);
};

onMounted(() => {
  initializeChoices();
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (choicesInstance) {
      choicesInstance.setChoiceByValue(newValue);
    }
  }
);

watch(
  () => props.options,
  (newOptions) => {
    if (choicesInstance) {
      choicesInstance.clearChoices();
      choicesInstance.setChoices(newOptions, "id", "name", false);
    }
  }
);
</script>

<style scoped>
label {
  width: 100%;
}
</style>
