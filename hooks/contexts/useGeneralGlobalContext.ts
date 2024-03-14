// Tools
import { useContext } from "react";
import { GeneralGlobalContext } from "@/layout/global/GeneralGlobalContext";

export function useGeneralGlobalContext() {
    return useContext(GeneralGlobalContext);
}
