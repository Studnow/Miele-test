import list from "../components/list";
import logo from "../components/logo";
import icon from "../components/icon";

const menu = list;

export default {
  template: "header",
  navbar: {
    headerClass: " bg-base-200",
    containerClass: " mx-auto py-6",
    navbarClass: " bg-transparent justify-between",
    navbarStart: " w-1/6 lg:w-1/3",
    navbarCenter: " flex w-1/2 lg:1/2 justify-center",
    navbarEnd: " w-1/4 lg:w-1/4",
  },
  logo,
  start: { menu: { ...menu, variant: "dropdown", dropdownContent: "menu w-80 bg-base-100 lg:hidden rounded-sm" } },
  center: {
    componentsToggle: { showMenu: true, showContacts: false },
    menu,
    // list: {...list, listClass: "hidden md:flex menu menu-horizontal" },
  },
  right: {
    class: "btn btn-outline bg-base-100 text-xs md:text-base text-accent border-2 hover:bg-accent hover:border-accent",
    text: "Заказать звонок",
    drawer: false,
    drawerBtn: { class: "btn btn-primary drawer-button lg:hidden", icon: {...icon, id: "burgerMenu", class: "h-8 w-8 rotate-180" } },
  },
};
