// Tools
import { styled } from "@mui/material";
import { createPortal } from "react-dom";
// Types
import type { FunctionComponent, ReactNode } from "react";

const ModalBase = styled("span")(({ theme }) => ({
    position: "fixed",
    width: "100vw",
    height: "100dvh",
    inset: "0 0",
    zIndex: 1,
    ".clickable-background": {
        ...theme.mixins.absolute_full,
        zIndex: 1,
    },
}));

interface ModalWrapperProps {
    children: ReactNode;
    isOpen: boolean;

    close: () => void;
}

const ModalWrapper: FunctionComponent<ModalWrapperProps> = (props) => {
    if (props.isOpen) {
        return createPortal(
            <ModalBase>
                <span className="clickable-background" onClick={props.close} />
                {props.children}
            </ModalBase>,
            document.getElementById("modals-wrapper") as HTMLElement
        );
    }

    return <></>;
};

export default ModalWrapper;
