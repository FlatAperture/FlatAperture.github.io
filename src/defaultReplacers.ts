const defaultHeader = (data: { page: PageName }) => {
  let homeSelected = "";
  let leaderboardsSelected = "";
  let downloadsSelected = "";
  let contactUsSelected = "";
  if (data.page == PageName.Home) homeSelected = "class=selected";
  if (data.page == PageName.Leaderboards)
    leaderboardsSelected = "class=selected";
  if (data.page == PageName.Downloads) downloadsSelected = "class=selected";
  if (data.page == PageName.Contact) contactUsSelected = "class=selected";
  return defaultHeaderString(
    homeSelected,
    leaderboardsSelected,
    downloadsSelected,
    contactUsSelected
  ).trim();
};
const defaultSiteContent = (data: {
  latestUpdateVersion: `${number}.${number}.${number}`;
  latestUpdateDate: `${string} ${number}st, ${number}`;
  latestUpdateDescription: string;
  content: string;
}) =>
  defaultSiteContentHtml(
    data.latestUpdateVersion,
    data.latestUpdateDate,
    data.latestUpdateDescription,
    data.content
  ).trim();

const defaultFooter = (data: {}) => defaultFooterHtml().trim();

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
