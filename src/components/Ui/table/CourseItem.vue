<template>
    <tr class="hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-200">
        <td class="border-r border-gray-200 px-6 py-4">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 text-white font-semibold text-sm shadow-md">
                {{ course.id }}
            </div>
        </td>
        <td class="border-r border-gray-200 px-6 py-4">
            <div class="flex flex-col">
                <span class="font-semibold text-gray-800 text-base">{{ course.name }}</span>
                <div class="flex items-center gap-2 mt-1">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {{ course.level }}
                    </span>
                </div>
            </div>
        </td>
        <td class="border-r border-gray-200 px-6 py-4">
            <img v-if="course.image" 
                :src="`/src/assets/images/${course.image}`"
                :alt="course.name" 
                class="w-28 h-16 object-cover shadow-sm"
            />
            <span v-else class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                No image
            </span>
        </td>
        <td class="border-r border-gray-200 px-6 py-4">
            <div class="flex flex-col">
                <span class="font-bold text-teal-600 text-lg">{{ formatPrice(course.price) }}</span>
            </div>
        </td>
        <td class="border-r border-gray-200 px-6 py-4">
            <div class="flex flex-wrap gap-1">
                <span v-for="tag in course.tags" :key="tag" 
                    class="px-2 py-1 text-xs font-medium bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full">
                    {{ tag }}
                </span>
            </div>
        </td>
        <td class="px-6 py-4">
            <div class="flex items-center justify-center gap-2">
                <button class="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
                <button class="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>  
        </td>
    </tr>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    course: {
        type: Object,
        required: true
    }
});

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
};
</script>