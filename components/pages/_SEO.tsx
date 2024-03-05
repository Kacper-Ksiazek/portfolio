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
    const OPEN_GRAPH_THUMBNAIL: string = "https://i.imgur.com/oV1MqpF.png";

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

            {/* Favicon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#832161" />
            <meta name="msapplication-TileColor" content="#F9FAFB" />
            <meta name="theme-color" content="#161619" />

            {/* JSON-LD */}
            <script
                key="json-ld" //
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                item: {
                                    "@type": "WebPage",
                                    name: "About me",
                                    url: "/?skip-introduction-screen-rectangle-animations=1&scrollToElement=landing-page--projects",
                                },
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                item: {
                                    "@type": "WebPage",
                                    name: "My projects",
                                    url: "/?skip-introduction-screen-rectangle-animations=1&scrollToElement=landing-page--projects",
                                },
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                item: {
                                    "@type": "WebPage",
                                    name: "Contact",
                                    url: "/?skip-introduction-screen-rectangle-animations=1&scrollToElement=landing-page--projects",
                                },
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                item: {
                                    "@type": "WebPage",
                                    name: "CV",
                                    url: "/cv",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* Disabled javascript */}
            <noscript>
                <meta httpEquiv="refresh" content="0; url=/no-javascript" />
            </noscript>
        </Head>
    );
};

export default SEO;
