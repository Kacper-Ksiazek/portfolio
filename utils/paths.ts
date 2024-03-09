// Tools
import path from "path";

/** The root directory of uploaded files */
export const uploadDir = path.resolve(path.join("public", "upload"));

/* The root directory of public assets */
export const assetsDir = path.resolve(path.join("public", "assets"));

/* The root directory of my CV's */
export const cvDir = path.resolve(path.join(assetsDir, "cv"));
