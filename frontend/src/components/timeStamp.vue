<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const timestamp = ref<string>("");
let intervalId: number | null = null;

const formatDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }
    timestamp.value = now.toLocaleString('en-US', options);
}

onMounted(() => {
    formatDate();
    intervalId = window.setInterval(formatDate, 60000);
});

onBeforeUnmount(() => {
    if (intervalId !== null) {
        clearInterval(intervalId);
  }
});

</script>

<template>
    <div class="p-4">
        <p class="text-sm font-bold">{{ timestamp }}</p>
  </div>
</template>