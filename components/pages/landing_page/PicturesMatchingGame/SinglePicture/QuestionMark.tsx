// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
const QuestionMarkBase = styled("span")(({ theme }) => ({
    fontWeight: 700,
    fontFamily: "Montserrat Alternates",
    fontSize: "48px",
    userSelect: "none",
    position: "absolute",
    zIndex: 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: theme.palette.primary.main,
    animation: `${fadeSimple} .3s .1s linear both`,
}));

const QuestionMark: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return <QuestionMarkBase className="question-mark">?</QuestionMarkBase>;
};

export default QuestionMark;
