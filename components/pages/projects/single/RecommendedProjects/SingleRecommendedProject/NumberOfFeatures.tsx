// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Styled components
const NumberOfFeaturesBase = styled("span")(({ theme }) => ({
    position: "absolute",
    bottom: "8px",
    left: "12px",
    background: theme.palette.primary.main,
    fontSize: "14px",
    padding: "2px 16px",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
    color: "#fff",
    overflow: "hidden",
    strong: {
        marginLeft: "4px",
    },
}));

interface NumberOfFeaturesProps {
    numberOfFeatures: number;
}

const NumberOfFeatures: FunctionComponent<NumberOfFeaturesProps> = (props) => {
    return (
        <NumberOfFeaturesBase className="number-of-features">
            <span>Features: </span>
            <strong>{props.numberOfFeatures}</strong>
        </NumberOfFeaturesBase>
    );
};

export default NumberOfFeatures;
