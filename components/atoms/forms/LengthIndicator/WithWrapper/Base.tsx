// Tools
import { styled } from "@mui/material";

function shouldForwardProp(prop: string) {
    return prop !== "column";
}

export default styled("span", { shouldForwardProp })<{ column: boolean }>(({ theme, ...props }) => ({
    position: "relative", //
    display: "flex",
    flexDirection: props.column === true ? "column" : "row",
    ...(props.column === false
        ? {
              gap: "6px",
              alignItems: "flex-end",
          }
        : {
              flexDirection: "column",
          }),
}));
