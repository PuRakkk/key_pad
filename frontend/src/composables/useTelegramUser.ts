import { useRoute } from "vue-router";
import { ref, computed } from "vue";

export function useTelegramUser() {
    const route = useRoute();

    const telegram_username = computed(() => route.query.telegram_username as string || "Guest");
    const telegram_id = computed(() => route.query.telegram_id as string);
    const fullName = computed(() => route.query.full_name as string || "Guest");

    return { telegram_username, telegram_id, fullName};
}
