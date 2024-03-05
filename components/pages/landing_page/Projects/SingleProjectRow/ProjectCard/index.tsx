// Tools
import { useState } from "react";
import { CSS_REFERENCES } from "../css_references";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import ThumbnailWrapper from "./ThumbnailWrapper";
import TextContentWrapper from "./TextContentWrapper";
import Duration from "@/components/atoms/single_project/Duration";
import { Description, Redirections, Technologies, Title, ProjectType } from "./Content";
// Styled components
import SingleProjectBase from "./Base";

interface ProjectCardProps {
    /** Data of the project. */
    data: Project;
    /* Defines if this is the first project card in the row. */
    isFirst: boolean;
    /** Defines the order of the text content and thumbnail. */
    order: "even" | "odd";
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
    const { data, order } = props;

    const [showEntireDescription, setShowEntireDescription] = useState<boolean>(false);

    return (
        <SingleProjectBase
            className={[
                order, //
                CSS_REFERENCES.PROJECT_CARD.WRAPPER,
                showEntireDescription ? "hide-thumbnail" : "",
            ].join(" ")}
        >
            <TextContentWrapper
                className={CSS_REFERENCES.PROJECT_CARD.TEXT_CONTENT_WRAPPER} //
                order={order}
            >
                <Technologies data={props.data.releventTechnologies} />

                <Title content={data.title} />

                <Duration
                    className={CSS_REFERENCES.PROJECT_CARD.DURATION} //
                    end={data.end}
                    start={data.start}
                    smaller
                />

                <ProjectType type={data.type} />

                <Description
                    order={order} //
                    content={data.shortDescription}
                    showEntireText={showEntireDescription}
                    setShowEntireText={setShowEntireDescription}
                />

                <Redirections
                    id={data.id} //
                    hasSubpage={data.hasSubpage}
                    liveDemoURL={data.liveDemoURL}
                />
            </TextContentWrapper>

            <ThumbnailWrapper
                id={data.id} //
                folder={data.folder}
                disableOnClick={data.type === "HACKATHON"}
            />
        </SingleProjectBase>
    );
};

export default ProjectCard;
