// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled Components
const ScrollButtonBase = styled(ButtonBase)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "6px 40px",
    color: theme.palette.primary.main,
    animation: `${fadeFromTop} .2s 3s linear both`,
    position: "absolute",
    bottom: "60px",
    fontWeight: 500,
    fontSize: "16px",
    borderRadius: "5px",
    fontFamily: "Montserrat Alternates",
    boxSizing: "border-box",
    overflow: "hidden",
    "span.text": {
        position: "relative",
        zIndex: 2,
        transition: "color .3s",
    },
    transition: "padding .3s",
    "&::after": {
        content: "''",
        position: "absolute",
        width: "110%",
        height: "calc(100% + 10px)",
        background: theme.palette.primary.main,
        transform: "translateY(110%)",
        transition: "transform .3s linear",
    },
    "&:hover": {
        padding: "6px 50px",
        "span.text": {
            color: "#fff",
        },
        "&::after": {
            transform: "translateY(-5px)",
        },
    },
    ["@media (max-width:800px)"]: {
        bottom: "20px",
    },
}));

const ScrollButton: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <ScrollButtonBase>
            <span className="text">Scroll down</span>
        </ScrollButtonBase>
    );
};

export default ScrollButton;
