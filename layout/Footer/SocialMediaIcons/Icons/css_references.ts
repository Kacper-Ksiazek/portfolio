// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "footer",
    structure: {
        SOCIAL_MEDIA_ICON: {
            ref_value: "social-media-icon-wrapper",
            ref_type: "CSS_CLASS",
        },
        ACTIVE_SOCIAL_MEDIA_ICON: {
            ref_value: "active",
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
    },
});
