export const WORKOUTS = {
    A: {
        id: "A", name: "Treino A", target: "Quadríceps, Glúteo, Panturrilha",
        rest: "60-90s", color: "#FF6B6B", icon: "🦵",
        exercises: [
            { id: "a1", name: "Hack Squat", sets: 3, reps: "10-12", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7555649960251870475" },
            { id: "a2", name: "Leg Press 45°", sets: 3, reps: "12-15", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7542333780313247032" },
            { id: "a3", name: "Cadeira Extensora", sets: 3, reps: "12-15", video: "https://www.tiktok.com/@personal.zead/video/7475493328608349445" },
            { id: "a4", name: "Elevação Pélvica", sets: 4, reps: "10-15", video: "https://www.tiktok.com/@queima_diaria/video/7267947866537168133" },
            { id: "a5", name: "Glúteo Polia", sets: 3, reps: "12-15", video: null },
            { id: "a6", name: "Flexão Plantar", sets: 4, reps: "15-20", video: "https://www.tiktok.com/@personal.zead/video/7535072088198024454" },
        ],
    },
    B: {
        id: "B", name: "Treino B", target: "Superiores e Core",
        rest: "45-60s", color: "#3B82F6", icon: "💪",
        exercises: [
            { id: "b1", name: "Puxada Frontal", sets: 3, reps: "10-12", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7494441111881108741" },
            { id: "b2", name: "Remada Baixa", sets: 3, reps: "12-15", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7566418233012604181" },
            { id: "b3", name: "Supino Máquina", sets: 3, reps: "10-12", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7540467729162194181" },
            { id: "b4", name: "Desenvolvimento Sent.", sets: 3, reps: "10-12", video: "https://www.tiktok.com/@nagatapersonal/video/7577531026897980690" },
            { id: "b5", name: "Elevação Lateral", sets: 3, reps: "12-15", video: "https://www.tiktok.com/@amandalaupersonal/video/7339164514333609222" },
            { id: "b6", name: "Tríceps Pulley Alto", sets: 3, reps: "12-15", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7507754584706682118" },
            { id: "b7", name: "Rosca Direta", sets: 3, reps: "12-15", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7528550322386521350" },
            { id: "b8", name: "Abdominal Máquina", sets: 4, reps: "15-20", video: "https://www.tiktok.com/@dicasecortesfitness/video/7324504802019347718" },
        ],
    },
    C: {
        id: "C", name: "Treino C", target: "Posterior, Adutores, Glúteo",
        rest: "60-90s", color: "#A855F7", icon: "🍑",
        exercises: [
            { id: "c1", name: "Mesa Flexora", sets: 3, reps: "10-12", video: "https://www.tiktok.com/@keilaamelia.personal/video/7545830458043469112" },
            { id: "c2", name: "Cadeira Flexora", sets: 3, reps: "12-15", video: "https://www.tiktok.com/@keilaamelia.personal/video/7435652591130037559" },
            { id: "c3", name: "Stiff Romeno", sets: 3, reps: "10-12", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7511061621222018360" },
            { id: "c4", name: "Cadeira Adutora", sets: 4, reps: "12-15", video: "https://www.instagram.com/reel/DNg9ZtMtOCG/" },
            { id: "c5", name: "Agachamento Sumô", sets: 3, reps: "10-12", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7534838728171261240" },
            { id: "c6", name: "Cadeira Abdutora", sets: 4, reps: "12-15", video: "https://www.instagram.com/reel/DNg9ZtMtOCG/" },
            { id: "c7", name: "Retrocesso (Afundo)", sets: 3, reps: "10/perna", video: "https://www.tiktok.com/@raquelbenattipersonal/video/7538585556616269061" },
        ],
    },
};

export const SCHEDULE = [
    { day: "Segunda", workout: "A" }, { day: "Terça", workout: "B" },
    { day: "Quarta", workout: "C" }, { day: "Quinta", workout: "A" },
    { day: "Sexta", workout: "B" }, { day: "Sábado", workout: "C" },
    { day: "Domingo", workout: null },
];
