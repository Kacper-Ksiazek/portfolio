// Tools
import { createContext, useState } from "react";
import { useSnackbar } from "@/hooks/useSnackbar";
// Types
import type { FunctionComponent } from "react";
import type { ModifyParams, SingleTaskContext, SingleTaskContextProviderProps } from "./@types";

export const singleTaskContext = createContext<SingleTaskContext>({} as any);

const DELETION_ANIMATION_DURATION: TimeInMS = 1100;

export const SingleTaskContextProvider: FunctionComponent<SingleTaskContextProviderProps> = (props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const { displaySnackbar } = useSnackbar();

    function togglePriority() {
        props.update({ isCompleted: !props.data.isCompleted });
    }

    function modify(params: ModifyParams) {
        props.update(params);
    }

    function remove() {
        setIsDeleting(true);
        setTimeout(() => {
            props.remove();
            displaySnackbar({
                msg: "Task has been removed successfully",
                severity: "success",
            });
        }, DELETION_ANIMATION_DURATION);
    }

    function toggleEditMode() {
        setIsEdit((val) => !val);
    }

    return (
        <singleTaskContext.Provider
            value={{
                data: props.data, //
                stages: {
                    isDeleting,
                    isEdit,
                },
                actions: {
                    modify,
                    togglePriority,
                    remove,
                    toggleEditMode,
                },
            }}
        >
            {props.children}
        </singleTaskContext.Provider>
    );
};
