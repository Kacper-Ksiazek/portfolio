// Tools
import { countries } from "@/data/countries";
import type { FunctionComponent } from "react";
// Types
import type { SxProps } from "@mui/material";
import type { CountryType } from "@/data/countries";
// Material UI Components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";

interface AutocompleteProps {
    value: CountryType | null;
    error: boolean;
    onChange: (value: CountryType | null) => void;
    sx?: SxProps;
}
const AutocompleteCountry: FunctionComponent<AutocompleteProps> = (props) => {
    return (
        <Autocomplete
            autoHighlight //
            options={countries}
            getOptionLabel={(option: CountryType) => option.label}
            onChange={(_: any, newValue: CountryType | null) => props.onChange(newValue)}
            value={props.value}
            isOptionEqualToValue={(option: CountryType, value: CountryType) => option.label === value.label && option.code === value.code}
            sx={props.sx}
            renderOption={(optionProps, option: CountryType) => {
                return (
                    <Box
                        component="li" //
                        {...optionProps}
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            loading="lazy" //
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code})
                    </Box>
                );
            }}
            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label="Country"
                        color="secondary"
                        inputProps={{
                            ...params.inputProps,
                        }}
                        error={props.error}
                        InputProps={{
                            ...params.InputProps,
                            ...{
                                startAdornment: (() => {
                                    if (!props.value) return null;
                                    return (
                                        <InputAdornment position="end">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                loading="lazy" //
                                                width="20"
                                                src={`https://flagcdn.com/w20/${props.value.code.toLowerCase()}.png`}
                                                alt=""
                                            />
                                        </InputAdornment>
                                    );
                                })(),
                            },
                        }}
                    ></TextField>
                );
            }}
        ></Autocomplete>
    );
};

export default AutocompleteCountry;
