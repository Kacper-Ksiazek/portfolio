// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("section")(({ theme }) => ({
    width: "calc(100vw - 40px)",
    margin: "0 auto 64px auto",
    position: "relative",
    padding: "64px 64px 24px 64px",
    ["@media (max-width:1100px)"]: {
        padding: "48px 32px",
        "&.round-left, &.round-right": {
            borderRadius: "20px ",
        },
    },
    ["@media (max-width:600px)"]: {
        padding: "48px 24px",
    },
    ["@media (max-width:500px)"]: {
        width: "calc(100vw - 0px)",
        padding: "32px 12px",
        borderRadius: "0px !important",
    },
}));
