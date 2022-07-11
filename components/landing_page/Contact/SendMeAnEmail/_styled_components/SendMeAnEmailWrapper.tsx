// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
const SendMeAnEmailWrapperBase = styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    cursor: "default",
    position: "relative",
    padding: "10px",
    alignSelf: "flex-start",
    height: "470px",
    overflow: "hidden",
    "&::before,&::after": {
        content: "''",
        position: "absolute",
        background: theme.palette.secondary.main,
    },
    "&::before": {
        width: "300px",
        height: "50px",
        bottom: "0",
        left: 0,
    },
    "&::after": {
        width: "200px",
        height: "130px",
        top: "0",
        right: 0,
    },
    "div.content": {
        height: "100%",
        width: "100%",
        position: "relative",
        zIndex: 5,
        background: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        padding: "20px 10px",
        boxSizing: "border-box",
        ".MuiFormControl-root": {
            "&:not(&:nth-of-type(1))": {
                marginTop: "16px",
            },
        },
    },
}));

const SendMeAnEmailWrapper: FunctionComponent<{ children: ReactNode }> = (props) => {
    return (
        <SendMeAnEmailWrapperBase>
            <div className="content">{props.children}</div>
        </SendMeAnEmailWrapperBase>
    );
};

export default SendMeAnEmailWrapper;
