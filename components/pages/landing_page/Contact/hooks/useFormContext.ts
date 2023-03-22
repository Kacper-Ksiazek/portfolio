import { useContext } from "react";
import { formContext } from "../contexts/formContext";

export const useFormContext = () => useContext(formContext);
