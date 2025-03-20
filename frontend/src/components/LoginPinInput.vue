<script setup lang="ts">
import { ref } from "vue"
import Buttons from "@/components/Buttons.vue";
import router from "@/router";

const pin = ref("");
const error_message = ref<string>("")

const handleInput = (value: string) => {
    if (pin.value.length < 10) {
        pin.value += value;
        if (pin.value.length < 4){
            error_message.value = "PIN must be at least 4 degits"}
        else {
            error_message.value = "";
        }
    }
};

const handleDelete = () => {
    error_message.value = "";
    pin.value = pin.value.slice(0, -10);
};


const handleNext = () => {
    if(pin.value === ""){
        error_message.value = "Please input PIN"
    }
    else if(pin.value.length < 4){
        error_message.value = "PIN must be at least 4 degits"
    }
    else if(pin.value === "12345"){
        router.push("/home")
    }
    else{
        error_message.value = "Inncorrect PIN";
        pin.value = pin.value.slice(0, -10);
    }
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
    <h1 class="min-h-[24px] text-red-600">{{ error_message }}</h1>
    <Buttons 
        @input="handleInput" 
        @delete="handleDelete" 
        @next="handleNext" 
    />
</template>