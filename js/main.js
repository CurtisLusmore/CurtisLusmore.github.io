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
    if (theme === 'markdown') {
      document.querySelectorAll('img').forEach(node => { node.dataset.src = node.src; node.src = ''; });
    }
    else {
      document.querySelectorAll('img').forEach(node => { node.src = node.dataset.src || node.src; });
    }
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
  if (navigator.doNotTrack || localStorage.getItem('dnt')) return;
  const location = document.location.pathname;
  const referrer = new URLSearchParams(document.location.search).get('ref') || document.referrer;
  fetch(
    'https://log.lusmo.re/api/log',
    {
      method: 'POST',
      body: JSON.stringify({ location, referrer })
    }
  );
}());