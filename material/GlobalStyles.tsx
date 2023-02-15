// Types
import type { FunctionComponent } from "react";
// Other components
import _GlobalStyles from "@mui/material/GlobalStyles";

const GlobalStyles: FunctionComponent = (props) => {
    return (
        <_GlobalStyles
            styles={(theme) => {
                return {};
            }}
        />
    );
};

export default GlobalStyles;
