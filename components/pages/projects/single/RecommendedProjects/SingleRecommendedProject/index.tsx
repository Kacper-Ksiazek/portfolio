// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import Thumbnail from "./Thumbnail";
import Duration from "@/components/atoms/single_project/Duration";
import TechnologiesList from "@/components/atoms/TechnologiesList";
// Styled components
import Header from "./styled_components/Header";
import ReadMore from "./styled_components/ReadMore";
import SingleRecommendedProjectBase from "./styled_components/SingleRecommendedProjectBase";

interface SingleRecommendedProjectProps {
    data: RecommendedProject;
    numberOfTechnologiesToDisplay: number;
}

const SingleRecommendedProject: FunctionComponent<SingleRecommendedProjectProps> = ({ data, numberOfTechnologiesToDisplay }) => {
    return (
        <SingleRecommendedProjectBase>
            <Duration end={data.end} start={data.start} smaller />
            <Header className={data.title.length > 20 ? "long-header" : ""}>{data.title}</Header>
            <TechnologiesList
                technologies={data.releventTechnologies.slice(0, numberOfTechnologiesToDisplay)} //
                small
                doNotWrap
                thereAreMoreTechnologies={data.releventTechnologies.length > numberOfTechnologiesToDisplay}
            />
            <Thumbnail folder={data.folder} id={data.id} />
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {formatTextViaBolding(data.shortDescription.slice(0, 150))}
                <span>{` ...`}</span>
            </Typography>
            <ReadMore id={data.id} />
        </SingleRecommendedProjectBase>
    );
};

export default SingleRecommendedProject;
