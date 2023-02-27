// Tools
import { styled } from "@mui/material";
// Styled components
export const CarosuelWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    flexGrow: "1",
    overflow: "hidden",
}));
export const ChildrenElementsWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "0",
    height: "100%",
    left: "0",
    display: "flex",
    justifyContent: "space-between",
    transition: "transform .3s",
}));

export const NavigationWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    "&.position-left": {
        justifyContent: "flex-start",
    },
    "&.position-center": {
        justifyContent: "center",
    },
    "&.position-right": {
        justifyContent: "flex-end",
    },
    "@media (max-width:500px)": {
        justifyContent: "center !important",
    },
}));

export const SingleNagivationStep = styled("span")(({ theme }) => ({
    width: "40px",
    height: "30px",
    cursor: "pointer",
    borderRadius: "1px",
    position: "relative",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "10px",
    },
    "&:after": {
        bottom: 0,
        position: "absolute",
        content: "''",
        width: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        height: "5px",
        background: theme.palette.text.primary,
        transition: "all .3s",
    },
    "&.active": {
        "&:after": {
            transform: "translateY(-50%) scaleY(2)",
            background: theme.palette.primary.main,
        },
    },
}));
