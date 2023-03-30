// Tools
import { styled } from "@mui/material";

export const ManageWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    right: "8px",
    transform: "translateY(-50%)",
    ...theme.mixins.flex_center,
    color: "#fff",
    cursor: "pointer",
}));

export const ModalBase = styled("span")(({ theme }) => ({
    position: "fixed",
    width: "100vw",
    height: "100dvh",
    inset: "0 0",
    zIndex: 1,
    ".clickable-background": {
        ...theme.mixins.absolute_full,
        zIndex: 1,
    },
}));
