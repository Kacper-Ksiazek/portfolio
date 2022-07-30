// Tools
// Types
import type { FunctionComponent } from "react";
import type { RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import Thumbnail from "./Thumbnail";
import Technologies from "@/components/pages/_shared/single-project/Technologies";
import Duration from "@/components/pages/_shared/single-project/Duration";
// Styled components
import Header from "./styled_components/Header";
import ReadMore from "./styled_components/ReadMore";
import SingleRecommendedProjectBase from "./styled_components/SingleRecommendedProjectBase";

interface SingleRecommendedProjectProps {
    data: RecommendedProject;
}

const SingleRecommendedProject: FunctionComponent<SingleRecommendedProjectProps> = ({ data }) => {
    return (
        <SingleRecommendedProjectBase>
            <Duration end={data.end} start={data.start} smaller />
            <Header>{data.title}</Header>
            <Technologies technologies={data.releventTechnologies.slice(0, 6)} />
            <Thumbnail folder={data.folder} id={data.id} />
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {data.shortDescription}
            </Typography>
            <ReadMore id={data.id} />
        </SingleRecommendedProjectBase>
    );
};

export default SingleRecommendedProject;
