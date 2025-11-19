import { readdirSync } from "fs";
import { resolve } from "path";

// config/sections.js
import baseSection from "./base/baseSection.js";
import heading from "../data/components/heading.js";
import { sectionStyles } from "./defaultStyles/sectionStyle.js";

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
      ...sectionStyles.wide,
      sectionClass: sectionStyles.wide.sectionClass.concat(" mb-14 bg-black"),
      sectionFullWidthClass: "w-full mx-auto",
      sectionContentClass: "w-full",
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
          // sliderParts: { customControl: { control: true } },
          slideData: assets.hero.slides.map((item) => ({
            ...card,
            cardClass: "rounded-none w-full lg:image-full text-center items-center lg:items-start lg:justify-center",
            cardBodyClass:
              "card-body space-y-5 mb-5 p-3 lg:p-8 md:mb-[121px] lg:mb-6 items-center lg:justify-start h-full",
            cardFigureClass: "w-full rounded-none",
            heading: {
              ...heading,
              container: true,
              containerClass: "max-w-full lg:max-w-screen-sm lg:mb-6",
              title: item.title,
              titleLevel: "2",
              titleClass: "text-h2-clamp mb-2 lg:mb-8 text-base-100",
              descriptionClass: "text-subtitle text-neutral font-bold md:w-2/3 flex-grow-0",
              description: item?.description,
            },
            picture: {
              ...picture,
              path: {
                srcSet: `/assets/images/mobile/${item.mobile.name}.${item.mobile.ext}`,
                img: `/assets/images/desktop/${item.desktop.name}.${item.desktop.ext}`,
              },
              name: item.mobile.name,
              ext: item.mobile.ext,
              class: "rounded-none mb-6",
              alt: "Раковина из бетона",
            },
            button: {
              ...button,
              class: " btn-accent rounded-full",
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
      sectionClass: baseSection.style.sectionClass.concat(" bg-base-100 mb-14"),
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
      cardClass:
        card.cardClass +
        " h-full py-2 px-3 rounded-none border border-neutral/70 md:col-span-3 lg:card-side items-center hover:bg-base-200 transition-all",
      cardBodyClass: card.cardBodyClass + " p-0 lg:pl-3 lg:pr-0 items-center lg:justify-center",
      cardFigureClass: card.cardFigureClass.concat(" min-h-10"),
      heading: {
        ...card.heading,
        title: item?.title,
        description: item?.description,
        descriptionClass: "text-sm lg:text-body h-fit",
      },
      picture: {
        ...picture,
        modern: false,
        path: { img: `assets/icons/${item.icon.name}.${item.icon.ext}` },
        w: "32",
        h: "32",
        class: "rounded-none h-8 lg:h-10 lg:w-10",
        alt: `${item.icon.alt}`,
        imgClass: "h-8 lg:h-10 lg:w-10",
      },
    })),
  },
  categories: {
    ...baseSection,
    template: "categories",
    fullWidth: false,
    style: {
      ...baseSection.style,
      sectionClass: baseSection.style.sectionClass.concat(" bg-base-100 mb-14"),
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
      cardClass:
        card.cardClass +
        " group w-full h-full py-0 rounded-none md:col-span-3 items-center max-w-72 overflow-y-hidden transition-all duration-300 ease-in",
      cardBodyClass:
        card.cardBodyClass +
        " p-2 items-center justify-end absolute w-36 lg:w-full -bottom-6 lg:bottom-0 group-hover:bg-primary/90 transition-all duration-200 ease-in-out",
      cardFigureClass: card.cardFigureClass.concat(" w-full h-40 lg:h-full"),
      heading: {
        ...card.heading,
        containerClass: "relative -bottom-4 lg:-bottom-2 text-center w-full px-2 py-4 bg-primary",
        title: item?.title,
        titleClass:
          "text-base-100 font-normal text-sm group-hover:translate-y-full translate-y-0 transition-all duration-200 ease-in-out",
        description: item?.description,
        descriptionClass: card.descriptionClass + " text-sm",
      },
      picture: {
        ...picture,
        modern: false,
        path: { img: `assets/images/mobile/${item.imageM.name}.${item.imageM.ext}` },
        w: "165",
        h: "165",
        class: "rounded-none",
        alt: `${item.alt}`,
        // imgClass: "h-8",
      },
      hover: {
        ...list,
        type: "list",
        variant: "list",
        class:
          "card-list flex-col-reverse absolute bottom-0 w-[inherit] min-h-max translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out",
        listClass: "hover-list rounded-none px-4 space-y-1 py-4 text-base-200 list-inside",
        hoverLink: {
          ...link,
          class: link.class.concat(
            " no-underline w-full bg-primary/90 text-base-200 px-4 py-4 border-t border-accent text-body text-nowrap overflow-hidden text-ellipsis"
          ),
          text: [assets.categories.cards.hover.mainLink],
          icon: false,
        }, // "Смотреть все товары" — добавляется ко всем
        listItems: assets.categories.cards.hover.subLink.map((item) => ({
          ...link,
          text: item,
          class: link.class.concat(" no-underline px-0 py-2 hover:circle text-body"),
          textClass: "text-nowrap overflow-hidden text-ellipsis",
          icon: false,
        })), // Массив ссылок — добавляется ко всем (или фильтруйте по index, если subLink специфичны)
        // Пример: если subLink только для 2-й карты (кухня), то:
        // subLinks: index === 1 ? cardsData.hover.subLink : [],
      },
    })),
  },
  bannerWash: {
    ...baseSection,
    template: "test",
    fullWidth: true,
    divider: true,
    style: {
      ...sectionStyles.wide,
      sectionClass: sectionStyles.wide.sectionClass.concat(
        " bg-base-100 py-0 bg-bannerWashM lg:bg-bannerWashD min-h-[60vh] md:min-h-[80vh] bg-cover bg-no-repeat"
      ),
      sectionFullWidthClass:
        sectionStyles.wide.sectionFullWidthClass + " responsive-container min-h-[inherit] flex flex-col justify-center",
      sectionFooterClass: "flex flex-col w-full",
    },
    heading: {
      ...heading,
      title: assets.washBanner.title,
      titleClass: heading.titleClass.concat(" text-center md:text-left mb-4 text-base-200 font-medium mt-6"),
      description: assets.washBanner.description,
      container: true,
      containerClass: heading.containerClass.concat(" md:mt-56"),
      caption: false,
    },
    components: [
      {
        ...button,
        class: button.class.concat(
          " btn-accent max-w-[103px] rounded-full self-start justify-self-center md:justify-self-start md:col-span-3"
        ),
        icon: false,
      },
    ],
    footer: `<span class="text-caption text-base-200 text-center md:text-right block mb-6 w-full">${assets.washBanner.сaptionBottom}</span>`,
  },
  bannerVacuum: {
    ...baseSection,
    template: "test",
    fullWidth: true,
    divider: "desktop",
    style: {
      ...sectionStyles.wide,
      sectionClass: sectionStyles.wide.sectionClass.concat(
        " bg-base-100 px-4 py-8 md:py-0 md:bg-bannerVacuumD min-h-[60vh] md:min-h-[80vh] bg-cover bg-no-repeat"
      ),
      sectionFullWidthClass: sectionStyles.wide.sectionFullWidthClass.concat(
        " bg-base-300 md:bg-transparent min-h-[inherit] flex flex-col justify-center items-center md:items-start responsive-container"
      ),
      sectionContentClass: sectionStyles.wide.sectionContentClass.concat(" place-items-center"),
      sectionFooterClass: "flex flex-col w-full",
    },
    heading: {
      ...heading,
      title: assets.vacuumBanner.title,
      titleClass: heading.titleClass.concat(" text-center mb-4 text-base-200 font-medium mt-6"),
      description: assets.washBanner.description,
      descriptionClass: heading.descriptionClass.concat(" text-center md:text-left"),
      container: true,
      containerClass: heading.containerClass.concat(" md:mt-56"),
      caption: false,
    },
    components: [
      {
        ...button,
        class: button.class.concat(
          " btn-accent max-w-[103px] rounded-full self-start justify-self-center md:justify-self-start md:col-span-8"
        ),
        icon: false,
      },
      {
        ...picture,
        modern: false,
        path: {
          img: `assets/images/mobile/${assets.vacuumBanner.images[0].name}.${assets.vacuumBanner.images[0].ext}`,
        },
        w: "400",
        h: "400",
        class: "rounded-none relative -bottom-10 md:hidden",
        alt: `${assets.vacuumBanner.title}`,
      },
    ],
    footer: `<span class="text-caption text-base-200 text-center md:text-left hidden md:block mb-6 w-full">${assets.vacuumBanner.captionBottom}</span>`,
  },
  bannerKitchen: {
    ...baseSection,
    template: "test",
    fullWidth: true,
    divider: true,
    style: {
      ...sectionStyles.wide,
      sectionClass: sectionStyles.wide.sectionClass.concat(
        " mb-14 bg-base-100 py-0 bg-bannerKitchenM lg:bg-bannerKitchenD min-h-[60vh] md:min-h-[80vh] bg-cover bg-no-repeat"
      ),
      sectionFullWidthClass:
        sectionStyles.wide.sectionFullWidthClass + " responsive-container min-h-[inherit] flex flex-col justify-center",
      sectionContentClass: sectionStyles.wide.sectionContentClass.concat(" justify-center"),
      sectionFooterClass: "flex flex-col w-full",
    },
    heading: {
      ...heading,
      title: assets.kitchenBanner.title,
      titleClass: heading.titleClass.concat(" text-center md:text-left mb-4 text-base-200 font-medium mt-6"),
      description: assets.washBanner.description,
      container: true,
      containerClass: heading.containerClass.concat(" md:mt-56"),
      caption: false,
    },
    components: [
      {
        ...button,
        class: button.class.concat(
          " btn-accent max-w-[103px] rounded-full self-start justify-self-center md:justify-self-start md:col-span-3"
        ),
        icon: false,
      },
    ],
    footer: `<span class="text-caption text-base-200 text-center md:text-right block mb-6 w-full">${assets.kitchenBanner.captionBottom}</span>`,
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
      cardActions: true,
      cardClass: card.cardClass + " w-full h-full py-0 rounded-none md:col-span-3 items-start",
      cardBodyClass: card.cardBodyClass + " w-full px-0 py-4 items-start justify-center",
      cardFigureClass: card.cardFigureClass.concat(" w-full h-40 lg:h-full overflow-visible"),
      heading: {
        ...card.heading,
        title: false,
        titleClass: "text-h4-clamp font-medium",
        description: item?.description,
        descriptionClass: card.descriptionClass + " text-sm",
      },
      picture: {
        ...picture,
        modern: false,
        path: { img: `assets/images/${item.image.name}.${item.image.ext}` },
        w: "300",
        h: "300",
        class: "rounded-none",
        alt: `${item.title}`,
        // imgClass: "h-8",
      },
      button: false,
      link: {
        ...link,
        text: item.title,
        class: link.class.concat(
          " bg-transparent border-0 px-0 outline-transparent shadow-none no-underline hover:underline"
        ),
        textClass: link.textClass.concat(" truncate text-sm lg:text-lg"),
        icon: false,
      },
    })),
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
