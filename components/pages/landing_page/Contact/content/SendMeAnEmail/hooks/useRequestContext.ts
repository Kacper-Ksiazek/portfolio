// Tools
import { useContext } from "react";
import { RequestContext } from "../contexts/requestContext";

export const useRequestContext = () => useContext(RequestContext);
