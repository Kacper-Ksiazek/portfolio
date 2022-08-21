import type { SeederDataItem, School } from "./@types";

export default (
    [
        {
            id: "AGH",
            title: "Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie",
            type: "UNIVERSITY",
            start: "2022",
            url: "https://www.agh.edu.pl/en/",
            folder: "agh.jpg",
            end: "Present",
            description: "I study at the faculty called *Engineering and Data Analysis*",
        },
        {
            id: "MAGIC",
            title: "Szkoła językowa Magic",
            type: "EXTRA_CLASSES",
            start: "2021",
            url: "http://www.magic.edu.pl/",
            folder: "magic.jpg",
            end: "2022",
            description: `During my last year of high school I enrolled myself in *English language* extra classes so as to improve my language skills. I got assigned to *B2/C1* group and was
            attending 90 minutes long sessions two times a week for 7 months.`,
        },
        {
            id: "GORZEN_HA_TFU",
            title: `Centrum Kształcenia Zawodowego i Ustawicznego nr 2 im. ks. Stanisława Staszica w Wadowicach`,
            type: "HIGH_SCHOOL",
            start: "2018",
            url: "https://ckziuwadowice.pl/",
            folder: "gorzen.jpg",
            end: "2022",
            description: `I was attending to the IT related class (*technikum informatyczne*) and eventually obtained all possible certification.`,
        },
    ] as SeederDataItem<School>[]
).map((el: Partial<SeederDataItem<School>>) => {
    el.folder = el.folder;
    el._imagesDir = `/schools/${el.folder}`;
    el.id = el.folder?.toUpperCase().split(".")[0];
    return el;
}) as SeederDataItem<School>[];
