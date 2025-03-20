<script setup lang="ts">
import { ref } from "vue"
import Buttons from "@/components/Buttons.vue";
import router from "@/router";
import axios from "axios";
import { useTelegramUser } from "@/composables/useTelegramUser";

const pin = ref("");
const error_message = ref<string>("")
const { telegram_username } = useTelegramUser()
const { telegram_id } = useTelegramUser()

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


const handleNext = async () => {
    console.log(telegram_id.value);
    if(pin.value === ""){
        error_message.value = "Please input PIN";
    }
    else if(pin.value.length < 4){
        error_message.value = "PIN must be at least 4 degits"
    }
    else if(telegram_id.value === undefined){
        error_message.value = "Please use in Telegram Bot";
    }
    else{
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/v1/check_login/", {
                telegram_username: telegram_username.value,
                telegram_id: telegram_id.value,
                pin: pin.value,
            });

            if (response.data.success) {
            router.push(response.data.redirect_url);
            } else {
            error_message.value = response.data.message;
            }
        } catch (error) {
            console.error("Login error:", error);
            error_message.value = "An error occurred. Please try again.";
        }
};
    }

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