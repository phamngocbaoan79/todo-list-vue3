<template>
    <BaseButton mode="flat" type="button" size="sm" @click="$emit('back')">
        Quay lại
    </BaseButton>

    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto space-y-4 my-4">
        <h2 class="text-xl font-semibold text-gray-800">
            {{ isEdit ? 'Edit tag' : 'Create tag' }}
        </h2>

        <div>
            <lable for="name" class="block text-gray-700 mb-1">
                Name
            </lable>
            <input type="text" 
                class="border rounded px-3 py-2 w-full" 
                v-model="form.name"
                required
                placeholder="Enter the name tag">
        </div>

        <div>
            <lable for="color" class="block text-gray-700 mb-1">
                color
            </lable>
            <input type="text"
                class="border rounded px-3 py-2 w-full"
                v-model="form.color"
                required
                placeholder="Enter the color tag">
        </div>

        <BaseButton class="w-full" type="submit">
            {{ isEdit ? 'Edit tag' : 'Create tag' }}
        </BaseButton>
    </form>
</template>

<script setup>
import BaseButton from '@/components/Ui/BaseButton.vue';
import { defineProps, reactive } from 'vue';

const props = defineProps({
    isEdit : Boolean,
    modelValue: Object
})

const emit = defineEmits(['submit', 'back']);

const form = reactive({
    id: '',
    name: '',
    color: '',
    created_at: ''
})

const handleSubmit = () => {{
    emit('submit', { ...form, isEdit: props.isEdit})
}}
</script>