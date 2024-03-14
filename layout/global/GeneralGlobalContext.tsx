// Tools
import { createContext, useRef, useState } from "react";

interface GeneralGlobalContext_I {
    userScrollIsBlocked: boolean;
    /** used by useBlockUserScroll hook */
    _formerScrollY: React.MutableRefObject<number | null>;

    setUserScrollIsBlocked: (val: boolean) => void;
}

export const GeneralGlobalContext = createContext<GeneralGlobalContext_I>({} as any);

export const GeneralGlobalContextProvider: React.FunctionComponent<{ children: React.ReactNode }> = (props) => {
    const [userScrollIsBlocked, setUserScrollIsBlocked] = useState<boolean>(false);
    const _formerScrollY = useRef<number | null>(null);

    return (
        <GeneralGlobalContext.Provider
            value={{
                _formerScrollY,
                userScrollIsBlocked,
                setUserScrollIsBlocked,
            }}
        >
            {props.children}
        </GeneralGlobalContext.Provider>
    );
};
