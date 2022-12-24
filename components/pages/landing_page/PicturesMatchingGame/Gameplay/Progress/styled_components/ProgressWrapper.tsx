// Tools
import { alpha, styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
const ProgressWrapper = styled("div")(({ theme }) => ({
    position: "fixed",
    top: "calc(100vh)",
    transform: "translateY(calc(-100% - 32px))",
    right: "20px",
    animation: `${fadeSimple} .3s .2s both`,
    ".progress-row": {
        background: alpha("#000", 0.35),
    },
    ".progress-row, button": {
        padding: "6px 12px",
        width: "166px",
        fontSize: "18px",
        textAlign: "center",
        borderRadius: "5px",
        letterSpacing: "1px",
        boxSizing: "content-box",
    },
    "&.counting-active": {
        ".progress-row": {
            color: alpha("#fff", 0.9),
        },
    },
    "&.is-over": {
        ".progress-row": {
            color: alpha("#fff", 0.9),
            background: alpha("#000", 0.5),
        },
    },
}));

export default ProgressWrapper;
