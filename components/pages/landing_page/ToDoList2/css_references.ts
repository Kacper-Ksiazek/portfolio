interface CSSReferenceStructure<T extends CSSClassName | Selector> {
    SINGLE_TASK: {
        LABEL: T;
        CHECK_ICON: T;
        BACKGROUND: T;
        DESCRIPTION: T;
    };
}

export const SINGLE_TASK_STAGES = {
    CHECKED: "is-checked",
};

export const CLASSES: CSSReferenceStructure<CSSClassName> = {
    SINGLE_TASK: {
        LABEL: "single-task-label",
        CHECK_ICON: "single-task-check-icon",
        DESCRIPTION: "single-task-title",
        BACKGROUND: "single-task-background",
    },
};

export const SELECTORS: CSSReferenceStructure<Selector> = {
    SINGLE_TASK: Object.keys(CLASSES.SINGLE_TASK).reduce((a, v) => ({ ...a, [v]: `.${CLASSES.SINGLE_TASK[v as keyof typeof CLASSES.SINGLE_TASK]}` }), {}) as any,
};
