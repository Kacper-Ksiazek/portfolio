// Tools
import { styled } from "@mui/material";
// Types
import type { Release } from "../@types";

export interface HeaderElementProps {
    currentRelease: Release;
    isChanging: boolean;
}

// Styled components
export const HeaderElementBase = styled("span", {
    shouldForwardProp: (prop) => prop !== "isChanging",
})<{ isChanging: boolean }>(({ theme, ...props }) => ({
    opacity: props.isChanging ? 0 : 1,
    transition: "opacity .3s ease-in-out",
}));
