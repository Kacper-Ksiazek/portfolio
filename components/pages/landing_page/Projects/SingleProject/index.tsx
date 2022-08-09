// Tools
import dynamic from "next/dynamic";
import { styled } from "@mui/system";
import useWindowSizes from "@/hooks/useWindowSizes";
import introAnimationsFor1301pxAndUpDisplay from "./intro_animations/1301px_and_up";
import introAnimationsFor1000pxTo1300pxDisplay from "./intro_animations/1000px_to_1300px";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import ProjectCard from "./ProjectCard";
import YearToIndicate from "./YearToIndicate";
const Timeline = dynamic(() => import("./Timeline"));
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
// Styled components

const SingleProjectRow = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    justifyContent: "flex-end",
    visibility: "hidden",
    "&.even": {
        flexDirection: "row-reverse",
    },
    "&.year-indicating": {
        paddingTop: "160px",
    },
    "&.visible": {
        visibility: "visible",
        ["@media (min-width:1301px)"]: introAnimationsFor1301pxAndUpDisplay,
        ["@media (min-width:1000px) and (max-width: 1300px)"]: introAnimationsFor1000pxTo1300pxDisplay,
        ["@media (max-width:1000px)"]: {
            flexDirection: "column",
            "&.year-indicating": {
                paddingTop: "16px",
            },
        },
    },
}));

interface SingleProjectProps {
    data: Project;
    isLast: boolean;
    isFirst: boolean;
    index: number;
    order: "even" | "odd";
}

const SingleProject: FunctionComponent<SingleProjectProps> = (props) => {
    const { data, order, isFirst, isLast } = props;
    const { width } = useWindowSizes();

    const thisRowIsAYearIndicator: boolean = !isFirst && Boolean(props.data.yearToIndicate);

    return (
        <VisibilitySensor observerID={width > 1300 && [0, 1, 2].includes(props.index) ? "SINGLE_PROJECT" : undefined}>
            <SingleProjectRow
                className={[
                    thisRowIsAYearIndicator ? "year-indicating" : "", //
                    isFirst ? "first-row" : "",
                    isLast ? "last-row" : "",
                    order,
                ].join(" ")}
            >
                {data.yearToIndicate && <YearToIndicate year={data.yearToIndicate} order={order} />}
                <ProjectCard data={data} order={order} />

                {(() => {
                    if (width > 1300) {
                        return (
                            <Timeline
                                isFirst={isFirst} //
                                order={order}
                                thisRowIsAYearIndicator={thisRowIsAYearIndicator}
                                isLast={isLast}
                            />
                        );
                    }
                })()}
            </SingleProjectRow>
        </VisibilitySensor>
    );
};

export default SingleProject;
