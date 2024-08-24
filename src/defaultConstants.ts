enum PageName {
  Home,
  Examples,
  AnotherPage,
  Contact,
}
const defaultHeader = (data: { page: PageName }) => {
  let homeSelected = "";
  let examplesSelected = "";
  let anotherPageSelected = "";
  let contactUsSelected = "";
  if (data.page == PageName.Home) homeSelected = "class=selected";
  if (data.page == PageName.Examples) examplesSelected = "class=selected";
  if (data.page == PageName.AnotherPage) anotherPageSelected = "class=selected";
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
      <li ${examplesSelected} ><a href=examples.html>Examples</a>
      <li ${anotherPageSelected} ><a href=another_page.html>Another Page</a>
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
  <p><a href=index.html>Home</a> | <a href=examples.html>Examples</a> | <a href=page.html>A Page</a> | <a href=another_page.html>Another Page</a> | <a href=contact.html>Contact Us</a>
  <p><a href=http://www.html5sbtemplates.co.uk>design from HTML5webtemplates.co.uk</a>
</div>
`.trim();
