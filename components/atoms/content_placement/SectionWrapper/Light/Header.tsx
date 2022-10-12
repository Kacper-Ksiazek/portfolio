// Tools
import { styled } from "@mui/system";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled components
const HeaderWrapper = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    alignItems: "flex-start",
}));

const Label = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        background: theme.palette.primary.main,
    },
}));

const Header = styled("h2")(({ theme }) => ({
    fontSize: "3rem",
    fontWeight: 700,
    margin: "4px 0 16px 0",
    lineHeight: "50px",
    position: "relative",
    boxSizing: "border-box",
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        background: "#000",
    },
}));

interface LightSectionHeaderProps {
    main: string;
    label: string;
    additionalJSX?: ReactNode;
    estimatedHeight?: string;
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
                          height: props.estimatedHeight ?? "95px",
                      }
            }
            offsetTop={100}
            offsetBottom={100}
        >
            <HeaderWrapper>
                <Label className="light-section-wrapper-label">
                    <span>{props.label}</span>
                </Label>
                <Header className="light-section-wrapper-header">
                    <span>{props.main}</span>
                </Header>
                {props.additionalJSX}
            </HeaderWrapper>
        </VisibilitySensor>
    );
};

export default LightSectionHeader;
