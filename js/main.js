document
  .querySelectorAll('pre')
  .forEach(node => {
    node.title = 'Copy to clipboard';
    node.classList.add('copy');
    node.onclick = function (event) {
      navigator.clipboard.writeText(event.target.innerText);
    };
  });