// Tools
import { CLASSES, SINGLE_TASK_STAGES } from "../css_references";
import { useSingleTaskContext } from "./hooks/useSingleTaskContext";
// Types
import type { FunctionComponent } from "react";
import type { SingleTaskContextProviderProps } from "./context/@types";
// Other components
import Label from "./Label";
import Manage from "./Manage";
import CheckIcon from "./CheckIcon";
import { SingleTaskContextProvider } from "./context";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { SingleTaskBase, Description, Background } from "./styled_components";

const SingleTask: FunctionComponent = () => {
    const { data, stages } = useSingleTaskContext();

    return (
        <SingleTaskBase
            className={[
                data.isCompleted ? SINGLE_TASK_STAGES.CHECKED : "", //
                stages.isDeleting ? SINGLE_TASK_STAGES.DELETING : "",
            ].join(" ")}
        >
            <Background
                className={[
                    data.urgent ? "active" : "", //
                    CLASSES.SINGLE_TASK.BACKGROUND,
                ].join(" ")}
            />

            <CheckIcon />

            <FlexBox column horizontal="start">
                <Description className={CLASSES.SINGLE_TASK.DESCRIPTION}>
                    <span>{data.description}</span>
                </Description>

                <FlexBox className={CLASSES.SINGLE_TASK.LABELS_WRAPPER}>
                    {data.urgent && <Label indicateUrgency />}
                    <Label label={data.label} />
                </FlexBox>
            </FlexBox>

            <Manage />
        </SingleTaskBase>
    );
};

const SingleTaskWithContext: FunctionComponent<Omit<SingleTaskContextProviderProps, "children">> = (props) => {
    return (
        <SingleTaskContextProvider {...props}>
            <SingleTask />
        </SingleTaskContextProvider>
    );
};

export default SingleTaskWithContext;
