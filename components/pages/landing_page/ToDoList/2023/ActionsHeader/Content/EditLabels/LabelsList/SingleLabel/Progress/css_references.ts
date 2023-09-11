// Tools

import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--actions-header--edit-labels--single-label--progress",
    structure: {
        PROGRESS_BAR: {
            ref_value: "progress-bar",
            ref_type: "CSS_CLASS",
        },
        THERE_ARE_NO_TASK: {
            ref_value: "there-are-no-task",
            ref_type: "CSS_CLASS",
        },
        COMPLETION_TRACKER: {
            ref_value: "completion-tracker",
            ref_type: "CSS_CLASS",
        },
    },
});
