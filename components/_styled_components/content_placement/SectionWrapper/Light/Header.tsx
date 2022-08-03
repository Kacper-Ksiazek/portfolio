// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
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
    animation: `${fadeFromLeft} .2s .3s linear both`,
}));

const MainHeader = styled("h2")(({ theme }) => ({
    fontSize: "3rem",
    fontWeight: 700,
    margin: "0 0 5px 0",
    lineHeight: "50px",
    animation: `${fadeFromLeft} .2s .4s linear both`,
}));

interface LightSectionHeaderProps {
    main: string;
    label: string;
    additionalJSX?: ReactNode;
    estimatedHeight: string;
}

const LightSectionHeader: FunctionComponent<LightSectionHeaderProps> = (props) => {
    return (
        <VisibilitySensor
            dontRenderNotVisableChildren
            childWrapperSx={{
                height: props.estimatedHeight,
            }}
        >
            <HeaderWrapper>
                <AdditionalText className="label">{props.label}</AdditionalText>
                <MainHeader className="alternative-font-family">{props.main}</MainHeader>
                {props.additionalJSX}
            </HeaderWrapper>
        </VisibilitySensor>
    );
};

export default LightSectionHeader;
