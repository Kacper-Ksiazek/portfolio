// Tools
import { styled, alpha } from "@mui/material";
import { CSS_CLASSES } from "../_css_references";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
// Styled components
const ProjectDescriptionBase = styled("p")(({ theme }) => ({
    cursor: "default",
    fontSize: "16px",
    marginTop: "16px",
    lineHeight: 1.5,
    color: alpha(theme.palette.text.primary, 0.8),
    flexGrow: 1,
    "@media (max-width:1000px)": {
        fontSize: "18px",
    },
}));

interface TitleProps {
    content: string;
}

const Title: FunctionComponent<TitleProps> = ({ content }) => {
    return (
        <ProjectDescriptionBase className={CSS_CLASSES.PROJECT_CARD.DESCRIPTION}>
            <span> {formatTextViaBolding(content.slice(0, 150))}</span>
            <span>{content.length > 150 ? " ..." : ""}</span>
        </ProjectDescriptionBase>
    );
};

export default Title;
