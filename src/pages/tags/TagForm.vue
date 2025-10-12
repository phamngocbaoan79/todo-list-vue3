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
                placeholder="Enter the name tag">
        </div>

        <div>
            <lable for="color" class="block text-gray-700 mb-1">
                color
            </lable>
            <input type="text"
                class="border rounded px-3 py-2 w-full"
                v-model="form.color"
                placeholder="Enter the color tag">
        </div>

        <BaseButton class="w-full" type="submit">
            {{ isEdit ? 'Edit tag' : 'Create tag' }}
        </BaseButton>
    </form>
</template>

<script setup>
import BaseButton from '@/components/Ui/BaseButton.vue';
import { defineProps, reactive, ref, watch } from 'vue';
import BaseDialog from '@/components/Ui/BaseDialog.vue';

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

const inputInvalid = ref(false);

watch([() => props.modelValue, () => props.isEdit],
([newVal, isEdit]) => {
  if (isEdit && newVal) {
      Object.assign(form, newVal)
    } else {
        form.id = '',
        form.name = '',
        form.color = '',
        form.created_at = ''
    }
  },
  // bình thường watch() chỉ chạy khi có thay đổi.
  // thêm cái này thì nó watch ngay khi đc mount
  { immediate: true }
)

const confirmErr = () => {
    inputInvalid.value = false;
}

const handleSubmit = () => {
    if (form.name === '' || form.color === '') {
        inputInvalid.value = true;
        return;
    }
    emit('submit', { ...form, isEdit: props.isEdit })
}

</script>