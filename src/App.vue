<template>
  <div class="flex flex-col min-h-screen mx-auto max-w-screen-xl">
    <Header />

    <div class="block mt-8">
      <BaseButton mode="primary" type="button" size="md" @click="onCreate">
        Add new
      </BaseButton>
    </div>

    <main class="flex-1">
      <div class="flex justify-center gap-4">
        <BaseButton variant="tab" @click="active = 'course'" :active="active === 'course'">
          Course
        </BaseButton>

        <BaseButton variant="tab" @click="active = 'tag'" :active="active === 'tag'">
          Tag
        </BaseButton>

      </div>

      <!-- Mỗi lần đổi tag thì dynamic cpn sẽ rm cái cpn trước nên ở App phải Mount lại 1 lần nữa -->
      <!-- => keep alive tránh rm => ở 2 file cpn k cần mount (phải khai báo defineProps) -->
      <keep-alive>
        <component :is="activeComponent" :courses="courses" :tags="tags" :isEdit="state[active].viewMode == 'edit'"
          :modelValue="state[active].selectedItem" 
            @edit="onEdit"
            @back="onBack"
            @create="onCreate"
            @submit="onSubmit"
           />
      </keep-alive>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import { courses as coursesData } from '@/data/courses'
import { tags as tagsData } from '@/data/tags'
import BaseButton from './components/Ui/BaseButton.vue'

import CourseTable from './pages/courses/CourseTable.vue'
import TagTable from './pages/tags/TagTable.vue'
import CourseForm from './pages/courses/CourseForm.vue'
import TagForm from './pages/tags/TagForm.vue'

const active = ref('course') // 'course', 'tag'
const state = reactive({
  course: {
    viewMode: 'table', selectedItem: null // viewMode có thể là table | form create | form edit
  },
  tag: {
    viewMode: 'table', selectedItem: null
  }
})

const courses = ref([]);
const tags = ref([]);

onMounted(() => {
  courses.value = coursesData
  tags.value = tagsData
})

const activeComponent = computed(() => {
  const tabState = state[active.value]
  if (tabState.viewMode === 'table') {
    return active.value === 'course' ? CourseTable : TagTable
  } else {
    return active.value === 'course' ? CourseForm : TagForm
  }
})

const onEdit = (item) => {
  state[active.value].selectedItem = item;
  state[active.value].viewMode = 'edit'
}

const onBack = () => {
  state[active.value].viewMode = 'table';
  state[active.value].selectedItem = null;
}

const onCreate = () => {
  state[active.value].selectedItem = null;
  state[active.value].viewMode = 'create';
}

const onSubmit = (data) => {
    const tab = active.value;

    if (tab === 'tag') {
      if (data.isEdit) {
        const index = tags.value.findIndex(t => t.id === data.id);
        if (index !== -1) tags.value[index] = data;
      } else {
        data.id = 'tag-' + Date.now();
        data.created_at = new Date().toLocaleString();
        tags.value.push(data);
      }
    }

    if(tab === 'course') {
      if(data.isEdit) {
        const index = courses.value.findIndex(c => c.id === data.id);
        if(index !== -1) courses.value[index] = data;
      } else {
          data.id = 'course-' + Date.now();
          data.created_at = new Date().toLocaleString();
          courses.value.push(data);
      }
    }

    state[active.value].viewMode = 'table';
    state[active.value].selectedItem = null;
}
</script>
