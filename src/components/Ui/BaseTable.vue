<template>
  <div class="overflow-x-auto my-5 mx-2">
    <table class="min-w-full border-collapse shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr class="bg-gradient-to-r from-teal-600 to-blue-600">
          <th
            v-for="header in headers"
            :key="header.key"
            class="px-6 py-4 border-b border-teal-500 text-left text-sm font-bold text-white uppercase tracking-wide"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <slot name="row" :items="items"></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
});
</script>
