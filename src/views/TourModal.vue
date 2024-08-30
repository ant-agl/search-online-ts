<template>
  <div class="modal">
    <h2>{{ title }}</h2>
    <div class="modal-description">
      <img :src="imgSrc" alt="description image" />
      <p>{{ description }}</p>
    </div>
    <div class="buttons">
      <button v-if="!final" @click="action('Я уже все знаю')">
        Я уже все знаю
      </button>
      <button @click="action(final ? 'Завершить' : 'Показывай')">
        {{ final ? "Завершить" : "Показывай" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  imgSrc: string;
  final?: boolean;
}>();

const emits = defineEmits<{
  (e: "action", action: string): void;
}>();

const action = (type: string) => {
  emits("action", type);
};
</script>
