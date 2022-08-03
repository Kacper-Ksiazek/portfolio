// Tools
import RWD from "./RWD";
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import SingleHobby from "./SingleHobby";
import Carousel from "@/components/_utils/Carousel";
// Material UI Icons
import Terminal from "@mui/icons-material/Terminal";
import MusicNote from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";

const Hobbies: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const { width } = useWindowSizes();
    return (
        <>
            <Paragraph animationDelay={0.7}>
                Because of working usually intensively and for long time I always try to spend my leisure time <strong>wisely</strong> and get as much pleasure as possible as well as combining my
                hobbies with something that <strong>teaches</strong> for instance a <strong>foreign language</strong>.
            </Paragraph>
            <Carousel
                itemsInTotal={3} //
                itemsPerSlide={width <= 550 ? 1 : 2}
                spacing={40}
                wrapperSx={{ mt: "20px", ...(RWD as any) }}
                navigationSx={{
                    animation: `${fadeFromTop} .3s 2s linear both`,
                }}
                key={width}
            >
                <SingleHobby
                    label="Coding" //
                    name="Web development"
                    icon={<Terminal />}
                    description="From school homework, through sheer passion into near future. I honestly cannot imagine my life without this substantial factor."
                    thumbnailURL="/images/landing-page/hobbies/coding.jpg"
                />
                <SingleHobby
                    label="Music" //
                    name="German gangsta rap"
                    icon={<MusicNote />}
                    thumbnailReferenceURL="https://www.youtube.com/watch?v=0NL8H1IAHVc"
                    description="I have fallen in love with German language and now I am trying to learn some fundamentals in order to progressively understand more lyrics which I enjoy listen to."
                    thumbnailURL="/images/landing-page/hobbies/187.jpg"
                />
                <SingleHobby
                    label="Games" //
                    name="Video games"
                    icon={<SportsEsportsIcon />}
                    description="After a day of innovating IT world via my clever approach to software I like to hello some other world and relieve stress."
                    thumbnailURL="/images/landing-page/hobbies/games.jpg"
                />
            </Carousel>
        </>
    );
};

export default Hobbies;
