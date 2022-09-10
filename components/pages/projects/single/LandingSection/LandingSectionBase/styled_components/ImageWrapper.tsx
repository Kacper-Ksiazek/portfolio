// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    img: {
        transition: "transform 1s",
        maxHeight: "110% !important",
        height: "110% !important",
    },
}));
