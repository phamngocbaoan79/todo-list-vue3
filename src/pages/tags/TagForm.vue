<template>
    <BaseButton mode="flat" type="button" size="sm" @click="$emit('back')">
        Quay lại
    </BaseButton>
</template>

<script setup>
import BaseButton from '@/components/Ui/BaseButton.vue';
</script>