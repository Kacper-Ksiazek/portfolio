// Tools
import { getStaticPaths, getStaticProps } from "./nextjs_routing_methods";
// Types
import type { NextPage } from "next";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import Head from "next/head";

interface SingleProjectProps {
    project: Project;
}

const SingleProject: NextPage<SingleProjectProps> = (props) => {
    return (
        <>
            <Head>
                <title>{props.project.title}</title>
            </Head>
            <>
                <span>essa</span>
                <span>{JSON.stringify(props)}</span>
            </>
        </>
    );
};

export default SingleProject;

export { getStaticPaths, getStaticProps };
