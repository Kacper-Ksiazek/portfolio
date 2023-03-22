// Tools
import { createContext } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { FunctionComponent, ReactNode } from "react";

export type Status = "fillingForm" | "pending" | "success" | "already_succeeded" | "error" | "staged_success" | "staged_error" | "staged_pending" | "form_after_error" | "form_after_success";

export interface Request {
    status: Status;
    errorCode: number | null;
}

interface I_RequestContext {
    request: Request;
    updateRequest: (newForm: Partial<Request>) => void;
}

interface RequestContextProviderProps {
    children: ReactNode;
}

export const RequestContext = createContext({} as I_RequestContext);

export const RequestContextProvider: FunctionComponent<RequestContextProviderProps> = (props) => {
    const [request, updateRequest] = useSimpleReducer<Request>({
        errorCode: null,
        status: "fillingForm",
    });

    return (
        <RequestContext.Provider
            value={{
                request,
                updateRequest,
            }}
        >
            {props.children}
        </RequestContext.Provider>
    );
};
