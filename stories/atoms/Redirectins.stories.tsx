// Tools
import { InternalRedirection, ExternalRedirection } from "@/components/atoms/redirections";
// Types
import type { ComponentMeta, ComponentStoryFn } from "@storybook/react";

export default {
    title: "Atoms/InternalRedirection && ExternalRedirection",
    component: InternalRedirection,
    subcomponents: { ExternalRedirection },
} as ComponentMeta<typeof InternalRedirection>;

const Template: ComponentStoryFn<typeof InternalRedirection> = (args) => {
    return (
        <div style={{ marginTop: "100px", display: "flex", justifyContent: "center", width: "100%" }}>
            <InternalRedirection {...args}>
                <span>Whatever you want</span>
            </InternalRedirection>
        </div>
    );
};

export const DefaultWithTooltip = Template.bind({});
DefaultWithTooltip.args = {
    tooltip: "An example of tooltip",
    url: "/about-me",
};

export const DefaultWithOutTooltip = Template.bind({});
DefaultWithOutTooltip.args = {
    url: "/about-me",
};

export const Small = Template.bind({});
Small.args = {
    url: "/about-me",
    small: true,
    tooltip: "An example of tooltip",
};
