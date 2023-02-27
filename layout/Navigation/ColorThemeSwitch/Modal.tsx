// Tools
import { createPortal } from "react-dom";
import { styled, keyframes } from "@mui/material";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { FunctionComponent } from "react";

const intro = keyframes({
    from: {
        transform: "scaleX(0)",
        transformOrigin: "right",
    },
    to: {
        transform: "scaleX(1)",
        transformOrigin: "right",
    },
});

const ModalBase = styled("span")(({ theme }) => ({
    position: "fixed",
    inset: "0 0 0 0",
    width: "100vw",
    height: "100vh",
    zIndex: "20",
    "&::after": {
        content: '""',
        position: "absolute",
        inset: "0 0 0 0",
        width: "100%",
        height: "100%",
        transition: "background .5s",
        background: theme.palette.background.paper,
        animation: `${intro} .3s forwards linear, ${fadeSimpleOUT} .8s 1s both linear`,
    },

    ".content": {
        position: "absolute",
        zIndex: 10,
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        color: "red",
    },
}));

const Modal: FunctionComponent = () => {
    return createPortal(
        <ModalBase />, //
        document.getElementById("modals-wrapper") as HTMLElement
    );
};

export default Modal;
