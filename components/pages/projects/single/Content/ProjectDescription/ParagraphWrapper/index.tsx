// Tools
import { styled } from "@mui/material";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";

const Paragraph = styled("p")(({ theme }) => ({
    fontSize: "18px",
    margin: 0,
    cursor: "default",
}));
const Header = styled("h3")(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "Montserrat Alternates",
    margin: "20px 0 10px 0",
    cursor: "default",
}));

interface ParagraphWrapperProps {
    header: string;
    body: string;
}

const ParagraphWrapper: FunctionComponent<ParagraphWrapperProps> = (props) => {
    return (
        <div className="paragraph-wrapper">
            <Header>{props.header}</Header>
            <Paragraph>{formatTextViaBolding(props.body, true)}</Paragraph>
        </div>
    );
};

export default ParagraphWrapper;
