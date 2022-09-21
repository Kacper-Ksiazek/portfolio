// Tools
import React from "react";
import TechnologiesList from "@/components/atoms/TechnologiesList";
// Types
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Atoms/TechnologiesList",
    component: TechnologiesList,
} as ComponentMeta<typeof TechnologiesList>;

const Template: ComponentStory<typeof TechnologiesList> = (args) => <TechnologiesList {...args} />;

export const Default = Template.bind({});
Default.args = {
    technologies: ["React", "Vue", "Next"],
};

/**
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};
 */
