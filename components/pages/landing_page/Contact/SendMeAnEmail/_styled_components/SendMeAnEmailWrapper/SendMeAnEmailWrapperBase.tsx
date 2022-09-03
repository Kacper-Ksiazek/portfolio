// Tools
import { styled } from "@mui/system";
import introAnimations from "./introAnimations";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    cursor: "default",
    position: "relative",
    padding: "10px",
    alignSelf: "flex-start",
    height: "540px",
    overflow: "hidden",
    boxSizing: "border-box",
    "div.content": {
        height: "100%",
        width: "100%",
        position: "relative",
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        padding: "20px 10px",
        boxSizing: "border-box",
        ".MuiFormControl-root": {
            "&:not(&:nth-of-type(1))": {
                marginTop: "16px",
            },
        },
        //
        ...(introAnimations as any),
    },
}));
