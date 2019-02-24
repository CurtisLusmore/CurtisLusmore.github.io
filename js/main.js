document
  .querySelectorAll('pre')
  .forEach(node => {
    node.title = 'Copy to clipboard';
    node.classList.add('copy');
    node.onclick = function (event) {
      navigator.clipboard.writeText(event.target.innerText);
    };
  });

(function () {
  const themes = [ 'light', 'dark', 'markdown' ];
  let theme = localStorage.getItem('theme') || 'light';
  const updateTheme = function () {
    document.body.className = theme;
  };
  updateTheme();

  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.style.display = null;
  themeSwitch.onclick = function () {
    theme = themes[(themes.indexOf(theme) + 1) % themes.length];
    localStorage.setItem('theme', theme);
    updateTheme();
  };
}());

(function () {
  const location = document.location.pathname;
  const referrer = new URLSearchParams(document.location.search).get('ref') || document.referrer;
  fetch(
    'https://log-lusmo-re.azurewebsites.net/api/log',
    {
      method: 'POST',
      body: JSON.stringify({ location, referrer })
    }
  );
}());