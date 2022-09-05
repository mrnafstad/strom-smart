<template>
    <div class="input">
        <label :for="label">{{ label }}</label>
        <input
            v-model="value"
            :type="type"
            :required="required"
            :attrs="$attrs"
            :id="label"
            :name="label"
        >
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';


const props = defineProps<{
    modelValue: string | number | null,
    type: string;
    required?: boolean
    label?: string
}>()

const value = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

watch(value, () => {
    if (props.type === 'number') {

        emit('update:modelValue', parseInt(value.value as string))
        return;
    }
    emit('update:modelValue', value.value)
})
</script>

<style scoped lang="scss">
.input {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 10px 0;

    label {
        font-weight: 600;
    }
}
</style>