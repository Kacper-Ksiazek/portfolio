interface CSSReferenceStructure<T extends CSSClassName | Selector> {
    AMOUNT_OF_TASKS: T;
    TASKS_WRAPPER: T;
    FILTERS_WRAPPER: T;
    SINGLE_TASK: {
        LABEL: T;
        CHECK_ICON: T;
        BACKGROUND: T;
        DESCRIPTION: T;
        LABELS_WRAPPER: T;
    };
}

export const SINGLE_TASK_STAGES = {
    CHECKED: "is-checked",
    DELETING: "is-deleting",
    URGENT: "is-urgent",
    IN_EDIT_MODE: "is-in-edit-mode",
};

export const CLASSES: CSSReferenceStructure<CSSClassName> = {
    AMOUNT_OF_TASKS: "to-do-list-amount-of-tasks",
    TASKS_WRAPPER: "tasks-wrapper",
    FILTERS_WRAPPER: "filters-wrapper",
    SINGLE_TASK: {
        LABEL: "single-task-label",
        CHECK_ICON: "single-task-check-icon",
        DESCRIPTION: "single-task-title",
        BACKGROUND: "single-task-background",
        LABELS_WRAPPER: "single-task-labels-wrapper",
    },
};

export const SELECTORS: CSSReferenceStructure<Selector> = {
    AMOUNT_OF_TASKS: `.${CLASSES.AMOUNT_OF_TASKS}`,
    TASKS_WRAPPER: `.${CLASSES.TASKS_WRAPPER}`,
    FILTERS_WRAPPER: `.${CLASSES.FILTERS_WRAPPER}`,
    SINGLE_TASK: Object.keys(CLASSES.SINGLE_TASK).reduce((a, v) => ({ ...a, [v]: `.${CLASSES.SINGLE_TASK[v as keyof typeof CLASSES.SINGLE_TASK]}` }), {}) as any,
};
