import type { PreviousJob, SeederDataItem } from "./@types";

export default (
    [
        {
            title: "Interior finishing works",
            city: "Oslo",
            country: "Norway",
            description: `The financial preparation for *college* and the most significant life lesson I've learned to date. The purpose of this journey was to save as much money as possible to *kickstart my full-stack developer* career during the first months of university`,
            start: new Date(2022, 5),
            end: new Date(2022, 8),
            folder: "norway_excursion.jpg",
        },
        {
            title: "Acrylics Warehouse Employee- Year 3",
            city: "Wadowice",
            country: "Poland",
            start: new Date(2021, 5),
            end: new Date(2021, 8),
            description: `During my third and final year there, I took up this job with the goal of being able *to purchase a new computer setup*. With the money I earned, I bought a brand new laptop along with an ultrawide monitor and used up nearly all of my earnings.`,
            folder: "marecki_3.jpg",
        },
        {
            title: "Trenuj Prosto- express && Vue",
            start: new Date(2021, 0),
            end: new Date(2021, 1),
            folder: "trenuj_prosto.jpg",
            description: `My second commercial project, which I managed to *code single-handedly*, involved working with a pre-designed layout created by someone else. My task was to build everything from scratch using the technologies of my choice.`,
            projectGithubURL: "https://github.com/Kacper-Ksiazek/trenuj_prosto-2021",
            projectPortfolioURL: "/projects/TRENUJ_PROSTO",
        },
        {
            title: "Acrylics Warehouse Employeee- Year 2",
            city: "Wadowice",
            country: "Poland",
            start: new Date(2020, 5),
            end: new Date(2020, 7),
            description: `I began this job as soon as I reached the legal driving age. I spent three months segregating and organizing acrylic pieces in two warehouses to *save up for my first car*, a black Peugeot 207.`,
            folder: "marecki_2.jpg",
        },
        {
            title: "Dać Szansę- laravel && Vue",
            start: new Date(2020, 2),
            end: new Date(2020, 6),
            description: `My *first serious commercial project* was a significant undertaking. I received a graphic design and was tasked with *coding the entire website on my own*. After the initial release of the app, the client provided an almost entirely new design, resulting in a substantial rebuild of the entire application.`,
            folder: "dac_szanse.jpg",
            projectGithubURL: "https://github.com/Kacper-Ksiazek/dac_szanse",
            projectPortfolioURL: "http://localhost:8080/projects/DAC_SZANSE",
        },
        {
            title: "Acrylics Warehouse Employee- Year 1",
            city: "Wadowice",
            country: "Poland",
            start: new Date(2019, 5),
            end: new Date(2019, 7),
            // TU SKONCZYLEM
            description: `My very first job, which I began at the *age of 16*. I aimed to earn sufficient money to buy a new smartphone and invest in a new computer for *my ongoing coding education*.`,
            folder: "marecki_1.jpg",
        },
    ] as SeederDataItem<Partial<PreviousJob>>[]
).map((el: Partial<SeederDataItem<PreviousJob>>) => {
    el.folder = el.folder;
    el._imagesDir = `/previous_jobs/${el.folder}`;
    el.id = el.folder?.toUpperCase().split(".")[0];
    return el;
}) as SeederDataItem<PreviousJob>[];
