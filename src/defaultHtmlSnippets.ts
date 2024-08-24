function replaceHtmlSnippets() {
  replaceHtmlSnippet(
    "default-header",
    defaultHeader({
      page: PageName[document.getElementById("default-header").innerHTML],
    })
  );
  replaceHtmlSnippet(
    "default-site-content",
    defaultSiteContent({
      content: document.getElementById("default-site-content").innerHTML,
      latestUpdateDate: "August 21st, 2024",
      latestUpdateDescription: "Bugfix & Settings Update.",
      latestUpdateVersion: "1.0.1",
    })
  );
  replaceHtmlSnippet("default-footer", defaultFooter({}));
}

function replaceHtmlSnippet(elementId: string, html: string) {
  const el = document.getElementById(elementId);
  if (el == null) {
    return;
  }
  el.replaceWith(htmlToNode(html));
}

function htmlToNode(html: string): Node {
  const template = document.createElement("template");
  template.innerHTML = html;
  const nNodes = template.content.childNodes.length;
  if (nNodes !== 1) {
    throw new Error(
      `html parameter must represent a single node; got ${nNodes}. ` +
        "Note that leading or trailing spaces around an element in your " +
        'HTML, like " <img/> ", get parsed as text nodes neighboring ' +
        "the element; call .trim() on your input to avoid this."
    );
  }
  return template.content.firstChild;
}
