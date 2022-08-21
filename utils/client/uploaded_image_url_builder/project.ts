interface ProjectImageURLBuilderParams {
    folder: string;
    /** Either feature name or **thumbnail** instead */
    subject: string | "thumbnail";
    resolution: "fullsize" | "thumbnail";
}

export const uploadedProjectImageURLBuilder = (params: ProjectImageURLBuilderParams): string => {
    return `/upload/projects/${params.folder}/${params.subject}/${params.resolution}.jpg`;
};
