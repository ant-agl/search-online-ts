<template>
  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      :before-upload="beforeUpload"
      :custom-request="dummyRequest"
      @preview="handlePreview"
      :max-count="8"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Добавить</div>
      </div>
    </a-upload>

    <SwiperImages
      v-if="previewVisible"
      v-model:open="previewVisible"
      :images="previewImages"
      :activeSlide="activeSlide"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SwiperImages from "../SwiperImages.vue";
import { message } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";

// Состояния для модального окна
const previewVisible = ref(false);
const previewImages = ref([]);
const activeSlide = ref(0);

// Список файлов
const fileList = defineModel("images");

// Показ предпросмотра изображения
const handlePreview = (filePrev) => {
  let images = [];

  fileList.value.forEach((file, index) => {
    if (filePrev.uid === file.uid) {
      activeSlide.value = index;
    }
    if (file.thumbUrl) {
      images.push(file.thumbUrl);
    } else if (file.url) {
      images.push(file.url);
    }
  });

  previewImages.value = images;
  previewVisible.value = true;
};

// Проверка файла перед загрузкой
const beforeUpload = (file) => {
  // Проверка формата файла
  const isImage = ["image/jpg", "image/jpeg", "image/png"].includes(file.type);
  if (!isImage) {
    message.error("Выберите изображение!");
    return false;
  }

  // Проверка размера файла (максимум 10 МБ)
  const isLt10M = file.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    message.error("Максимальный размер изображения 10 МБ!");
    return false;
  }

  return true;
};

// Функция-заглушка для отключения автоматической загрузки
const dummyRequest = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};
</script>

<style scoped>
/* Стиль кнопки и карточки загрузки */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
