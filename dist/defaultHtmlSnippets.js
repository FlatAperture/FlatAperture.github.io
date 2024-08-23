"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceHtmlSnippets = replaceHtmlSnippets;
const defaultConstants_1 = require("./defaultConstants");
function replaceHtmlSnippets() {
    replaceHtmlSnippet("default-header", defaultConstants_1.defaultHeader);
    replaceHtmlSnippet("default-site-content", defaultConstants_1.defaultSiteContent);
    replaceHtmlSnippet("default-footer", defaultConstants_1.defaultFooter);
}
function replaceHtmlSnippet(elementId, node) {
    const el = document.getElementById(elementId);
    if (el == null) {
        return;
    }
    el.replaceWith(node);
}
//# sourceMappingURL=defaultHtmlSnippets.js.map