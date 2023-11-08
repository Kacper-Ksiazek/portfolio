// Tools
import { styled, alpha } from "@mui/material";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { CSS_REFERENCES } from "components/pages/projects/single/RecommendedProjects/SingleRecommendedProject/css_references";
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
        <DescriptionBase className={CSS_REFERENCES.DESCRIPTION}>
            {formatTextViaBolding(props.text.slice(0, 130))}
            <span>...</span>
        </DescriptionBase>
    );
};

export default Description;
