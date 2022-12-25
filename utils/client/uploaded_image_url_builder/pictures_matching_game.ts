interface PictureMatchingGameURLBuilderParams {
    folder: string;
    resolution: "fullsize" | "thumbnail";
}

export const picturesMatchingGameURLBuilder = (params: PictureMatchingGameURLBuilderParams): string => {
    return `/images/landing-page/images-matching-game/${params.folder}/${params.resolution}.jpg`;
};
