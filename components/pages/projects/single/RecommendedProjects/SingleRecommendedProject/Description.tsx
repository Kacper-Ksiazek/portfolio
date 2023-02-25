// Tools
import { styled, alpha } from "@mui/material";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
// Styled Components
const DescriptionBase = styled("p")(({ theme }) => ({
    color: alpha(theme.palette.text.primary, 0.8),
    fontSize: "18px",
    mt: "8px",
    cursor: "default",
    minHeight: "100px",
    "@media (max-width:1300px)": {
        minHeight: "75px",
    },
}));

const Description: FunctionComponent<{ text: string }> = (props) => {
    return (
        <DescriptionBase className="single-recommended-project-description">
            {formatTextViaBolding(props.text.slice(0, 150))}
            {/*  */}
        </DescriptionBase>
    );
};

export default Description;
