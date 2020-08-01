(function () {
  if (navigator.doNotTrack === '1' || localStorage.getItem('dnt')) return;
  const payload = {
    pathname: document.location.pathname,
    referrer: document.referrer
  };
  navigator.sendBeacon(
    'https://log.lusmo.re/api/post',
    JSON.stringify(payload)
  );
}());