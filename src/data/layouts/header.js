import assets from "../../../assets/assetsData.js";

import list from "../components/list";
import logo from "../components/logo";
import icon from "../components/icon";
import button from "../components/button";

const menu = list;

export default {
  template: "header",
  navbar: {
    headerClass: " bg-black",
    containerClass: " mx-auto",
    navbarClass: " bg-transparent gap-1 py-0 min-h-fit",
    navbarStart: " w-1/3 lg:w-1/3 gap-1 justify-start h-max",
    navbarCenter: " flex w-1/3 lg:1/2 justify-center h-max",
    navbarEnd: " w-1/3 lg:w-1/4 justify-end gap-1 h-max",
  },
  start: {
    menu: {
      ...menu,
      variant: "dropdown",
      dropdownContent: "menu w-80 bg-base-100 lg:hidden rounded-sm",
      dropdownBtnClass: "bg-black text-base-100",
      icon: { ...icon, id: "burgerMenu", class: "h-12 w-12" },
    },
    select: assets.header.text.lang,
  },
  center: {
    componentsToggle: { showMenu: true, showContacts: false },
    menu,
    logo: {
      ...logo,
      containerClass: logo.containerClass.concat(" w-32"),
      img: { name: `assets/images/${assets.header.logo.name}`, ext: assets.header.logo.ext },
    },
    // list: {...list, listClass: "hidden md:flex menu menu-horizontal" },
  },
  right: {
    buttons: [
      {
        ...button,
        text: false,
        class: "bg-black border-none text-base-100 inline-flex items-center px-0",
        icon: { ...icon, id: "my-search", w: 24, h: 24, class: "w-12 h-12 overflow-visible align-middle" },
      },
      {
        ...button,
        text: false,
        class: "bg-black border-none text-base-100 inline-flex items-center px-0",
        icon: { ...icon, id: "cart", w: 24, h: 24, class: "w-12 h-12 overflow-visible align-middle" },
      },
    ],
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
