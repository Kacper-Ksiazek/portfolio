// Tools
import { CSS_REFERENCES } from "./css_references";
import { stylesWhenVisible } from "./styles_when_visible";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
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
    if (props.render === false) return <></>;

    return (
        <TransformWhenVisible
            from={{ visibility: "hidden" }} //
            to={(theme) => stylesWhenVisible(theme)}
            onVisible={() => props.setIsVisible(true)}
        >
            <HeaderBase>
                <IconWrapper className={CSS_REFERENCES.ICON}>{props.icon}</IconWrapper>

                <h4 className={CSS_REFERENCES.SUB_HEADER}>
                    <span>#{props.index}</span>
                </h4>
                <h2 className={CSS_REFERENCES.MAIN_HEADER}>
                    <span>{props.main}</span>
                </h2>
                <h4 className={CSS_REFERENCES.SUB_HEADER}>
                    <span>Junior frontend developer projects</span>
                </h4>

                <Description className={CSS_REFERENCES.DESCRIPTION}>
                    {(() => {
                        if (typeof props.description === "string") {
                            return <span>{formatTextViaBolding(props.description)}</span>;
                        } //
                        else return <>{props.description}</>;
                    })()}
                </Description>

                <Divider className={CSS_REFERENCES.DIVIDER} />
            </HeaderBase>
        </TransformWhenVisible>
    );
};

DarkSectionHeader.defaultProps = {
    render: true,
};

export default DarkSectionHeader;
