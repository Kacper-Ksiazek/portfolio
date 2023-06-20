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
    leftSideChildren?: ReactNode;
    rightSideChildren?: ReactNode;
    beforeOnClick?: () => Promise<void> | void;
}

const NavigationBetweenSections = <T extends string>(props: NavigationBetweenSectionsProps<T>) => {
    async function handleOnClick(val: T) {
        if (typeof props.beforeOnClick === "function") await props.beforeOnClick();
        if (props.currentSection === val) return;

        props.onChoose(val);
    }

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
