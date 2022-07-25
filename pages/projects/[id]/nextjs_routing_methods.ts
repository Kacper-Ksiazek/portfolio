// Tools
import moment from "moment";
import { prisma } from "@/prisma/db";
// Types
import type { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async (context) => {
    const paths = (await prisma.project.findMany({ select: { id: true } })).map((el) => {
        return {
            params: { id: el.id },
        };
    });

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const project = await prisma.project.findUnique({
        where: { id: context.params?.id as string },
    });

    // Redirect to 404 if there is no project
    if (!project) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            },
        };
    }

    const formatDate = (date: Date): string => moment(date).format("MMMM YYYY");

    (project as any).start = formatDate(project.start);
    (project as any).end = formatDate(project.end);

    return {
        props: {
            project,
        },
    };
};
