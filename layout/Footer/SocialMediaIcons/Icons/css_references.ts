// Tools
import { CSS_REFERENCES as FOOTER_CSS_REFERENCES } from "@/layout/Footer/css_references";
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "footer",
    structure: {
        SOCIAL_MEDIA_ICON: {
            ref_value: FOOTER_CSS_REFERENCES.SINGLE_SOCIAL_MEDIAL_ICON,
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
        ACTIVE_SOCIAL_MEDIA_ICON: {
            ref_value: "active",
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
    },
});
