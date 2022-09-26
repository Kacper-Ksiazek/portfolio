// Tools
import { useState, useEffect } from "react";
import { styled, keyframes } from "@mui/system";
// Material UI Icons
import EmojiEvents from "@mui/icons-material/EmojiEvents";
// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Other components
const lightBounce = keyframes({
    from: {
        transform: "translate(-50%,-50%) scale(.8)",
    },
    to: {
        transform: "translate(-50%,-50%) scale(1)",
    },
});
const ChampionTrophyBase = styled("div")(({ theme }) => ({
    position: "relative",
    "svg#trophy": {
        position: "relative",
        zIndex: 1,
        fontSize: "20rem",
        color: "#fcb434",
    },
    "&::before": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "32px",
        height: "32px",
        boxShadow: "0px 0px 256px 64px #fcb434",
        transform: "translate(-50%,-50%)",
        animation: `${lightBounce} 1s infinite alternate`,
    },
    ".technology-icon": {
        position: "absolute",
        top: "35%",
        left: "50%",
        width: "84px",
        height: "84px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "translate(-50%,-50%)",
        transition: `background-image .4s linear`,
        opacity: 0.75,
        zIndex: 2,
    },
}));

const ChampionTrophy: FunctionComponent = () => {
    const CHANGE_ICON_PER_MS: number = 2600;

    const [currentTrophyIconIndex, setCurrentTrophyIconIndex] = useState<number>(0);
    const trophyTechnologies: ReleventTechnology[] = ["javascript", "sass", "react", "vue", "node", "postgresql", "python"];

    // Change icons displayed on the trohy
    useEffect(() => {
        const currentInterval: ReturnType<typeof setInterval> = setInterval(() => {
            setCurrentTrophyIconIndex((val) => {
                if (val === 6) return 0;
                else return val + 1;
            });
        }, CHANGE_ICON_PER_MS);

        return () => {
            clearInterval(currentInterval);
        };
    });

    return (
        <ChampionTrophyBase>
            <EmojiEvents id="trophy" />
            <div
                className="technology-icon" //
                style={{ backgroundImage: `url("/images/technologies/white/${trophyTechnologies[currentTrophyIconIndex]}.png")` }}
            ></div>
        </ChampionTrophyBase>
    );
};

export default ChampionTrophy;
