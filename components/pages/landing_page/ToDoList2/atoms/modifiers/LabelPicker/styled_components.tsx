// Tools
import { styled } from "@mui/material";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";

export const Select = styled(StyledSelect, {
    shouldForwardProp: (prop: string) => !["size"].includes(prop),
})<{ size: `${string}px` }>(({ theme, ...props }) => ({
    minWidth: "210px",
    height: props.size,
    ".MuiSelect-select": {
        fontSize: "16px",
        width: "100%",
        paddingBottom: "4px !important",
        paddingTop: "4px !important",
    },
}));
