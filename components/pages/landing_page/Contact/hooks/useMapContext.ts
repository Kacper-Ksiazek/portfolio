import { useContext } from "react";
import { mapContext } from "../mapContext/context";

export const useMapContext = () => useContext(mapContext);
