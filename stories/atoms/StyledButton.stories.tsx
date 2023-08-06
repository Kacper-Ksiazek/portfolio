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
        componentThemeID: {
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
    componentThemeID: "TEXT",
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    componentThemeID: "PRIMARY",
};

export const ErrorButton = Template.bind({});
ErrorButton.args = {
    componentThemeID: "ERROR",
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    componentThemeID: "SUCCESS",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    componentThemeID: "SECONDARY",
};

export const TextButton = Template.bind({});
TextButton.args = {
    componentThemeID: "TEXT",
};
