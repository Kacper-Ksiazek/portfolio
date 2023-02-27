// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Styled components
export const CounterWrapperPlaceholder = styled("div")(({ theme }) => ({
    width: "40px",
    height: "40px",
    position: "relative",
    marginLeft: "8px",
}));

export default styled(CounterWrapperPlaceholder)(({ theme }) => ({
    overflow: "hidden",
    cursor: "pointer",
    animation: `${fadeSimple} .3s linear`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ".MuiCircularProgress-svg": {
        color: "#fff",
    },
    ".close-icon": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
}));
