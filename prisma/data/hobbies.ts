import type { Hobby, SeederDataItem } from "./@types";

export default (
    [
        {
            label: "Coding",
            title: "Web development",
            description: "From school homework, through sheer passion into near future. I honestly cannot imagine my life without this substantial factor.",
            folder: "coding.jpg",
            icon: "TERMINAL",
        },
        {
            label: "Music",
            title: "German gangsta rap",
            description: "I fell in love with German language and now I am trying to learn some basics in order to understand ever more lyrics.",
            artistReferenceURL: "https://www.youtube.com/watch?v=0NL8H1IAHVc",
            artistReferenceTooltip: "Shot from official music video Blaues Licht by Bonez MC and Raf Camora.",
            folder: "german_rap.jpg",
            icon: "MUSIC_NOTE",
        },
        {
            label: "Games",
            title: "Video games",
            description: "After a day of innovating IT world via my clever approach to software I like to hello some other world and relieve stress.",
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
