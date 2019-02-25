const scrollSlide = (function () {
  let slideIndex = 0;
  let blocked = false;
  return function (event) {
    const slides = opener.document.getElementById('main').children;
    const notes = document.getElementById('main').children;
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        if (slideIndex === 0) return;
        --slideIndex;
        slides[slideIndex].scrollIntoView({behavior: 'smooth'});
        notes[slideIndex].scrollIntoView({behavior: 'smooth'});
        event.preventDefault();
        return false;
      case 'ArrowDown':
      case 'ArrowRight':
        if (slideIndex+1 === slides.length) return;
        ++slideIndex;
        slides[slideIndex].scrollIntoView({behavior: 'smooth'});
        notes[slideIndex].scrollIntoView({behavior: 'smooth'});
        event.preventDefault();
        return false;
      case 'b':
        blocked = !blocked;
        const classes = opener.document.body.classList;
        if (blocked) {
          classes.add('block');
        }
        else {
          classes.remove('block');
        }
        break;
    }
  };
}());