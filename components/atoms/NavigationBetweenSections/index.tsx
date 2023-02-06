// Types
import type { FunctionComponent } from "react";
// Styled components
import { Divider, SingleNavigationStep, NavigationBetweenSectionsBase } from "./styled_components";

interface NavigationBetweenSectionsProps {
    sections: string[];
    currentSection: string;
    onChoose: (val: string) => void;
}

const NavigationBetweenSections: FunctionComponent<NavigationBetweenSectionsProps> = (props) => {
    return (
        <NavigationBetweenSectionsBase>
            {props.sections.map((item, index) => {
                const stageLabel = item.replaceAll
                    ? item.replaceAll("_", " ")
                    : item
                          .split("")
                          .map((char) => (char === "_" ? " " : char))
                          .join("");

                const onClick = () => props.onChoose(item);

                return (
                    <div key={item} className="step-wrapper">
                        {index ? <Divider className="divider" /> : <span />}
                        <SingleNavigationStep
                            className={[
                                `single-navigation-button`, //
                                props.currentSection === item ? "selected" : "",
                            ].join(" ")} //
                            onClick={onClick}
                        >
                            <span className="text" onClick={onClick}>
                                {stageLabel}
                            </span>
                        </SingleNavigationStep>
                    </div>
                );
            })}
        </NavigationBetweenSectionsBase>
    );
};

export default NavigationBetweenSections;
