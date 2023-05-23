// Tools
import { styled } from "@mui/material";
import { ColorInHEX, Label } from "../context/LabelsContext/@types";
// Styled components
interface LabelBaseProps {
    color: "primary" | ColorInHEX;
    isUrgent?: boolean;
}

function shouldForwardProp(prop: string): boolean {
    return !(["color", "name"] as (keyof Label | string)[]).includes(prop);
}

export default styled("span", { shouldForwardProp })<LabelBaseProps>(({ theme, ...props }) => {
    const color = props.color === "primary" ? theme.palette.primary.main : props.color;

    return {
        ...theme.mixins.flex_center,
        border: "2px solid",
        fontSize: "14px",
        padding: "2px 6px",
        borderRadius: "3px",
        userSelect: "none",
        boxSizing: "border-box",
        transition: "all .3s",
        height: "27px",
        borderColor: color,
        ...(props.isUrgent
            ? {
                  color: "#fff",
                  background: color,
              }
            : {
                  color,
              }),
    };
});
