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
  let darkTheme = localStorage.getItem('dark') === 'true';
  const updateTheme = function () {
    document.body.className = darkTheme ? 'dark' : 'light';
  };
  updateTheme();
  const switchTheme = function () {
    darkTheme = !darkTheme;
    localStorage.setItem('dark', darkTheme);
    updateTheme();
  };
  return switchTheme;
}());