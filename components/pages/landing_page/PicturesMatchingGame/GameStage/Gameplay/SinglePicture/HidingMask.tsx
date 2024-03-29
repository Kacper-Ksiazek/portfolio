// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components

const HidingMaskBase = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "#fff",
    zIndex: 3,
    transition: "opacity .14s linear",
    opacity: 1,
    "&.unfold": {
        opacity: 0,
    },
}));

interface HidingMaskProps {
    unfold: boolean;
}

const HidingMask: FunctionComponent<HidingMaskProps> = (props) => {
    return (
        <HidingMaskBase
            className={[
                "hiding-mask", //
                props.unfold ? "unfold" : "",
            ].join(" ")}
        />
    );
};

export default HidingMask;
