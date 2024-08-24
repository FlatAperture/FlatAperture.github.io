console.log("Main Typescript Entrypoint Found");

replaceHtmlSnippets();

document.getElementById("leaderboard-category").onchange =
  onLeaderboardOptionChange;
document.getElementById("leaderboard-version").onchange =
  onLeaderboardOptionChange;
