import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";

export function useTelegramUser() {
    const route = useRoute();

    const telegram_username = ref<string | null>(null);
    const telegram_id = ref<string | null>(null);
    const fullName = ref<string | null>(null);
    const photoUrl = ref<string | null>(null);

    onMounted(() => {
        const storedUsername = localStorage.getItem("telegram_username");
        const storedTelegramId = localStorage.getItem("telegram_id");
        const storedFullName = localStorage.getItem("full_name");
        const storePhotoUrl = localStorage.getItem("photo_url")


        if (storedUsername && storedTelegramId && storedFullName && storePhotoUrl) {
            telegram_username.value = storedUsername;
            telegram_id.value = storedTelegramId;
            fullName.value = storedFullName;
            photoUrl.value = storePhotoUrl;
        } else {
            telegram_username.value = route.query.telegram_username as string || "Guest";
            telegram_id.value = route.query.telegram_id as string || "";
            fullName.value = route.query.full_name as string || "Guest";
            photoUrl.value = route.query.photo_url as string || "No Profile";

            localStorage.setItem("telegram_username", telegram_username.value);
            localStorage.setItem("telegram_id", telegram_id.value);
            localStorage.setItem("full_name", fullName.value);
            localStorage.setItem("photo_url", photoUrl.value);
        }
    });

    const computedTelegramUsername = computed(() => telegram_username.value);
    const computedTelegramId = computed(() => telegram_id.value);
    const computedFullName = computed(() => fullName.value);
    const computedPhotoUrl = computed(() => photoUrl.value)

    return { telegram_username: computedTelegramUsername, telegram_id: computedTelegramId, fullName: computedFullName, photo_url: computedPhotoUrl };
}
