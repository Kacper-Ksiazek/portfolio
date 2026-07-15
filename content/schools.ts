import { SchoolType, type School } from "./types";

const schools: School[] = [
    {
        id: "AGH",
        title: "Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie",
        type: SchoolType.UNIVERSITY,
        start: "2022",
        url: "https://www.agh.edu.pl/en/",
        folder: "agh.jpg",
        end: "Present",
        description: "I'm in my second year of studies towards a bachelor's degree in *Data Science*. My undergraduate course is called *Engineering and Data Analysis*.",
    },
    {
        id: "MAGIC",
        title: "Szkoła językowa Magic",
        type: SchoolType.EXTRA_CLASSES,
        start: "2021",
        url: "http://www.magic.edu.pl/",
        folder: "magic.jpg",
        end: "2022",
        description: `During my last year of high school I enrolled myself in *English language* extra classes so as to improve my language skills. I got assigned to *B2/C1* group and was attended 90 minutes long sessions twice a week for 7 months.`,
    },
    {
        id: "GORZEN_HA_TFU",
        title: `Centrum Kształcenia Zawodowego i Ustawicznego nr 2 im. ks. Stanisława Staszica w Wadowicach`,
        type: SchoolType.HIGH_SCHOOL,
        start: "2018",
        url: "https://ckziuwadowice.pl/",
        folder: "gorzen.jpg",
        end: "2022",
        description: `I attended to the IT-related class (*technikum informatyczne*) for 4 years and eventually successfully obtained all possible certifications.`,
    },
];

export default schools;
