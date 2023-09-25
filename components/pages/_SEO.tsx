// Types
import type { FunctionComponent } from "react";
// Other components
import Head from "next/head";

interface SEOProps {
    title?: string;
    description: string;
    canonicalURLEnding?: string;
}

const SEO: FunctionComponent<SEOProps> = (props) => {
    const OPEN_GRAPH_THUMBNAIL: string = "https://i.imgur.com/CyWV8QI.png";

    const urlRoot: string = process.env.NEXT_PUBLIC_ROOT_URL;
    const appName: string = process.env.NEXT_PUBLIC_APP_NAME;

    const title: string = props.title ?? appName;
    const canonical: string = `${urlRoot}${props.canonicalURLEnding ?? ""}`;

    return (
        <Head>
            <title key="title">{title}</title>
            <meta name="description" content={props.description} />

            <link rel="canonical" href={canonical} />
            <meta name="robots" content="index, follow, notranslate" />

            {/* Open Graph */}
            <meta key="og_type" property="og:type" content="website" />
            <meta key="og_title" property="og:title" content={props.title} />
            <meta key="og_description" property="og:description" content={props.description} />
            <meta key="og_locale" property="og:locale" content="pl_PL" />
            <meta key="og_url" property="og:url" content={canonical} />
            <meta key="og_site_name" property="og:site_name" content={appName} />
            <meta key="og_image" property="og:image" content={OPEN_GRAPH_THUMBNAIL} />
            <meta key="og_image:alt" property="og:image:alt" content="Open Graph Thumbnail" />
            <meta key="og_image:width" property="og:image:width" content="600" />
            <meta key="og_image:height" property="og:image:height" content="400" />

            {/* Twitter */}
            <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta key="twitter:title" property="twitter:title" content={title} />
            <meta key="twitter:description" property="twitter:description" content={props.description} />

            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    );
};

export default SEO;
