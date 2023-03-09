// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import Title from "./Title";
import Description from "./Description";
import Redirections from "./Redirections";
import ThumbnailWrapper from "./ThumbnailWrapper";

import Duration from "@/components/atoms/single_project/Duration";
import TechnologiesList from "@/components/atoms/TechnologiesList";
// Styled components
import { SingleProjectBase, SingleProjectTextContent } from "./styled_components";

interface ProjectCardProps {
    data: Project;
    order: "even" | "odd";
    numberOfTechnologiesToDisplay: number;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
    const { data, order, numberOfTechnologiesToDisplay } = props;

    return (
        <SingleProjectBase className={[order, "project-card"].join(" ")}>
            <span className="intro-bar1" />
            <span className="intro-bar2" />

            <SingleProjectTextContent className="single-project-text-content-wrapper">
                <TechnologiesList
                    technologies={data.releventTechnologies.slice(0, numberOfTechnologiesToDisplay)} //
                    doNotWrap
                    small
                    thereAreMoreTechnologies={data.releventTechnologies.length > numberOfTechnologiesToDisplay}
                />
                <Title content={data.title} />
                <Duration end={data.end} start={data.start} smaller />
                <Description content={data.shortDescription} />

                <Redirections id={data.id} liveDemoURL={data.liveDemoURL} />
            </SingleProjectTextContent>
            <ThumbnailWrapper folder={data.folder} id={data.id} />
        </SingleProjectBase>
    );
};

export default ProjectCard;
