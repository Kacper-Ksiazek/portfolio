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
            onClose={editModeContext.toggleIsOpened}
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

                    "&>*": {
                        height: "42px !important",
                    },

                    [SELECTORS.DESCRIPTION_INPUT]: {
                        width: "100%",
                    },
                    [SELECTORS.URGENCY_SWITCH]: {
                        width: "128px",
                    },
                    [SELECTORS.LABEL_PICKER_SELECT]: {
                        width: "calc(100% - 128px - 12px - 42px)",
                    },
                    [SELECTORS.LABEL_PICKER_ADD_LABEL_BTN]: {
                        marginLeft: "0 !important",
                    },

                    "@media (max-width:500px)": {
                        [SELECTORS.LABEL_PICKER_SELECT]: {
                            width: "calc(100% - 6px - 42px)",
                        },
                        [SELECTORS.URGENCY_SWITCH]: {
                            order: "1",
                        },
                        [SELECTORS.DATE_PICKER]: {
                            order: "2",
                            width: "calc(100% - 128px - 6px)",
                        },
                    },

                    "@media (max-width:430px)": {
                        [SELECTORS.URGENCY_SWITCH]: {
                            width: "100%",
                        },
                        [SELECTORS.DATE_PICKER]: {
                            width: "100%",
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
