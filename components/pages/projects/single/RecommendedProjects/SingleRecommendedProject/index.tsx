// Types
import type { FunctionComponent } from "react";
import type { RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Other components
import Thumbnail from "./Thumbnail";
import Duration from "@/components/atoms/single_project/Duration";
import TechnologiesList from "@/components/atoms/TechnologiesList";
// Styled components
import ReadMore from "./ReadMore";
import Description from "./Description";
import SingleRecommendedProjectBase from "./Base";
import { Title, Divider } from "./styled_components";

interface SingleRecommendedProjectProps {
    data: RecommendedProject;
    index: number;
    numberOfTechnologiesToDisplay: number;
}

const SingleRecommendedProject: FunctionComponent<SingleRecommendedProjectProps> = ({ data, numberOfTechnologiesToDisplay, ...props }) => {
    return (
        <SingleRecommendedProjectBase className="single-recommended-project">
            {props.index !== 0 ? <Divider className="single-recommended-project-divider" /> : <></>}
            <Thumbnail
                folder={data.folder} //
                id={data.id}
                numberOfFeautres={data.numberOfFeautres}
            />

            <Duration
                end={data.end} //
                start={data.start}
                smaller
                sx={{ margin: 0 }}
            />

            <Title
                className={[
                    data.title.length > 20 ? "long-header" : "", //
                    "single-recommended-project-title",
                ].join(" ")}
            >
                {data.title}
            </Title>

            <TechnologiesList
                technologies={data.releventTechnologies.slice(0, numberOfTechnologiesToDisplay)} //
                small
                doNotWrap
                thereAreMoreTechnologies={data.releventTechnologies.length > numberOfTechnologiesToDisplay}
            />

            <Description text={data.shortDescription} />

            <ReadMore id={data.id} />
        </SingleRecommendedProjectBase>
    );
};

export default SingleRecommendedProject;
