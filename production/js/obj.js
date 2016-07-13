"use strict";

const gallery = {
  //config
  imgs : document.querySelectorAll('.gallery__figure'),
  title: document.getElementById('js-title'),
  modal: document.getElementById('js-modal'),
  urls : [],
  tl   : new TimelineLite(),
  //methods
  openHandler : (event) => {
    const src    = event.target;
    const coords = {
      x : event.clientX,
      y : event.clientY
    };
    gallery.tl.to(gallery.modal, 0, {display: "block"})
      .from(gallery.title, 0.75, {scale: 0.05, opacity: 0.1, top: coords.y, left: coords.x, })
      .to(gallery.modal, 1, {backgroundColor: "rgba(6, 6, 6, 0.85)"});
    },
  closeHandler: (event) => {

    TweenLite.to(gallery.modal, 0.5, {backgroundColor:  "rgba(6, 6, 6, 0)", display: "none"});
      // TweenLite.to(gallery.modal, 0, {})
    },
  init: () => {
    for (let i = 0; i < gallery.imgs.length; i++) {
    gallery.urls.push(gallery.imgs[i].dataset.img);
    gallery.imgs[i].addEventListener('click', gallery.openHandler, false);

  }
  gallery.title.addEventListener('click', gallery.closeHandler, false);
}


};

gallery.init();

// const js = document.getElementById('js');

// TweenLite.from( js, 1.5, {scale: 0, opacity: 0, top: 850, left: 300, });
