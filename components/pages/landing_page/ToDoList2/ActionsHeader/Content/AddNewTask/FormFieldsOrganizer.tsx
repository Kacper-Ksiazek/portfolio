// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    margin: "8px 0 16px 0",
    width: "100%",
    "&>*": {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "8px",
        },
    },
}));
