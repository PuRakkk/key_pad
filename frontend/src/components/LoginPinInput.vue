<script setup lang="ts">
import { ref } from "vue"
import Buttons from "@/components/Buttons.vue";
import router from "@/router";

const pin = ref("");

const handleInput = (value: string) => {
    if (pin.value.length < 10) {
        pin.value += value;
    }
};

const handleDelete = () => {
    pin.value = pin.value.slice(0, -10);
};

const handleNext = () => {
    router.push("/home")
};

</script>

<template>
    <input 
    class="w-10/12 h-12 p-2 font-bold text-center text-2xl border-gray-300 border rounded-md mb-3 bg-gray-50 shadow-xl placeholder-gray-400"
    v-model="pin"
    placeholder="Enter Admin Pin"
    maxlength="10"
    oninput="this.value = this.value.replace(/[^0-9]/g, '');"
    type="password"
    inputmode="none">

    <Buttons 
        @input="handleInput" 
        @delete="handleDelete" 
        @next="handleNext" 
    />
</template>