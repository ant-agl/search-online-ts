<script setup lang="ts">
import { computed, ref } from "vue";
import type { UploadProps } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import GlobalTexts from "@/app/locale";
import { FormButtons, LabelTooltip } from "@/widgets";
import { ProductFormState } from "../model";

const props = defineProps<{
  accountType: "sell" | "user";
  isFirstStep: boolean;
  isLastStep: boolean;
}>();

const emit = defineEmits<{
  (e: "next"): void;
  (e: "prev"): void;
}>();

const productData = defineModel<ProductFormState>("productData");

const previewVisible = ref<boolean>(false);
const previewImage = ref<string>();
const previewTitle = ref<string>("");

const loading = ref<boolean>(false);

const texts = computed(() =>
  GlobalTexts.popovers.getTextsHelpers(
    props.accountType,
    productData.value!.select
  )
);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};

const customRequest = () => {
  if (!productData) return;
  const images = productData.value!.images;
  for (let i = 0; i < images.length; i++) {
    images[i].status = "done";
  }
};

const handlePreview = async (
  file: NonNullable<UploadProps["fileList"]>[number]
) => {
  if (file.originFileObj && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  } else {
    file.preview = file.url;
  }

  previewImage.value = file.preview;
  previewVisible.value = true;
  if (file.url && !file.name) {
    previewTitle.value = file.url.substring(file.url.lastIndexOf("/") + 1);
  } else {
    previewTitle.value = file.name;
  }
};

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const onPrev = () => {
  emit("prev");
};

const onNext = () => {
  //   emit("next");
};

const onFinish = () => {
  try {
    loading.value = true;
    console.log(productData.value);
    onNext();
  } finally {
    loading.value = false;
  }
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <a-form
    v-if="productData"
    layout="vertical"
    :model="productData"
    :label-wrap="true"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-flex align="start" vertical gap="small">
      <LabelTooltip :label="$t.productService.photo" :title="texts.photo" />
      <a-upload
        v-model:file-list="productData.images"
        list-type="picture-card"
        accept=".jpg, .jpeg, .png"
        :multiple="true"
        :customRequest="customRequest"
        @preview="handlePreview"
      >
        <div v-if="productData.images.length < 8">
          <plus-outlined />
          <div style="margin-top: 8px">Upload</div>
        </div>
      </a-upload>

      <a-modal
        :open="previewVisible"
        :title="previewTitle"
        :footer="null"
        @cancel="handleCancel"
      >
        <img style="width: 100%" :src="previewImage" />
      </a-modal>
    </a-flex>

    <FormButtons
      :loading="loading"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
      @prev="onPrev"
    />
  </a-form>
</template>

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
<!-- 
<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import type { UploadFile, UploadProps } from "ant-design-vue";
import { FileType } from "ant-design-vue/es/upload/interface";

const previewVisible = ref<boolean>(false);
const previewImage = ref<string>();
const previewTitle = ref<string>("");
const activeSlide = ref<number>(0);

const fileList = ref<UploadProps["fileList"]>([
  {
    uid: "-1",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-3",
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
</script>

<template>
  <div class="clearfix" v-if="fileList">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>

    <a-modal
      :open="previewVisible"
      :title="previewTitle"
      :footer="null"
      @cancel="handleCancel"
    >
      <img style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style> -->
