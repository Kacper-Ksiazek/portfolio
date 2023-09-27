// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components
const CopyMyEmailWrapper = styled("div")(({ theme }) => ({
    //
}));

const CopyMyEmail: FunctionComponent = () => {
    return (
        <CopyMyEmailWrapper>
            <span>EMAIL</span>
        </CopyMyEmailWrapper>
    );
};

export default CopyMyEmail;
