// Tools
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
// Styled components
import { ThereAreMoreTechnologies, TechnologiesListBase, SingleTechnology } from "./_styled_components";

interface TechnologiesListProps {
    technologies: string[];
    small?: boolean;
    /** Set CSS's `flex-wrap` to its default value- `"nowrap"`*/
    doNotWrap?: boolean;
    /** Expressed in seconds */
    firstAnimationDelay?: number;
    /** If true renders three dots ("...") after all technologies */
    thereAreMoreTechnologies?: boolean;
}

const TechnologiesList: FunctionComponent<TechnologiesListProps> = (props) => {
    return (
        <TechnologiesListBase className="technologies-wrapper">
            {props.technologies.map((item, index) => {
                return (
                    <SingleTechnology
                        key={item} //
                        className={[
                            "single-technology", //
                            props.small ? "small" : "",
                        ].join(" ")}
                        sx={props.firstAnimationDelay ? { animation: `${fadeSimple} .2s ${props.firstAnimationDelay + index * 0.05}s both linear` } : null}
                    >
                        {item}
                    </SingleTechnology>
                );
            })}
            {(() => {
                if (props.thereAreMoreTechnologies) {
                    return <ThereAreMoreTechnologies className="there-are-more-technologies">...</ThereAreMoreTechnologies>;
                }
            })()}
        </TechnologiesListBase>
    );
};

export default TechnologiesList;
