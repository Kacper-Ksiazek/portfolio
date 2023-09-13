// Tools
import { styled } from "@mui/material";
import { stylesWhenVisible } from "./styles_when_visible";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
const FooterBase = styled("footer")(({ theme }) => ({
    margin: "32px auto 0 auto",
    display: "flex",
    width: "100%",
    maxWidth: "1040px",
    justifyContent: "space-between",
}));

interface ToDoListFooterProps {
    children: ReactNode;
}

const ToDoListFooter: FunctionComponent<ToDoListFooterProps> = (props) => {
    return (
        <TransformWhenVisible to={stylesWhenVisible} sx={{ width: "100%" }}>
            <FooterBase>
                {props.children}
                {/*  */}
            </FooterBase>
        </TransformWhenVisible>
    );
};

export default ToDoListFooter;
