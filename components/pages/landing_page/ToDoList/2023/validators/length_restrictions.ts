// Types
import type { Restriction } from "@/@types/Restriction";

export const TITLE_RESTRICTIONS: Restriction = {
    max: 64,
    min: 10,
};

export const DESCRIPTION_RESTRICTIONS: Restriction = {
    max: 256,
    min: 10,
};

export const LOCALIZATION_RESTRICTIONS: Restriction = {
    max: 32,
    min: 3,
};
