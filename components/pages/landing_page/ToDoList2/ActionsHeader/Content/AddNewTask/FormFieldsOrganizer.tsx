// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    "&>*": {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "8px",
        },
    },
}));
