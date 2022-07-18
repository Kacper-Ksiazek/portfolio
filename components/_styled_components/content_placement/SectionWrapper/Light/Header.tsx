// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
const HeaderWrapper = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
    userSelect: "none",
}));

const AdditionalText = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: "18px",
}));

const MainHeader = styled("h2")(({ theme }) => ({
    fontSize: "3rem",
    fontWeight: 700,
    margin: "0 0 5px 0",
    lineHeight: "50px",
}));

interface LightSectionHeaderProps {
    main: string;
    label: string;
    additionalJSX?: ReactNode;
}

const LightSectionHeader: FunctionComponent<LightSectionHeaderProps> = (props) => {
    return (
        <HeaderWrapper>
            <AdditionalText>{props.label}</AdditionalText>
            <MainHeader className="alternative-font-family">{props.main}</MainHeader>
            {props.additionalJSX}
        </HeaderWrapper>
    );
};

export default LightSectionHeader;
