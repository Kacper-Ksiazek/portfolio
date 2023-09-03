// Tools
import { SELECTORS } from "./css_references";
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Modal from "@/components/atoms/content_placement/Modal";

const CONTENT_WRAPPER_CLASS_NAME: CSSClassName = "modal-content-wrapper";

interface ModalWrapperProps {
    children: ReactNode;
}

const ModalWrapper: FunctionComponent<ModalWrapperProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <Modal
            isOpen={editModeContext.isOpened}
            onClose={editModeContext.discardChanges}
            title="Edit task"
            actionButton={{
                prompt: "Save",
                onClick: editModeContext.saveAndExit,
                disabled: false,
            }}
            sx={{
                [`&>div.${CONTENT_WRAPPER_CLASS_NAME}`]: {
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",

                    // Row 1
                    [SELECTORS.LABEL_PICKER]: {
                        width: "calc(100% - 210px - 6px - 128px - 6px)",
                    },
                    [SELECTORS.DATE_PICKER]: {
                        width: "210px",
                    },
                    [SELECTORS.URGENCY_SWITCH]: {
                        width: "128px",
                        button: {
                            width: "100%",
                        },
                    },

                    // Row 2
                    [SELECTORS.DUE_TIME_PICKER]: {
                        width: "148px",
                    },
                    [SELECTORS.LOCALIZATION_PICKER]: {
                        width: "calc(100% - 148px - 6px)",
                    },

                    // Row 3
                    [SELECTORS.DESCRIPTION_INPUT]: {
                        width: "100%",
                        ".MuiFormControl-root": {
                            height: "80px",
                            ".MuiOutlinedInput-root": {
                                height: "100%",
                            },
                        },
                    },

                    "@media (max-width:720px)": {
                        // Row 1
                        [SELECTORS.LABEL_PICKER]: {
                            width: "calc(100% - 128px - 6px)",
                        },

                        // Row 2
                        [SELECTORS.DATE_PICKER]: {
                            width: "calc(50% - 3px)",
                        },
                        [SELECTORS.DUE_TIME_PICKER]: {
                            width: "calc(50% - 3px)",
                        },

                        // Row 3
                        [SELECTORS.LOCALIZATION_PICKER]: {
                            width: "100%",
                        },
                    },

                    "@media (max-width:500px)": {
                        // Row 1
                        [SELECTORS.LABEL_PICKER]: {
                            width: "100%",
                        },

                        // Row 2
                        [SELECTORS.DATE_PICKER]: {
                            width: "calc(100% - 6px - 148px)",
                        },
                        [SELECTORS.DUE_TIME_PICKER]: {
                            width: "144px",
                        },

                        // Row 3
                        [SELECTORS.URGENCY_SWITCH]: {
                            width: "128px",
                            order: 2,
                        },
                        [SELECTORS.LOCALIZATION_PICKER]: {
                            width: "calc(100% - 6px - 128px)",
                            order: 2,
                        },
                        //

                        [SELECTORS.DESCRIPTION_INPUT]: {
                            order: 1,
                            ".MuiFormControl-root": {
                                height: "102px",
                            },
                        },
                    },
                },
            }}
        >
            <div className={CONTENT_WRAPPER_CLASS_NAME}>{props.children}</div>
        </Modal>
    );
};

export default ModalWrapper;
