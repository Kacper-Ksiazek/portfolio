// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

const OptionalPropertyExplanationBase = styled("span")(({ theme }) => ({
    position: "relative", //
    display: "flex",
    alignItems: "center",
    paddingLeft: "18px",
    userSelect: "none",
    "span.text": {
        opacity: 0.8,
    },
}));

interface OptionalPropertyExplanationProps {
    id: string;
}

const OptionalPropertyExplanation: FunctionComponent<OptionalPropertyExplanationProps> = (props) => {
    return (
        <>
            <span style={{ flexGrow: 1 }}></span>

            <OptionalPropertyExplanationBase id={props.id}>
                <OptionalPropertIndicator sx={{ top: "50%", transform: "translateY(-50%)" }} />
                <span className="text">- Optional property</span>
            </OptionalPropertyExplanationBase>
        </>
    );
};

export default OptionalPropertyExplanation;
