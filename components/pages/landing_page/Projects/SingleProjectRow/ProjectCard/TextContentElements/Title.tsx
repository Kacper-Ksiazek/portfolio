// Tools
import { styled } from "@mui/material";
import { CSS_CLASSES } from "../../_css_references";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Typography from "@mui/material/Typography";
// Styled components
const ProjectTitleBase = styled(Typography)(({ theme }) => ({
    "@media (max-width:1400px)": {
        fontSize: "36px",
        marginBottom: "4px",
    },
    ["@media (max-width:750px)"]: {
        fontSize: "36px",
        marginBottom: "4px",
    },
}));

interface TitleProps {
    content: string;
}

const Title: FunctionComponent<TitleProps> = (props) => {
    return (
        <ProjectTitleBase variant="h4" className={CSS_CLASSES.PROJECT_CARD.TITLE}>
            <span>{props.content}</span>
        </ProjectTitleBase>
    );
};

export default Title;
