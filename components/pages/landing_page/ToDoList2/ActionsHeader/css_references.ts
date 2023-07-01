interface AddNewTaskHTMLStructure<T extends string> {
    URGENCY_SWITCH: T;
    DUE_DATE_PICKER: T;
    LABEL_PICKER_SELECT: T;
    FORM_FIELDS_WRAPPER: T;
    LABEL_PICKER_ADD_NEW_TASK_BUTTON: T;
}

export const CSS_CLASSES: AddNewTaskHTMLStructure<CSSClassName> = {
    URGENCY_SWITCH: "urgency-swtich",
    DUE_DATE_PICKER: "due-date-picker",
    LABEL_PICKER_SELECT: "label-picker-select",
    FORM_FIELDS_WRAPPER: "add-new-task-form-fields-wrapper",
    LABEL_PICKER_ADD_NEW_TASK_BUTTON: "label-picker-add-new-label-btn",
};

export const SELECTORS: AddNewTaskHTMLStructure<Selector> = {
    URGENCY_SWITCH: `.${CSS_CLASSES["URGENCY_SWITCH"]}`,
    DUE_DATE_PICKER: `.${CSS_CLASSES["DUE_DATE_PICKER"]}`,
    LABEL_PICKER_SELECT: `.${CSS_CLASSES["LABEL_PICKER_SELECT"]}`,
    FORM_FIELDS_WRAPPER: `.${CSS_CLASSES["FORM_FIELDS_WRAPPER"]}`,
    LABEL_PICKER_ADD_NEW_TASK_BUTTON: `.${CSS_CLASSES["LABEL_PICKER_ADD_NEW_TASK_BUTTON"]}`,
};
