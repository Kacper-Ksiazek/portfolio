// Tools
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import Link from "next/Link";
import Duration from "@/components/pages/_shared/single-project/Duration";
import Thumbnail from "@/components/pages/_shared/single-project/Thumbnail";
import Technologies from "@/components/pages/_shared/single-project/Technologies";
// Styled components
import Redirection from "./styled_components/Redirection";
import SingleProjectBase from "./styled_components/SingleProjectBase";
import SingleProjectTextContent from "./styled_components/SingleProjectTextContent";

interface ProjectCardProps {
    data: Project;
    order: "even" | "odd";
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ data, order }) => {
    return (
        <SingleProjectBase className={[order, "project-card"].join(" ")}>
            <span className="intro-bar1" />
            <span className="intro-bar2" />

            <Link href={`/projects/${data.id}`}>
                <Redirection />
            </Link>

            <SingleProjectTextContent className="single-project-text-content-wrapper">
                <Technologies technologies={data.releventTechnologies.slice(0, 5)} />
                <Typography variant="h4">
                    <span>{data.title}</span>
                </Typography>
                <Duration end={data.end} start={data.start} smaller />
                <Typography variant="body2" sx={{ mt: "16px" }}>
                    <span> {data.shortDescription}</span>
                </Typography>
            </SingleProjectTextContent>
            <Thumbnail folder={data.folder} />
        </SingleProjectBase>
    );
};

export default ProjectCard;
