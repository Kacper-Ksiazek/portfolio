// Tools
import { useState, useRef } from "react";
import { styled, alpha } from "@mui/system";
// Types
import type { MUIStyledCommonProps } from "@mui/system";
import type { FunctionComponent, ChangeEvent } from "react";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Other components
import SingleTask from "./SingleTask";
// Styled Components
import NoResults from "./NoResults";
import StyledInput from "./_styled_components/StyledInput";
import DarkSectionWrapper from "@/components/_styled_components/SectionWrapper/Dark";
import OverflowScrollDiv from "@/components/_styled_components/OverflowScrollDiv";

const Footer = styled("footer")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
    maxWidth: "800px",
}));

const StyledButton = styled(ButtonBase)(({ theme }) => ({
    padding: "5px 10px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "3px",
    boxSizing: "border-box",
    fontSize: "16px",
    transition: "all .3s",
    background: "#fff",
    color: "#000",
    width: "80px",
    marginLeft: "10px",
    "&:hover, &:focus": {
        background: theme.palette.primary.main,
        color: "#fff",
    },
    "&.Mui-disabled": {
        border: `1px solid ${theme.palette.text.primary}`,
        background: alpha(theme.palette.text.primary, 0.4),
        color: theme.palette.text.primary,
    },
}));

const ToDoList: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const [tasks, setTasks] = useState<string[]>(["Go and help mum with laundry", "Mow the lawn for my grandparents", "Show everyone around how to make exquisite software"]);
    const [newTask, setNewTask] = useState<string>("");
    const [freshlyCreatedTaskIndex, setFreshlyCreatedTaskIndex] = useState<number>(-1);

    const taskWrapperElement = useRef<HTMLDivElement | null>(null);
    const inputElement = useRef<HTMLInputElement | null>(null);

    const deleteSingleTask = (indexToDelete: number) => {
        setTasks((val) => val.filter((_el, index) => index !== indexToDelete));
    };

    const modifySingleTask = (indexToModify: number, value: string) => {
        setTasks((val) => val.map((el, index) => (index === indexToModify ? value : el)));
    };

    const addNewTask = () => {
        setFreshlyCreatedTaskIndex(tasks.length);
        tasks.push(newTask);
        setNewTask("");

        inputElement.current?.focus();
        setTimeout(() => {
            if (taskWrapperElement.current) {
                taskWrapperElement.current.scrollTo({
                    top: (taskWrapperElement.current.firstChild as any).offsetHeight ?? 100,
                    behavior: "smooth",
                });
            }
        }, 20);

        setTimeout(() => {
            setFreshlyCreatedTaskIndex(-1);
        }, 1000);
    };

    return (
        <DarkSectionWrapper
            shapesDirection="left"
            header={{
                main: "React to do list",
                label: "Simply because there cannot be a junior developer portfolio without one",
            }}
        >
            {(() => {
                if (tasks.length) {
                    return (
                        <OverflowScrollDiv
                            maxHeight="150px" //
                            ref={taskWrapperElement as any}
                            sx={{ maxWidth: "800px", margin: "0 auto" }}
                        >
                            {tasks.map((item, index) => {
                                return (
                                    <SingleTask
                                        key={`${index}-${item}`} //
                                        index={index}
                                        task={item}
                                        deleteThisTask={() => deleteSingleTask(index)}
                                        modifyThisTask={(value: string) => modifySingleTask(index, value)}
                                        freshlyCreated={index === freshlyCreatedTaskIndex}
                                    />
                                );
                            })}
                        </OverflowScrollDiv>
                    );
                } else {
                    return <NoResults />;
                }
            })()}
            <Footer>
                <StyledInput
                    type="text" //
                    placeholder="Type a new task here..."
                    value={newTask}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
                    ref={inputElement}
                />
                <StyledButton disabled={newTask.length < 5 || newTask.length > 100} onClick={addNewTask}>
                    Add
                </StyledButton>
            </Footer>
        </DarkSectionWrapper>
    );
};

export default ToDoList;
