// Types
import type { ReactNode } from "react";

export interface WayToReachMe {
    icon: ReactNode;
}
export interface ViaEmailAddress extends WayToReachMe {
    via: "EMAIL";
    email: string;
}
export interface ViaParticularApp extends WayToReachMe {
    via: "PARTICULAR_SERVICE";
    url: string;
}

export type SingleWayToReachMeProps = ViaEmailAddress | ViaParticularApp;
