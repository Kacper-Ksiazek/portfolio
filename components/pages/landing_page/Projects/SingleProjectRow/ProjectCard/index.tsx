// Tools
import { CSS_CLASSES } from "../_css_references";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import ThumbnailWrapper from "./ThumbnailWrapper";
import TextContentWrapper from "./TextContentWrapper";
import Duration from "@/components/atoms/single_project/Duration";
import { Description, Redirections, Technologies, Title } from "./TextContentElements";
// Styled components
import { SingleProjectBase, IntroBar } from "./styled_components";

interface ProjectCardProps {
    data: Project;
    isFirst: boolean;
    order: "even" | "odd";
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
    const { data, order } = props;

    return (
        <SingleProjectBase className={[order, "project-card"].join(" ")}>
            {(() => {
                if (props.isFirst) {
                    return (
                        <>
                            <IntroBar className={CSS_CLASSES.INTRO_BAR_ANIMATIONS.PRIMARY} />
                            <IntroBar className={CSS_CLASSES.INTRO_BAR_ANIMATIONS.SECONDARY} />
                        </>
                    );
                }
            })()}

            <TextContentWrapper order={order}>
                <Technologies data={props.data.releventTechnologies} />

                <Title content={data.title} />
                <Duration end={data.end} start={data.start} smaller />
                <Description content={data.shortDescription} />

                <Redirections id={data.id} liveDemoURL={data.liveDemoURL} />
            </TextContentWrapper>

            <ThumbnailWrapper folder={data.folder} id={data.id} />
        </SingleProjectBase>
    );
};

export default ProjectCard;
