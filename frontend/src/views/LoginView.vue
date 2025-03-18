<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

</script>

<template>
  <div class="h-screen flex items-center justify-center bg-slate-50">
    <input class="w-10/12 p-2 text-center text-lg border-transparent rounded-md mb-3 bg-gray-200" v-model="pin" placeholder="Enter Admin Pin" maxlength="10" oninput="this.value = this.value.replace(/[^0-9]/g, '');" inputmode="none" autofocus type="password">
  </div>
</template>
