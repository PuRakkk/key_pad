<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

</script>

<template>
  <div class="h-screen flex items-center justify-center bg-slate-50">
    <input class="bg-red-100 text-center" type="password">
  </div>
</template>
