// Types
import type { FunctionComponent } from "react";
// Other components
import Head from "next/head";

interface SEOProps {
    title?: string;
    description: string;
    /**
     * The domain name of the beginning of the canonical url **is gonna be added automatically**
     */
    canonicalURLEnding?: string;
}

const SEO: FunctionComponent<SEOProps> = (props) => {
    const THUMBNAIL_URL: string = "https://i.imgur.com/3uu3dxX.jpeg";

    const urlRoot = process.env.NEXT_PUBLIC_ROOT_URL;
    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    const title = props.title ?? appName;
    const canonical = `${urlRoot}${props.canonicalURLEnding ?? ""}`;

    return (
        <Head>
            <title key="title">{title}</title>

            <meta name="description" content={props.description} />
            <meta key="og_type" property="og:type" content="website" />
            <meta key="og_title" property="og:title" content={props.title} />
            <meta key="og_description" property="og:description" content={props.description} />
            <meta key="og_locale" property="og:locale" content="pl_PL" />
            <meta key="og_url" property="og:url" content={canonical} />
            <meta key="og_site_name" property="og:site_name" content={appName} />
            <meta key="og_image" property="og:image" content={THUMBNAIL_URL} />
            <meta key="og_image:alt" property="og:image:alt" content="Open Graph Thumbnail" />
            <meta key="og_image:width" property="og:image:width" content="600" />
            <meta key="og_image:height" property="og:image:height" content="400" />

            <meta name="robots" content="index,follow" />

            <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta key="twitter:title" property="twitter:title" content={title} />
            <meta key="twitter:description" property="twitter:description" content={props.description} />

            <link rel="canonical" href={canonical} />

            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    );
};

export default SEO;
