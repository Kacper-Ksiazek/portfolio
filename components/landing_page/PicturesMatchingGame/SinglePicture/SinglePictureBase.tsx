// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/fadeSimple";
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
    "&:nth-of-type(1)": {
        marginBottom: "10px",
        marginLeft: "0",
    },
    "&:nth-of-type(6)": {
        marginLeft: "0",
    },
    "span.question-mark": {
        fontWeight: 700,
        fontFamily: "Montserrat Alternates",
        fontSize: "48px",
        userSelect: "none",
        position: "absolute",
        zIndex: 4,
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: theme.palette.primary.main,
        animation: `${fadeSimple} .3s .1s linear both`,
    },
    transition: "all .3s",
    //
    // Handle image displaying and fading
    //
    "&::after,&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        borderRadius: "5px 10px 5px 10px",
    },
    "&::after": {
        transition: "transform .3s",
        zIndex: 2,
        background: "#fff",
    },
    "&::before": {
        transition: "transform .3s .1s",
        zIndex: 1,
        background: "transparent",
    },
    "&:hover": {
        img: {
            transform: "scale(1.02)",
        },
        "span.question-mark": {
            color: "#fff",
        },
        "&::after": {
            background: theme.palette.primary.main,
        },
    },
    "&.display-image": {
        "&::after": {
            background: theme.palette.primary.main,
            transform: "scale(0)",
        },
        "&::before": {
            background: theme.palette.secondary.main,
            transform: "scale(0)",
        },
    },
    "&.is-invalid": {
        "&::after": {
            transform: "scale(1)",
            background: "#fff",
        },
        "&::before": {
            transform: "scale(1)",
        },
    },
}));
