import { useContext } from "react";
import { footerContext } from "../context";

export function useFooterContext() {
    return useContext(footerContext);
}
