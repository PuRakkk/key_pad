<script setup lang="ts">
import { useTelegramUser } from '@/composables/useTelegramUser';

const { fullName, photo_url } = useTelegramUser();

</script>

<template>
    <div class="p-4 flex flex-row space-x-2">
        <img v-if="photo_url" :src="photo_url" alt="User Profile Picture" class="w-10 h-10 items-center rounded-full" />
        <h1 class="text-sm font-bold">{{ fullName }}</h1>
    </div>
</template>
