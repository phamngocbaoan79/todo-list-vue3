<template>
    <BaseTable :headers="headers" :items="tags">
        <template #row="{ items }">
            <tr
                v-for="tag in items"
                :key="tag.id"
                class="hover:bg-gray-50 transition-all"
            >
                <td class="px-6 py-4">{{ tag.id }}</td>
                <td class="px-6 py-4">{{ tag.name }}</td>
                <td class="px-6 py-4 text-teal-600 font-bold">
                    {{ tag.color }}
                </td>
                <td class="px-6 py-4 text-center">
                    <button
                        class="bg-teal-500 hover:bg-teal-600 text-white text-sm px-3 py-1 rounded-md"
                    >
                        Edit
                    </button>
                </td>
            </tr>
            </template>
    </BaseTable>
</template>

<script setup>
import BaseTable from '@/components/Ui/BaseTable.vue';

defineProps({
  tags: {
    type: Array,
    required: true
  }
})

const headers = [
    { label: 'Id', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Color', key: 'color' },
    { label: 'id', key: 'action' },
];

</script>