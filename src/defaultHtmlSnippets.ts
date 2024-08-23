import {
  defaultFooter,
  defaultHeader,
  defaultSiteContent,
} from "./defaultConstants";

export function replaceHtmlSnippets() {
  replaceHtmlSnippet("default-header", defaultHeader);
  replaceHtmlSnippet("default-site-content", defaultSiteContent);
  replaceHtmlSnippet("default-footer", defaultFooter);
}

function replaceHtmlSnippet(elementId: string, node: Node | string) {
  const el = document.getElementById(elementId);
  if (el == null) {
    return;
  }
  el.replaceWith(node);
}
