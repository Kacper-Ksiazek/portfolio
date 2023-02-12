// Tools
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
import type { Status } from "../contexts/@types";
// Other components
import Error from "./Error";
import Pending from "./Pending";
import Success from "./Success";

interface ProcessRequestParams {
    sendRequest: () => void;
    emailHasBeenAlreadySent: boolean;
}

const ProcessRequest: FunctionComponent<ProcessRequestParams> = (props) => {
    const { updateRequest, request } = useSendEmailContext();

    const refresh = () => {
        if (request.status === "error_but_feigned") {
            return updateRequest({ status: "pending_but_feigned" });
        } else {
            props.sendRequest();
        }
    };

    return (
        <>
            <Pending
                outroAnimation={request.status !== "pending" && request.status !== "pending_but_feigned"} //
                isFeigned={request.status === "pending_but_feigned"}
            />

            {(() => {
                if (props.emailHasBeenAlreadySent || (["success", "success_but_feigned", "fillingForm_after_success"] as Status[]).includes(request.status)) {
                    return (
                        <Success
                            isFeigned={request.status === "success_but_feigned"} //
                            isAlreadySucceeded={props.emailHasBeenAlreadySent}
                            outroAnimation={request.status === "fillingForm_after_success"}
                            goBackToTheForm={() => updateRequest({ status: "fillingForm_after_success" })}
                        />
                    );
                } else if ((["error", "error_but_feigned", "fillingForm_after_error"] as Status[]).includes(request.status)) {
                    return (
                        <Error
                            outroAnimation={request.status === "fillingForm_after_error"} //
                            code={Number(request.errorCode)}
                            refresh={refresh}
                            goBackToTheForm={() => updateRequest({ status: "fillingForm_after_error" })}
                        />
                    );
                }
            })()}
        </>
    );
};

export default ProcessRequest;
