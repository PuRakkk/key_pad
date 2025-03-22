<script setup lang="ts">
import { useTelegramUser } from '@/composables/useTelegramUser';
import { ref, watch } from 'vue';
import defaultProfile from '@/assets/icon/user.png'; 

const { photoUrl } = useTelegramUser();
const imageUrl = ref<string>('');

watch(photoUrl, (newPhotoUrl) => {
  imageUrl.value = newPhotoUrl && newPhotoUrl !== '' ? newPhotoUrl : defaultProfile;
}, { immediate: true });

</script>

<template>
  <div>
    <img 
      :src="imageUrl" 
      alt="User Profile Picture" 
      class="w-10 h-10 rounded-full" 
      @error="imageUrl = defaultProfile" 
    />
  </div>
</template>
