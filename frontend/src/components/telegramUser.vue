<script setup lang="ts">
import { useTelegramUser } from "@/composables/useTelegramUser";

const { fullName } = useTelegramUser();

</script>

<template>
    <div class="p-4">
        <h1 class="text-[12px] sm:text-sm md:text-base font-bold">{{ fullName }}</h1>
    </div>
</template>
