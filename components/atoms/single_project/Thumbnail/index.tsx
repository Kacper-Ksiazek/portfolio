// Tools
import { forwardRef } from "react";
import { CSS_REFERENCES } from "./css_references";
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { Styles } from "@/@types/MUI";
import type { ForwardRefExoticComponent, ReactNode } from "react";
// Styled components
import ThumbnailMainWrapper from "./ThumbnailMainWrapper";
import ThumbnailSecondWrapper from "./ThumbnailSecondWrapper";
import NextImageWithSkeleton from "@/components/atoms/NextImageWithSkeleton";
import { ShapeBottomBig, ShapeBottomSmall, ShapeTopBig, ShapeTopSmall } from "./BorderShapes";

interface ThumbnailProps {
    folder: string;
    children?: ReactNode;
    sx?: Styles;

    onClick?: () => void;
}

const Thumbnail: ForwardRefExoticComponent<ThumbnailProps> = forwardRef((props, ref) => {
    return (
        <ThumbnailMainWrapper
            className={CSS_REFERENCES.WRAPPER} //
            ref={ref as any}
            onClick={props.onClick}
            sx={props.sx}
        >
            {props.children}

            <ShapeBottomBig className={`${CSS_REFERENCES.CONTENT.BORDER_SHAPE} big left`} />
            <ShapeBottomSmall className={`${CSS_REFERENCES.CONTENT.BORDER_SHAPE} small left`} />
            <ShapeTopBig className={`${CSS_REFERENCES.CONTENT.BORDER_SHAPE} big right`} />
            <ShapeTopSmall className={`${CSS_REFERENCES.CONTENT.BORDER_SHAPE} small right`} />

            <ThumbnailSecondWrapper
                role={props.onClick ? "button" : "img"} //
                className={CSS_REFERENCES.CONTENT.DIRECT_IMG_WRAPPER}
            >
                <NextImageWithSkeleton
                    alt={props.folder}
                    layout="fill"
                    src={uploadedProjectImageURLBuilder({
                        folder: props.folder,
                        resolution: "thumbnail",
                        subject: "thumbnail",
                    })}
                />
            </ThumbnailSecondWrapper>
        </ThumbnailMainWrapper>
    );
});

Thumbnail.displayName = "Thumbnail";
Thumbnail.defaultProps = {
    children: <></>,
};
export default Thumbnail;
