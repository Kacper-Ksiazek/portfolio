// Tools
import { styled, alpha } from "@mui/system";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { HeaderProps } from "./@types";
import type { FunctionComponent } from "react";
// Styled components

const HeaderWrapper = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "48px",
    userSelect: "none",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    ["@media (max-width:500px)"]: {
        paddingTop: "32px",
    },
}));

const SecondaryHeader = styled("span")(({ theme }) => ({
    fontWeight: 500,
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Montserrat Alternates",
}));

const MainHeader = styled("h2")(({ theme }) => ({
    fontSize: "40px",
    fontWeight: 700,
    margin: "0 0 5px 0",
}));

const Description = styled("p")(({ theme }) => ({
    position: "relative",
    fontSize: "18px",
    margin: "32px 0 8px 0",
    maxWidth: "840px",
    width: "100%",
    strong: {
        color: theme.palette.primary.main,
    },
    "&::after": {
        content: "''",
        position: "absolute",
        left: "50%",
        bottom: "-22px",
        width: "160px",
        height: "2px",
        borderRadius: "1px",
        background:
            theme.palette.mode === "light" //
                ? "#64516A"
                : "#892E45",
        transform: "translateX(-50%)",
    },
}));

const IconWrapper = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "-32%",
    color:
        theme.palette.mode === "light" //
            ? "#64516A"
            : "#892E45",
    svg: {
        fontSize: "256px",
    },
    ["@media (max-width:500px)"]: {
        top: "-12%",
    },
}));

const DarkSectionHeader: FunctionComponent<HeaderProps> = (props) => {
    return (
        <HeaderWrapper>
            <IconWrapper className="dark-content-wrapper-header-icon">{props.icon}</IconWrapper>

            <SecondaryHeader className="dark-content-wrapper-header-index">#{props.index}</SecondaryHeader>
            <MainHeader className="dark-content-wrapper-header-main">{props.main}</MainHeader>
            <SecondaryHeader className="dark-content-wrapper-header-secondary">Junior frontend developer projects</SecondaryHeader>

            <Description className="dark-content-wrapper-header-description">{formatTextViaBolding(props.description)}</Description>
        </HeaderWrapper>
    );
};

export default DarkSectionHeader;
