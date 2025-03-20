<script setup lang="ts">
import { useTelegramUser } from '@/composables/useTelegramUser';

const { fullName } = useTelegramUser()

</script>

<template>
    <div class="p-4">
        <h1 class="text-sm font-bold">User: {{ fullName }}</h1>
    </div>
</template>