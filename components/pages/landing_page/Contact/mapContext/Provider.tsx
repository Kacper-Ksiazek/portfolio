// Tools
import { useState } from "react";
import { mapContext } from "./context";
// Types
import type { MapStatus } from "./@types";
import type { FunctionComponent, ReactNode } from "react";

interface MapContextProviderProps {
    children: ReactNode;
}

const MapContextProvider: FunctionComponent<MapContextProviderProps> = (props) => {
    const [status, changeMapStatus] = useState<MapStatus>(null);

    return (
        <mapContext.Provider
            value={{
                status,
                changeMapStatus,
            }}
        >
            {props.children}
        </mapContext.Provider>
    );
};

export default MapContextProvider;
