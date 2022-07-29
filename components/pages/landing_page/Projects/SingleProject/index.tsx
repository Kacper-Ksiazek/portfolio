// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import Timeline from "./Timeline";
import ProjectCard from "./ProjectCard";
import YearToIndicate from "./YearToIndicate";
// Styled components

const SingleProjectRow = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    justifyContent: "flex-end",
    "&:nth-of-type(odd)": {
        flexDirection: "row-reverse",
    },
    "&.year-indicating": {
        paddingTop: "160px",
    },
}));

interface SingleProjectProps {
    data: Project;
    isLast: boolean;
    isFirst: boolean;
    order: "even" | "odd";
}

const SingleProject: FunctionComponent<SingleProjectProps> = (props) => {
    const { data, order, isFirst, isLast } = props;

    const thisRowIsAYearIndicator: boolean = !isFirst && Boolean(props.data.yearToIndicate);

    return (
        <SingleProjectRow className={thisRowIsAYearIndicator ? "year-indicating" : ""}>
            {data.yearToIndicate && <YearToIndicate year={data.yearToIndicate} order={order} />}
            <ProjectCard data={data} order={order} />
            <Timeline isFirst={isFirst} order={order} thisRowIsAYearIndicator={thisRowIsAYearIndicator} isLast={isLast} />
        </SingleProjectRow>
    );
};

export default SingleProject;
