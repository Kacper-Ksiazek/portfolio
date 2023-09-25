// Tools
import { styled } from "@mui/material";
import { useRouter } from "next/router";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/image";
// Styled Components
const Header = styled("h3")(({ theme }) => ({
    margin: "0",
    userSelect: "none",
    marginLeft: "12px",
    fontSize: "32px",
    fontWeight: 700,
    fontFamily: "Montserrat Alternates",
    "@media (max-width:1100px)": {
        marginLeft: "10px",
        fontSize: "30px",
    },
    "@media (max-width:500px)": {
        fontSize: "28px",
    },
    "@media (max-width:340px)": {
        fontSize: "24px",
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
    height: "54px",
    aspectRatio: "1.552",
    "@media (max-width:500px)": {
        height: "42px",
    },
}));

interface LogoProps {
    mobileMenuIsOpened: boolean;
    closeMobileMenu: () => void;
}

const Logo: FunctionComponent<LogoProps> = (props) => {
    const router = useRouter();

    const redirectToMainPage = () => {
        if (router.pathname === "/") {
            if (props.mobileMenuIsOpened) {
                props.closeMobileMenu();
                setTimeout(() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                }, 600);
            } else {
                scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            router.push("/?skipIntroductionAnimationEvenThoughItsCool=1");
        }
    };

    return (
        <SingleFlexWrapper onClick={redirectToMainPage}>
            <ImageWrapper id="portfolio-logo-image">
                <Image
                    src="/main-page-logo/xs.png" //
                    alt="page-logo"
                    layout="fill"
                />
            </ImageWrapper>

            <Header id="portfolio-logo-header">K_Książek</Header>
        </SingleFlexWrapper>
    );
};

export default Logo;
