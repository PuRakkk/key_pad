<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  router.push("/"); // Redirect to login on logout
};
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center bg-green-100">
    <h1 class="text-3xl font-bold text-green-600">Welcome to Home Page</h1>
    <button
      @click="logout"
      class="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  </div>
</template>
