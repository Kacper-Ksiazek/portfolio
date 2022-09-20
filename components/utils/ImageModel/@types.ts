// Types
import type { Dispatch, SetStateAction } from "react";

export interface GalleryProps {
    imagesInTotal: number;
    currentIndex: number;
    setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}
