// Tools
import fse from "fs-extra";
import path from "path";
import { uploadDir } from "../utils/paths";
import { PrismaClient } from "@prisma/client";
import ConsolePrettier from "../utils/api/ConsolePrettier";
// Data
import projectsData from "./data/projects";
import hobbiesData from "./data/hobbies";
// Types
import { SeederDataList, ModelName } from "./data/@types";

const prisma = new PrismaClient();

interface ModelToSeed {
    model: ModelName;
    data: SeederDataList<any>;
}

interface PrismaSeederParams {
    seeders: ModelToSeed[];
    uploadFoldersToRefresh: string[];
}

class PrismaSeeder extends ConsolePrettier {
    protected imagesToUpload: Set<string> = new Set();
    protected seeders: ModelToSeed[];
    protected uploadFoldersToRefresh: string[];

    public constructor(params: PrismaSeederParams) {
        super();

        this.seeders = params.seeders;
        this.uploadFoldersToRefresh = params.uploadFoldersToRefresh;
    }

    protected async deleteCurrentImages() {
        this.consoleMsg("Delete currently storing images");

        for (const folder of this.uploadFoldersToRefresh) {
            if (await fse.pathExists(path.join(uploadDir, folder))) {
                await fse.remove(path.join(uploadDir, folder));
            }
            await fse.mkdir(path.join(uploadDir, folder));
            this.consoleMsg(`${folder}- folder has been revamped`, "SUCCESS");
        }
    }

    protected async seedModel(name: ModelName, dataset: SeederDataList<any>) {
        await (prisma[name] as any).deleteMany();
        this.consoleMsg(`Store ${name} data`);

        const data = dataset.map((el) => {
            const { _imagesDir, ...rest } = el;
            if (_imagesDir) this.imagesToUpload.add(_imagesDir);
            return rest;
        });

        await (prisma[name] as any).createMany({
            data: data as any,
        });
        this.consoleMsg(`${data.length} records have been added`, "SUCCESS");
    }

    protected async uploadAllImages() {
        this.consoleMsg("Save all images distinguished in above steps");
        const dataDir = path.join(__dirname, "data", "images");
        for (const img of Array.from(this.imagesToUpload)) {
            try {
                await fse.copy(path.join(dataDir, img), path.join(uploadDir, img));
                this.consoleMsg(`${img} images director has been stored`, "SUCCESS");
            } catch (e) {
                this.consoleMsg(`${img} images director has NOT been stored`, "ERROR");
            }
        }
    }

    async main() {
        if (process.env.NODE_ENV === "production") return;
        console.clear();

        await this.deleteCurrentImages();

        for (const { model, data } of this.seeders) {
            await this.seedModel(model, data);
        }

        await this.uploadAllImages();
    }
}

const main = async () => {
    await new PrismaSeeder({
        seeders: [
            {
                model: "project",
                data: projectsData,
            },
            {
                model: "hobby",
                data: hobbiesData,
            },
        ],
        uploadFoldersToRefresh: ["projects", "hobbies"],
    }).main();
};

main();
