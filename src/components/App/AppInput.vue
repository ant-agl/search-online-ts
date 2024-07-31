<script setup>
import { defineProps, defineEmits, toRefs } from "vue";
const emit = defineEmits(["update:value", "update:checked"]);
const props = defineProps({
  errors: {
    type: Array,
    required: false,
  },

  class: {
    type: String,
    default: "form-control",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
  placeholder: {
    type: String,
  },

  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});
const { class: inputClass } = toRefs(props);
const updateValue = (e) => {
  emit("update:value", e.target.value);
};
const updateChecked = (e) => {
  if (props.type === "checkbox") {
    emit("update:checked", e.target.checked);
  }
};
</script>

<style scoped>
.error {
  height: 10px;
}
.checkbox {
  position: relative;
  left: -20px;
}
</style>
<template>
  <div>
    <label :style="{ width: width }">
      {{ label }} <slot></slot>
      <input
        :type="type"
        :class="inputClass"
        :value="value"
        :placeholder="placeholder"
        :checked="checked"
        :id="id"
        @input="updateValue"
        @change="updateChecked"
      />
    </label>
    <div class="error" :class="{ checkbox: type == 'checkbox' }">
      <div v-for="error of errors" :key="error.$uid">
        <span v-if="error" class="badge bg-danger">{{ error.$message }}</span>
      </div>
    </div>
  </div>
</template>
