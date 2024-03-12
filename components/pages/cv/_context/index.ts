// Tools
import { createContext } from "react";
// Types
import type { CVParams } from "@/@types/pages/CV";

interface CVContext {
    cvToDownload: CVParams;
    updateCVToDownload: (newCVToDownload: Partial<CVParams>) => void;

    displayQRCode: boolean;
    setDisplayQRCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CVContext = createContext<CVContext>({} as CVContext);
