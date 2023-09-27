// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components
const CopyMyPhoneNumberWrapper = styled("div")(({ theme }) => ({
    //
}));

const CopyMyPhoneNumber: FunctionComponent = () => {
    return (
        <CopyMyPhoneNumberWrapper>
            <span>PHONE NUMBER</span>
        </CopyMyPhoneNumberWrapper>
    );
};

export default CopyMyPhoneNumber;
