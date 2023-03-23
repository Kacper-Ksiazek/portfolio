// Tools
import { alpha, styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Styled components
const ProgressWrapper = styled("div")(({ theme }) => ({
    "@media (min-width:601px)": {
        animation: `${fadeSimple} .3s .2s both`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".progress-row": {
            height: "50px",
            "&:not(&:nth-of-type(1))": {
                marginLeft: "10px",
                marginTop: "0",
            },
        },
    },
    "@media (max-width:600px)": {
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        ".progress-row": {
            boxSizing: "border-box !important",
            marginTop: "0 !important",
            marginLeft: "0 !important",
            height: "58px",
            "&:nth-of-type(1)": {
                width: "100%",
                marginBottom: "10px",
            },
            "&:nth-of-type(2), &:nth-of-type(3)": {
                width: "calc(50% - 5px)",
            },
        },
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
    ".progress-row": {
        background: alpha("#000", 0.35),
        color: alpha("#fff", 0.3),
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
