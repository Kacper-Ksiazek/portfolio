// Tools
import { useState } from "react";
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
const MenuItemRoot = dynamic(() => import("./MenuItemRoot"));
// Styled components
import { Wrapper, Button } from "./styled_components";

interface ThemeOptionButtonProps {
    icon: ReactNode;
    label: string;
    buttonClassName?: string;
    id?: string;
    menuItemIndex?: number;

    onClick?: () => void;
}

const ThemeOption: FunctionComponent<ThemeOptionButtonProps> = (props) => {
    const isMenuItem: boolean = props.menuItemIndex !== undefined;

    return (
        <Wrapper className={isMenuItem ? "menu-item" : ""}>
            {isMenuItem && <MenuItemRoot menuItemIndex={props.menuItemIndex as number} />}

            <Button.Base id={props.id} className={`${props.buttonClassName} color-theme-button`}>
                <Button.ThemeName className="theme-name">{props.label}</Button.ThemeName>
                <Button.IconWrapper className="icon-wrapper">{props.icon}</Button.IconWrapper>
            </Button.Base>
        </Wrapper>
    );
};

export default ThemeOption;
