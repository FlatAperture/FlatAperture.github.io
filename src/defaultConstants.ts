const defaultHeader = (data: { page: PageName }) => {
  let homeSelected = "";
  let leaderboardsSelected = "";
  let contactUsSelected = "";
  if (data.page == PageName.Home) homeSelected = "class=selected";
  if (data.page == PageName.Leaderboards)
    leaderboardsSelected = "class=selected";
  if (data.page == PageName.Contact) contactUsSelected = "class=selected";
  return `
<div id=header>
  <div id=logo>
    <div id=logo_text>
      <h1>
        <a href=index.html>
        Portal<span class=logo_color>0.5</span></a>
      </h1>
      <h2>Official Portal 0.5 Website.</h2>
    </div>
  </div>
  <div id=menubar>
    <ul id=menu>
      <li ${homeSelected} ><a href=index.html>Home</a>
      <li ${leaderboardsSelected} ><a href=leaderboards.html>Speedrun Leaderboards</a>
      <li ${contactUsSelected} ><a href=contact.html>Contact Us</a>
    </ul>
  </div>
</div>
`.trim();
};
const defaultSiteContent = (data: {
  latestUpdateVersion: `${number}.${number}.${number}`;
  latestUpdateDate: `${string} ${number}st, ${number}`;
  latestUpdateDescription: string;
  content: string;
}) =>
  `
<div id=site-content>
  <div id=banner></div>
  <div id=sidebar_container>
    <div class=sidebar>
      <div class=sidebar_top></div>
      <div class=sidebar_item>
        <h3>Latest Updates</h3>
        <h4>${data.latestUpdateVersion}</h4>
        <h5>${data.latestUpdateDate}</h5>
        <p>${data.latestUpdateDescription}<br><a href=#>Read more</a>
      </div>
      <div class=sidebar_base></div>
    </div>
    <div class=sidebar>
      <div class=sidebar_top></div>
      <div class=sidebar_item>
        <h3>Useful Links</h3>
        <ul>
          <li><a href=#>link 1</a>
          <li><a href=#>link 2</a>
          <li><a href=#>link 3</a>
          <li><a href=#>link 4</a>
        </ul>
      </div>
      <div class=sidebar_base></div>
    </div>
    <div class=sidebar>
      <div class=sidebar_top></div>
      <div class=sidebar_item>
        <h3>Search</h3>
        <form action=# id=search_form method=post>
          <p><input name=search_field class=search value="Enter keywords....."> <input name=search alt=Search src=assets/template/search.png style="border:0;margin:0 0 -9px 5px"title=Search type=image>
        </form>
      </div>
      <div class=sidebar_base></div>
    </div>
  </div>
  ${data.content}
</div>
`.trim();
const defaultFooter = (data: {}) =>
  `
<div id=footer>
  <p><a href=index.html>Home</a> | <a href=page.html>A Page</a> | <a href=leaderboards.html>Leaderboards</a> | <a href=contact.html>Contact Us</a>
  <p><a href=http://www.html5sbtemplates.co.uk>design from HTML5webtemplates.co.uk</a>
</div>
`.trim();

function getLeaderBoards(category: Category, version: string) {
  let currentLeaderboards: {
    [key in string]: {
      time: string;
      name: string;
    }[];
  };
  if (category == Category.AnyPercent) {
    currentLeaderboards = anyPercent;
  }
  if (category == Category.BackspacePercent) {
    currentLeaderboards = backspacePercent;
  }
  if (category == Category.Glitchless) {
    currentLeaderboards = glitchless;
  }
  let trRuns = "";
  console.log(version);
  Object.keys(currentLeaderboards).forEach((_version) => {
    let i = 1;
    currentLeaderboards[_version].forEach((run) => {
      if (_version == version) {
        trRuns += `
        <tr>
        <td>${i}</td>
        <td>${run.time}</td>
  <td>${run.name}</td>
  <td>${playerData[run.name].country}</td>
</tr>`;
        i++;
      }
    });
  });
  console.log(
    `
<tr>
  <th>Place</th>
  <th>Time</th>
  <th>Name</th>
  <th>Country</th>
</tr>` + trRuns
  );
  return (
    `
<tr>
  <th>Place</th>
  <th>Time</th>
  <th>Name</th>
  <th>Country</th>
</tr>` + trRuns
  );
}
