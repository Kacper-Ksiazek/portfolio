// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
const SendMeAnEmailWrapper = styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    cursor: "default",
    background: "#e2e2e2",
}));
const SendMeAnEmail: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <SendMeAnEmailWrapper>
            <span>email</span>
        </SendMeAnEmailWrapper>
    );
};

export default SendMeAnEmail;
