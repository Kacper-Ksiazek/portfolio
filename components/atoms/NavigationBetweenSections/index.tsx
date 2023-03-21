// Tools
import * as CSSClasses from "./CSSClasses";
import { parseSection } from "./utils/parseSection";
// Types
import type { Section } from "./@types";
import type { FunctionComponent } from "react";
// Styled components
import { Divider, SingleNavigationStep, NavigationBetweenSectionsBase } from "./styled_components";

interface NavigationBetweenSectionsProps {
    sections: Section[];
    currentSection: string;
    onChoose: (val: string) => void;
}

const NavigationBetweenSections: FunctionComponent<NavigationBetweenSectionsProps> = (props) => {
    return (
        <NavigationBetweenSectionsBase>
            {props.sections.map((item, index) => {
                const { label, value } = parseSection(item);

                const onClick = () => props.onChoose(value);

                return (
                    <div key={value} className={CSSClasses.STEP_WRAPPER}>
                        {index ? <Divider className={CSSClasses.DIVIDER} /> : <span />}
                        <SingleNavigationStep
                            className={[
                                CSSClasses.STEP_BUTTON, //
                                props.currentSection === value ? "selected" : "",
                            ].join(" ")} //
                            onClick={onClick}
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
