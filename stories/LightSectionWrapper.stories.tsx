// Tools
import LightSectinWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";
// Types
import { ComponentMeta } from "@storybook/react";

export default {
    title: "LightSectionWrapper",
    component: LightSectinWrapper,
} as ComponentMeta<typeof LightSectinWrapper>;

export const Examaple = () => {
    return (
        <LightSectinWrapper
            header={{
                main: "Example of header",
                label: "Label",
                estimatedHeight: "85px",
            }}
            round="left"
        >
            <h1>Your content is going to appear here</h1>
        </LightSectinWrapper>
    );
};
