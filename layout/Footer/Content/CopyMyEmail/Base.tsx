// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    ...theme.mixins.flex_center,
    flexDirection: "column",
    height: "100%",
}));
