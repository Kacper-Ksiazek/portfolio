import type { Hobby, SeederDataItem } from "./@types";

export default (
    [
        {
            label: "Coding",
            title: "Web development",
            description:
                "Obviously, I really like coding and it's my main form of spending free time. I used to do this simultaneously with a high school, but now I do it simultaneously with a collage.",
            folder: "coding.jpg",
            icon: "TERMINAL",
        },
        {
            label: "Music",
            title: "German gangsta rap",
            description: `I really like the sound of the German language and I find listening to german music tranquilizing and very encouraging to learn *second foreign language*.`,
            artistReferenceURL: "https://www.youtube.com/watch?v=0NL8H1IAHVc",
            artistReferenceTooltip: "Shot from official music video Blaues Licht by Bonez MC and Raf Camora.",
            folder: "german_rap.jpg",
            icon: "MUSIC_NOTE",
        },
        {
            label: "Games",
            title: "Video games",
            description:
                "Due to the moving out I play video games *ever less*, because they give an oppourtunity to interact with the world of software engineering from the other perspective (consumer instead of creator) and *improve my UI UX skills*.",
            folder: "video_games.jpg",
            icon: "SPORTS_ESPORTS",
        },
    ] as SeederDataItem<Hobby>[]
).map((el: Partial<SeederDataItem<Hobby>>) => {
    el.folder = el.folder;
    el._imagesDir = `/hobbies/${el.folder}`;
    el.id = el.folder?.toUpperCase().split(".")[0];
    return el;
}) as SeederDataItem<Hobby>[];
