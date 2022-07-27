// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import ChevronRight from "@mui/icons-material/ChevronRight";
// Styled components
import StyledButton from "@/components/_styled_components/forms/StyledButton";

const StyledAnchor = styled("a")(({ theme }) => ({
    textDecoration: "none",
    button: {
        fontFamily: "Montserrat Alternates",
    },
}));

interface SingleRedirectProps {
    href: string;
    children: ReactNode;
}

const SingleRedirect: FunctionComponent<SingleRedirectProps> = (props) => {
    return (
        <StyledAnchor href={props.href} target="_blank" rel="noreferrer">
            <StyledButton color="primary">
                {props.children}
                <ChevronRight />
            </StyledButton>
        </StyledAnchor>
    );
};

export default SingleRedirect;
