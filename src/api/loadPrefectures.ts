import { RESAS } from "@/api/resas/apiRequest.ts";
import type { Prefecture } from "@/Types.ts";

export const loadPrefectures = async () => {
    const api: RESAS = new RESAS();
    const pref: Prefecture[] = await api.getPrefecture();

    return pref;
};