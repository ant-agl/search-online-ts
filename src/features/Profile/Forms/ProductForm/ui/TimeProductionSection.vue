<script setup lang="ts">
import { LabelTooltip } from "@/widgets";
import { ProductFormState } from "../model";
import { computed } from "vue";
import GlobalTexts from "@/app/locale";

const props = defineProps<{
  accountType: "sell" | "user";
}>();

const productData = defineModel<ProductFormState>("productData");

const texts = computed(() =>
  GlobalTexts.popovers.getTextsHelpers(
    props.accountType,
    productData.value!.select
  )
);
</script>

<template>
  <a-flex v-if="productData" gap="small" vertical>
    <a-flex>
      <LabelTooltip
        :label="$t.productService.productionTime"
        :title="texts.timeProduction"
      />
    </a-flex>
    <div class="time-section">
      <a-input-number
        class="from-time"
        v-model:value="productData.productionTime.fromTime"
        prefix="от"
        :min="0"
        :controls="false"
      />
      <a-input-number
        class="to-time"
        v-model:value="productData.productionTime.toTime"
        prefix="до"
        :min="productData.productionTime.fromTime"
        :controls="false"
      />
    </div>
  </a-flex>
</template>

<style scoped lang="scss">
.time-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.from-time {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 24px;
}
.to-time {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-bottom: 24px;
}
</style>
