export const headerMenu = {
  menuItems: [
    { key: 0, label: "Home", slug: "/" },
    { key: 1, label: "Musics", slug: "/music" },
    { key: 2, label: "Videos", slug: "/video" },
    { key: 3, label: "Contacts", slug: "/" },
  ],
  getHeaderMenu: () => headerMenu.menuItems,
};
