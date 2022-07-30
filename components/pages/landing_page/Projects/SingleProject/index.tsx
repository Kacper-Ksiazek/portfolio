// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import {
    introForFirstProject,
    introForLeftSideProjects,
    introForRightSideProjects,
    outroForFirstProject,
    outroForLeftSideProjects,
    outroForRightSideProjects,
} from "./_keyframes/projectCardBackgroundRectangles";
import { scaleX, scaleXButYearIndicator, timelineCoreEntireIntro, timelineCoreHalfIntro } from "./_keyframes/timeline";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import Timeline from "./Timeline";
import ProjectCard from "./ProjectCard";
import YearToIndicate from "./YearToIndicate";
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
        "&.odd": {
            ".timeline-core": {
                ".timeline-connection": {
                    transformOrigin: "left",
                    "&::before": {
                        animation: `${fadeSimple} .2s .9s both linear`,
                    },
                    "&::after": {
                        animation: `${fadeSimple} .2s .7s both linear`,
                    },
                },
            },
        },
        "&.even": {
            ".timeline-core": {
                ".timeline-connection": {
                    transformOrigin: "right",
                    "&::before": {
                        animation: `${fadeSimple} .2s .9s both linear`,
                    },
                    "&::after": {
                        animation: `${fadeSimple} .2s .7s both linear`,
                    },
                },
            },
        },

        ".project-card": {
            // Elements on left side
            "&.even": {
                ".intro-bar1": {
                    background: theme.palette.secondary.main,
                    zIndex: 10,
                    animation: `${introForLeftSideProjects} .6s 1s linear both , ${outroForLeftSideProjects} .6s 2.1s linear forwards `,
                },
                ".intro-bar2": {
                    background: theme.palette.primary.main,
                    zIndex: 11,
                    animation: `${introForLeftSideProjects} .6s 1.1s linear both , ${outroForLeftSideProjects} .6s 2s linear forwards `,
                },
            },
            // Elements on right side
            "&.odd": {
                ".intro-bar1": {
                    background: theme.palette.secondary.main,
                    zIndex: 10,
                    animation: `${introForRightSideProjects} .6s 1s linear both, ${outroForRightSideProjects} .6s 2.1s linear forwards `,
                },
                ".intro-bar2": {
                    background: theme.palette.primary.main,
                    zIndex: 11,
                    animation: `${introForRightSideProjects} .6s 1.1s linear both, ${outroForRightSideProjects} .6s 2s linear forwards`,
                },
            },
        },

        ".timeline-core": {
            "&::before": {
                animation: `${timelineCoreEntireIntro} .3s .2s both linear`,
            },
            "&.last-project": {
                "&::before": {
                    animation: `${timelineCoreHalfIntro} .3s .2s both linear`,
                },
            },
            ".timeline-connection": {
                animation: `${scaleX} .2s .5s both linear`,
                "&.year-indicator": {
                    animation: `${scaleXButYearIndicator} .2s .5s both linear`,
                },
            },
        },
        "&.first-row": {
            ".project-card": {
                ".intro-bar1": {
                    background: theme.palette.secondary.main,
                    zIndex: 10,
                    animation: `${introForFirstProject} .6s linear both, ${outroForFirstProject} .6s 1.1s linear forwards`,
                },
                ".intro-bar2": {
                    background: theme.palette.primary.main,
                    zIndex: 11,
                    animation: `${introForFirstProject} .6s .1s linear both, ${outroForFirstProject} .6s 1s linear forwards`,
                },
            },
            ".timeline-core": {
                "&.first-project": {
                    "&::before": {
                        top: "50%",
                        animation: `${timelineCoreHalfIntro} .3s 2.5s both linear`,
                    },
                },
                ".timeline-connection": {
                    transformOrigin: "left",
                    animation: `${scaleX} .2s 1.7s both linear`,
                    "&::before": {
                        animation: `${fadeSimple} .2s 2s both linear`,
                    },
                    "&::after": {
                        animation: `${fadeSimple} .2s 2.2s both linear`,
                    },
                },
            },
        },
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
        <VisibilitySensor>
            <SingleProjectRow
                className={[
                    thisRowIsAYearIndicator ? "year-indicating" : "", //
                    isFirst ? "first-row" : "",
                    isLast ? "last-row" : "",
                    order,
                    // "visible",
                ].join(" ")}
            >
                {data.yearToIndicate && <YearToIndicate year={data.yearToIndicate} order={order} />}
                <ProjectCard data={data} order={order} />
                <Timeline isFirst={isFirst} order={order} thisRowIsAYearIndicator={thisRowIsAYearIndicator} isLast={isLast} />
            </SingleProjectRow>
        </VisibilitySensor>
    );
};

export default SingleProject;
