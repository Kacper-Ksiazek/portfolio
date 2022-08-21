// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import LocationOn from "@mui/icons-material/LocationOn";
// Styled components
const LocalizationBase = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    position: "relative",
    fontSize: "14px",
    left: "-4px",
    svg: {
        marginRight: "4px",
    },
    span: {
        marginRight: "4px",
    },
}));

interface LocalizationProps {
    city: string;
    country?: string;
}

const Localization: FunctionComponent<LocalizationProps> = (props) => {
    return (
        <LocalizationBase>
            <LocationOn />
            {props.country ? (
                <span>
                    <strong>{props.country}</strong>,
                </span>
            ) : (
                <></>
            )}
            {props.city}
        </LocalizationBase>
    );
};

export default Localization;
