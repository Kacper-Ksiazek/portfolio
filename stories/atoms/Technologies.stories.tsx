// Tools
import React from "react";
import TechnologiesList from "@/components/atoms/TechnologiesList";
// Types
import type { ComponentMeta, ComponentStoryFn } from "@storybook/react";
import type { TechnologiesListProps } from "@/components/atoms/TechnologiesList";

const TECHNOLOGIES: string[] = [
    "Vue 2",
    "Sass",
    "React",
    "Vue 3",
    "Vuex",
    "Redux",
    "MaterialUI",
    "Jest",
    "Git",
    "PostgreSQL",
    "Prisma",
    "Sequelize",
    "Next",
    "MySQL",
    "Express",
    "Electron",
    "Cypress",
    "MongoDB",
    "REST",
    "Node",
    "ReactQuery",
];

interface ControlsArgs {
    numberOfTechnologies: number;
}

export default {
    title: "Atoms/TechnologiesList",
    component: TechnologiesList,
    argTypes: {
        numberOfTechnologies: { type: "number", defaultValue: 4, control: { type: "range", min: 1, max: 20 } },
        technologies: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof TechnologiesList>;

const Template: ComponentStoryFn<typeof TechnologiesList> = (_args) => {
    const { numberOfTechnologies, ...args } = _args as ControlsArgs & TechnologiesListProps;
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "100px" }}>
            <TechnologiesList {...args} technologies={TECHNOLOGIES.slice(0, numberOfTechnologies)} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
    small: true,
    numberOfTechnologies: 10,
} as Partial<TechnologiesListProps> & Partial<ControlsArgs>;

export const OnlyAFewTechnologies = Template.bind({});
OnlyAFewTechnologies.args = {
    small: true,
    numberOfTechnologies: 5,
    thereAreMoreTechnologies: true,
} as Partial<TechnologiesListProps> & Partial<ControlsArgs>;

export const WithFadeIntroAnimation = Template.bind({});
WithFadeIntroAnimation.args = {
    numberOfTechnologies: 10,
    firstAnimationDelay: 0.2,
} as Partial<TechnologiesListProps> & Partial<ControlsArgs>;
