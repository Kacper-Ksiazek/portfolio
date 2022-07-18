// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Styled components
const HeaderWrapper = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    userSelect: "none",
    color: "#fff",
}));

const AdditionalText = styled("span")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "18px",
}));

const MainHeader = styled("h2")(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 5px 0",
}));

interface DarkSectionHeaderProps {
    main: string;
    label: string;
}

const DarkSectionHeader: FunctionComponent<DarkSectionHeaderProps> = (props) => {
    return (
        <HeaderWrapper>
            <MainHeader className="alternative-font-family">{props.main}</MainHeader>
            <AdditionalText>{props.label}</AdditionalText>
        </HeaderWrapper>
    );
};

export default DarkSectionHeader;
