// Tools
import { styled, alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled Components
const AuthorHeaderBase = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    h4: {
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
    },
    ".years": {
        fontSize: "14px",
        fontWeight: 300,
        color: alpha("#fff", 0.8),
    },
}));

const AuthorHeader: FunctionComponent = (props) => {
    return (
        <AuthorHeaderBase>
            <h4 className="author">Created by: Kacper Książek</h4>
            <span className="years">2019 - 2023</span>
        </AuthorHeaderBase>
    );
};

export default AuthorHeader;
