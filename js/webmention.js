const baseUrl = 'https://webmention.lusmo.re';

const post = async function (ev) {
  ev.preventDefault();

  const body = new URLSearchParams([
    ['source', ev.target.source.value],
    ['target', window.location]
  ]);

  const resp = await fetch(
    `${baseUrl}/post`,
    {
      method: 'POST',
      body
    });
  if (resp.ok) {
    ev.target.reset();
    await get();
  }

  return false;
};

const get = async function () {
  const params = new URLSearchParams([
    ['target', window.location]
  ]);

  const resp = await fetch(`${baseUrl}/get?${params}`);
  if (resp.ok) {
    const mentions = await resp.json();
    const list = document.getElementById('webmentions');
    if (mentions.length) {
      for (const mention of mentions) {
        const item = document.createElement('li');
        item.innerHTML = `<a href="${mention.source}">${mention.title}</a>`;
        list.appendChild(item);
      }
    } else {
      const item = document.createElement('li');
      item.innerHTML = 'No Webmentions yet';
      list.appendChild(item);
    }
  }
};

get();