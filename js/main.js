(function () {
  if (navigator.doNotTrack === '1' || localStorage.getItem('dnt')) return;
  const payload = {
    location: document.location.pathname,
    referrer: document.referrer
  };
  navigator.sendBeacon(
    'https://log.lusmo.re/api/log',
    JSON.stringify(payload)
  );
}());