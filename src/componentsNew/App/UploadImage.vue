<template>
  <div>
    <a-upload
      v-model:file-list="fileList"
      list-type="picture"
      :show-upload-list="false"
      :before-upload="beforeUpload"
      @change="handleChange"
      :custom-request="customUpload"
      class="image"
    >
      <slot></slot>
    </a-upload>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from "vue";

import { message } from "ant-design-vue";

import type { UploadFile, UploadChangeParam } from "ant-design-vue";
const emit = defineEmits(["update:imageUrl"]);
const beforeUpload = (file: UploadFile) => {
  // Проверяем, является ли файл JPG или PNG
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Можно загружать только файлы JPG или PNG!");
    return false; // Прекращаем обработку, если тип файла не поддерживается
  }

  // Проверяем, доступен ли размер файла и меньше ли он 2MB
  const isLt2M = file.size !== undefined && file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Размер изображения должен быть меньше 2MB!");
    return false; // Прекращаем обработку, если файл слишком большой
  }

  // Если все проверки пройдены, возвращаем true
  return true;
};
const customUpload = ({ file, onSuccess, onError }: any) => {
  // Ваша кастомная логика загрузки файла
  // Например, отправка файла через axios или fetch
  //   axios.post('/your-upload-url', file)
  //     .then(response => {
  //       onSuccess(response.data);
  //     })
  //     .catch(error => {
  //       onError(error);
  //     });
};
function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

const fileList = ref([]);

const imageUrl = ref<string>("");

const handleChange = (info: UploadChangeParam) => {
  if (info.file.originFileObj) {
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      emit("update:imageUrl", base64Url);
    });
  }
};
</script>
<style scoped>
.image {
  cursor: pointer;
}
</style>
