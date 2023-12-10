// Tools
import { alpha, styled } from "@mui/material";
import { SELECTORS } from "../css_references";
import { fadeSimple } from "@/components/keyframes/intro";
// Styled components
const ProgressWrapper = styled("div")(({ theme }) => ({
    "@media (min-width:601px)": {
        animation: `${fadeSimple} .3s .2s both`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        ">*": {
            height: "50px",
            width: "200px",
            "@media (max-width:800px)": {
                width: "166px",
            },
        },
    },
    "@media (max-width:600px)": {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "4px",
        [SELECTORS.MOVES_COUNTER]: {
            gridArea: "1 / 1 / 2 / 3",
        },
        [SELECTORS.TIMER]: {
            gridArea: "2 / 1 / 3 / 2",
        },
        [SELECTORS.DIFFICULTY]: {
            gridArea: "2 / 2 / 3 / 3",
        },
    },
    ".progress-row, button": {
        padding: "6px 12px",
        fontSize: "18px",
        textAlign: "center",
        borderRadius: "5px",
        letterSpacing: "1px",
        boxSizing: "content-box",
    },
    ".progress-row": {
        color: alpha("#fff", 0.3),
        background:
            theme.palette.mode === "dark" //
                ? alpha("#fff", 0.04)
                : alpha("#000", 0.2),
    },
    "&.counting-active": {
        ".progress-row": {
            color: alpha("#fff", 0.9),
        },
    },
    "&.is-over": {
        ".progress-row": {
            color: alpha("#fff", 0.9),
            background: theme.palette.mode === "dark" ? alpha("#fff", 0.08) : alpha("#000", 0.5),
        },
    },
}));

export default ProgressWrapper;
