(function() {
  "use strict";
  const imgs = document.querySelectorAll('.gallery__figure');
  const urls = [];

  const openHandler = (event) => {
    const src    = event.target;
    const coords = {
      x : event.clientX,
      y : event.clientY
    };
    console.log(coords);
  };

  // TweenMax.staggerTo(imgs, 1, {opacity: 1}, 0.5)


  for (let i = 0; i < imgs.length; i++) {

    urls.push(imgs[i].dataset.img);

    imgs[i].addEventListener('click', openHandler, false);

  }

  // document.addEventListener('DOMContentLoaded', function() {
    // setTimeout( function(){TweenMax.staggerTo(imgs, 0.25, {opacity: 1}, 0.1)}, 2000)
  // }, false);

  // event handlers




})();
