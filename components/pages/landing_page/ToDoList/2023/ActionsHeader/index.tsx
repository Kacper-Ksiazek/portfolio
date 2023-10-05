// Tools
import { useEffect } from "react";
import { CSS_REFERENCES } from "./css_references";
import useWindowsSizes from "@/hooks/useWindowSizes";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useContentVisibility, useResponsiveHeight } from "./hooks";
import { stylesWhenVisible } from "./styles_when_visible";
// Types
import type { FunctionComponent } from "react";
import type { ActionHeaderSection } from "landing_page/ToDoList/2023/ActionsHeader/@types";
import type { ResponsiveHeightCSSClass } from "./hooks/useResponsiveHeight";
// Other components
import Content from "./Content";
import Navigation from "./Navigation";
import HideButton from "./HideButton";
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
import ActionsHeaderBase from "./Base";

type ActionsHeaderProps = {
    tasksInTotal: number;
};

const ActionsHeader: FunctionComponent<ActionsHeaderProps> = (props) => {
    const { value: stage, setValue: setStage, isChanging: isStageChanging } = useDelayedState<ActionHeaderSection>("PROGRESS_TRACKER", 160);
    const { width } = useWindowsSizes();

    const { contentVisibility, toggleContentVisibility } = useContentVisibility();

    const responsiveHeightCSSClass: ResponsiveHeightCSSClass = useResponsiveHeight(stage, contentVisibility.contentIsHidden);

    const alternativeHideButtonPosition: boolean = width < 770;

    async function onNavigationButtonClick() {
        if (contentVisibility.contentIsHidden === true) {
            if (contentVisibility.renderContent === true) return;

            toggleContentVisibility();

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(1);
                }, 180);
            });
        }
    }

    useEffect(() => {
        if (props.tasksInTotal === 0 && stage === "PROGRESS_TRACKER") {
            setStage("ADD_NEW_TASK");
        }
    }, [props.tasksInTotal, stage, setStage]);

    return (
        <TransformWhenVisible to={stylesWhenVisible} updatesFrequently>
            <ActionsHeaderBase className={responsiveHeightCSSClass} id={CSS_REFERENCES.ACTIONS_HEADER_WRAPPER}>
                <Navigation
                    currentStage={stage} //
                    tasksInTotal={props.tasksInTotal}
                    updateCurrentStage={setStage}
                    beforeOnClick={onNavigationButtonClick}
                >
                    {alternativeHideButtonPosition === false && (
                        <HideButton
                            {...contentVisibility} //
                            toggleContentVisibility={toggleContentVisibility}
                        />
                    )}
                </Navigation>
                {contentVisibility.renderContent && (
                    <Content
                        currentStage={stage} //
                        isStageChanging={isStageChanging}
                        foldActionsHeaderPanel={toggleContentVisibility}
                    />
                )}
                {alternativeHideButtonPosition === true && (
                    <HideButton
                        {...contentVisibility} //
                        toggleContentVisibility={toggleContentVisibility}
                    />
                )}
            </ActionsHeaderBase>
        </TransformWhenVisible>
    );
};

export default ActionsHeader;
