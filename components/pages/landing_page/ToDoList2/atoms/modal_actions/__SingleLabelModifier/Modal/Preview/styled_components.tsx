// Tools
import { alpha, styled } from "@mui/material";
// Styled components

export const Divider = styled("span")(({ theme }) => ({
    margin: "0 16px",
    width: "1px",
    height: "48px",
    background: alpha("#fff", 0.2),
}));

export const PreviewWrapper = styled("div")(({ theme }) => ({
    ...theme.mixins.flex_center,
    marginBottom: "16px",
    border: `1px solid ${alpha("#fff", 0.2)}`,
    padding: "14px 0",
    borderRadius: "3px",
    transition: "border-color .3s",
    "&.error": {
        borderColor: theme.palette.error.main,
        transition: "border-color .3s .3s",
    },
}));
