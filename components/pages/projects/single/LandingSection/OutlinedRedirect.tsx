// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Styled components
const OutlinedRedirectBase = styled(Button)(({ theme }) => ({
    padding: "4px 24px",
    fontSize: "16px",
    textTransform: "capitalize",
    fontWeight: 400,
    "&:not(&:nth-of-type(1))": {
        marginLeft: "12px",
    },
}));

interface OutlinedRedirectProps {
    url: string;
    title: string;
}

const OutlinedRedirect: FunctionComponent<OutlinedRedirectProps> = (props) => {
    return (
        <OutlinedRedirectBase variant="outlined">
            {props.title}
            <KeyboardArrowRight />
        </OutlinedRedirectBase>
    );
};

export default OutlinedRedirect;
