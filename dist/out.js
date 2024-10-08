var _a;
var PageName;
(function (PageName) {
  PageName[(PageName["Home"] = 0)] = "Home";
  PageName[(PageName["Downloads"] = 1)] = "Downloads";
  PageName[(PageName["Leaderboards"] = 2)] = "Leaderboards";
  PageName[(PageName["Contact"] = 3)] = "Contact";
})(PageName || (PageName = {}));
var Category;
(function (Category) {
  Category[(Category["AnyPercent"] = 0)] = "AnyPercent";
  Category[(Category["BackspacePercent"] = 1)] = "BackspacePercent";
  Category[(Category["Glitchless"] = 2)] = "Glitchless";
})(Category || (Category = {}));
var playerData = {
  Quintos: {
    country: "Netherlands"
  }
};
var anyPercent = {};
var glitchless = {};
var backspacePercent = {
  "1.0.0": [
    { time: "1m 59s 420ms", name: "Quintos" },
    { time: "2m 23s 560ms", name: "Quintos" }
  ]
};
var standardRules =
  "\n  <h2>Rules</h2>\n  <h3>Goal</h3>\n  <p>\n    Beat the game without scripts, macros or cheats.\n    This has to be done in one sitting,\n    loading any saves or quicksaves is not allowed.\n  </p><hr>\n  <h3>Timing</h3>\n  <p>\n    Timing begins when the level appears\n    and ends when the last level has been completed (depending on the game version)\n    PC timing is done using Realtime.\n  </p><hr>\n  <h3>Proof and submitting</h3>\n  <p>\n  All runs HAVE to be submitted with some sort of proof in form of a video.\n  Videos have to show the full run from start to finish.\n  Video must be hosted on a permanent video platform,\n  such as Youtube, or a Twitch Highlight.\n  Temporary platforms such as Streamable or your Twitch VOD are not acceptable.\n  The video has to show Livesplit comparing against Realtime throughout the\n  entire run. Game audio is not required, but this may change in the future.\n  </p><hr>\n  <h3>Settings</h3>\n  <p>\n  A list of allowed settings can be found here:\n  </p>\n  <ul>\n  <li>Player TPS</li>\n  <li>Resolution</li>\n  <li>Sound</li>\n  <li>Anti-Aliasing</li>\n  <li>Sensitivity</li>\n  </ul>\n  <p>\n  All other settings are not allowed in runs,\n  unless stated in the categories rules separately.\n  </p><hr>\n  <h3>Misc Rules</h3>\n  <p>\n  Developer binds such as\n  <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Enter</kbd>\n  or <kbd>Backspace</kbd> are not allowed,\n  unless stated in the categories rules separately.\n  </p>\n  <hr>\n  ";
var rules =
  ((_a = {}),
  (_a[Category.AnyPercent] = "\n  ".concat(
    standardRules,
    "\n  <h3>Category Specific Rules</h3>\n  <p>\n  Every setting in the settings tab may be changed during or before the run.\n  Including changing speeds. The developer bind <kbd>Backspace</kbd> is allowed,\n  but <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Enter</kbd> is NOT allowed.\n  </p>\n  "
  )),
  (_a[Category.BackspacePercent] = "\n  ".concat(
    standardRules,
    "\n  <h3>Category Specific Rules</h3>\n  <p>\n  The developer bind <kbd>Backspace</kbd> is allowed,\n  but <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Enter</kbd> is NOT allowed.\n  </p>\n  "
  )),
  (_a[Category.Glitchless] = "\n  ".concat(
    standardRules,
    "\n  <h3>Category Specific Rules</h3>\n  <p>\n  The game must be completed without exploiting any glitches, bugs or other unintended side-effects.\n  </p>\n  "
  )),
  _a);
