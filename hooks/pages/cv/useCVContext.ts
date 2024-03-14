// Tools
import { useContext } from "react";
import { CVContext } from "@/components/pages/cv/_context";

export function useCVContext() {
    return useContext(CVContext);
}
