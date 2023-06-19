// Tools
import * as CSSClasses from "./CSSClasses";
import { parseSection } from "./utils/parseSection";
// Types
import type { ReactNode } from "react";
import type { Section } from "./@types";
import type { Styles } from "@/@types/MUI";
// Styled components
import { Divider, SingleNavigationStep, NavigationBetweenSectionsBase } from "./styled_components";

interface NavigationBetweenSectionsProps<T> {
    sections: Section<T>[];
    currentSection: T;
    onChoose: (val: T) => void;

    sx?: Styles;
    disableNavigation?: boolean;
    leftSideChildren?: ReactNode;
    rightSideChildren?: ReactNode;
}

const NavigationBetweenSections = <T extends string>(props: NavigationBetweenSectionsProps<T>) => {
    function handleOnClick(val: T) {
        if (props.disableNavigation) return;
        props.onChoose(val);
    }

    const preventFromBeingClick: boolean = Boolean(props.disableNavigation);

    return (
        <NavigationBetweenSectionsBase sx={props.sx}>
            {props.leftSideChildren && (
                <>
                    <span style={{ flexGrow: 1 }} />
                    {props.leftSideChildren}
                </>
            )}

            {props.sections.map((item, index) => {
                const { label, value } = parseSection<T>(item);

                const onClick = () => handleOnClick(value);

                return (
                    <div key={value as any} className={CSSClasses.STEP_WRAPPER}>
                        {index ? <Divider className={CSSClasses.DIVIDER} /> : <span />}

                        <SingleNavigationStep
                            className={CSSClasses.STEP_BUTTON} //
                            selected={props.currentSection === value}
                            preventFromBeingClick={preventFromBeingClick}
                            //
                            onClick={onClick}
                        >
                            <span className="text" onClick={onClick}>
                                {label}
                            </span>
                        </SingleNavigationStep>
                    </div>
                );
            })}

            {props.rightSideChildren && (
                <>
                    <span style={{ flexGrow: 1 }} />
                    {props.rightSideChildren}
                </>
            )}
        </NavigationBetweenSectionsBase>
    );
};

export default NavigationBetweenSections;
