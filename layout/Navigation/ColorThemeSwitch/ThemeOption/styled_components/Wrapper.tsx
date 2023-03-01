// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "relative",
    "&.menu-item": {
        marginTop: "16px",
        "&:nth-of-type(1)": {
            paddingLeft: "64px",
        },
        "&:nth-of-type(2)": {
            paddingLeft: "86px",
        },
    },
}));
