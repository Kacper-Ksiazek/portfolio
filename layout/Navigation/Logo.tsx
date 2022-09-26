// Tools
import { styled } from "@mui/system";
import { useRouter } from "next/router";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import Image from "next/image";
// Styled Components
const Header = styled("h3")(({ theme }) => ({
    margin: "0",
    userSelect: "none",
    marginLeft: "20px",
    fontSize: "32px",
    fontWeight: 700,
    fontFamily: "Montserrat Alternates",
    ["@media (max-width:500px)"]: {
        fontSize: "28px",
        marginLeft: "16px",
    },
    ["@media (max-width:340px)"]: {
        fontSize: "24px",
        marginLeft: "12px",
    },
}));

const SingleFlexWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    zIndex: 1000,
}));

const ImageWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    width: "60px",
    height: "40px",
    ["@media (max-width:500px)"]: {
        width: "52px",
        height: "36px",
    },
}));

const Logo: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const router = useRouter();

    const redirectToMainPage = () => {
        if (router.pathname === "/") return;
        router.push("/?skipIntroductionAnimationEvenThoughItsCool=1");
    };

    return (
        <SingleFlexWrapper onClick={redirectToMainPage}>
            <ImageWrapper id="portfolio-logo-image">
                <Image
                    src={"/logo.png"} //
                    alt="page-logo"
                    layout="fill"
                />
            </ImageWrapper>

            <Header id="portfolio-logo-header">K_Książek</Header>
        </SingleFlexWrapper>
    );
};

export default Logo;
