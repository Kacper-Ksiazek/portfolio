// Tools
import { styled } from "@mui/material";
// Styled components
export type Direction = "left" | "right";

export default styled("span", {
    shouldForwardProp: (prop: string) => !["direction"].includes(prop),
})<{ direction: Direction }>(({ theme, ...props }) => ({
    ...theme.mixins.absolute_full,
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "center ",
    backgroundSize: "cover !important",
    background: `url(/images/components/dark-section-wrapper/${theme.palette.mode}/${props.direction}.svg)`,
}));
