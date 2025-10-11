<template>
    <div>
        <form @submit.prevent="handleSubmit" class="space-y-4 max-w-lg mx-auto" enctype="multipart/form-data">
            <h2 class="text-xl font-semibold text-gray-800">
                {{ isEdit ? 'Edit course': 'Create course' }}
            </h2>

            <div>
                <label for="name" class="block text-gray-700 mb-1">Name</label>
                <input type="text" class="border rounded px-3 py-2 w-full" v-model="name" required>
            </div>
        </form>
    </div>
</template>

<script>
</script>