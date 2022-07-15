// Tools
import useBetterState from "@/hooks/useBetterState";
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
import type { Status } from "../contexts/@types";
// Other components
import Error from "./Error";
import Pending from "./Pending";
import Success from "./Success";

const ProcessRequest: FunctionComponent = (props) => {
    const { setRequestStatus, requestStatus } = useManagementContext();

    const errorHTTPCode = useBetterState<number | null>(null);

    return (
        <>
            <Pending
                outroAnimation={requestStatus !== "pending" && requestStatus !== "pending_but_feigned"} //
                isFeigned={requestStatus === "pending_but_feigned"}
            />

            {(() => {
                if ((["success", "success_but_feigned", "fillingForm_after_success"] as Status[]).includes(requestStatus)) {
                    return (
                        <Success
                            isFeigned={requestStatus === "success_but_feigned"} //
                            outroAnimation={requestStatus === "fillingForm_after_success"}
                            goBackToTheForm={() => setRequestStatus("fillingForm_after_success")}
                        />
                    );
                } else if ((["error", "error_but_feigned", "fillingForm_after_error"] as Status[]).includes(requestStatus)) {
                    return (
                        <Error
                            outroAnimation={requestStatus === "fillingForm_after_error"} //
                            code={errorHTTPCode.value ?? 500}
                            refresh={() => setRequestStatus(requestStatus === "error" ? "pending" : "pending_but_feigned")}
                            goBackToTheForm={() => setRequestStatus("fillingForm_after_error")}
                        />
                    );
                }
            })()}
        </>
    );
};

export default ProcessRequest;
