// Tools
import { styled } from "@mui/system";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
// Styled components
import MainHeader from "./MainHeader";
import AdditionalText from "./AdditionalText";

const HeaderWrapper = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    alignItems: "flex-start",
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
            offsetTop={100}
            offsetBottom={100}
        >
            <HeaderWrapper>
                <AdditionalText className="label">
                    <span>{props.label}</span>
                </AdditionalText>
                <MainHeader>
                    <span>{props.main}</span>
                </MainHeader>
                {props.additionalJSX}
            </HeaderWrapper>
        </VisibilitySensor>
    );
};

export default LightSectionHeader;
