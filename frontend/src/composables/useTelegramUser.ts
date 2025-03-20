import { useRoute } from "vue-router";
import { ref, computed } from "vue";

export function useTelegramUser() {
    const route = useRoute();

    // Get query parameters
    const username = computed(() => route.query.telegram_username as string || "Guest");
    const telegramId = computed(() => route.query.telegram_id as string || "Unknown");
    const fullName = computed(() => route.query.full_name as string || "Guest");

    return { username, telegramId, fullName};
}
