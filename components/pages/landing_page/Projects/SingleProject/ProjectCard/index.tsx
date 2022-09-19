// Tools
import { useRouter } from "next/router";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import Redirection from "@/components/_styled_components/Redirection";
import Duration from "@/components/pages/_shared/single-project/Duration";
import Thumbnail from "@/components/pages/_shared/single-project/Thumbnail";
import Technologies from "@/components/pages/_shared/single-project/Technologies";
// Styled components
import SingleProjectBase from "./styled_components/SingleProjectBase";
import StyledButton from "@/components/_styled_components/forms/StyledButton";
import SingleProjectTextContent from "./styled_components/SingleProjectTextContent";

interface ProjectCardProps {
    data: Project;
    order: "even" | "odd";
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ data, order }) => {
    const router = useRouter();

    const redirect = () => {
        router.push(`/projects/${data.id}`);
    };

    return (
        <SingleProjectBase className={[order, "project-card"].join(" ")}>
            <span className="intro-bar1" />
            <span className="intro-bar2" />

            <SingleProjectTextContent className="single-project-text-content-wrapper" onClick={redirect}>
                <Technologies technologies={data.releventTechnologies.slice(0, 5)} />
                <Typography variant="h4">
                    <span>{data.title}</span>
                </Typography>
                <Duration end={data.end} start={data.start} smaller />
                <Typography variant="body1" sx={{ mt: "16px" }}>
                    <span> {formatTextViaBolding(data.shortDescription.slice(0, 150))}</span>
                    <span>{data.shortDescription.length > 150 ? " ..." : ""}</span>
                </Typography>

                <div className="read-more">
                    <Redirection url={`/projects/${data.id}`} small>
                        Read more
                    </Redirection>
                </div>
            </SingleProjectTextContent>
            <Thumbnail folder={data.folder} />
        </SingleProjectBase>
    );
};

export default ProjectCard;
