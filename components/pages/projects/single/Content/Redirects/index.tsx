// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleRedirect from "./SingleRedirect";
// Styled components
const RedirectsWrapper = styled("section")(({ theme }) => ({
    display: "flex",
    marginTop: "50px",
    ["@media (max-width:600px)"]: {
        flexDirection: "column",
        a: {
            marginLeft: "0 !important",
            "&:not(&:nth-of-type(1))": {
                marginTop: "10px",
            },
        },
        button: {
            width: "100%",
        },
    },
}));

interface RedirectsProps {
    githubURL: string;
    liveDemoURL: string | null;
}

const Redirects: FunctionComponent<RedirectsProps> = ({ githubURL, liveDemoURL }) => {
    return (
        <RedirectsWrapper>
            <SingleRedirect href={githubURL}>See project on github</SingleRedirect>
            {liveDemoURL && <SingleRedirect href={liveDemoURL}>Live demo</SingleRedirect>}
        </RedirectsWrapper>
    );
};

export default Redirects;
