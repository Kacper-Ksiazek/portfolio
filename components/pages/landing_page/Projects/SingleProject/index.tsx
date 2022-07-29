// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import Link from "next/Link";
import YearToIndicate from "./YearToIndicate";
import Duration from "@/components/pages/_shared/single-project/Duration";
import Thumbnail from "@/components/pages/_shared/single-project/Thumbnail";
import Technologies from "@/components/pages/_shared/single-project/Technologies";
// Styled components
import Redirection from "./styled_components/Redirection";
import SingleProjectBase from "./styled_components/SingleProjectBase";
import SingleProjectTextContent from "./styled_components/SingleProjectTextContent";

interface SingleProjectProps {
    data: Project;
}

const SingleProject: FunctionComponent<SingleProjectProps> = ({ data }) => {
    return (
        <SingleProjectBase className={data.yearToIndicate ? "year-indicating" : ""}>
            {data.yearToIndicate && <YearToIndicate year={data.yearToIndicate} />}

            <Link href={`/projects/${data.id}`}>
                <Redirection />
            </Link>

            <SingleProjectTextContent className="single-project-text-content-wrapper">
                <Technologies technologies={data.releventTechnologies.slice(0, 5)} />
                <Typography variant="h4">{data.title}</Typography>
                <Duration end={data.end} start={data.start} smaller />
                <Typography variant="body2" sx={{ mt: "16px" }}>
                    {data.shortDescription}
                </Typography>
            </SingleProjectTextContent>
            <Thumbnail folder={data.folder} />
        </SingleProjectBase>
    );
};

export default SingleProject;
