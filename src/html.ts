const defaultHeaderString = (a: string, b: string, c: string, d: string) => `
<div id=header>
  <div id=logo>
    <div id=logo_text>
      <h1>
        <a href=index.html>
        Flat<span class=logo_color>Aperture</span></a>
      </h1>
      <h2>Official Flat Aperture Website.</h2>
    </div>
  </div>
  <div id=menubar>
    <ul id=menu>
      <li ${a} ><a href=index.html>Home</a>
      <li ${b} ><a href=leaderboards.html>Speedrun Leaderboards</a>
      <li ${c} ><a href=downloads.html>Downloads</a>
      <li ${d} ><a href=contact.html>Contact Us</a>
    </ul>
  </div>
</div>
`;

const defaultSiteContentHtml = (a: string, b: string, c: string, d: string) => `
<div id=site-content>
  <div id=banner></div>
  <div id=sidebar_container>
    <div class=sidebar>
      <div class=sidebar_top></div>
      <div class=sidebar_item>
        <h3>Latest Updates</h3>
        <h4>${a}</h4>
        <h5>${b}</h5>
        <p>${c}<br><a href=downloads.html>Read more</a>
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
  <div id="content">
  ${d}
  </div>
</div>
`;

const defaultFooterHtml = () => `
<div id=footer>
  <p><a href=index.html>Home</a> | <a href=downloads.html>Downloads</a> | <a href=leaderboards.html>Speedrun Leaderboards</a> | <a href=contact.html>Contact Us</a>
  <p><a href=http://www.html5webtemplates.co.uk>design from HTML5webtemplates.co.uk</a>
</div>
`;
