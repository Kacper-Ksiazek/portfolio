// Tools
import { useEffect } from "react";
import useWindowsSizes from "@/hooks/useWindowSizes";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useContentVisibility, useResponsiveHeight } from "./hooks";
// Types
import type { FunctionComponent } from "react";
import type { ActionHeaderSection } from "landing_page/ToDoList/2023/ActionsHeader/@types";
import type { ResponsiveHeightCSSClass } from "./hooks/useResponsiveHeight";
// Other components
import Content from "./Content";
import Navigation from "./Navigation";
import HideButton from "./HideButton";
// Styled components
import ActionsHeaderBase from "./Base";

const ACTIONS_HEADER_WRAPPER_ID: string = "to-do-list--actions-header";

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
        <ActionsHeaderBase className={responsiveHeightCSSClass} id={ACTIONS_HEADER_WRAPPER_ID}>
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
                        wrapperID={ACTIONS_HEADER_WRAPPER_ID}
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
                    wrapperID={ACTIONS_HEADER_WRAPPER_ID}
                />
            )}
        </ActionsHeaderBase>
    );
};

export default ActionsHeader;
