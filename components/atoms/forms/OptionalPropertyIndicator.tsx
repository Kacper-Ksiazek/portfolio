// Tools
import { SxProps } from "@/@types/MUI";
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled Components
const OptionalPropertIndicatorBase = styled("span")(({ theme }) => ({
    position: "absolute",
    zIndex: 10,
    cursor: "default",
    userSelect: "none",
    top: "2px",
    left: "4px",
    color: theme.palette.primary.main,
    fontSize: "18px",
    fontWeight: "bold",
}));

const OptionalPropertIndicator: FunctionComponent<{ sx?: SxProps }> = (props) => {
    return <OptionalPropertIndicatorBase sx={props.sx}>*</OptionalPropertIndicatorBase>;
};

export default OptionalPropertIndicator;
