<script setup lang="ts">
const props = defineProps<{
    name: string,
    label?: string,
    placeholder: string,
    allowClear?: boolean
    icon?: any | undefined,
}>();

const value = defineModel<string>('value');

</script>

<template>
    <a-form-item :name="props.name" :label="props.label || ''">
        <a-input-password v-model:value="value" type="password" :placeholder="props.placeholder">
            <template v-if="props.icon" #prefix>
                <component :is="props.icon" />
            </template>
        </a-input-password>
    </a-form-item>
</template>
