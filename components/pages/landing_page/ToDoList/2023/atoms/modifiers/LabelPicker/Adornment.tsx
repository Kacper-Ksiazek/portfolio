// Tools
import { styled, keyframes } from "@mui/material";
import { LABEL_PICKER_ADORNMENT_CLASS_NAME } from "./css_references";
// Types
import type { FunctionComponent } from "react";
// Styled components
const grayscaleIntroAnimation = keyframes({
    from: {
        filter: "grayscale(1)",
    },
    to: {
        filter: "grayscale(0)",
    },
});

const AdornmentBase = styled("span")(({ theme }) => ({
    width: "16px",
    height: "16px",
    position: "absolute",
    left: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "10px",
    transition: "background .3s",
    animation: `${grayscaleIntroAnimation} .4s 1s both`,
}));

interface AdornmentProps {
    background: string;
}

const Adornment: FunctionComponent<AdornmentProps> = (props) => {
    return (
        <AdornmentBase
            className={LABEL_PICKER_ADORNMENT_CLASS_NAME} //
            sx={{
                background: props.background,
            }}
        />
    );
};

export default Adornment;
