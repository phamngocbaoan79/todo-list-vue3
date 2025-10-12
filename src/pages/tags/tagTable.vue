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
    <BaseTable :headers="headers" :items="tags" @toggle-select-all="toggleSelectAll">
        <template #row="{ items }">
            <tr
                v-for="tag in items"
                :key="tag.id"
                class="hover:bg-gray-50 transition-all"
            >
                <td>
                    <input class="w-4 h-4 cursor-pointer"
                    type="checkbox" v-model="selectedIds"
                    :value="tag.id">
                </td>
                <td class="px-6 py-4">{{ tag.id }}</td>
                <td class="px-6 py-4">{{ tag.name }}</td>
                <td class="px-6 py-4 text-teal-600 font-bold">
                    {{ tag.color }}
                </td>
                <td class="px-6 py-4 text-center flex">
                    <BaseButton mode="primary" type="button" size="sm" @click="$emit('edit', tag)">
                        Edit
                    </BaseButton>
                    <BaseButton class="ml-2" mode="flat" type="button" size="sm" @click="$emit('delete', tag)">
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
  tags: {
    type: Array,
    required: true
  }
})

const selectedIds = ref([])

const emit = defineEmits(['edit', 'delete', 'delete-selected'])

const deleteSelected = () => {
    if(selectedIds.value.length > 0) {
        emit('delete-selected', selectedIds.value)
        selectedIds.value = []
    }
}

const headers = [
    { label: '', key: 'checkbox' },
    { label: 'Id', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Color', key: 'color' },
    { label: 'action', key: 'action' },
];

const toggleSelectAll = (checked) => {
    if(checked) {
        selectedIds.value = props.tags.map(t => t.id)
    } else {
        selectedIds.value = []
    }
}

</script>