// Tools
import { useTheme } from "@mui/material";
import * as intro from "@/components/keyframes/intro";
import * as outro from "@/components/keyframes/outro";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { HeaderProps } from "../@types";
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
import HeaderBase from "./Base";
import { Description, Divider, IconWrapper } from "./styled_components";

interface DarkSectionHeaderProps extends HeaderProps {
    setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const DarkSectionHeader: FunctionComponent<DarkSectionHeaderProps> = (props) => {
    const theme = useTheme();

    const ICON: CSSClassName = "dark-content-wrapper-header-icon";
    const DIVIDER: CSSClassName = "dark-content-wrapper-header-divider";
    const MAIN_HEADER: CSSClassName = "dark-content-wrapper-header-main";
    const LABEL_HEADER: CSSClassName = "dark-content-wrapper-header-secondary";
    const DESCRIPTION: CSSClassName = "dark-content-wrapper-header-description";

    const EVERY: Selector = [LABEL_HEADER, DESCRIPTION, MAIN_HEADER].map((el) => `.${el}`).join(", ");

    if (props.render === false) return <></>;

    return (
        <TransformWhenVisible
            from={{ visibility: "hidden" }}
            to={{
                visibility: "visible",

                [`.${ICON}`]: {
                    animation: `${intro.fadeSimple} 2s 1s both linear`,
                },
                [`.${DIVIDER}`]: {
                    animation: `${intro.scaleFromRight} .3s 2.7s both linear`,
                },

                [EVERY]: {
                    position: "relative",
                    "&::after": {
                        content: "''",
                        ...theme.mixins.absolute_full,
                        background: theme.palette.secondary[theme.palette.mode === "light" ? "main" : "dark"],
                    },
                },

                [`.${MAIN_HEADER}`]: {
                    "&::after": {
                        animation: chainAnimations([
                            [intro.scaleFromLeft, 0.3, 0.7],
                            [outro.scaleToRight, 0.3, 0.2],
                            [outro.hidePseudoElement, 0.0001],
                        ]),
                    },
                    span: {
                        animation: `${intro.fadeSimple} .001s 1.1s both`,
                    },
                },

                [`.${LABEL_HEADER}`]: {
                    "&:nth-of-type(1)::after": {
                        animation: chainAnimations([
                            [intro.scaleFromBottom, 0.3, 1.3],
                            [outro.scaleToLeft, 0.3, 0.2],
                            [outro.hidePseudoElement, 0.0001],
                        ]),
                    },
                    "&:nth-of-type(2)::after": {
                        animation: chainAnimations([
                            [intro.scaleFromTop, 0.3, 1.3],
                            [outro.scaleToBottom, 0.3, 0.2],
                            [outro.hidePseudoElement, 0.0001],
                        ]),
                    },
                    span: {
                        animation: `${intro.fadeSimple} .001s 1.7s both`,
                    },
                },

                [`.${DESCRIPTION}`]: {
                    "&::after": {
                        animation: chainAnimations([
                            [intro.scaleFromTop, 0.3, 1.9],
                            [outro.scaleToLeft, 0.3, 0.2],
                            [outro.hidePseudoElement, 0.0001],
                        ]),
                    },
                    span: {
                        animation: `${intro.fadeSimple} .001s 2.3s both`,
                    },
                },
            }}
            onVisible={() => props.setIsVisible(true)}
        >
            <HeaderBase>
                <IconWrapper className={ICON}>{props.icon}</IconWrapper>

                <h4 className={LABEL_HEADER}>
                    <span>#{props.index}</span>
                </h4>
                <h2 className={MAIN_HEADER}>
                    <span>{props.main}</span>
                </h2>
                <h4 className={LABEL_HEADER}>
                    <span>Junior frontend developer projects</span>
                </h4>

                <Description className={DESCRIPTION}>
                    <span>{formatTextViaBolding(props.description)}</span>
                </Description>

                <Divider className={DIVIDER} />
            </HeaderBase>
        </TransformWhenVisible>
    );
};

DarkSectionHeader.defaultProps = {
    render: true,
};

export default DarkSectionHeader;
