// Tools
import { styled } from "@mui/system";
import { createPortal } from "react-dom";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
import { generateStaticLineAnimations } from "@/utils/client/styled/lineAnimations";
// Types
import type { FunctionComponent } from "react";

const ModalBase = styled("span")(({ theme }) => ({
    position: "fixed",
    inset: "0 0 0 0",
    width: "100vw",
    height: "100vh",
    zIndex: "20",
    ...(generateStaticLineAnimations({
        animations: {
            initialDelay: 0,
            commonDuration: 0.4,
            start: {
                direction: "RIGHT",
            },
            end: {
                direction: "RIGHT",
                delay: 1,
            },
        },
        color: theme.palette.text.secondary,
        sx: {
            zIndex: 9,
            transition: "background .5s",
        },
    }) as any),
    "&::before": {
        content: '""',
        position: "absolute",
        inset: "0 0 0 0",
        width: "100%",
        height: "100%",
        background: theme.palette.background.paper,
        animation: [
            `${fadeSimple} .001s both .8s`, //
            `${fadeSimpleOUT} 1.2s forwards 2s`,
        ].join(", "),
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
