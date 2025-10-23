import { readdirSync } from "fs";
import { resolve } from "path";

// config/sections.js
import baseSection from "./base/baseSection.js";
import heading from "../data/components/heading.js";
import style from "./defaultStyles/sectionStyle.js";

import { card, button, list, slider, picture, link, icon, dynForm, dynamicForm } from "../data/components/index";

import assets from "../../assets/assetsData.js";

// icon preview for sorting on starting project
// const iconDir = resolve(__dirname, "../../assets/icons"); // Путь к SVG
// const icons = readdirSync(iconDir)
//   .filter((file) => file.endsWith(".svg"))
//   .map((file) => ({
//     src: `/assets/icons/${file}`,
//     name: file.replace(/\.svg$/, ""), // Удаляем .svg из имени,
//   }))
//   .sort((a, b) => a.name.localeCompare(b.name));

// Генерируем массив компонентов card для каждой иконки
// const iconsPreview = icons.map((iconRaw) => ({
//   ...card,
//   cardClass: "w-60 h-full",
//   cardActions: false,
//   heading: {
//     description: iconRaw.name,
//   },
//   picture: { ...picture.icon, path: `${iconRaw.src}`, w: "48 ", h: "60" },
// }));

// const slideCards = [
//   { title: "first", picture: { name: "name", ext: "ext" } },
//   { title: "sec", picture: { name: "name", ext: "ext" } },
//   { title: "th", picture: { name: "name", ext: "ext" } },
//   { title: "frt", picture: { name: "name", ext: "ext" } },
//   { title: "fifth", picture: { name: "name", ext: "ext" } },
//   { title: "sxth", picture: { name: "name", ext: "ext" } },
// ];

export const sectionsMap = {
  // iconsPreview: {
  //   ...baseSection,
  //   template: "iconsPreview",
  //   style,
  //   heading: { ...heading, title: "Icons Preview" },
  //   colClass: "col-span-12 flex flex-wrap gap-6",
  //   components: [iconsPreview],
  // },
  hero: {
    ...baseSection,
    template: "hero",
    fullWidth: true,
    overlay: false,
    style: {
      ...style,
      sectionClass: "",
      sectionFullWidthClass: "",
      sectionContentClass: "",
    },
    colClass: "w-full",
    components: [
      // [
      //   {
      //     ...heading,
      //     title: "Секция Hero",
      //     description: "Это секция Hero, которая может содержать заголовок, описание и изображение.",
      //     titleLevel: "1",
      //     titleClass: "text-h1-clamp mb-4",
      //     container: true,
      //     caption: false,
      //   },
      //   button,
      //   { ...button, text: "Подробнее", class: "btn btn-primary", modal: "onclick='my_modal_1.showModal()'" },
      // ],

      // [{ ...picture }],
      // [
      {
        ...slider,
        slides: {
          ...slider.slides,
          slideData: assets.hero.images.map((item) => ({
            ...card,
            cardClass: "bg-base-100 image-full rounded-none lg:card-side container mx-auto lg:px-4 lg:min-h-[626px]",
            cardBodyClass: "card-body space-y-5 p-0 mb-5 md:mb-[121px] lg:mb-6 lg:justify-center",
            cardFigureClass: "order-3 w-full rounded-none lg:order-2 lg:w-1/2",
            heading: {
              ...heading,
              containerClass: "self-center",
              title: item.title,
              titleLevel: "2",
              titleClass: "text-h2-clamp mb-2",
              descriptionClass: "text-subtitle text-neutral font-bold md:w-2/3 flex-grow-0",
              description: "Эксклюзивная раковина, которая подчеркнет безупречный вкус и стиль своего владельца",
            },
            picture: {
              ...picture,
              path: `/assets/images/mobile/${item.mobile.name}.${item.mobile.ext}`,
              name: item.mobile.name,
              ext: item.mobile.ext,
              class: "lg:flex lg:items-center rounded-none",
              alt: "Раковина из бетона",
            },
            button: {
              ...button,
              class: button.class.concat(" btn-primary"),
              icon: false,
              text: "Перейти в каталог",
            },
          })),
        },
      },
      // ],
    ],
  },

  cards: {
    ...baseSection,
    template: "cards",
    fullWidth: false,
    style,
    heading: {
      ...heading,
      caption: false,
    },
    colClass: "w-full md:col-span-4 flex flex-wrap gap-4",
    components: [Array(3).fill(card), Array(3).fill(card)], // вместо вручную card,card,...
  },

  slider: {
    ...baseSection,
    template: "slider",
    fullWidth: true,
    style: {
      ...style,
      sectionClass: "slider",
      sectionContentClass: "slider-content container",
    },
    heading: {
      ...heading,
      title: "Секция слайдера",
      container: false,
      caption: false,
      captionClass: "text-caption text-primary mb-4",
    },
    colClasses: [""],
    components: [
      // {
      //   ...slider,
      //   slides: {
      //     ...slider.slides,
      //     slideData: slideCards.map((item) => ({
      //       ...card,
      //       cardClass: "bg-base-100 rounded-none lg:card-side container mx-auto lg:px-4 lg:min-h-[626px]",
      //       cardBodyClass: "card-body space-y-5 p-0 mb-5 md:mb-[121px] lg:mb-6 lg:justify-center",
      //       cardFigureClass: "order-3 w-full lg:order-2 lg:w-1/2",
      //       heading: {
      //         ...heading,
      //         containerClass: "self-center",
      //         title: item.title,
      //         titleLevel: "2",
      //         titleClass: "text-h2-clamp mb-2",
      //         descriptionClass: "text-subtitle text-neutral font-bold md:w-2/3 flex-grow-0",
      //         description: "Эксклюзивная раковина, которая подчеркнет безупречный вкус и стиль своего владельца",
      //       },
      //       picture: {
      //         ...picture,
      //         name: item.picture.name,
      //         ext: item.picture.ext,
      //         class: "lg:flex lg:items-center",
      //         alt: "Раковина из бетона",
      //       },
      //       button: {
      //         ...button,
      //         class: button.class.concat(" btn-primary"),
      //         icon: false,
      //         text: "Перейти в каталог",
      //       },
      //     })),
      //   },
      // },
    ],
  },

  test: {
    ...baseSection,
    template: "test",
    heading: {
      ...heading,
      title: "Секция test",
      container: false,
    },
    components: [list],
  },

  form: {
    ...baseSection,
    template: "form",
    style,
    heading: {
      ...heading,
      title: "Секция формы",
      container: false,
    },
    components: [dynForm],
  },

  // Если тебе нужен «дефолтный» section без настроек:
  baseSection,
};
