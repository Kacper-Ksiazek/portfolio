// Tools
import useBetterState from "@/hooks/useBetterState";
import useSendMeAnEmailContext from "../hooks/useSendMeAnEmailContext";
// Types
import type { Status } from "../context";
import type { FunctionComponent } from "react";
// Other components
import Error from "./Error";
import Pending from "./Pending";
import Success from "./Success";

const ProcessRequest: FunctionComponent = (props) => {
    const { value: status, setValue: setStatus } = useSendMeAnEmailContext().status;

    const errorHTTPCode = useBetterState<number | null>(null);

    return (
        <>
            <Pending
                outroAnimation={status !== "pending" && status !== "pending_but_feigned"} //
                isFeigned={status === "pending_but_feigned"}
            />

            {(() => {
                if ((["success", "success_but_feigned", "fillingForm_after_success"] as Status[]).includes(status)) {
                    return (
                        <Success
                            isFeigned={status === "success_but_feigned"} //
                            outroAnimation={status === "fillingForm_after_success"}
                            goBackToTheForm={() => setStatus("fillingForm_after_success")}
                        />
                    );
                } else if ((["error", "error_but_feigned", "fillingForm_after_error"] as Status[]).includes(status)) {
                    return (
                        <Error
                            outroAnimation={status === "fillingForm_after_error"} //
                            code={errorHTTPCode.value ?? 500}
                            refresh={() => setStatus(status === "error" ? "pending" : "pending_but_feigned")}
                            goBackToTheForm={() => setStatus("fillingForm_after_error")}
                        />
                    );
                }
            })()}
        </>
    );
};

export default ProcessRequest;
