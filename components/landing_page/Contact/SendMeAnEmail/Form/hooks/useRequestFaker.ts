// Tools
import useSendMeAnEmailContext from "../../hooks/useSendMeAnEmailContext";

interface UseRequestFakerResult {
    feignSucceededRequest: () => void;
    feignInvalidRequest: () => void;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseRequestFakerResult => {
    const context = useSendMeAnEmailContext();

    const feignSucceededRequest = () => {
        context.status.setValue("pending");
        setTimeout(() => {
            context.status.setValue("success_but_feigned");
        }, 750);
    };

    const feignInvalidRequest = () => {
        context.status.setValue("pending");
        setTimeout(() => {
            context.status.setValue("error_but_feigned");
        }, 750);
    };

    return {
        feignInvalidRequest,
        feignSucceededRequest,
    };
};
