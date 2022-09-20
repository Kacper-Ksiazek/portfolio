// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    ["@media (max-width:500px)"]: {
        width: "100%",
    },
    a: {
        textDecoration: "none !important",
    },
    "&:not(&:nth-of-type(1))": {
        marginLeft: "8px",
        ["@media (max-width:500px)"]: {
            display: "block",
            marginTop: "8px",
            marginLeft: "0px",
        },
    },
}));
