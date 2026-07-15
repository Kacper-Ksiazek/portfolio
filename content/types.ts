export enum HobbyIcon {
    TERMINAL = "TERMINAL",
    MUSIC_NOTE = "MUSIC_NOTE",
    SPORTS_ESPORTS = "SPORTS_ESPORTS",
    BOOKS = "BOOKS",
    CUTTERY = "CUTTERY",
}

export enum SchoolType {
    HIGH_SCHOOL = "HIGH_SCHOOL",
    EXTRA_CLASSES = "EXTRA_CLASSES",
    UNIVERSITY = "UNIVERSITY",
    COURSE = "COURSE",
}

export enum ProjectType {
    PERSONAL = "PERSONAL",
    HACKATHON = "HACKATHON",
    COMMERCIAL = "COMMERCIAL",
    COLLEGE = "COLLEGE",
}

export interface Description {
    introduction: string;
    purpose: string;
    conclusion: string;
}

export interface Feature {
    title: string;
    imageURL: string;
}

export type Technology =
    | "React"
    | "Redux"
    | "Typescript"
    | "Javascript"
    | "Vue 2"
    | "Vue 3"
    | "Jest"
    | "Vuex"
    | "SASS"
    | "CSS"
    | "HTML"
    | "Git"
    | "PostgreSQL"
    | "MySQL"
    | "Prisma"
    | "NextJS"
    | "Express"
    | "Electron"
    | "Cypress"
    | "MongoDB"
    | "REST"
    | "NodeJS"
    | "React Query"
    | "Material UI"
    | "PHP"
    | "Laravel"
    | "Sequelize"
    | "Composition API"
    | "Storybook"
    | "Figma";

export type ReleventTechnology =
    | "css"
    | "react"
    | "vue"
    | "next"
    | "prisma"
    | "javascript"
    | "typescript"
    | "jest"
    | "sass"
    | "express"
    | "node"
    | "electron"
    | "sequelize"
    | "redux"
    | "material"
    | "php"
    | "html"
    | "git"
    | "laravel"
    | "vue-bootstrap"
    | "mysql"
    | "postgresql"
    | "storybook"
    | "python"
    | "figma";

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    technologies: (Technology | string)[];
    folder: string;
    type: ProjectType;
    description?: Description;
    features?: Feature[];
    githubURL?: string;
    liveDemoURL?: string;
    releventTechnologies: (ReleventTechnology | string)[];
    start: Date;
    end: Date;
    hasSubpage?: boolean;
}

export interface Hobby {
    id: string;
    label: string;
    title: string;
    description: string;
    artistReferenceURL?: string;
    artistReferenceTooltip?: string;
    folder: string;
    icon: HobbyIcon;
}

export interface School {
    id: string;
    title: string;
    type: SchoolType;
    url: string;
    folder: string;
    description: string;
    start: string;
    end: string;
}

export interface PreviousJob {
    id: string;
    country: string;
    city?: string;
    title: string;
    start: Date;
    end: Date;
    description: string;
    folder: string;
    projectGithubURL?: string;
    projectPortfolioURL?: string;
}
