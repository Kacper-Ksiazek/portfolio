// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% + 64px)",
    cursor: "default",
    position: "relative",
    alignSelf: "flex-start",
    height: "460px",
    boxSizing: "border-box",
    paddingTop: "24px",
    "@media (max-width:1000px)": {
        width: "100%",
        marginTop: "24px",
        height: "500px",
    },
}));
