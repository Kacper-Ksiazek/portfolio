// Tools
import { parseSection } from "./utils/parseSection";
// Types
import type { Section } from "./@types";
import type { FunctionComponent } from "react";
// Styled components
import { Divider, SingleNavigationStep, NavigationBetweenSectionsBase } from "./styled_components";

interface NavigationBetweenSectionsProps {
    sections: Section[];
    currentSection: string;
    subtleBackground?: boolean;
    onChoose: (val: string) => void;
}

const NavigationBetweenSections: FunctionComponent<NavigationBetweenSectionsProps> = (props) => {
    return (
        <NavigationBetweenSectionsBase>
            {props.sections.map((item, index) => {
                const { label, value } = parseSection(item);

                const onClick = () => props.onChoose(value);

                return (
                    <div key={value} className="step-wrapper">
                        {index ? <Divider className="divider" /> : <span />}
                        <SingleNavigationStep
                            className={[
                                `single-navigation-button`, //
                                props.currentSection === value ? "selected" : "",
                            ].join(" ")} //
                            onClick={onClick}
                            subtleBackground={props.subtleBackground ?? false}
                        >
                            <span className="text" onClick={onClick}>
                                {label}
                            </span>
                        </SingleNavigationStep>
                    </div>
                );
            })}
        </NavigationBetweenSectionsBase>
    );
};

export default NavigationBetweenSections;
