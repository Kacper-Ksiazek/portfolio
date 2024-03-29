// Tools
import { styled } from "@mui/material";
// MUI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Redirection from "./Redirection";
// Styled components
const SocialMediaRedirectionsBase = styled("section")(({ theme }) => ({
    display: "flex",
    gap: "32px",
    justifyContent: "center",
    alignItems: "center",
    margin: "32px 0",
}));

const OPTIONS: { icon: React.ReactElement; url: string }[] = [
    {
        icon: <GitHubIcon />,
        url: "https://github.com/Kacper-Ksiazek",
    },
    {
        icon: <LinkedInIcon />,
        url: "https://www.linkedin.com/in/kacper-b-ksi%C4%85%C5%BCek/",
    },
];

const SocialMediaRedirections: React.FunctionComponent = () => {
    return (
        <SocialMediaRedirectionsBase id="cv-redirections">
            {OPTIONS.map((item, index) => {
                return (
                    <Redirection
                        key={item.url} //
                        {...item}
                    />
                );
            })}
        </SocialMediaRedirectionsBase>
    );
};

export default SocialMediaRedirections;
