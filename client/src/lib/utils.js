const normalizeBasePath = function (path) {
    if (!path || path === "/") return "/";
    return `/${path.replace(/^\/+|\/+$/g, "")}/`;
};

const BASE_PATH = normalizeBasePath(import.meta.env.BASE_URL || "/");

const prefixRootRelativeUrl = function (url) {
    if (!url || !url.startsWith("/")) return url;
    if (BASE_PATH === "/") return url;
    if (url.startsWith(BASE_PATH)) return url;
    return `${BASE_PATH}${url.replace(/^\/+/, "")}`;
};



/**
 * Renders a template string by replacing placeholders with corresponding data values.
 *
 * @param {string} template - The template string containing placeholders in the format {{key}}.
 * @param {Object} data - An object containing key-value pairs where the key corresponds to the placeholder in the template.
 * @returns {string} - The rendered HTML string with placeholders replaced by data values.
 */
let genericRenderer = function(template, data){
    let html = template;
    for(let key in data){
        html = html.replaceAll(new RegExp("{{"+key+"}}", "g"), data[key]);
    }

    // Prefix root-relative URLs so templates work under /Site-commerce/ on GitHub Pages.
    html = html.replace(/(src|href)\s*=\s*(["'])(\/[^"']*)\2/g, (match, attr, quote, url) => {
        return `${attr}=${quote}${prefixRootRelativeUrl(url)}${quote}`;
    });

    return html;
}

/**
 * Converts an HTML string into a DocumentFragment.
 *
 * @param {string} htmlString - The HTML string to convert.
 * @returns {DocumentFragment} - A DocumentFragment containing the parsed HTML elements.
 */
function htmlToFragment(htmlString) {
    const normalizedHtml = htmlString.replace(/(src|href)\s*=\s*(["'])(\/[^"']*)\2/g, (match, attr, quote, url) => {
        return `${attr}=${quote}${prefixRootRelativeUrl(url)}${quote}`;
    });

    const template = document.createElement('template');
    template.innerHTML = normalizedHtml.trim(); // trim supprime les espaces inutiles
    return template.content;
}

export { genericRenderer, htmlToFragment };