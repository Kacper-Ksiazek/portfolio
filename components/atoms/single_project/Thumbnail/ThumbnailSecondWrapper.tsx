// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "calc(100% - 10px)",
    height: "calc(100% - 10px)",
    zIndex: 3,
    img: {
        transition: "transform .5s",
    },
    "&:hover": {
        img: {
            transform: "scale(1.1)",
        },
    },
}));
