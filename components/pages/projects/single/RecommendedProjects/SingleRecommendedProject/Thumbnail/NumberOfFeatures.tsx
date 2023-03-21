// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components
const NumberOfFeaturesBase = styled("span")(({ theme }) => ({
    position: "absolute",
    bottom: "12px",
    left: "12px",
    fontSize: "16px",
    padding: "4px 12px",
    borderRadius: "3px",
    zIndex: 20,
    color: theme.palette.text.primary,
    overflow: "hidden",
    boxSizing: "border-box",
    strong: {
        marginRight: "4px",
    },
    ...theme.mixins.flex_center,
    "&::after, &::before": {
        content: "''",
        ...theme.mixins.absolute_full,
    },
    "&::before": {
        background: theme.palette.background.lightSectionBackground,
    },
    "&::after": {
        background: theme.palette.primary.main,
    },
}));

interface NumberOfFeaturesProps {
    numberOfFeatures: number;
}

const NumberOfFeatures: FunctionComponent<NumberOfFeaturesProps> = (props) => {
    return (
        <NumberOfFeaturesBase className="single-recommended-project-number-of-features">
            <strong>{props.numberOfFeatures}</strong>
            <span>Photos</span>
        </NumberOfFeaturesBase>
    );
};

export default NumberOfFeatures;
