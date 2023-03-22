import { useContext } from "react";
import { contactNavigationContext } from "../contexts/contactNavigationContext";

export const useContactNavigation = () => useContext(contactNavigationContext);
