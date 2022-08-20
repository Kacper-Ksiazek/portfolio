interface ProjectImageURLBuilderParams {
    folder: string;
    /** Either feature name or **thumbnail** instead */
    subject: string | "thumbnail";
    resolution: "fullsize" | "thumbnail";
}

// eslint-disable-next-line import/no-anonymous-default-export
export const uploadedProjectImageURLBuilder = (params: ProjectImageURLBuilderParams): string => {
    return `/upload/projects/${params.folder}/${params.subject}/${params.resolution}.jpg`;
};
