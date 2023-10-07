// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    a: {
        height: "42px",
        padding: "0px 32px",
        "&:not(&:nth-of-type(1))": {
            marginLeft: "10px",
        },
    },
}));
