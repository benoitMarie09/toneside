import { albums } from "./albums";

export const slides = {
  slidesItems: [
    {
      key: 1,
      image: "/img/toneside_Square_perso.jpg",
      name: "Home",
      pages: 1,
      caption: { type: "title", title: "/img/ToneSideBlack.png" },
    },
    {
      key: 2,
      image: "/img/toneside_uhdBG.jpg",
      name: "Music",
      pages: albums.getAlbums().length,
      caption: { type: "link", link: "/music/", text: "Listen" },
    },
    {
      key: 3,
      image: "/img/toneside_uhdBG.jpg",
      name: "Video",
      pages: 1,
      caption: { type: "link", link: "/video/", text: "Watch" },
    },
    {
      key: 4,
      image: "/img/toneside_uhdBG.jpg",
      name: "Event",
      pages: 1,
      caption: { type: "event", text: "Tour dates", data: ["coucou"] },
    },

    {
      key: 5,
      image: "/img/toneside_Square_perso.jpg",
      name: "Contact",
      pages: 1,
      caption: { type: "contact", text: "Contact", data: [] },
    },
  ],
  getSlidesData: () => slides.slidesItems,
};
