// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { CLASS_NAME as DURATION_WRAPPER_CLASS_NAME } from "@/components/atoms/single_project/Duration";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "single-recommended-project",
    structure: {
        WRAPPER: {
            ref_value: "wrapper",
            ref_type: "CSS_CLASS",
        },
        DIVIDER: {
            ref_value: "divider",
            ref_type: "CSS_CLASS",
        },
        DURATION: {
            ref_value: DURATION_WRAPPER_CLASS_NAME,
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
        TITLE: {
            ref_value: "title",
            ref_type: "CSS_CLASS",
        },
        DESCRIPTION: {
            ref_value: "description",
            ref_type: "CSS_CLASS",
        },
        NUMBER_OF_FEATURES: {
            ref_value: "number-of-features",
            ref_type: "CSS_CLASS",
        },
    },
});
