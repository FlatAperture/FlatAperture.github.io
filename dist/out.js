var PageName;
(function (PageName) {
    PageName[PageName["Home"] = 0] = "Home";
    PageName[PageName["Examples"] = 1] = "Examples";
    PageName[PageName["AnotherPage"] = 2] = "AnotherPage";
    PageName[PageName["Contact"] = 3] = "Contact";
})(PageName || (PageName = {}));
var defaultHeader = function (data) {
    var homeSelected = "";
    var examplesSelected = "";
    var anotherPageSelected = "";
    var contactUsSelected = "";
    if (data.page == PageName.Home)
        homeSelected = "class=selected";
    if (data.page == PageName.Examples)
        examplesSelected = "class=selected";
    if (data.page == PageName.AnotherPage)
        anotherPageSelected = "class=selected";
    if (data.page == PageName.Contact)
        contactUsSelected = "class=selected";
    return "\n<div id=header>\n  <div id=logo>\n    <div id=logo_text>\n      <h1>\n        <a href=index.html>\n        Portal<span class=logo_color>0.5</span></a>\n      </h1>\n      <h2>Official Portal 0.5 Website.</h2>\n    </div>\n  </div>\n  <div id=menubar>\n    <ul id=menu>\n      <li ".concat(homeSelected, " ><a href=index.html>Home</a>\n      <li ").concat(examplesSelected, " ><a href=examples.html>Examples</a>\n      <li ").concat(anotherPageSelected, " ><a href=another_page.html>Another Page</a>\n      <li ").concat(contactUsSelected, " ><a href=contact.html>Contact Us</a>\n    </ul>\n  </div>\n</div>\n").trim();
};
var defaultSiteContent = function (data) {
    return "\n<div id=site-content>\n  <div id=banner></div>\n  <div id=sidebar_container>\n    <div class=sidebar>\n      <div class=sidebar_top></div>\n      <div class=sidebar_item>\n        <h3>Latest Updates</h3>\n        <h4>".concat(data.latestUpdateVersion, "</h4>\n        <h5>").concat(data.latestUpdateDate, "</h5>\n        <p>").concat(data.latestUpdateDescription, "<br><a href=#>Read more</a>\n      </div>\n      <div class=sidebar_base></div>\n    </div>\n    <div class=sidebar>\n      <div class=sidebar_top></div>\n      <div class=sidebar_item>\n        <h3>Useful Links</h3>\n        <ul>\n          <li><a href=#>link 1</a>\n          <li><a href=#>link 2</a>\n          <li><a href=#>link 3</a>\n          <li><a href=#>link 4</a>\n        </ul>\n      </div>\n      <div class=sidebar_base></div>\n    </div>\n    <div class=sidebar>\n      <div class=sidebar_top></div>\n      <div class=sidebar_item>\n        <h3>Search</h3>\n        <form action=# id=search_form method=post>\n          <p><input name=search_field class=search value=\"Enter keywords.....\"> <input name=search alt=Search src=assets/template/search.png style=\"border:0;margin:0 0 -9px 5px\"title=Search type=image>\n        </form>\n      </div>\n      <div class=sidebar_base></div>\n    </div>\n  </div>\n  ").concat(data.content, "\n</div>\n").trim();
};
var defaultFooter = function (data) {
    return "\n<div id=footer>\n  <p><a href=index.html>Home</a> | <a href=examples.html>Examples</a> | <a href=page.html>A Page</a> | <a href=another_page.html>Another Page</a> | <a href=contact.html>Contact Us</a>\n  <p><a href=http://www.html5sbtemplates.co.uk>design from HTML5webtemplates.co.uk</a>\n</div>\n".trim();
};
function replaceHtmlSnippets() {
    replaceHtmlSnippet("default-header", defaultHeader({
        page: PageName[document.getElementById("default-header").innerHTML],
    }));
    replaceHtmlSnippet("default-site-content", defaultSiteContent({
        content: document.getElementById("default-site-content").innerHTML,
        latestUpdateDate: "August 21st, 2024",
        latestUpdateDescription: "Bugfix & Settings Update.",
        latestUpdateVersion: "1.0.1",
    }));
    replaceHtmlSnippet("default-footer", defaultFooter({}));
}
function replaceHtmlSnippet(elementId, html) {
    var el = document.getElementById(elementId);
    if (el == null) {
        return;
    }
    el.replaceWith(htmlToNode(html));
}
function htmlToNode(html) {
    var template = document.createElement("template");
    template.innerHTML = html;
    var nNodes = template.content.childNodes.length;
    if (nNodes !== 1) {
        throw new Error("html parameter must represent a single node; got ".concat(nNodes, ". ") +
            "Note that leading or trailing spaces around an element in your " +
            'HTML, like " <img/> ", get parsed as text nodes neighboring ' +
            "the element; call .trim() on your input to avoid this.");
    }
    return template.content.firstChild;
}
console.log("Main Typescript Entrypoint Found");
replaceHtmlSnippets();
