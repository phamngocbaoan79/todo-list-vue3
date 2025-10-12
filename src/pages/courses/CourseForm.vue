<template>
    <BaseDialog v-if="inputInvalid" title="Invalid Input">
        <template #default>
            <p>Input can not be null</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maiores iure tempore ipsum id ad perspiciatis soluta, officiis ab quo accusantium a eaque. Fugit voluptates vero molestiae dolore quam voluptatem!</p>
        </template>
        <template #actions>
            <BaseButton @click="confirmErr">
                Oke
            </BaseButton>
        </template>
    </BaseDialog>
    <BaseButton mode="flat" type="button" size="sm" @click="$emit('back')">
        Quay lại
    </BaseButton>
    <form @submit.prevent="handleSubmit" class="space-y-4 max-w-lg mx-auto my-4">
        <h2 class="text-xl font-semibold text-gray-800">
            {{ isEdit ? 'Edit course': 'Create course' }}
        </h2>

        <div>
            <label for="tag_id" class="block text-gray-700 mb-1">Tag</label>
            <select name="tag_id" v-model="form.tag_id" class="w-full border rounded py-2 px-3">
                <option value="" class="text-gray-400" disabled>-- Select tag --</option>
                <option v-for="tag in tags" :key="tag.id" :value="tag.id">
                    {{ tag.name }}
                </option>
            </select>
        </div>

        <div>
            <label for="name" class="block text-gray-700 mb-1">Name</label>
            <input type="text" class="border rounded px-3 py-2 w-full" 
            v-model="form.name"
            placeholder="Enter the name course">
        </div>

        <div>
            <label for="price" class="block text-gray-700 mb-1">Price</label>
            <input type="number" class="border rounded px-3 py-2 w-full" 
            v-model="form.price"
            placeholder="Enter the price course">
        </div>

        <div>
            <label for="description" class="block text-gray-700 mb-1">description</label>
            <textarea name="" class="w-full border rounded px-3 py-2" v-model="form.description" 
            placeholder="Enter the description"></textarea>
        </div>

        <div>
            <label for="level" class="block text-gray-700 mb-1">Level</label>
            <select name="level" v-model="form.level" class="w-full border rounded py-2 px-3">
                <option value="" disabled>-- Select level --</option>
                <option value="Sơ cấp">Sơ cấp</option>
                <option value="Trung cấp">Trung cấp</option>
                <option value="Cao cấp">Cao cấp</option>
            </select>
        </div>

        <BaseButton type="submit" class="w-full">
            {{ isEdit ? 'Edit course': 'Create course' }}
        </BaseButton>
    </form>
</template>

<script setup>
import BaseButton from '@/components/Ui/BaseButton.vue';
import { tags as tagsData } from '@/data/tags.js';
import { onMounted, reactive, ref, watch } from 'vue';
import BaseDialog from '@/components/Ui/BaseDialog.vue';

const props = defineProps({
    isEdit: Boolean,
    modelValue: Object,
})

const emit = defineEmits(['submit', 'back']);

const tags = ref([]);
const inputInvalid =  ref(false)

const form = reactive({
    id: '',
    tag_id: '',
    name: '',
    price: '',
    description: '',
    level: 'Sơ cấp',
    created_at: ''
})

onMounted(() => {
    tags.value = tagsData
})

watch(
  [() => props.modelValue, () => props.isEdit],
  ([newVal, isEdit]) => {
    if (isEdit && newVal) {
      Object.assign(form, newVal)
    } else {
      form.id = ''
      form.tag_id = ''
      form.name = ''
      form.price = ''
      form.description = ''
      form.level = 'Sơ cấp'
      form.created_at = ''
    }
  },
  { immediate: true }
)

const confirmErr = () => {
    inputInvalid.value = false;
}

const handleSubmit = () => {
    if (form.name === '' || form.price === '') {
        inputInvalid.value = true;
        return;
    }
    emit('submit', { ...form, isEdit: props.isEdit })
}

</script>