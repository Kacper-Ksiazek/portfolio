// Tools
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
import type { Status } from "../contexts/@types";
// Other components
import Error from "./Error";
import Pending from "./Pending";
import Success from "./Success";

interface ProcessRequestParams {
    sendRequest: () => void;
}

const ProcessRequest: FunctionComponent<ProcessRequestParams> = (props) => {
    const { setRequestStatus, requestStatus, failedRequestHTTPStatus } = useManagementContext();

    const refresh = () => {
        if (requestStatus === "error_but_feigned") {
            return setRequestStatus("pending_but_feigned");
        } else {
            props.sendRequest();
        }
    };

    return (
        <>
            <Pending
                outroAnimation={requestStatus !== "pending" && requestStatus !== "pending_but_feigned"} //
                isFeigned={requestStatus === "pending_but_feigned"}
            />

            {(() => {
                if ((["success", "success_but_feigned", "fillingForm_after_success", "already_succeeded"] as Status[]).includes(requestStatus)) {
                    return (
                        <Success
                            isFeigned={requestStatus === "success_but_feigned"} //
                            isAlreadySucceeded={requestStatus === "already_succeeded"}
                            outroAnimation={requestStatus === "fillingForm_after_success"}
                            goBackToTheForm={() => setRequestStatus("fillingForm_after_success")}
                        />
                    );
                } else if ((["error", "error_but_feigned", "fillingForm_after_error"] as Status[]).includes(requestStatus)) {
                    return (
                        <Error
                            outroAnimation={requestStatus === "fillingForm_after_error"} //
                            code={failedRequestHTTPStatus}
                            refresh={refresh}
                            goBackToTheForm={() => setRequestStatus("fillingForm_after_error")}
                        />
                    );
                }
            })()}
        </>
    );
};

export default ProcessRequest;
