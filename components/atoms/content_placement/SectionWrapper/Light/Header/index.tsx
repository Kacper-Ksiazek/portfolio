// Tools
import * as keyframes from "./keyframes";
import { fadeSimple } from "@/components/keyframes/intro";
import { hidePseudoElement } from "@/components/keyframes/outro";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { HeaderProps } from "../@types";
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
import { Header, Label, HeaderWrapper } from "./styled_components";
import { Styles } from "@/@types/MUI";

interface LightSectionHeaderProps extends HeaderProps {
    setDisplayBackgroundLetter: Dispatch<SetStateAction<boolean>>;
}

const LightSectionHeader: FunctionComponent<LightSectionHeaderProps> = (props) => {
    const LABEL: CSSClassName = "light-section-wrapper-label";
    const HEADER: CSSClassName = "light-section-wrapper-header";

    return (
        <TransformWhenVisible
            onVisible={() => props.setDisplayBackgroundLetter(true)}
            to={(theme): Styles => ({
                [`.${LABEL}`]: {
                    span: {
                        animation: `${fadeSimple} .001s .7s both`,
                    },
                    "&::after": {
                        content: '""',
                        ...theme.mixins.absolute_full,
                        background: theme.palette.primary.main,

                        animation: chainAnimations([
                            [keyframes.label.stageOne, 0.3, 0.3],
                            [keyframes.label.stageTwo, 0.2, 0.3],
                            [hidePseudoElement, 0.0001],
                        ]),
                    },
                },

                [`.${HEADER}`]: {
                    span: {
                        animation: `${fadeSimple} .001s 1.2s both`,
                    },
                    "&::after": {
                        content: '""',
                        ...theme.mixins.absolute_full,
                        background: theme.palette.background.lightAnimationBar,

                        animation: chainAnimations([
                            [keyframes.header.stageOne, 0.3, 0.8],
                            [keyframes.header.stageTwo, 0.2, 0.3],
                            [hidePseudoElement, 0.0001],
                        ]),
                    },
                },

                ...(props.additionalJSX && props.additionalJSX.whenVisible ? props.additionalJSX.whenVisible : {}),
            })}
        >
            <HeaderWrapper>
                <Label className={LABEL}>
                    <span>{props.label}</span>
                </Label>
                <Header className={HEADER}>
                    <span>{props.main}</span>
                </Header>

                {props.additionalJSX && props.additionalJSX.node}
            </HeaderWrapper>
        </TransformWhenVisible>
    );
};

export default LightSectionHeader;
