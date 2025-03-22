import { useRoute } from "vue-router";
import { ref, computed, onMounted, watch } from "vue";

export function useTelegramUser() {
    const route = useRoute();

    const telegram_username = ref<string | null>(null);
    const telegram_id = ref<string | null>(null);
    const fullName = ref<string | null>(null);
    const photoUrl = ref<string | null>(null);

    const updateUserInfo = () => {

        const storedUsername = localStorage.getItem("telegram_username");
        const storedTelegramId = localStorage.getItem("telegram_id");
        const storedFullName = localStorage.getItem("full_name");
        const storedPhotoUrl = localStorage.getItem("photo_url");

        if (storedUsername && storedTelegramId && storedFullName) {
            console.log("Using stored data");
            telegram_username.value = storedUsername;
            telegram_id.value = storedTelegramId;
            fullName.value = storedFullName;
            photoUrl.value = storedPhotoUrl;
        } else {
            console.log("Using route data");
            telegram_username.value = (route.query.telegram_username as string) || "Guest";
            telegram_id.value = (route.query.telegram_id as string) || "";
            fullName.value = (route.query.full_name as string) || "Guest";
            photoUrl.value = (route.query.photo_url as string) || "@/assets/icon/user.png";

            if (telegram_username.value !== "Guest") {
                localStorage.setItem("telegram_username", telegram_username.value);
                localStorage.setItem("telegram_id", telegram_id.value);
                localStorage.setItem("full_name", fullName.value);
                localStorage.setItem("photo_url", photoUrl.value);
            }
        }
    };

    onMounted(updateUserInfo);

    // 🔥 Watch for route query changes (for reactivity)
    watch(() => route.query, updateUserInfo, { deep: true });

    return { telegram_username, telegram_id, fullName, photoUrl };
}
