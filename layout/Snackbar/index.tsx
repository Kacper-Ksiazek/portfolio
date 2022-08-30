// Tools
import { useContext } from "react";
import { SnackbarContext } from "@/layout/SnackbarContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleSnackbar from "./SingleSnackbar";

const Snackbar: FunctionComponent = () => {
    const context = useContext(SnackbarContext);

    return (
        <>
            {context.snackbars.map((item, index) => {
                return (
                    <SingleSnackbar
                        key={item._id} //
                        msg={item.msg}
                        severity={item.severity}
                        hideAfter={item.hideAfter}
                        displayHidingAnimation={item._displayHidingAnimation}
                        close={() => context.closeSnackbar(item._id)}
                    />
                );
            })}
        </>
    );
};

export default Snackbar;
