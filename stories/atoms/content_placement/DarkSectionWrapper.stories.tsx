// Tools
import { paragraphs } from "@/stories/assets/lorem_ipsum";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";
// Types
import { ComponentMeta, ComponentStoryFn } from "@storybook/react";

export default {
    title: "Atoms/Content Placement/DarkSectionWrapper",
    component: DarkSectionWrapper,
    argTypes: {
        header: {
            control: "object",
            description: `Handles section's premade header along with its smaller label`,
        },
        shapesDirection: {
            control: "radio",
            defaultValue: "left",
            options: ["left", "right"],
            description: `Specifies the rotation of two background rectangles.`,
        },
        sx: {
            description: "Custom `MaterialUI` styles to be applied to the `sx` attribute of the **section main element**",
        },
    },
} as ComponentMeta<typeof DarkSectionWrapper>;

const Template: ComponentStoryFn<typeof DarkSectionWrapper> = (args) => {
    return (
        <DarkSectionWrapper {...args}>
            <h1>The content will appear here</h1>
        </DarkSectionWrapper>
    );
};

export const ShapesRotatedToLeft = Template.bind({});
ShapesRotatedToLeft.args = {
    shapesDirection: "left",
    header: {
        main: "The main header",
        label: "Additional label",
    },
};

export const ShapesRotatedToRight = Template.bind({});
ShapesRotatedToRight.args = {
    shapesDirection: "right",
    header: {
        main: "The main header",
        label: "Additional label",
    },
};

export const WithALotOfContent = () => {
    return (
        <DarkSectionWrapper
            header={{
                main: "The main header",
                label: "Additional label",
            }}
        >
            <h1>The content will appear here</h1>
            {paragraphs.slice(0, 3).map((item, index) => {
                return <p key={index}>{item}</p>;
            })}
        </DarkSectionWrapper>
    );
};
