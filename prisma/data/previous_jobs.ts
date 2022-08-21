import type { PreviousJob, SeederDataItem } from "./@types";

export default (
    [
        {
            title: "Demolish and Construction",
            city: "Oslo",
            country: "Norway",
            description: `Moving partition walls and replacing ceilings with newer ones, puttying, painting and placing new floors.`,
            start: new Date(2022, 6),
            end: new Date(2022, 9),
            folder: "norway_excursion.jpg",
        },
        {
            title: "Acrylics Warehouse Employee- Year 3",
            city: "Wadowice",
            country: "Poland",
            start: new Date(2021, 6),
            end: new Date(2021, 9),
            description: `Third and last year there. My responsibilities was to split acrylics pieces into packs based on their customer, size and their destination.`,
            folder: "marecki_3.jpg",
        },
        {
            title: "Trenuj Prosto- express && Vue",
            start: new Date(2021, 1),
            end: new Date(2021, 2),
            folder: "trenuj_prosto.jpg",
            description: `My second commercial project which I managed to code single-handly. I had a prepared design layout which was made by somebody other and my task was to code everything from scratch using whichever technologies I wanted.`,
            projectGithubURL: "https://github.com/Kacper-Ksiazek/trenuj_prosto-2021",
            projectPortfolioURL: "/projects/TRENUJ_PROSTO",
        },
        {
            title: "Acrylics Warehouse Employeee- Year 2",
            city: "Wadowice",
            country: "Poland",
            start: new Date(2020, 6),
            end: new Date(2020, 8),
            description: `I was taking care of keeping acrylics well organized and stored based on their order number and furthermore I was helping with packing orders in cardboard.`,
            folder: "marecki_2.jpg",
        },
        {
            title: "Dać Szansę- laravel && Vue",
            start: new Date(2020, 3),
            end: new Date(2020, 7),
            description: `My first serious and commercial project. I had received graphic design and got ordered to code the entire website. Everything took way too much time, because immediately after releasing of the first version of the app, the client provided virtually brand new design and entire app got considerably rebuilt.`,
            folder: "dac_szanse.jpg",
            projectGithubURL: "https://github.com/Kacper-Ksiazek/dac_szanse",
            projectPortfolioURL: "http://localhost:8080/projects/DAC_SZANSE",
        },
        {
            title: "Acrylics Warehouse Employee- Year 1",
            city: "Wadowice",
            country: "Poland",
            start: new Date(2019, 6),
            end: new Date(2019, 8),
            description: `My first work ever. I started at the age of 16. My key responsibility then was to take upcoming elements out of the machine and placing them on pallets besides.`,
            folder: "marecki_1.jpg",
        },
    ] as SeederDataItem<Partial<PreviousJob>>[]
).map((el: Partial<SeederDataItem<PreviousJob>>) => {
    el.folder = el.folder;
    el._imagesDir = `/previous_jobs/${el.folder}`;
    el.id = el.folder?.toUpperCase().split(".")[0];
    return el;
}) as SeederDataItem<PreviousJob>[];
