import { HobbyIcon, type Hobby } from "./types";

const hobbies: Hobby[] = [
    {
        id: "CODING",
        label: "Coding",
        title: "Web development",
        description:
            "Clearly, I have a deep passion for coding, and it has been my primary way to spend my free time. I used to pursue it alongside my high school studies, and I continue to do so *alongside my college education*.",
        folder: "coding.jpg",
        icon: HobbyIcon.TERMINAL,
    },
    {
        id: "LANGUAGES",
        label: "Education",
        title: "Languages learning",
        description: "Besides coding, I am also interested in learning languages. My current focus is on *mastering English* and then German, but I also consider learning more in the future.",
        folder: "languages.jpg",
        icon: HobbyIcon.BOOKS,
    },
    {
        id: "VIDEO_GAMES",
        label: "Games",
        title: "Video games",
        description: "Due to abundance of responsibilities, I do not have much time to play video games now. However, I still enjoy them from time to time.",
        folder: "video_games.jpg",
        icon: HobbyIcon.SPORTS_ESPORTS,
    },
    {
        id: "COOKING",
        label: "Cooking",
        title: "Food preparation",
        description:
            "I'm not a professional chef, but still I take pleasure in cooking. The aspect I enjoy most about cooking is the ongoing *organization of my workspace* and constant *tidiness maintaining*",
        folder: "cooking.jpg",
        icon: HobbyIcon.CUTTERY,
    },
];

export default hobbies;
