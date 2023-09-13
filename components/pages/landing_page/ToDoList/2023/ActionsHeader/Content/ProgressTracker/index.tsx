// Tools
import { useMemo } from "react";
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "./css_references";
import { useTasksListContext } from "landing_page/ToDoList/2023/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import { ProgressTrackerBase, StyledFlexWrapper } from "./styled_components";
import Header from "@/components/pages/landing_page/ToDoList/2023/atoms/Header";

const ProgressTrackerWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "@media (max-width:770px)": {
        gap: "16px !important",
    },
}));

const ProgressTracker: FunctionComponent = () => {
    const { tasks } = useTasksListContext();

    const amountOfAllTasks: number = tasks.length;

    const amountOfCompletedTasks = useMemo<number>(() => {
        return tasks.filter((el) => el.isCompleted).length;
    }, [tasks]);

    return (
        <ProgressTrackerWrapper id={CSS_REFERENCES.MAIN_WRAPPER}>
            <div className={CSS_REFERENCES.CONTENT_WRAPPER}>
                <Header>General completion</Header>
                <StyledFlexWrapper>
                    <SingleLabel
                        progress={{
                            completed: amountOfCompletedTasks,
                            inTotal: amountOfAllTasks,
                            extensiveDescription: true,
                        }}
                        width="100%" //
                    />
                </StyledFlexWrapper>
            </div>

            <div className={CSS_REFERENCES.CONTENT_WRAPPER}>
                <Header>Labels ratio</Header>
                <ProgressTrackerBase>
                    <LabelsRatio amountOfTasksInTotal={tasks.length} />
                </ProgressTrackerBase>
            </div>
        </ProgressTrackerWrapper>
    );
};

export default ProgressTracker;
