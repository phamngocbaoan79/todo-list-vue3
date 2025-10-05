<template>
  <div class="flex flex-col min-h-screen mx-auto max-w-screen-xl">
    <Header />

    <main class="flex-1">
      <div class="flex justify-center gap-4 mt-8">
        <button 
          @click="active = 'course'" 
          :class="buttonClass('course')"
        >
          Course
        </button>
        <button 
          @click="active = 'tag'" 
          :class="buttonClass('tag')"
        >
          Tag
        </button>
      </div>

      <!-- Mỗi lần đổi tag thì dynamic cpn sẽ rm cái cpn trước nên ở App phải Mount lại 1 lần nữa -->
       <!-- => keep alive tránh rm => ở 2 file cpn k cần mount (phải khai báo defineProps) -->
      <keep-alive>
        <component 
            :is="activeComponent"
            :courses="courses"
            :tags="tags"
        />
      </keep-alive>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import { courses as coursesData } from '@/data/courses'
import { tags as tagsData } from '@/data/tags'

import CourseTable from '@/pages/courses/courseTable.vue'
import TagTable from '@/pages/tags/tagTable.vue'

const active = ref('course')
const courses = ref([])
const tags = ref([])

onMounted(() => {
  courses.value = coursesData
  tags.value = tagsData
})

const activeComponent = computed(() => {
  return active.value === 'course' ? CourseTable : TagTable
})

const buttonClass = (type) => [
    'px-4 py-2 rounded-md font-semibold transition',
    active.value === type
    ? 'bg-teal-600 text-white shadow'
    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
]
</script>
