// Tools
import { SxProps } from "@/@types/MUI";
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled Components
const OptionalPropertyIndicatorBase = styled("span")(({ theme }) => ({
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

export const OPTIONAL_PROPERTY_INDICATOR_CLASS_NAME = "optional-property-indicator";

const OptionalPropertyIndicator: FunctionComponent<{ sx?: SxProps }> = (props) => {
    return (
        <OptionalPropertyIndicatorBase
            sx={props.sx} //
            className={OPTIONAL_PROPERTY_INDICATOR_CLASS_NAME}
        >
            *
        </OptionalPropertyIndicatorBase>
    );
};

export default OptionalPropertyIndicator;
