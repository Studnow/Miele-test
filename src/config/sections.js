import { readdirSync } from "fs";
import { resolve } from "path";

// config/sections.js
import baseSection from "./base/baseSection.js";
import heading from "../data/components/heading.js";
import {sectionStyles} from "./defaultStyles/sectionStyle.js";

import {
  card,
  button,
  list,
  slider,
  picture,
  link,
  icon,
  dynForm,
  dynamicForm,
  sliderParts,
} from "../data/components/index";

import assets from "../../assets/assetsData.js";
import { title } from "process";

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
    fullWidth: false,
    overlay: false,
    style: {
      ...baseSection.style,
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
          sliderParts: { customControl: { control: false } },
          slideData: assets.hero.slides.map((item) => ({
            ...card,
            cardClass: "rounded-none lg:card-side lg:px-4 lg:min-h-[626px] text-center items-center",
            cardBodyClass: "card-body space-y-5 p-0 mb-5 md:mb-[121px] lg:mb-6 items-center lg:justify-center",
            cardFigureClass: "w-full rounded-none lg:order-2 lg:w-1/2",
            heading: {
              ...heading,
              containerClass: "self-center",
              title: item.title,
              titleLevel: "2",
              titleClass: "text-h2-clamp mb-2 text-base-100",
              descriptionClass: "text-subtitle text-neutral font-bold md:w-2/3 flex-grow-0",
              description: item?.description,
            },
            picture: {
              ...picture,
              path: `/assets/images/mobile/${item.mobile.name}.${item.mobile.ext}`,
              name: item.mobile.name,
              ext: item.mobile.ext,
              class: "lg:flex lg:items-center rounded-none mb-6",
              alt: "Раковина из бетона",
            },
            button: {
              ...button,
              class: "btn-accent rounded-full",
              icon: false,
              text: "Подробнее",
            },
          })),
        },
      },
      // ],
    ],
  },

  advantages: {
    ...baseSection,
    template: "cards",
    fullWidth: false,
    style: {
      ...baseSection.style,
      sectionClass: baseSection.style.sectionClass.concat(" bg-base-100"),
      sectionContentClass: "grid grid-cols-2 md:grid-cols-12 gap-4 place-items-center py-4",
    },
    heading: {
      ...heading,
      title: false,
      caption: false,
    },
    colClass: "w-full md:col-span-4 flex flex-wrap gap-4",
    components: assets.advantages.cards.map((item) => ({
      ...card,
      cardActions: false,
      cardClass: card.cardClass + " h-full py-2 rounded-none border border-neutral/70 md:col-span-3",
      cardBodyClass: card.cardBodyClass + " p-3 items-center",
      cardFigureClass: card.cardFigureClass.concat(" min-h-10"),
      heading: {
        ...card.heading,
        title: item?.title,
        description: item?.description,
        descriptionClass: card.descriptionClass + " text-sm",
      },
      picture: {
        ...picture,
        modern: false,
        path: `assets/icons/${item.icon.name}.${item.icon.ext}`,
        w: "32",
        h: "32",
        class: "rounded-none",
        alt: `${item.icon.alt}`,
        imgClass: "h-8",
      },
    })),
  },
  categories: {
    ...baseSection,
    template: "cards",
    fullWidth: false,
    style: {
      ...baseSection.style,
      sectionClass: baseSection.style.sectionClass.concat(" bg-base-100"),
      sectionContentClass: "grid grid-cols-2 md:grid-cols-12 place-items-center py-4 gap-y-9 gap-x-3",
    },
    heading: {
      ...heading,
      title: assets.categories.title,
      caption: false,
    },
    colClass: "w-full md:col-span-4 flex flex-wrap",
    components: assets.categories.cards.main.map((item) => ({
      ...card,
      cardActions: false,
      cardClass: card.cardClass + " w-full h-full py-0 rounded-none md:col-span-3 items-center",
      cardBodyClass:
        card.cardBodyClass + " p-2 items-center justify-center absolute bg-primary w-36 max-h-14 -bottom-6",
      cardFigureClass: card.cardFigureClass.concat(" w-full h-40"),
      heading: {
        ...card.heading,
        title: item?.title,
        titleClass: "text-base-100 font-normal text-sm",
        description: item?.description,
        descriptionClass: card.descriptionClass + " text-sm",
      },
      picture: {
        ...picture,
        modern: false,
        path: `assets/images/mobile/${item.imageM.name}.${item.imageM.ext}`,
        w: "165",
        h: "165",
        class: "rounded-none",
        alt: `${item.alt}`,
        // imgClass: "h-8",
      },
    })),
  },
  linkSection: {
    ...baseSection,
    template: "cards",
    fullWidth: false,
    style: {
      ...baseSection.style,
      sectionClass: baseSection.style.sectionClass.concat(" bg-base-100"),
      sectionContentClass: "grid grid-cols-2 md:grid-cols-12 place-items-center py-4 gap-y-9 gap-x-3",
    },
    heading: {
      ...heading,
      title: assets.linksSection.title,
      titleClass: "text-h2-clamp",
      caption: false,
    },
    colClass: "w-full md:col-span-4 flex flex-wrap",
    components: assets.linksSection.cards.map((item) => ({
      ...card,
      cardActions: false,
      cardClass: card.cardClass + " w-full h-full py-0 rounded-none md:col-span-3 items-start",
      cardBodyClass: card.cardBodyClass + " w-full px-0 py-4 items-start justify-center",
      cardFigureClass: card.cardFigureClass.concat(" w-full h-40 overflow-visible"),
      heading: {
        ...card.heading,
        title: item?.title,
        titleClass: "text-h4-clamp font-medium",
        description: item?.description,
        descriptionClass: card.descriptionClass + " text-sm",
      },
      picture: {
        ...picture,
        modern: false,
        path: `assets/images/${item.image.name}.${item.image.ext}`,
        w: "300",
        h: "300",
        class: "rounded-none",
        alt: `${item.title}`,
        // imgClass: "h-8",
      },
    })),
  },
  bannerWash: {
    ...baseSection,
    template: "test",
    divider: true,
    style: {
      ...sectionStyles.centered,
      sectionClass: sectionStyles.centered.sectionClass.concat(
        " bg-base-100 py-0 bg-bannerWash min-h-[60vh] bg-cover bg-no-repeat"
      ),
      sectionFooterClass: "flex flex-col w-full",
    },
    heading: {
      ...heading,
      title: assets.washBanner.title,
      titleClass: heading.titleClass.concat(" text-center mb-4 text-base-200 font-medium mt-6"),
      description: assets.washBanner.description,
      container: true,
      caption: false,
    },
    components: [{ ...button, class: button.class.concat(" btn-accent rounded-full self-start"), icon: false }],
    footer: `<span class="text-caption text-base-200 text-center block mb-6 w-full">${assets.washBanner.сaptionBottom}</span>`,
  },
  bannerVacuum: {
    ...baseSection,
    template: "test",
    divider: true,
    style: {
      ...sectionStyles.centered,
      sectionClass: sectionStyles.centered.sectionClass.concat(
        " bg-base-100 py-0 bg-bannerVacuum min-h-[60vh] bg-cover bg-no-repeat"
      ),
      sectionFooterClass: "flex flex-col w-full",
    },
    heading: {
      ...heading,
      title: assets.vacuumBanner.title,
      titleClass: heading.titleClass.concat(" text-center mb-4 text-base-200 font-medium mt-6"),
      description: assets.washBanner.description,
      container: true,
      caption: false,
    },
    components: [{ ...button, class: button.class.concat(" btn-accent rounded-full self-start"), icon: false }],
    footer: `<span class="text-caption text-base-200 text-center block mb-6 w-full">${assets.vacuumBanner.captionBottom}</span>`,
  },
  bannerKitchen: {
    ...baseSection,
    template: "test",
    divider: true,
    style: {
      ...sectionStyles.centered,
      sectionClass: sectionStyles.centered.sectionClass.concat(
        " bg-base-100 py-0 bg-bannerKitchen min-h-[60vh] bg-cover bg-no-repeat"
      ),
      sectionFooterClass: "flex flex-col w-full",
    },
    heading: {
      ...heading,
      title: assets.kitchenBanner.title,
      titleClass: heading.titleClass.concat(" text-center mb-4 text-base-200 font-medium mt-6"),
      description: assets.washBanner.description,
      container: true,
      caption: false,
    },
    components: [{ ...button, class: button.class.concat(" btn-accent rounded-full self-start"), icon: false }],
    footer: `<span class="text-caption text-base-200 text-center block mb-6 w-full">${assets.kitchenBanner.captionBottom}</span>`,
  },

  slider: {
    ...baseSection,
    template: "slider",
    fullWidth: true,
    style: {
      ...baseSection.style,
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

  form: {
    ...baseSection,
    template: "form",
    style: { ...baseSection.style },
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
