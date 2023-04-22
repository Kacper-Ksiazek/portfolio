// Tools
import { styled } from "@mui/material";

export default styled("div", {
    shouldForwardProp: (prop: string) => !["width"].includes(prop),
})<{ width: `${string}%` }>(({ theme, ...props }) => ({
    width: props.width,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "6px",
    },
}));
