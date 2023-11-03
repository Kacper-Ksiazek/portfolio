// Tools
import { styled } from "@mui/material";
// Styled components
const _ShapeBig = styled("span")(({ theme }) => ({
    position: "absolute",
    zIndex: 1,
    background: theme.palette.secondary.main,
    height: "60%",
    minWidth: "10px",
    transition: "all .3s",
}));
const _ShapeSmall = styled("span")(({ theme }) => ({
    position: "absolute",
    zIndex: 2,
    background: theme.palette.primary.main,
    width: "40%",
    aspectRatio: "1",
    borderRadius: "4px",
    minWidth: "24px",
    transition: "all .3s",
}));

export const ShapeBottomBig = styled(_ShapeBig)(({ theme }) => ({
    bottom: "0",
    left: "0",
}));
export const ShapeBottomSmall = styled(_ShapeSmall)(({ theme }) => ({
    bottom: "0",
    left: "0",
}));
export const ShapeTopBig = styled(_ShapeBig)(({ theme }) => ({
    top: "0",
    right: "0",
}));
export const ShapeTopSmall = styled(_ShapeSmall)(({ theme }) => ({
    top: "0",
    right: "0",
}));
