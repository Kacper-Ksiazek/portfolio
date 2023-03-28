interface CSSReferenceStructure<T extends CSSClassName | Selector> {
    SINGLE_TASK: {
        SINGLE_TASK_LABEL: T;
    };
}

export const CLASSES: CSSReferenceStructure<CSSClassName> = {
    SINGLE_TASK: {
        SINGLE_TASK_LABEL: "single-task-label",
    },
};
