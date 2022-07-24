// Tools
import moment from "moment";
import { prisma } from "@/prisma/db";
// Types
import type { Project } from "@/@types/pages/projects/SingleProject";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";

interface SingleProjectProps {
    project: Project;
}

const SingleProject: NextPage<SingleProjectProps> = (props) => {
    return (
        <>
            <span>essa</span>
            <span>{JSON.stringify(props)}</span>
        </>
    );
};

export default SingleProject;

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

    if (!project) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            },
        };
    }

    (project as any).start = moment(project.start).format("MMMM YYYY");
    (project as any).end = moment(project.end).format("MMMM YYYY");

    return {
        props: {
            project,
        },
    };
};
