<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginPinInput from "@/components/LoginPinInput.vue";
import TelegramUser from "@/components/telegramUser.vue";
import timeStamp from "@/components/timeStamp.vue";

const router = useRouter();
const pin = ref("");

</script>

<template>
  <div class="h-screen flex items-center justify-center bg-slate-50">
    <div class="w-[768px] flex flex-col items-center">
      <div class="absolute top-0 left-0 p-4">
        <TelegramUser/>
      </div>
      <div class="absolute top-0 right-0 p-4">
        <timeStamp/>
      </div>
      <LoginPinInput/>
    </div>
  </div>
</template>
