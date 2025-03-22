<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginPinInput from "@/components/LoginPinInput.vue";
import TelegramUser from "@/components/telegramUser.vue";
import timeStamp from "@/components/timeStamp.vue";
import telegramProfilePic from "@/components/telegramProfilePic.vue";

const router = useRouter();
const pin = ref("");

</script>

<template>
  <div class="h-screen flex items-center justify-center bg-slate-50">
    <div class="w-[768px] flex flex-col items-center">
    <div class="absolute w-full flex justify-between items-center p-8 top-0">
      <div class="flex items-center">
        <telegramProfilePic />
        <TelegramUser />
      </div>
      <timeStamp />
    </div>
    <LoginPinInput />
  </div>

  </div>
</template>
