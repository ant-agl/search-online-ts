<script setup>
import { InfoCircleOutlined } from "@ant-design/icons-vue";

// Определение пропсов, принимаемых компонентом
defineProps({
  /**
   * Метка, отображаемая рядом с иконкой тултипа.
   * Может быть строкой или функцией, возвращающей JSX/HTML.
   */
  label: {
    type: [String, Function],
    required: true,
  },

  /**
   * Содержимое тултипа, отображаемое при активации.
   * Может быть строкой или функцией для более сложного содержимого.
   */
  title: {
    type: [String, Function],
    required: true,
  },

  /**
   * Позиция отображения тултипа относительно целевого элемента.
   * Возможные значения: 'top', 'right', 'bottom', 'left' и другие, поддерживаемые Ant Design Vue.
   * По умолчанию: 'top'.
   */
  placement: {
    type: String,
    default: "right",
  },

  /**
   * Событие, которое вызывает отображение тултипа.
   * Может быть строкой (например, 'hover', 'click', 'focus') или массивом событий.
   * По умолчанию: 'hover'.
   */
  trigger: {
    type: [String, Array],
    default: "hover",
  },

  /**
   * Кастомный CSS-класс для стилизации тултипа.
   * Позволяет применять собственные стили к содержимому тултипа.
   * По умолчанию: пустая строка.
   */
  overlayClassName: {
    type: String,
    default: "",
  },
});

// Определение событий, которые компонент может испускать
const emit = defineEmits(["update:visible"]);

/**
 * Обработчик изменения видимости тултипа.
 * Вызывается при изменении состояния видимости и испускает событие 'update:visible'.
 * Это позволяет родительскому компоненту отслеживать и управлять видимостью тултипа.
 *
 * @param {Boolean} newVisible - Новое состояние видимости тултипа.
 */
const handleVisibleChange = (newVisible) => {
  emit("update:visible", newVisible);
};
</script>

<template>
  <a-flex class="label" justify="center" align="center" gap="small">
    {{ label }}
    <a-popover
      :placement="placement"
      :trigger="trigger"
      @onOpenChange="handleVisibleChange"
    >
      <template #content>
        <p class="label__content">{{ title }}</p>
      </template>
      <slot>
        <InfoCircleOutlined />
      </slot>
    </a-popover>
  </a-flex>
</template>

<style lang="scss" scoped>
.label {
  font-family: "Montserrat";

  &__content {
    max-width: 35vw;
    margin: 0;
  }
}
</style>
