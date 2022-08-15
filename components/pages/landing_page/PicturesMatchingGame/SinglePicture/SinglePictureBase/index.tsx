// Tools
import { styled } from "@mui/system";
import { SinglePictureBaseRWD } from "./RWD";
import { SinglePictureBaseIntroAnimations } from "./introAnimations";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "130px",
    height: "130px",
    background: "#fff",
    borderRadius: "5px 10px 5px 10px",
    marginLeft: "10px",
    position: "relative",
    color: theme.palette.primary.main,
    cursor: "pointer",
    border: "3px solid #fff",
    boxSizing: "border-box",
    img: {
        borderRadius: "5px 10px 5px 10px",
        transition: "transform .3s",
    },
    transition: "all .3s",
    overflow: "hidden",
    //
    // Handle image displaying and fading
    //
    "&::after,&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        height: "100%",
        width: "52%",
        background: "#fff",
    },
    "&::after": {
        transition: "transform .2s",
        left: "0",
        zIndex: 2,
    },
    "&::before": {
        right: "0",
        transition: "transform .2s",
        zIndex: 1,
    },
    "&:hover": {
        img: {
            transform: "scale(1.02)",
        },
        "span.question-mark": {
            color: "#fff",
        },
        "&::after, &::before": {
            background: theme.palette.primary.main,
        },
    },
    "&.display-image": {
        "&::after": {
            background: theme.palette.primary.main,
            transform: "translateX(calc(-100% - 10px))",
        },
        "&::before": {
            background: theme.palette.secondary.main,
            transform: "translateX(calc(100% + 10px))",
        },
    },
    "&.is-invalid": {
        "&::after, &::before": {
            background: "#fff !important",
            transform: "translateX(0)",
        },
    },
    ...(SinglePictureBaseRWD as any),
    ...(SinglePictureBaseIntroAnimations as any),
}));
