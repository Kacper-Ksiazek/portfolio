// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeFromLeft } from "@/components/keyframes/intro";
// Styled components
export default styled("div")(({ theme }) => ({
    display: " flex",
    alignItems: "center",
    width: "100%",
    padding: "5px 10px",
    background: theme.palette.text.secondary,
    borderRadius: "3px",
    cursor: "default",
    color: theme.palette.text.primary,
    position: "relative",
    transition: "all .3s .3s",
    boxSizing: "border-box",
    overflow: "hidden",
    maxHeight: "55px",
    "&.freshlyCreated": {
        animation: `${fadeFromLeft} .5s backwards`,
        button: {
            "&:nth-of-type(1)": {
                animation: `${fadeSimple} .3s .4s backwards`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimple} .3s .5s backwards`,
            },
        },
    },
    "span.text": {
        width: "calc(100% - 100px)",
        transition: "opacity .3s .2s",
    },

    "&.deleting": {
        transform: "scaleY(0)",
        maxHeight: 0,
        marginTop: "0px !important",
        padding: 0,
    },
    ["@media (max-width:800px)"]: {
        maxHeight: "100px",
    },
}));
