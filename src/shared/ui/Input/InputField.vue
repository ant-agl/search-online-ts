<script setup lang="ts">
const props = defineProps<{
    name: string,
    label?: string,
    placeholder: string,
    allowClear?: boolean
    icon?: any | undefined,
}>();

const value = defineModel<string | number>('value');
</script>


<template>
    <a-form-item :name="props.name" :label="props.label || ''">
        <a-input v-model:value="value" :placeholder="props.placeholder" :allowClear="props.allowClear">
            <template v-if="props.icon" #prefix>
                <component :is="props.icon" />
            </template>
        </a-input>
    </a-form-item>
</template>
