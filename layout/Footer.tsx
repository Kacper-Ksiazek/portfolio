// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
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
    height: "80px",
    color: "#fff",
    span: {
        fontSize: "14px",
        fontWeight: 300,
    },
    userSelect: "none",
    "@media (max-width:1550px)": {
        width: "calc(100vw - 20px)",
        margin: "0 auto 10px auto",
    },
    ["@media (max-width:500px)"]: {
        width: "calc(100vw - 0px)",
        margin: "0 auto 0px auto",
        borderRadius: "0px",
    },
}));
const AuthorHeader = styled("h4")(({ theme }) => ({
    margin: "10px 0 0 0",
    fontSize: "20px",
    fontWeight: 700,
    fontFamily: "Montserrat Alternates",
    ["@media (max-width:800px)"]: {
        margin: 0,
    },
    ["@media (max-width:500px)"]: {
        fontSize: "18px",
    },
}));
const Footer: FunctionComponent = () => {
    return (
        <FooterBase>
            <AuthorHeader>Created by: Kacper Książek</AuthorHeader>
            <span>2019 - 2023</span>
        </FooterBase>
    );
};

export default Footer;
