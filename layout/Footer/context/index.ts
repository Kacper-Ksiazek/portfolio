import { createContext ,type Dispatch, type SetStateAction} from "react";

export type FooterContent = "LOGO" | "PHONE_NUMBER" | "EMAIL";

interface I_FooterContext {
    contentToDisplay: FooterContent;
    setContentToDisplay: Dispatch<SetStateAction<FooterContent>>;
}

export const footerContext = createContext<I_FooterContext>({} as I_FooterContext);
