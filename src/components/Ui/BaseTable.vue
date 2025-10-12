<template>
  <div class="overflow-x-auto my-5 mx-2">
    <table class="min-w-full border-collapse shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr class="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <!-- Checkbox select all -->
          <th class="px-4 py-3 border-b border-teal-500 text-center">
            <input
              type="checkbox"
              class="w-4 h-4 cursor-pointer text-center"
              v-model="selectAll"
              @change="toggleSelectAll"
            />
          </th>

          <!-- Headers -->
          <th
            v-for="header in headers"
            :key="header.key"
            class="px-6 py-4 border-b border-teal-500 text-left text-sm font-bold uppercase tracking-wide"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <!-- slot để inject từng dòng -->
        <slot name="row" :items="items"></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['toggle-select-all'])

const selectAll = ref(false)

const toggleSelectAll = () => {
  emit('toggle-select-all', selectAll.value)
}

watch(() => props.items, () => {
  selectAll.value = false
})
</script>
