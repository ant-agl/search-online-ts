<template>
  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      :before-upload="beforeUpload"
      @preview="handlePreview"
      @change="chan"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Добавить</div>
      </div>
    </a-upload>

    <!-- <a-modal
      :open="previewVisible"
      :title="previewTitle"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal> -->

    <SwiperImages v-show="previewVisible" v-model:images="previewImages" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SwiperImages from "../SwiperImages.vue";

// Список файлов
const fileList = ref([
  {
    uid: "-2",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-4",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
]);

// Состояния для модального окна
const previewVisible = ref(false);
const previewImages = ref([]);

// Показ предпросмотра изображения
const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   previewImage.value = file.url || file.preview;

  let images = [];
  fileList.value.forEach(async (file) => {
    if (file.originFileObj) {
      images.push(await getBase64(file.originFileObj));
    }
  });
  previewImages.value = images;
  console.log(previewImages.value);
  previewVisible.value = true;
};

// Закрытие модального окна
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};

// Преобразование файла в base64
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

// Проверка файла перед загрузкой
const beforeUpload = (file) => {
  // Можно добавить проверку на формат и размер файла
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    alert("Выберите изображение!");
  }
  return isImage;
};

// Обработчик изменений в fileList
const chan = (file) => {
  file.file.status = "done";
  console.log(file);
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
