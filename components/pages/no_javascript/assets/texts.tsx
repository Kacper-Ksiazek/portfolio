import formatTextViaBolding from "utils/client/formatTextViaBolding";

export const DISABLED_JAVASCRIPT_TEXT = {
    PARAGRAPH_1: formatTextViaBolding(
        `We've noticed that JavaScript is disabled in your browser. *In order to use this website, you'll need to enable JavaScript*. JavaScript is an essential part of almost every modern web application, because it serves as the engine that powers the interactive features and dynamic content that make the web so useful and engaging.`
    ),
    PARAGRAPH_2: formatTextViaBolding(
        `Enabling JavaScript will allow you to fully experience all of the features and functionality of this website, including interactive forms, dynamic content, and real-time updates. *Without JavaScript, you may encounter errors* or missing content, and some features may not work at all.`
    ),
    PARAGRAPH_3: formatTextViaBolding(
        `To enable JavaScript, open *your browser's settings and look for "javascript" word*. Alternatively, you can try to use a different browser or incogito card. Once done, you can go back, hit refresh button and enjoy the full experience of my website.`
    ),
};

export const { PARAGRAPH_1, PARAGRAPH_2, PARAGRAPH_3 } = DISABLED_JAVASCRIPT_TEXT;
