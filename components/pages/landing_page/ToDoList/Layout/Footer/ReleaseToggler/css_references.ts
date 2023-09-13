// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--footer--release-toggler",
    structure: {
        LABEL: {
            ref_value: "label",
        },
        SINGLE_RELEASE_BUTTON: {
            ref_value: "single-release-button",
            ref_type: "CSS_CLASS",
        },
        CHOICE_INDICATOR: {
            ref_value: "choice-indicator",
        },
        //
    },
});
