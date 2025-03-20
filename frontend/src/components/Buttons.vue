<script setup lang="ts">

const emit = defineEmits(["input", "delete", "next"]);
</script>

<template>
    <div class="grid grid-cols-3 gap-4 w-10/12 mt-4">
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-xl shadow-lg active:bg-white active:scale-10"
            @click="emit('input', '7')">
            7
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '8')">
            8
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '9')">
            9
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '4')">
            4
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '5')">
            5
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '6')">
            6
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '1')">
            1
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '2')">
            2
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '3')">
            3
        </button>
        <button
            class="text-2xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl flex items-center justify-center active:bg-white active:scale-10"
            @click="emit('delete')">
            <i class="fas fa-backspace"></i>
        </button>
        <button
            class="text-xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl active:bg-white active:scale-10"
            @click="emit('input', '0')">
            0
        </button>
        <button
            class="text-xl font-bold border-gray-300 border bg-gray-100 w-18 h-16 rounded-lg shadow-xl flex items-center justify-center active:bg-white active:scale-10"
            @click="emit('next')">
            <i class="fas fa-arrow-alt-circle-right"></i>
        </button>
    </div>
</template>
