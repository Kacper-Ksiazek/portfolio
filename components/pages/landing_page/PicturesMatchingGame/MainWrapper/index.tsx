// Tools
import { useTheme } from "@mui/material/styles";
import { CSS_REFERENCES } from "landing_page/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Styled components
import Background from "./Background";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

interface PicturesMatchingGameWrapperProps {
    children: ReactNode;
    className: string;
    preventHeaderFromRendering: boolean;
}

const PicturesMatchingGameWrapper: FunctionComponent<PicturesMatchingGameWrapperProps> = (props) => {
    const theme = useTheme();

    return (
        <DarkSectionWrapper
            id={CSS_REFERENCES.PICTURES_MATCHING_GAME}
            shapesDirection="right"
            header={{
                main: "React image matching game",
                index: 2,
                icon: <Code />,
                description: `Another very frequently seen portfolio project is a images matching game, so I had decided to code my version of it either in order to spice up everything and more importantly to create second content separator.`,
                render: !props.preventHeaderFromRendering,
            }}
            sx={{
                "button.navigation": {
                    fontSize: "18px",
                    padding: "6px 48px",
                    height: "42px",
                    fontFamily: "Montserrat Alternates",
                },
                "&.summary": {
                    height: "calc(100dvh - 40px)",
                    ".dark-section-content-wrapper": {
                        paddingBottom: "64px",
                        justifyContent: "center",
                    },
                },
                "&.gameplay-on": {
                    position: "fixed",
                    top: "-20px",
                    left: 0,
                    width: "100vw",
                    height: "100dvh",
                    borderRadius: "0",
                    overflowY: "scroll",
                    zIndex: 10000,
                    transition: "max-height .15s linear",
                    display: "flex",
                    alignItems: "center",
                    ".dark-section-wrapper-background-svg, #user-choice-animaiton-base": {
                        position: "fixed",
                        width: "calc(100vw - 8px)",
                        height: "100vh",
                        top: 0,
                        left: 0,
                    },
                    ".dark-content-wrapper-github-redirection": {
                        display: "none",
                    },
                    "&::-webkit-scrollbar": {
                        width: "8px",
                        background: theme.palette.background.paper,
                    },

                    "&::-webkit-scrollbar-track": {
                        opacity: 0.1,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#da4167",
                        borderRadius: "2px",
                    },
                    "@media (max-width:900px)": {
                        padding: "0 24px",
                        ".dark-section-wrapper-background-svg, #user-choice-animaiton-base": {
                            top: "-20px",
                        },
                    },
                    "@media (max-width:600px)": {
                        padding: "0 12px",
                    },
                    "@media (max-width:500px)": {
                        top: "-10px",
                        height: "calc(100dvh + 10px)",
                    },
                },
            }}
            className={props.className}
            githubURL="https://github.com/Kacper-Ksiazek/portfolio/tree/main/components/pages/landing_page/PicturesMatchingGame"
            childrenOutsideContent={<Background />}
        >
            {props.children}
        </DarkSectionWrapper>
    );
};

export default PicturesMatchingGameWrapper;
