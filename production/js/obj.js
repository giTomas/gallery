"use strict";

const gallery = {

  //DEFAULT CONFIG
  imgs : document.querySelectorAll('.gallery__figure'),
  title: document.getElementById('js-title'),
  modal: document.getElementById('js-modal'),
  img: document.getElementById('js-image'),
  urls : [],
  tl   : new TimelineLite(),
  currentImage: 0,
  playId: false,

  //METHODS
  //-> helpers
  //-> slides
  //-> handlers
  openHandler : (event) => {
    // const src    = event.currentTarget;
    const url    = event.currentTarget.dataset.img;
    gallery.currentImage = gallery.urls.indexOf(url);
    console.log(gallery.currentImage);
    const position = {
      x : event.clientX,
      y : event.clientY
    };
    console.log(position);

    gallery.tl
      .to(gallery.modal, 0, {display: "block", backgroundColor: "rgba(6, 6, 6, 0)"})
      .from(gallery.img, 2.5, {scale: 0.05, opacity: 0.1, top: position.y, left: position.x, })
      .to(gallery.modal, 0.75, {backgroundColor: "rgba(6, 6, 6, 0.85)"});
    },

  closeHandler : (event) => {

    TweenLite.to(gallery.modal, 0.5, {backgroundColor:  "rgba(6, 6, 6, 0)", display: "none"});
    },

  //INIT FN -> ATTACH EVENT LISTENERS & MAKE DATA ATTRs ARRAY for further use
  init : () => {
    for (let i = 0; i < gallery.imgs.length; i++) {
      gallery.urls.push(gallery.imgs[i].dataset.img);
      gallery.imgs[i].addEventListener('click', gallery.openHandler, false);

    }

    gallery.img.addEventListener('click', gallery.closeHandler, false);
  }


};

gallery.init();
