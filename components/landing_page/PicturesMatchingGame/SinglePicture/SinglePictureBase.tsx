// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/fadeSimple";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
import fadeFromRight from "@/components/_keyframes/fadeFromRight";
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
    "&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5)": {
        animation: `${fadeFromLeft} .3s .1s linear both`,
    },
    "&:nth-of-type(6),&:nth-of-type(7),&:nth-of-type(8),&:nth-of-type(9),&:nth-of-type(10)": {
        animation: `${fadeFromRight} .3s .1s linear both`,
    },
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
    overflow: "hidden",
    //
    // Handle image displaying and fading
    //
    "&::after,&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        height: "100%",
        width: "50%",
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
}));
