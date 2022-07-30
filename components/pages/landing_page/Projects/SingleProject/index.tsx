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

const introScaleYFromTop = keyframes({
    from: {
        height: "0%",
    },
    to: {
        height: "100%",
    },
});
const outroScaleXToRight = keyframes({
    from: {
        left: "auto",
        right: 0,
        width: "100%",
    },
    to: {
        left: "auto",
        right: 0,
        width: "0%",
    },
});
const outroScaleXToLeft = keyframes({
    from: {
        right: "auto",
        left: 0,
        width: "100%",
    },
    to: {
        right: "auto",
        left: 0,
        width: "0%",
    },
});

const introScaleXFromRight = keyframes({
    from: {
        left: "auto",
        right: 0,
        width: "0%",
    },
    to: {
        left: "auto",
        right: 0,
        width: "100%",
    },
});
const introScaleXFromLeft = keyframes({
    from: {
        right: "auto",
        left: 0,
        width: "0%",
    },
    to: {
        right: "auto",
        left: 0,
        width: "100%",
    },
});

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
        ".year-indicator": {
            ".digit": {
                "&:nth-of-type(1)": {
                    animation: `${fadeSimple} .2s .9s both linear`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeSimple} .2s 1.2s both linear`,
                },
                "&:nth-of-type(3)": {
                    animation: `${fadeSimple} .2s 1.5s both linear`,
                },
                "&:nth-of-type(4)": {
                    animation: `${fadeSimple} .2s 1.8s both linear`,
                },
            },
        },
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
            "&::before": {
                animation: `${introScaleYFromTop} .4s 3.6s both ease-out`,
            },
            // Elements on left side
            "&.even": {
                ".intro-bar1": {
                    background: theme.palette.secondary.main,
                    zIndex: 10,
                    animation: `${introForLeftSideProjects} .5s .9s linear both , ${outroForLeftSideProjects} .5s 2s linear forwards `,
                },
                ".intro-bar2": {
                    background: theme.palette.primary.main,
                    zIndex: 11,
                    animation: `${introForLeftSideProjects} .5s 1s linear both , ${outroForLeftSideProjects} .5s 1.9s linear forwards `,
                },
                // Thumbnail picture animation
                ".thumbnail-wrapper": {
                    "&::before": {
                        animation: `${introForLeftSideProjects} .4s 2.2s linear both, ${outroScaleXToLeft} .2s 2.8s forwards linear`,
                    },
                },
                // Text content
                ".single-project-text-content-wrapper": {
                    ".technologies-wrapper": {
                        "&::after": {
                            animation: `${introScaleXFromRight} .2s 3s linear both, ${outroForLeftSideProjects} .4s 3.3s forwards linear`,
                        },
                    },
                    h4: {
                        "&::after": {
                            animation: `${introScaleXFromRight} .2s 3.05s linear both, ${outroForLeftSideProjects} .4s 3.35s forwards linear`,
                        },
                    },
                    ".duration": {
                        "&::after": {
                            animation: `${introScaleXFromRight} .2s 3.1s linear both, ${outroForLeftSideProjects} .4s 3.4s forwards linear`,
                        },
                    },
                    p: {
                        "&::after": {
                            animation: `${introScaleXFromRight} .2s 3.15s linear both, ${outroForLeftSideProjects} .4s 3.45s forwards linear`,
                        },
                    },
                },
            },
            // Elements on right side
            "&.odd": {
                ".intro-bar1": {
                    background: theme.palette.secondary.main,
                    zIndex: 10,
                    animation: `${introForRightSideProjects} .5s .9s linear both, ${outroForRightSideProjects} .5s 2s linear forwards `,
                },
                ".intro-bar2": {
                    background: theme.palette.primary.main,
                    zIndex: 11,
                    animation: `${introForRightSideProjects} .5s 1s linear both, ${outroForRightSideProjects} .5s 1.9s linear forwards`,
                },
                // Thumbnail picture animation
                ".thumbnail-wrapper": {
                    "&::before": {
                        animation: `${introForRightSideProjects} .4s 2.2s linear both, ${outroScaleXToRight} .2s 2.8s forwards linear`,
                    },
                },
                // Text content
                ".single-project-text-content-wrapper": {
                    ".technologies-wrapper": {
                        "&::after": {
                            animation: `${introScaleXFromLeft} .2s 3s linear both, ${outroForRightSideProjects} .4s 3.3s forwards linear`,
                        },
                    },
                    h4: {
                        "&::after": {
                            animation: `${introScaleXFromLeft} .2s 3.05s linear both, ${outroForRightSideProjects} .4s 3.35s forwards linear`,
                        },
                    },
                    ".duration": {
                        "&::after": {
                            animation: `${introScaleXFromLeft} .2s 3.1s linear both, ${outroForRightSideProjects} .4s 3.4s forwards linear`,
                        },
                    },
                    p: {
                        "&::after": {
                            animation: `${introScaleXFromLeft} .2s 3.15s linear both, ${outroForRightSideProjects} .4s 3.45s forwards linear`,
                        },
                    },
                },
            },
            ".thumbnail-wrapper": {
                "&::before": {
                    background: theme.palette.primary.main,
                },
                ".direct-img-wrapper, .border-shape": {
                    animation: `${fadeSimple} .001s 2.6s both`,
                },
            },
            ".single-project-text-content-wrapper": {
                ".technologies-wrapper, h4, .duration, p ": {
                    position: "relative",
                    "&::after": {
                        content: "''",
                        position: "absolute",
                        background: "#F2E8EF",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                    },
                },
                ".technologies-wrapper>*": {
                    animation: `${fadeSimple} .001s 3.2s both`,
                },
                "h4>*": {
                    animation: `${fadeSimple} .001s 3.25s both`,
                },
                ".duration>*": {
                    animation: `${fadeSimple} .001s 3.3s both`,
                },
                "p>*": {
                    animation: `${fadeSimple} .001s 3.35s both`,
                },
                h4: {
                    "&::after": {
                        height: "calc(100% + 10px)",
                    },
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
                    animation: `${introForFirstProject} .5s linear both, ${outroForFirstProject} .5s 1s linear forwards`,
                },
                ".intro-bar2": {
                    background: theme.palette.primary.main,
                    zIndex: 11,
                    animation: `${introForFirstProject} .5s .1s linear both, ${outroForFirstProject} .5s .9s linear forwards`,
                },
            },
            ".timeline-core": {
                "&.first-project": {
                    "&::before": {
                        top: "50%",
                        animation: `${timelineCoreHalfIntro} .3s 2s both linear`,
                    },
                },
                ".timeline-connection": {
                    transformOrigin: "left",
                    animation: `${scaleX} .2s 1.4s both linear`,
                    "&::before": {
                        animation: `${fadeSimple} .2s 1.6s both linear`,
                    },
                    "&::after": {
                        animation: `${fadeSimple} .2s 1.8s both linear`,
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
