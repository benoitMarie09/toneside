export const slides = {
  slidesItems: [
    {
      key: 1,
      image: "/img/toneside_uhdBG.jpg",
      name: "Home",
      caption: { type: "title", title: "/img/ToneSideBlack.png" },
    },
    {
      key: 2,
      image: "/img/toneside_Square_buggy.jpg",
      name: "Music",
      caption: { type: "link", link: "/music/", text: "Listen" },
    },
    {
      key: 3,
      image: "/img/toneside_uhdBG.jpg",
      name: "Video",
      caption: { type: "link", link: "/video/", text: "Watch" },
    },
    {
      key: 4,
      image: "/img/toneside_uhdBG.jpg",
      name: "Event",
      caption: { type: "event", text: "Tour dates", data: ["coucou"] },
    },

    {
      key: 5,
      image: "/img/toneside_Square_perso.jpg",
      name: "Contact",
      caption: { type: "contact", text: "Contact", data: [] },
    },
  ],
  getSlidesData: () => slides.slidesItems,
};
