document
  .querySelectorAll('pre')
  .forEach(node => {
    node.title = 'Copy to clipboard';
    node.classList.add('copy');
    node.onclick = function (event) {
      navigator.clipboard.writeText(event.target.innerText);
    };
  });

const switchTheme = (function () {
  const themes = [ 'light', 'dark', 'markdown' ];
  let theme = localStorage.getItem('theme') || 'light';
  const updateTheme = function () {
    document.body.className = theme;
  };
  updateTheme();
  const switchTheme = function () {
    theme = themes[(themes.indexOf(theme) + 1) % themes.length];
    localStorage.setItem('theme', theme);
    updateTheme();
  };
  return switchTheme;
}());