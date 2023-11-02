// Tools
import { CSS_REFERENCES } from "../../../css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { ProjectType as I_ProjectType } from "@prisma/client";
// Material UI Icons
import FestivalRoundedIcon from "@mui/icons-material/FestivalRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
// Styled components
import ProjectTypeBase from "./Base";

const MESSAGES: Record<I_ProjectType, ReactNode> = {
    COMMERCIAL: "commercial project",
    PERSONAL: "personal project",
    HACKATHON: "hackathon",
};

const ICONS: Record<I_ProjectType, ReactNode> = {
    COMMERCIAL: <WorkRoundedIcon />,
    PERSONAL: <AutoStoriesRoundedIcon sx={{ transform: "translateY(1px)" }} />,
    HACKATHON: <FestivalRoundedIcon />,
};

interface ProjectTypeProps {
    type: I_ProjectType;
}

const ProjectType: FunctionComponent<ProjectTypeProps> = (props) => {
    return (
        <span
            className={CSS_REFERENCES.PROJECT_CARD.PROJECT_TYPE} //
            style={{
                alignSelf: "flex-start", //
                margin: "4px 0",
            }}
        >
            <ProjectTypeBase type={props.type}>
                {ICONS[props.type]}
                <span>{MESSAGES[props.type]}</span>
            </ProjectTypeBase>
        </span>
    );
};

export default ProjectType;
