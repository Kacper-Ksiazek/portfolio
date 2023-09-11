// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "navigation-between-sections",
    structure: {
        DIVIDER: {
            ref_value: "divider",
            ref_type: "CSS_CLASS",
        },
        STEP_BUTTON: {
            ref_value: "step-button",
            ref_type: "CSS_CLASS",
        },
        STEP_WRAPPER: {
            ref_value: "step-wrapper",
            ref_type: "CSS_CLASS",
        },
    },
});
