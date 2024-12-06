<template>
  <div class="label">
    {{ label }}
    <a-tooltip
      :title="title"
      :placement="placement"
      :trigger="trigger"
      :overlayClassName="overlayClassName"
      :visible="visible"
      @visibleChange="handleVisibleChange"
    >
      <slot>
        <InfoCircleOutlined />
      </slot>
    </a-tooltip>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
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
    default: "top",
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

  /**
   * Управляет видимостью тултипа программно.
   * Если задано, компонент будет контролировать видимость тултипа в соответствии со значением этого пропса.
   * По умолчанию: undefined (управление видимостью осуществляется автоматически).
   */
  visible: {
    type: Boolean,
    default: undefined,
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
