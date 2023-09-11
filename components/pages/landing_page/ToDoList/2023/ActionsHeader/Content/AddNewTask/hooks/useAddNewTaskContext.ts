import { useContext } from "react";
import { addNewTaskContext } from "../context";

export function useAddNewTaskContext() {
    return useContext(addNewTaskContext);
}
