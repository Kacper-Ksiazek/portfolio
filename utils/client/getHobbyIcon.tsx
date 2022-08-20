// Types
import type { ReactNode } from "react";
import type { HobbyIcon } from "@prisma/client";
// Material UI Icons
import Terminal from "@mui/icons-material/Terminal";
import MusicNote from "@mui/icons-material/MusicNote";
import SportsEsports from "@mui/icons-material/SportsEsports";

// eslint-disable-next-line import/no-anonymous-default-export
export default (hobbyIcon: HobbyIcon): ReactNode => {
    const icons: Record<HobbyIcon, ReactNode> = {
        TERMINAL: <Terminal />,
        MUSIC_NOTE: <MusicNote />,
        SPORTS_ESPORTS: <SportsEsports />,
    };

    return icons[hobbyIcon];
};
