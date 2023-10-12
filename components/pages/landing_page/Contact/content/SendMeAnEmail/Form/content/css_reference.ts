// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { OPTIONAL_PROPERTY_INDICATOR_CLASS_NAME } from "@/components/atoms/forms/OptionalPropertyIndicator";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "contact-me--send-me-an-email--content",
    structure: {
        CONTENT_ITEM: {
            ref_value: "content-item",
            ref_type: "CSS_CLASS",
        },
        OPTIONALITY_INDICATOR: {
            ref_value: OPTIONAL_PROPERTY_INDICATOR_CLASS_NAME,
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
    },
});
