// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "http_status_code",
    structure: {
        HTTP_STATUS_CODE: {
            ref_value: "http_status_code",
        },
        HTTP_STATUS_CODE_TITLE: {
            ref_value: "http_status_code_title",
        },
        EXPLANATION: {
            ref_value: "explanation",
        },
        AVAILABLE_RESOURCES_SUBHEADER: {
            ref_value: "available_resources_subheader",
        },
        BUTTONS_WRAPPER: {
            ref_value: "buttons_wrapper",
        },
        LEARN_MORE: {
            ref_value: "learn_more",
        },
    },
});
