<template>
  <form @submit.prevent="save">
    <input v-model="form.name" class="border p-2 w-full mb-3" placeholder="Tên khóa học" />
    <div class="flex justify-end gap-2">
      <button type="button" @click="$emit('close')">Huỷ</button>
      <button type="submit">Lưu</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ data: Object })
const emit = defineEmits(['close', 'saved'])

const form = ref({ name: '' })

watch(() => props.data, (val) => {
  form.value = val ? { ...val } : { name: '' }
}, { immediate: true })

const save = async () => {
  if (props.data) {
    // update
  } else {
    // create
  }
  emit('saved')
}
</script>
