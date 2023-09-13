// Tools
import { styled } from "@mui/material";
import { MOBILE_LAYOUT_APPLIANCE_BREAKPOINT } from "../";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    right: "8px",
    height: "46px",
    transform: "translateY(-50%)",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [`@media (max-width:${MOBILE_LAYOUT_APPLIANCE_BREAKPOINT}px)`]: {
        top: "36px",
        right: "2px",
    },
}));
