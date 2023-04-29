// Tools
import * as CSSClasses from "./CSSClasses";
import { parseSection } from "./utils/parseSection";
// Types
import type { Section } from "./@types";
import type { Styles } from "@/@types/MUI";
// Styled components
import { Divider, SingleNavigationStep, NavigationBetweenSectionsBase } from "./styled_components";

interface NavigationBetweenSectionsProps<T> {
    sections: Section<T>[];
    currentSection: T;
    onChoose: (val: T) => void;

    sx?: Styles;
}

const NavigationBetweenSections = <T extends string>(props: NavigationBetweenSectionsProps<T>) => {
    return (
        <NavigationBetweenSectionsBase sx={props.sx}>
            {props.sections.map((item, index) => {
                const { label, value } = parseSection<T>(item);

                const onClick = () => props.onChoose(value);

                return (
                    <div key={value as any} className={CSSClasses.STEP_WRAPPER}>
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
