import { SCHEDULE, WORKOUTS } from './data';

export const SK = "isabella_workout_history_final";
export const TK = "isabella_theme_mode_final";

export function loadH() {
    try {
        const r = JSON.parse(localStorage.getItem(SK) || "[]");
        return Array.isArray(r) ? r : [];
    } catch {
        return [];
    }
}

export function saveH(h) {
    localStorage.setItem(SK, JSON.stringify(h));
}

export function loadT() {
    try {
        return localStorage.getItem(TK) || "dark";
    } catch {
        return "dark";
    }
}

export function saveT(m) {
    try {
        localStorage.setItem(TK, m);
    } catch { }
}

export const fm = s => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export const fmF = s => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sc = s % 60;
    return h > 0
        ? `${h}h${String(m).padStart(2, "0")}m${String(sc).padStart(2, "0")}s`
        : `${String(m).padStart(2, "0")}m${String(sc).padStart(2, "0")}s`;
};

export const fmD = d => new Date(d).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
export const fmT = d => new Date(d).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

export const isTodayDate = (dateString) => new Date(dateString).toDateString() === new Date().toDateString();

export const todayW = () => {
    const m = [6, 0, 1, 2, 3, 4, 5];
    return SCHEDULE[m[new Date().getDay()]];
};

export const isComp = c => c === true || c === "completed";

export const getEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes('tiktok.com')) {
        const videoIdMatch = url.match(/video\/(\d+)/);
        if (videoIdMatch && videoIdMatch[1]) {
            return `https://www.tiktok.com/embed/v2/${videoIdMatch[1]}`;
        }
    }
    if (url.includes('instagram.com')) {
        const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
        return `${cleanUrl}/embed`;
    }
    return url;
};
