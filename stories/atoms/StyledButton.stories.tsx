// Tools
import StyledButton from "@/components/atoms/forms/StyledButton";
// Types
import type { ComponentMeta, ComponentStoryFn } from "@storybook/react";
// Material UI Icons
import Settings from "@mui/icons-material/Settings";

export default {
    title: "Atoms/Forms/StyledButton",
    component: StyledButton,
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["primary", "success", "error", "secondary", "text"],
            description: "Color of button's background corresponding to `material theme`",
        },
    },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStoryFn<typeof StyledButton> = (args) => {
    return (
        <div style={{ marginTop: "100px", display: "flex", justifyContent: "center", width: "100%" }}>
            <StyledButton {...args}>Whatever you want</StyledButton>
        </div>
    );
};

const IconTemplate: ComponentStoryFn<typeof StyledButton> = (args) => {
    return (
        <div style={{ marginTop: "100px", display: "flex", justifyContent: "center", width: "100%" }}>
            <StyledButton {...args} iconButton>
                <Settings />
            </StyledButton>
        </div>
    );
};

export const IconButton = IconTemplate.bind({});
IconTemplate.args = {
    color: "text",
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    color: "primary",
};

export const ErrorButton = Template.bind({});
ErrorButton.args = {
    color: "error",
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    color: "success",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    color: "secondary",
};

export const TextButton = Template.bind({});
TextButton.args = {
    color: "text",
};
