// Tools
import { styled } from "@mui/system";

export const Header = styled("h4")(({ theme }) => ({
    margin: 0,
    fontSize: "22px",
    fontFamily: "Montserrat Alternates",
}));

export const Description = styled("p")(({ theme }) => ({
    margin: "8px 0 0 0",
    fontSize: "16px",
}));

export const RedirectionsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "12px",
    ["@media (max-width:500px)"]: {
        marginTop: "32px",
    },
}));
