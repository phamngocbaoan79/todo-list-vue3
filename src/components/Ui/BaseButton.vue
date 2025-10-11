<template>
  <button
        :type="type"
        class="base_button"
        :class="[
            size,
            variantClass,
            variant !== 'tab' ? mode : ''
        ]"
    >
  <slot />
</button>

</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: { type: String, default: 'button' },
  mode: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  // variant: tab hay nút
  variant: { type: String, default: 'normal' },
  active: { type: Boolean, default: false }
})

const variantClass = computed(() => {
  if (props.variant === 'tab') {
    return props.active
      ? 'bg-teal-600 text-white shadow'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  }
  return ''
})
</script>


<style scoped>
.base_button {
  font-weight: bold;
  transition: 0.3s;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
}

.primary {
  background-color: green;
  color: white;
  border: 1px solid green;
}
.primary:hover {
  background: transparent;
  color: green;
}

.flat {
    border: none;
    color: #e74c3c;
    background-color: transparent;
}

.danger {
  background-color: #e74c3c;
  border: 1px solid #e74c3c;
  color: white;
}
.danger:hover {
  background: transparent;
  color: #e74c3c;
}

.sm { padding: 6px 12px; font-size: 14px; }
.md { padding: 10px 20px; font-size: 16px; }
.lg { padding: 14px 28px; font-size: 18px; }
</style>
