// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("h3")(({ theme }) => ({
    fontSize: "32px",
    cursor: "default",
    margin: "2px 0 8px 0",
    ["@media (min-width: 680px)"]: {
        "&.long-header": {
            fontSize: "28px",
            ["@media (max-width:1510px)"]: {
                fontSize: "28px",
            },
            ["@media (max-width:1430px)"]: {
                fontSize: "24px",
            },
            ["@media (max-width:1300px)"]: {
                fontSize: "32px",
            },
            ["@media (max-width:1060px)"]: {
                fontSize: "28px",
            },
            ["@media (max-width:930px)"]: {
                fontSize: "24px",
                lineHeight: "24px",
                margin: "4px 0 8px 0",
            },
        },
        ["@media (max-width:930px)"]: {
            margin: "0px 0 8px 0",
        },
    },

    ["@media (max-width:680px)"]: {
        fontSize: "32px",
        margin: "0px 0 4px 0",
    },
    ["@media (max-width:500px)"]: {
        fontSize: "28px",
        margin: "4px 0 12px 0",
    },
}));
