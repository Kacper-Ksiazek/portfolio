// Tools
import { useEffect } from "react";
import useBetterState from "@/hooks/useBetterState";
import useSendMeAnEmailContext from "../hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Error from "./Error";
import Pending from "./Pending";
import Success from "./Success";
// Styled components

const ProcessRequest: FunctionComponent = (props) => {
    const { status } = useSendMeAnEmailContext();
    const errorHTTPCode = useBetterState<number | null>(null);

    const refresh = () => {
        status.setValue("pending");
    };
    const goBackToTheForm = () => {
        status.setValue("fillingForm");
    };

    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted) {
                status.setValue("error");
                errorHTTPCode.setValue(500);
            }
        }, 1000);

        return () => {
            isMounted = false;
        };
    }, [status, errorHTTPCode]);

    return (
        <>
            <Pending outroAnimation={status.value !== "pending"} />

            {(() => {
                if (status.value === "success") return <Success />;
                else if (status.value === "error" || errorHTTPCode.value !== null) {
                    return (
                        <Error
                            outroAnimation={status.value !== "error"} //
                            code={errorHTTPCode.value ?? 500}
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
