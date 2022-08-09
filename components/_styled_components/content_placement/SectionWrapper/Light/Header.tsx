// Tools
import { styled } from "@mui/system";
import useWindowSizes from "@/hooks/useWindowSizes";
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
    ["@media (max-width:600px)"]: {
        margin: "0 0 12px 0",
    },
}));

interface LightSectionHeaderProps {
    main: string;
    label: string;
    additionalJSX?: ReactNode;
    estimatedHeight: string;
}

const LightSectionHeader: FunctionComponent<LightSectionHeaderProps> = (props) => {
    const { width } = useWindowSizes();

    return (
        <VisibilitySensor
            dontRenderNotVisableChildren
            childWrapperSx={
                width < 1000
                    ? {}
                    : {
                          height: props.estimatedHeight,
                      }
            }
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
