// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { DUE_DATE_PICKER_CLASS_NAME } from "../../../../../../atoms/forms/StyledDatePicker";
import { LABEL_PICKER_SELECT_CLASS_NAME, LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME } from "../../../atoms/modifiers/LabelPicker";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--actions-header--add-new-task",
    structure: {
        FORM_FIELDS: {
            WRAPPER: {
                ref_value: "fields-wrapper",
            },

            URGENCY_SWITCH: {
                ref_value: "urgency-swtich",
            },
            DUE_DATE_PICKER: {
                ref_type: "CSS_CLASS",
                skipAlias: true,
                ref_value: DUE_DATE_PICKER_CLASS_NAME,
            },

            LABEL_PICKER: {
                SELECT: {
                    ref_type: "CSS_CLASS",
                    skipAlias: true,
                    ref_value: LABEL_PICKER_SELECT_CLASS_NAME,
                },
                ADD_NEW_TASK_BUTTON: {
                    ref_type: "CSS_CLASS",
                    skipAlias: true,
                    ref_value: LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME,
                },
            },
        },

        BUTTONS: {
            WRAPPER: {
                ref_value: "actions-wrapper",
            },

            HIDE_PANEL: {
                ref_value: "hide-panel-switch",
            },
            ADD_NEW_TASK: {
                ref_value: "add-new-task-btn",
            },
        },
    },
});
