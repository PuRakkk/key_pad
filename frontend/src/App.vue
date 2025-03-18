<script setup>
import { ref, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue"

const message = ref("Loading...");

onMounted(async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/v1/");
    const data = await res.json();
    message.value = data.message;
  } catch (error) {
    message.value = "Error fetching data!";
  }
});
</script>

<template>
  <router-view />
</template>

