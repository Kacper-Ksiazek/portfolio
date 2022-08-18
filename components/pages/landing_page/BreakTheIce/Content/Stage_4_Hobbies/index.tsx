// Tools
import RWD from "./RWD";
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
import uploadedHobbyImageURLBuilder from "@/utils/client/uploaded_image_url_builder/hobby";
import useBreakTheIceContentContext from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
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

    const { hobbies } = useBreakTheIceContentContext();

    const icons = {
        CODING: <Terminal />,
        GERMAN_RAP: <MusicNote />,
        VIDEO_GAMES: <SportsEsportsIcon />,
    };

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
                {hobbies.map((item, index) => {
                    return (
                        <SingleHobby
                            key={item.id}
                            label={item.label} //
                            name={item.title}
                            icon={(icons as any)[item.id]}
                            description={item.description}
                            thumbnailURL={uploadedHobbyImageURLBuilder(item.id)}
                            thumbnailReferenceURL={item.thumbnailReferenceURL ?? undefined}
                        />
                    );
                })}
            </Carousel>
        </>
    );
};

export default Hobbies;
