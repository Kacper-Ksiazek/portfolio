// Tools
import * as keyframes from "./keyframes";
import { fadeSimple } from "@/components/keyframes/intro";
import { hidePseudoElement } from "@/components/keyframes/outro";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { FunctionComponent } from "react";
import type { LightSectionWrapperProps } from "../@types";
// Other components
import RenderOnScroll from "@/components/utils/RenderOnScroll";
// Styled components
import { Header, Label, HeaderWrapper } from "./styled_components";
import { Styles } from "@/@types/MUI";

const LightSectionHeader: FunctionComponent<LightSectionWrapperProps["header"]> = (props) => {
    const LABEL: CSSClassName = "light-section-wrapper-label";
    const HEADER: CSSClassName = "light-section-wrapper-header";

    return (
        <RenderOnScroll
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
                        background: theme.palette.text.primary,

                        animation: chainAnimations([
                            [keyframes.header.stageOne, 0.3, 0.8],
                            [keyframes.header.stageTwo, 0.2, 0.3],
                            [hidePseudoElement, 0.0001],
                        ]),
                    },
                },

                ...(props.additionalJSX ? props.additionalJSX.whenVisible : {}),
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
        </RenderOnScroll>
    );
};

export default LightSectionHeader;
