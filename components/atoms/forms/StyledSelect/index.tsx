// Tools
import { generateAliasFromValue } from "./utils";
// Types
import type { SxProps } from "@mui/material";
import type { ChangeEvent, HTMLAttributes, ReactNode } from "react";
import type { ComponentThemeName } from "../_common_component_color_themes";
// Material UI Components
import MenuItem from "@mui/material/MenuItem";
// Styled components
import StyledSelectBase from "./Base";

export interface OptionWithAlias<T> {
    value: T;
    alias: string;
}

type OnChangeEvent<T> = ChangeEvent<HTMLHtmlElement> & {
    target: {
        value: T;
    };
};

interface StyledSelectProps<T> extends Omit<HTMLAttributes<HTMLSelectElement>, "onChange"> {
    value: T;
    options: (T | OptionWithAlias<T>)[];

    onChange: (e: OnChangeEvent<T>) => void;

    sx?: SxProps;
    disabled?: boolean;
    className?: string;
    startAdornment?: ReactNode;
    componentThemeID?: ComponentThemeName;
    disableAutomaticallyGeneratedAlias?: boolean;
}

export default function StyledSelect<T extends number | string | Record<any, any>>(props: StyledSelectProps<T>) {
    const { options, sx, id, ...propsToForward } = props;

    return (
        <StyledSelectBase
            {...(propsToForward as any)}
            MenuProps={{
                sx: (theme) => {
                    return theme.palette.mode === "light"
                        ? {
                              ".MuiList-root": {
                                  background: "#fff",
                              },
                          }
                        : null;
                },
            }}
            componentsProps={{
                root: {
                    id: id,
                },
            }}
            sx={(theme) => (typeof sx === "function" ? sx(theme) : sx ?? new Object())}
        >
            {options.map((item, index) => {
                if (item instanceof Object) {
                    return (
                        <MenuItem value={item.value} key={index}>
                            {item.alias}
                        </MenuItem>
                    );
                }

                return (
                    <MenuItem value={item} key={index}>
                        {props.disableAutomaticallyGeneratedAlias !== true && typeof item === "string" ? generateAliasFromValue(item) : item}
                    </MenuItem>
                );
            })}
        </StyledSelectBase>
    );
}
