// Tools
import { CSS_REFERENCES } from "./css_references";
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent } from "react";
// Styled components
import { ThereAreMoreTechnologies, TechnologiesListBase, SingleTechnology } from "./_styled_components";

export interface TechnologiesListProps {
    technologies: string[];
    small?: boolean;
    /** Set CSS's `flex-wrap` to its default value- `"nowrap"`*/
    doNotWrap?: boolean;
    /**
     * Expressed in seconds
     * */
    firstAnimationDelay?: number | false;
    /** If true renders three dots ("...") after all technologies */
    thereAreMoreTechnologies?: boolean;
}

const TechnologiesList: FunctionComponent<TechnologiesListProps> = (props) => {
    return (
        <TechnologiesListBase className={CSS_REFERENCES.WRAPPER}>
            {props.technologies.map((item, index) => {
                return (
                    <SingleTechnology
                        key={item} //
                        className={[
                            CSS_REFERENCES.SINGLE_TECHNOLOGY, //
                            props.small ? "small" : "",
                        ].join(" ")}
                        sx={
                            props.firstAnimationDelay !== false && props.firstAnimationDelay !== undefined
                                ? { animation: `${fadeSimple} .2s ${props.firstAnimationDelay + index * 0.05}s both linear` }
                                : null
                        }
                    >
                        {item}
                    </SingleTechnology>
                );
            })}
            {(() => {
                if (props.thereAreMoreTechnologies) {
                    return <ThereAreMoreTechnologies className={CSS_REFERENCES.NO_MORE_TECHNOLOGIES_THREE_DOTS}>...</ThereAreMoreTechnologies>;
                }
            })()}
        </TechnologiesListBase>
    );
};

TechnologiesList.defaultProps = {
    small: false,
    doNotWrap: false,
    thereAreMoreTechnologies: false,
    firstAnimationDelay: false,
};

export default TechnologiesList;
