// Tools
import { useEffect } from "react";
//
export const useLazyLoadedImages = (params: { srcsToLazyLoad: string[] }) => {
    useEffect(() => {
        params.srcsToLazyLoad.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [params.srcsToLazyLoad]);
};
