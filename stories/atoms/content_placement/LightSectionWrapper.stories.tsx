// Tools
import { paragraphs, headerObject } from "@/stories/_stories_assets/lorem_ipsum";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";
// Types
import { ComponentMeta, ComponentStoryFn } from "@storybook/react";

export default {
    title: "Atoms/Content Placement/LightSectionWrapper",
    component: LightSectionWrapper,
    argTypes: {
        header: {
            control: "object",
            description: `Handles section's premade header along with its smaller label`,
        },
        backgroundLetter: {
            type: "string",
            description: "The letter to be displayed in the background",
        },
        round: {
            control: "radio",
            options: ["left", "right"],
            defaultValue: "left",
            description: "Specifies more curved **top** corner",
        },
        id: {
            description: `The value of id attribute to be assigned to the section`,
            type: "string",
        },
        contentWrapperSx: {
            control: "object",
            description: "Custom `MaterialUI` styles to be applied to the `sx` attribute of the **content wrapper**",
        },
        unlimitedHeight: {
            type: "boolean",
            description: "By default the maximum height of the section wrapper is fixed to **800px**, by setting this property to `true` this one style is never assigned",
        },
    },
} as ComponentMeta<typeof LightSectionWrapper>;

const Template: ComponentStoryFn<typeof LightSectionWrapper> = (args) => {
    return (
        <LightSectionWrapper {...args}>
            <h1 style={{ margin: "0" }}>Your content is going to appear here</h1>
            {paragraphs.slice(0, 3).map((item, index) => {
                return (
                    <p key={index} style={{ margin: "16px 0 0 0" }}>
                        {item}
                    </p>
                );
            })}
        </LightSectionWrapper>
    );
};

const TemplateWithLargerContent: ComponentStoryFn<typeof LightSectionWrapper> = (args) => {
    return (
        <LightSectionWrapper {...args}>
            <h1 style={{ margin: "0" }}>Your content is going to appear here</h1>
            {paragraphs.map((item, index) => {
                return (
                    <p key={index} style={{ margin: "16px 0 0 0" }}>
                        {item}
                    </p>
                );
            })}
        </LightSectionWrapper>
    );
};

export const RoundedLeft = Template.bind({});
RoundedLeft.args = {
    round: "left",
    header: {
        main: "Main Header",
        label: "label",
    },
};

export const RoundedRight = Template.bind({});
RoundedRight.args = {
    round: "right",
    header: {
        main: "Main Header",
        label: "label",
    },
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
    header: {
        main: "Main Header",
        label: "label",
    },
    contentWrapperSx: {
        backgroundColor: "red",
    },
};

export const WithLargerContent = TemplateWithLargerContent.bind({});
WithLargerContent.args = {
    header: {
        main: "Main Header",
        label: "label",
    },
    unlimitedHeight: false,
};
