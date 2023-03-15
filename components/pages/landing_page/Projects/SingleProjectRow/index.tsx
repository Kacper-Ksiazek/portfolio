// Tools
import dynamic from "next/dynamic";
import { styled } from "@mui/material";
import * as introAnimations from "./intro_animations";
import { hidePseudoElement } from "@/components/keyframes/outro";
import { useProjectsContext } from "../hooks/useProjectsContext";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import ProjectCard from "./ProjectCard";
import YearIndicator from "./YearIndicator";
const Timeline = dynamic(() => import("./Timeline"));
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components

const SingleProjectRow = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    justifyContent: "flex-end",
    ["@media (min-width:751px)"]: {
        "&::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            zIndex: 10,
        },
        "&.odd::after": {
            left: "auto",
            right: 0,
        },
    },
    "&.even": {
        flexDirection: "row-reverse",
    },
    "&.year-indicating": {
        paddingTop: "160px",
    },
    "&.visible": {
        visibility: "visible",
    },
}));

interface SingleProjectProps {
    index: number;
    data: Project;
    isLast: boolean;
    isFirst: boolean;
    order: "even" | "odd";
}

const SingleProject: FunctionComponent<SingleProjectProps> = (props) => {
    const { data, order, isFirst, isLast } = props;
    const context = useProjectsContext();
    const thisRowIsAYearIndicator: boolean = !isFirst && Boolean(props.data.yearToIndicate);

    return (
        <TransformWhenVisible
            to={(theme) => ({
                ".single-project-row": {
                    "&::after": {
                        animation: `${hidePseudoElement} .001s 2.6s both`,
                    },
                    ".single-project-text-content-wrapper": {
                        ".technologies-wrapper, h4, .duration, p, .read-more ": {
                            position: "relative",
                            "&::after": {
                                content: "''",
                                ...theme.mixins.absolute_full,
                                background: theme.palette.background.lightAnimationBar,
                            },
                        },
                    },
                    "@media (min-width:1401px)": {
                        ...introAnimations.over_1400px,
                    },
                    "@media (min-width:750px) and (max-width: 1400px)": {
                        ...introAnimations.between_750px_and_1400px,
                    },
                    "@media (max-width: 750px)": {
                        ...introAnimations.below_750px.introAnimationsForThumbnail,
                    },
                    "@media (max-width:1000px)": {
                        flexDirection: "column",
                        "&.year-indicating": {
                            paddingTop: "16px",
                        },
                    },
                },
            })}
            rootMargin={context.intersectionObserverMargin}
        >
            <SingleProjectRow
                className={[
                    "single-project-row",
                    thisRowIsAYearIndicator ? "year-indicating" : "", //
                    isFirst ? "first-row" : "",
                    isLast ? "last-row" : "",
                    order,
                ].join(" ")}
            >
                {data.yearToIndicate && <YearIndicator year={data.yearToIndicate} order={order} />}

                <ProjectCard
                    data={data} //
                    order={order}
                    isFirst={isFirst}
                />

                {(() => {
                    if (context.viewport === "large") {
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
        </TransformWhenVisible>
    );
};

export default SingleProject;
