<template>
    <div class="overflow-x-auto my-5 mx-2">
        <table class="min-w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead>
                <tr class="bg-gradient-to-r from-teal-600 to-blue-600">
                    <th class="px-6 py-4 border-b border-teal-500 text-left text-sm font-bold text-white uppercase tracking-wide">#</th>
                    <th class="px-6 py-4 border-b border-teal-500 text-left text-sm font-bold text-white uppercase tracking-wide">Name</th>
                    <th class="px-6 py-4 border-b border-teal-500 text-left text-sm font-bold text-white uppercase tracking-wide">Image</th>
                    <th class="px-6 py-4 border-b border-teal-500 text-left text-sm font-bold text-white uppercase tracking-wide">Price</th>
                    <th class="px-6 py-4 border-b border-teal-500 text-left text-sm font-bold text-white uppercase tracking-wide">Tag</th>
                    <th class="px-6 py-4 border-b border-teal-500 text-center text-sm font-bold text-white uppercase tracking-wide">Action</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <course-item 
                    v-for="(course, index) in courses" 
                    :key="course.id"
                    :course="course"
                    :index="index"
                />
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { courses as coursesData } from '@/data/courses';
    import { ref, onMounted } from 'vue';
    import CourseItem from './CourseItem.vue';

    const courses = ref([]);

    onMounted(() => {
        courses.value = coursesData;
    })
</script>

<style>
</style>