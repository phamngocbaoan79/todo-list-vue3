<template>
    <div class="flex flex-col min-h-screen mx-auto max-w-screen-xl ">
        <Header />
        <main class="flex-1">
            <h1 class="text-2xl text-center mt-10">Todo App Content</h1>
            <Table/>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
import Table from '@/components/table/Table.vue';
</script>

<style lang="scss" scoped>

</style>
