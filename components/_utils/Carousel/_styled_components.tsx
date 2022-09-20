// Tools
import { styled } from "@mui/system";
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
    alignItems: "center",
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
        height: "5px",
        background: "#000",
        transition: "all .3s",
    },
    "&.active": {
        "&:after": {
            transform: "scaleY(2)",
            background: theme.palette.primary.main,
        },
    },
}));
