// Tools
import { useRequestParser } from "./hooks/useRequestParser";
// Types
import type { FunctionComponent } from "react";
// Other components
import Failure from "./Failure";
import Pending from "./Pending";
import Success from "./Success";

interface ProcessRequestParams {
    sendRequest: () => void;
    emailHasBeenAlreadySent: boolean;
}

const ProcessRequest: FunctionComponent<ProcessRequestParams> = (props) => {
    const { isStaged, refresh, goBackToTheForm, ...requestParser } = useRequestParser(props.sendRequest);

    if (props.emailHasBeenAlreadySent) {
        return <Success hasBeenAlreadySent />;
    }

    return (
        <>
            <Pending
                outroAnimation={requestParser.outroAnimatins.pending} //
                isStaged={isStaged}
                goBackToTheForm={goBackToTheForm}
            />

            {(() => {
                switch (requestParser.screenToDisplay) {
                    case null:
                        return <></>;

                    case "SUCCESS":
                        return (
                            <Success
                                isStaged={isStaged}
                                hasBeenAlreadySent={props.emailHasBeenAlreadySent}
                                outroAnimation={requestParser.outroAnimatins.success}
                                //
                                refresh={refresh}
                                goBackToTheForm={goBackToTheForm}
                            />
                        );
                    case "FAILURE":
                        return (
                            <Failure
                                code={requestParser.errorCode} //
                                isStaged={isStaged}
                                outroAnimation={requestParser.outroAnimatins.failure}
                                //
                                refresh={refresh}
                                goBackToTheForm={goBackToTheForm}
                            />
                        );
                }
            })()}
        </>
    );
};

export default ProcessRequest;
