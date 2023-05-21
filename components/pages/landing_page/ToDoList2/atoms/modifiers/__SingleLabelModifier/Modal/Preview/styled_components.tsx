// Tools
import { alpha, styled } from "@mui/material";

export const Label = styled("span")(({ theme }) => ({
    ...theme.mixins.flex_center,
    border: "2px solid",
    fontSize: "14px",
    padding: "2px 6px",
    borderRadius: "3px",
    userSelect: "none",
    boxSizing: "border-box",
    transition: "all .3s",
    height: "27px",
    minWidth: "100px",
}));

export const Divider = styled("span")(({ theme }) => ({
    margin: "0 16px",
    width: "2px",
    height: "48px",
    background: alpha("#fff", 0.2),
}));

export const PreviewWrapper = styled("div")(({ theme }) => ({
    ...theme.mixins.flex_center,
    marginBottom: "16px",
    border: `2px solid ${alpha("#fff", 0.2)}`,
    padding: "14px 0",
    borderRadius: "3px",
}));
