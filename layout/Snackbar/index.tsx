// Tools
import { useContext } from "react";
import { styled } from "@mui/system";
import { SnackbarContext } from "@/layout/global/SnackbarContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleSnackbar from "./SingleSnackbar";
// Styled components
const SnackbarsWrapper = styled("section")(({ theme }) => ({
    position: "fixed",
    bottom: "8px",
    right: "8px",
    zIndex: 200,
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column-reverse",
    ["@media (max-width:500px)"]: {
        right: "0",
        width: "100%",
        padding: "0 10px",
        boxSizing: "border-box",
    },
}));
const Snackbar: FunctionComponent = () => {
    const context = useContext(SnackbarContext);

    return (
        <SnackbarsWrapper>
            {context.snackbars.map((item, index) => {
                return (
                    <SingleSnackbar
                        key={item._id}
                        msg={item.msg}
                        severity={item.severity}
                        hideAfter={item.hideAfter}
                        displayHidingAnimation={item._displayHidingAnimation}
                        close={() => context.closeSnackbar(item._id)}
                    />
                );
            })}
        </SnackbarsWrapper>
    );
};

export default Snackbar;
