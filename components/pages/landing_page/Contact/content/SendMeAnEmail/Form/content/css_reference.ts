// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { OPTIONAL_PROPERTY_INDICATOR_CLASS_NAME } from "@/components/atoms/forms/OptionalPropertyIndicator";
import { LENGTH_INDICATOR_CSS_NAME } from "@/components/atoms/forms/LengthIndicator";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "contact-me--send-me-an-email--content",
    structure: {
        CONTENT_ITEM: {
            ref_value: "content-item",
            ref_type: "CSS_CLASS",
        },
        LINE_ANIMATION_CONTAINER: {
            ref_value: "line-animation-container",
            ref_type: "CSS_CLASS",
        },
        OPTIONALITY_INDICATOR: {
            ref_value: OPTIONAL_PROPERTY_INDICATOR_CLASS_NAME,
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
        LENGTH_INDICATOR: {
            ref_value: LENGTH_INDICATOR_CSS_NAME,
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
    },
});
