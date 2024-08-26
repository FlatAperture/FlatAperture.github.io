enum PageName {
  Home,
  Downloads,
  Leaderboards,
  Contact
}
enum Category {
  AnyPercent,
  BackspacePercent,
  Glitchless
}

const playerData: { [username in string]: { country: string } } = {
  Quintos: {
    country: "Netherlands"
  }
};

type CategoryRun = {
  [version in string]: { time: string; name: string }[];
};
let anyPercent: CategoryRun = {};
let glitchless: CategoryRun = {};
let backspacePercent: CategoryRun = {
  "0.0.1": [
    { time: "1m 59s 420ms", name: "Quintos" },
    { time: "2m 23s 560ms", name: "Quintos" }
  ]
};

const standardRules = `
  <h2>Rules</h2>
  <h3>Goal</h3>
  <p>
    Beat the game without scripts, macros or cheats.
    This has to be done in one sitting,
    loading any saves or quicksaves is not allowed.
  </p><hr>
  <h3>Timing</h3>
  <p>
    Timing begins when the level appears
    and ends when the last level has been completed (depending on the game version)
    PC timing is done using Realtime.
  </p><hr>
  <h3>Proof and submitting</h3>
  <p>
  All runs HAVE to be submitted with some sort of proof in form of a video.
  Videos have to show the full run from start to finish.
  Video must be hosted on a permanent video platform,
  such as Youtube, or a Twitch Highlight.
  Temporary platforms such as Streamable or your Twitch VOD are not acceptable.
  The video has to show Livesplit comparing against Realtime throughout the
  entire run. Game audio is not required, but this may change in the future.
  </p><hr>
  <h3>Settings</h3>
  <p>
  A list of allowed settings can be found here:
  </p>
  <ul>
  <li>Player TPS</li>
  <li>Resolution</li>
  <li>Sound</li>
  <li>Anti-Aliasing</li>
  <li>Sensitivity</li>
  </ul>
  <p>
  All other settings are not allowed in runs,
  unless stated in the categories rules separately.
  </p><hr>
  <h3>Misc Rules</h3>
  <p>
  Developer binds such as
  <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Enter</kbd>
  or <kbd>Backspace</kbd> are not allowed,
  unless stated in the categories rules separately.
  </p>
  <hr>
  `;

const rules = {
  [Category.AnyPercent]: `
  ${standardRules}
  <h3>Category Specific Rules</h3>
  <p>
  Every setting in the settings tab may be changed during or before the run.
  Including changing speeds. The developer bind <kbd>Backspace</kbd> is allowed,
  but <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Enter</kbd> is NOT allowed.
  </p>
  `,
  [Category.BackspacePercent]: `
  ${standardRules}
  <h3>Category Specific Rules</h3>
  <p>
  The developer bind <kbd>Backspace</kbd> is allowed,
  but <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Enter</kbd> is NOT allowed.
  </p>
  `,
  [Category.Glitchless]: `
  ${standardRules}
  <h3>Category Specific Rules</h3>
  <p>
  The game must be completed without exploiting any glitches, bugs or other unintended side-effects.
  </p>
  `
};

interface IPerson {
  firstName: string;
  lastName: string;
}
