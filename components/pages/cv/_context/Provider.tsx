// Tools
import { CVContext } from ".";
import { useState } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { CVParams } from "@/@types/pages/CV";

interface CVContextProviderProps {
    children: React.ReactNode;
}

const CVContextProvider: React.FunctionComponent<CVContextProviderProps> = (props) => {
    const [displayQRCode, setDisplayQRCode] = useState<boolean>(false);
    const [cvToDownload, updateCVToDownload] = useSimpleReducer<CVParams>({
        lang: "en",
        variant: "light",
        format: "pdf",
    });

    return (
        <CVContext.Provider
            value={{
                cvToDownload,
                updateCVToDownload,
                displayQRCode,
                setDisplayQRCode,
            }}
        >
            {props.children}
        </CVContext.Provider>
    );
};

export default CVContextProvider;
