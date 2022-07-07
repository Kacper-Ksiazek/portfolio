// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
const FooterBase = styled("footer")(({ theme }) => ({
    background: theme.palette.background.paper,
    width: "calc(100vw - 40px)",
    borderRadius: "20px",
    margin: "0 auto 20px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    color: "#fff",
    span: {
        fontSize: "18px",
        fontWeight: 300,
    },
}));
const AuthorHeader = styled("h4")(({ theme }) => ({
    margin: "10px 0 0 0",
    fontSize: "24px",
    fontWeight: 700,
}));
const Footer: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <FooterBase>
            <AuthorHeader className="alternative-font-family">Created by: Kacper Książek</AuthorHeader>
            <span>2022</span>
        </FooterBase>
    );
};

export default Footer;
