import assets from "../../../assets/assetsData.js";

import list from "../components/list";
import logo from "../components/logo";
import icon from "../components/icon";

const menu = list;

export default {
  template: "header",
  navbar: {
    headerClass: " bg-base-200",
    containerClass: " mx-auto py-6",
    navbarClass: " bg-transparent gap-2",
    navbarStart: " lg:w-1/3 gap-1 justify-start",
    navbarCenter: " flex lg:1/2 justify-center",
    navbarEnd: " lg:w-1/4 justify-end",
  },
  start: {
    menu: { ...menu, variant: "dropdown", dropdownContent: "menu w-80 bg-base-100 lg:hidden rounded-sm" },
    select: assets.header.text.lang,
  },
  center: {
    componentsToggle: { showMenu: true, showContacts: false },
    menu,
    logo: { ...logo, containerClass: logo.containerClass.concat(" w-32"), img: { name: `assets/images/${assets.header.logo.name}`, ext: assets.header.logo.ext } },
    // list: {...list, listClass: "hidden md:flex menu menu-horizontal" },
  },
  right: {
    class:
      "btn btn-outline max-w-24 bg-base-100 text-xs md:text-base text-accent border-2 hover:bg-accent hover:border-accent",
    text: "Заказать звонок",
    drawer: false,
    drawerBtn: {
      class: "btn btn-primary drawer-button lg:hidden",
      icon: { ...icon, id: "burgerMenu", class: "h-8 w-8 rotate-180" },
    },
  },
};
