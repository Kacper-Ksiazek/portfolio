import { useContext } from "react";
import { mapContext } from "../contexts/mapContext/context";

export const useMapContext = () => useContext(mapContext);
