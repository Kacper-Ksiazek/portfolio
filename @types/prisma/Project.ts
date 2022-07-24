import type { Project as _Project } from "@prisma/client";

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
    | "REST"
    | "React Query"
    | "Material UI"
    | "PHP"
    | "Laravel"
    | "Sequelize"
    | "Composition API";

// Change prisma's json types into something more accurate
export interface Project extends Omit<_Project, "features" | "description" | "technologies"> {
    features: Feature[];
    description: Description;
    technologies: Technology[];
}
