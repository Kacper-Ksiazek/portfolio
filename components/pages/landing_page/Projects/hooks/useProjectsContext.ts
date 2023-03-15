import { useContext } from "react";
import { context } from "../context";

export function useProjectsContext() {
    return useContext(context);
}
