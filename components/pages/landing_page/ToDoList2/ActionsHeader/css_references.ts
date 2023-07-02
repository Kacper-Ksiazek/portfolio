// Tools
import { DUE_DATE_PICKER_CLASS_NAME } from "../atoms/modifiers/DueDatePicker";
import { LABEL_PICKER_SELECT_CLASS_NAME, LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME } from "../atoms/modifiers/LabelPicker";

interface AddNewTaskHTMLStructure<T extends string> {
    FORM_FIELDS: {
        WRAPPER: T;

        URGENCY_SWITCH: T;
        DUE_DATE_PICKER: T;

        LABEL_PICKER: {
            SELECT: T;
            ADD_NEW_TASK_BUTTON: T;
        };
    };

    BUTTONS: {
        WRAPPER: T;

        HIDE_PANEL: T;
        ADD_NEW_TASK: T;
    };
}

export const CSS_CLASSES: AddNewTaskHTMLStructure<CSSClassName> = {
    FORM_FIELDS: {
        WRAPPER: "add-new-task-form-fields-wrapper",

        URGENCY_SWITCH: "urgency-swtich",
        DUE_DATE_PICKER: DUE_DATE_PICKER_CLASS_NAME,

        LABEL_PICKER: {
            SELECT: LABEL_PICKER_SELECT_CLASS_NAME,
            ADD_NEW_TASK_BUTTON: LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME,
        },
    },

    BUTTONS: {
        WRAPPER: "add-new-task-actions-wrapper",

        HIDE_PANEL: "add-new-task-actions-hide-panel",
        ADD_NEW_TASK: "add-new-task-actions-confirmation-buttonc",
    },
};

export const SELECTORS: AddNewTaskHTMLStructure<Selector> = {
    FORM_FIELDS: {
        WRAPPER: `.${CSS_CLASSES.FORM_FIELDS["WRAPPER"]}`,

        URGENCY_SWITCH: `.${CSS_CLASSES.FORM_FIELDS["URGENCY_SWITCH"]}`,
        DUE_DATE_PICKER: `.${CSS_CLASSES.FORM_FIELDS["DUE_DATE_PICKER"]}`,

        LABEL_PICKER: {
            SELECT: `.${CSS_CLASSES.FORM_FIELDS.LABEL_PICKER["SELECT"]}`,
            ADD_NEW_TASK_BUTTON: `.${CSS_CLASSES.FORM_FIELDS.LABEL_PICKER["ADD_NEW_TASK_BUTTON"]}`,
        },
    },

    BUTTONS: {
        WRAPPER: `.${CSS_CLASSES.BUTTONS["WRAPPER"]}`,

        HIDE_PANEL: `.${CSS_CLASSES.BUTTONS["HIDE_PANEL"]}`,
        ADD_NEW_TASK: `.${CSS_CLASSES.BUTTONS["ADD_NEW_TASK"]}`,
    },
};
