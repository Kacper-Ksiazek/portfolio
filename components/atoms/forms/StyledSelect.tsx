// Tools
import { styled, SxProps } from "@mui/material";
// Types
import type { ChangeEvent, HTMLAttributes, ReactNode } from "react";
// Material UI Components
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Styled components
const StyledSelectBase = styled(Select)(({ theme }) => ({
    fontSize: "16px",
    "@media (max-width:500px)": {
        width: "100%",
    },
    ".MuiSelect-select": {
        padding: "14px 16px",
    },
    ...(theme.palette.mode === "light" && {
        background: theme.palette.background.default,
    }),
}));

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
    className?: string;
    sx?: SxProps;
    startAdornment?: ReactNode;
    disabled?: boolean;

    onChange: (e: OnChangeEvent<T>) => void;
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
                if (item instanceof Object) throw new Error("You cannot use an object standalone without an alias to it!");
                return (
                    <MenuItem value={item} key={index}>
                        {item}
                    </MenuItem>
                );
            })}
        </StyledSelectBase>
    );
}
