// Tools
import { useEffect } from "react";
//
export const useLazyLoadedImages = (params: { srcsToLazyLoad: string[]; id: string }) => {
    const PREFIX: string = `USE_LAZY_LOADED_IMAGES_${params.id}`;
    const WRAPPER_ELEMENT_ID: string = "use-lazy-loaded-images-wrapper";

    useEffect(() => {
        const WRAPPER: HTMLElement = document.getElementById(WRAPPER_ELEMENT_ID) as HTMLElement;

        [...(document.querySelectorAll(`.${PREFIX}`) as any)].forEach((el) => el.remove());

        params.srcsToLazyLoad.forEach((src) => {
            const element = document.createElement("img");
            element.src = src;
            element.setAttribute("class", PREFIX);
            WRAPPER.appendChild(element);
        });
    }, [params.srcsToLazyLoad, PREFIX]);
};