function replaceHtmlSnippets() {
  replaceHtmlSnippet(
    "default-header",
    defaultHeader({
      page: PageName[document.getElementById("default-header").innerHTML]
    })
  );
  replaceHtmlSnippet(
    "default-site-content",
    defaultSiteContent({
      content: document.getElementById("default-site-content").innerHTML,
      latestUpdateDate: "August 21st, 2024",
      latestUpdateDescription: "Bugfix & Settings Update.",
      latestUpdateVersion: "1.0.1"
    })
  );
  replaceHtmlSnippet("default-footer", defaultFooter({}));
  onLeaderboardOptionChange();
}
function onLeaderboardOptionChange() {
  document.getElementById("leaderboards").innerHTML = getLeaderBoards(
    Category[capitalize(document.getElementById("leaderboard-category").value)],
    document.getElementById("leaderboard-version").value
  );
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
    throw new Error(
      "html parameter must represent a single node; got ".concat(nNodes, ". ") +
        "Note that leading or trailing spaces around an element in your " +
        'HTML, like " <img/> ", get parsed as text nodes neighboring ' +
        "the element; call .trim() on your input to avoid this."
    );
  }
  return template.content.firstChild;
}
var defaultHeader = function (data) {
  var homeSelected = "";
  var leaderboardsSelected = "";
  var downloadsSelected = "";
  var contactUsSelected = "";
  if (data.page == PageName.Home) homeSelected = "class=selected";
  if (data.page == PageName.Leaderboards) leaderboardsSelected = "class=selected";
  if (data.page == PageName.Downloads) downloadsSelected = "class=selected";
  if (data.page == PageName.Contact) contactUsSelected = "class=selected";
  return defaultHeaderString(homeSelected, leaderboardsSelected, downloadsSelected, contactUsSelected).trim();
};
var defaultSiteContent = function (data) {
  return defaultSiteContentHtml(
    data.latestUpdateVersion,
    data.latestUpdateDate,
    data.latestUpdateDescription,
    data.content
  ).trim();
};
var defaultFooter = function (data) {
  return defaultFooterHtml().trim();
};
function getLeaderBoards(category, version) {
  var currentLeaderboards;
  document.getElementById("category-info").innerHTML = rules[category];
  if (category == Category.AnyPercent) {
    currentLeaderboards = anyPercent;
  }
  if (category == Category.BackspacePercent) {
    currentLeaderboards = backspacePercent;
  }
  if (category == Category.Glitchless) {
    currentLeaderboards = glitchless;
  }
  var trRuns = "";
  console.log(version);
  Object.keys(currentLeaderboards).forEach(function (_version) {
    var i = 1;
    currentLeaderboards[_version].forEach(function (run) {
      if (_version == version) {
        trRuns += "\n        <tr>\n        <td>"
          .concat(i, "</td>\n        <td>")
          .concat(run.time, "</td>\n  <td>")
          .concat(run.name, "</td>\n  <td>")
          .concat(playerData[run.name].country, "</td>\n</tr>");
        i++;
      }
    });
  });
  return "\n<tr>\n  <th>Place</th>\n  <th>Time</th>\n  <th>Name</th>\n  <th>Country</th>\n</tr>" + trRuns;
}
var capitalize = function (s) {
  return s[0].toUpperCase() + s.slice(1);
};
var defaultHeaderString = function (a, b, c, d) {
  return "\n<div id=header>\n  <div id=logo>\n    <div id=logo_text>\n      <h1>\n        <a href=index.html>\n        Flat<span class=logo_color>Aperture</span></a>\n      </h1>\n      <h2>Official Flat Aperture Website.</h2>\n    </div>\n  </div>\n  <div id=menubar>\n    <ul id=menu>\n      <li "
    .concat(a, " ><a href=index.html>Home</a>\n      <li ")
    .concat(b, " ><a href=leaderboards.html>Speedrun Leaderboards</a>\n      <li ")
    .concat(c, " ><a href=downloads.html>Downloads</a>\n      <li ")
    .concat(d, " ><a href=contact.html>Contact Us</a>\n    </ul>\n  </div>\n</div>\n");
};
var defaultSiteContentHtml = function (a, b, c, d) {
  return "\n<div id=site-content>\n  <div id=banner></div>\n  <div id=sidebar_container>\n    <div class=sidebar>\n      <div class=sidebar_top></div>\n      <div class=sidebar_item>\n        <h3>Latest Updates</h3>\n        <h4>"
    .concat(a, "</h4>\n        <h5>")
    .concat(b, "</h5>\n        <p>")
    .concat(
      c,
      '<br><a href=downloads.html>Read more</a>\n      </div>\n      <div class=sidebar_base></div>\n    </div>\n    <div class=sidebar>\n      <div class=sidebar_top></div>\n      <div class=sidebar_item>\n        <h3>Useful Links</h3>\n        <ul>\n          <li><a href=#>link 1</a>\n          <li><a href=#>link 2</a>\n          <li><a href=#>link 3</a>\n          <li><a href=#>link 4</a>\n        </ul>\n      </div>\n      <div class=sidebar_base></div>\n    </div>\n    <div class=sidebar>\n      <div class=sidebar_top></div>\n      <div class=sidebar_item>\n        <h3>Search</h3>\n        <form action=# id=search_form method=post>\n          <p><input name=search_field class=search value="Enter keywords....."> <input name=search alt=Search src=assets/template/search.png style="border:0;margin:0 0 -9px 5px"title=Search type=image>\n        </form>\n      </div>\n      <div class=sidebar_base></div>\n    </div>\n  </div>\n  <div id="content">\n  '
    )
    .concat(d, "\n  </div>\n</div>\n");
};
var defaultFooterHtml = function () {
  return "\n<div id=footer>\n  <p><a href=index.html>Home</a> | <a href=downloads.html>Downloads</a> | <a href=leaderboards.html>Speedrun Leaderboards</a> | <a href=contact.html>Contact Us</a>\n  <p><a href=http://www.html5webtemplates.co.uk>design from HTML5webtemplates.co.uk</a>\n</div>\n";
};
console.log("Main Typescript Entrypoint Found");
replaceHtmlSnippets();
document.getElementById("leaderboard-category").onchange = onLeaderboardOptionChange;
document.getElementById("leaderboard-version").onchange = onLeaderboardOptionChange;
