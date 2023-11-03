// Tools
import dynamic from "next/dynamic";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { stylesWhenVisible } from "./styles_when_finished";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import ProjectCard from "./ProjectCard";
import YearIndicator from "./YearIndicator";
const Timeline = dynamic(() => import("./Timeline"));
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
import SingleProjectRowBase from "./Base";

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
        <TransformWhenVisible to={stylesWhenVisible} rootMargin={context.intersectionObserverMargin}>
            <SingleProjectRowBase
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
            </SingleProjectRowBase>
        </TransformWhenVisible>
    );
};

export default SingleProject;
