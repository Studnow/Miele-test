// import listItems from "../../../assets/data.js";
import link from "./link.js";

export default {
  type: "list",
  title: "false",
  listType: "ul",
  class: "w-full bg-neutral-200",
  listClass:
    "menu menu-horizontal hidden lg:flex space-x-2 p-2 bg-base-100 rounded-box z-[1] mt-3 w-full " /* for no menu lists list-image-[url('/assets/icons/vite.svg')]; */,
  subListClass: "menu menu-horizontal p-2 bg-base-100 rounded-box z-[1] mt-3 w-full",
  dropdownClass: "dropdown-bottom",
  dropdownContent: "",
  variant: "menu", // list, menu, dropdown, nav
  actions: false,
  listItems: [
    { ...link, class: "link no-underline text-primary hover:underline", text: "Не смотреть", icon: false },
    { ...link, class: "link no-underline text-primary hover:underline", text: "Посмотреть", icon: false },
    { ...link, class: "link no-underline text-primary hover:underline", text: "Не смотреть", icon: false },
    { ...link, text: "Пыщь пыщь пыщь", icon: false },
    { ...link, text: "тыщь тыщь тыщь", icon: false },
    { ...link, text: "Пыщь пыщь пыщь", icon: false },
  ],

  // {
  //   before: [
  //     { ...button, isLink: true, class: "link no-underline text-primary hover:underline", text: "Не смотреть" },
  //     { ...button, isLink: true, class: "link no-underline text-primary hover:underline", text: "Посмотреть" },
  //   ],
  //   after: [
  //     { ...button, isLink: true, class: "link no-underline text-primary hover:underline", text: "Не смотреть" },
  //     { ...button, isLink: true, class: "link disabled no-underline text-primary hover:underline", text: "Посмотреть" },
  //   ],
  // },
  sub: false,

  // {
  //   subHeading: "Vehicles",
  //   menuClass: /*tw*/ "menu menu-horizontal p-2 bg-base-200 w-max right-0 top-15 z-10 text-primary-content",
  //   menuSmClass: /*tw*/ "menu p-2 bg-base-100 w-36 z-10",
  //   listItems: [
  //     { title: "Машины", items: ["Chevrolet", "my Car", "Your Car"] },
  //     { title: "Автомобили", items: ["Chevrolet", "my Car", "Your Car"] },
  //     { title: "Транспорт", items: ["Chevrolet", "my Car", "Your Car"] },
  //   ],
  // },
};

export const definitionList = {
  type: "dl",
  class: "lg:col-span-6",
  items: [
    { term: "Адрес:", value: "Московская обл., г. Ивантеевка, ул. Заречная 1" },
    { term: "Телефон:", value: "+7 (985) 178-42-08", link: "tel:+79851784208" },
    { term: "Почта:", value: "mkbeton@bk.ru", link: "mailto:mkbeton@bk.ru" },
    { term: "Часы работы:", value: "Пн-Пт 9:00–18:00, Сб 10:00–18:00, Вс — выходной" },
  ],
};
