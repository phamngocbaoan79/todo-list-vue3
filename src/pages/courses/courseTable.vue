<template>
  <div class="mb-3 flex justify-between items-center">
    <BaseButton
        mode="danger"
        size="sm"
        type="button"
        @click="deleteSelected"
        :disabled="selectedIds.length === 0"
      >
        Delete selected ({{ selectedIds.length }})
    </BaseButton>
  </div>
  <BaseTable :headers="headers" :items="courses" @toggle-select-all="toggleSelectAll">
    <template #row="{ items }">
      <tr
        v-for="course in items"
        :key="course.id"
        class="hover:bg-gray-50 transition-all"
      >
        <td class="w-4 h-4 cursor-pointer">
          <input type="checkbox"
            v-model="selectedIds"
            :value="course.id">
        </td>
        <td class="px-6 py-4">
            {{ course.id }}
        </td>
        <td class="px-6 py-4">
            {{ course.name }}
        </td>
        <td class="px-6 py-4 text-teal-600 font-bold">
          {{ formatPrice(course.price) }}
        </td>
        <td class="px-6 py-4">
          <div class="flex flex-wrap gap-1">
            <span
              v-for="tag in course.tags"
              :key="tag"
              class="px-2 py-1 text-xs bg-gradient-to-r from-teal-100 to-blue-100 rounded-full text-teal-700"
            >
              {{ tag }}
            </span>
          </div>
        </td>
        <td class="px-6 py-4 text-center flex">
          <BaseButton mode="primary" type="button" size="sm" @click="$emit('edit', course)">
            Edit
          </BaseButton>
          <BaseButton class="ml-2" mode="flat" type="button" size="sm" @click="$emit('delete', course)">
            Delete
          </BaseButton>
        </td>
      </tr>
    </template>
  </BaseTable>
</template>

<script setup>
import BaseTable from '@/components/Ui/BaseTable.vue';
import BaseButton from '@/components/Ui/BaseButton.vue';
import { ref } from 'vue';

const props = defineProps({
  courses: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete', 'delete-selected'])

const headers = [
  { label: '#', key: 'index' },
  { label: 'Name', key: 'name' },
  { label: 'Price', key: 'price' },
  { label: 'Tag', key: 'tags' },
  { label: 'Action', key: 'action' },
];

const selectedIds = ref([]);

const toggleSelectAll = (checked) => {
    if(checked) {
      selectedIds.value = props.courses.map(c => c.id)
    } else {
      selectedIds.value = [];
    }
}

const deleteSelected = () => {
  if (selectedIds.value.length > 0) {
    emit('delete-selected', selectedIds.value)
    selectedIds.value = []
  }
}
const formatPrice = (price) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
</script>
