export default {
  meta: {
    title: "Название страницы",
    description: "Описание страницы",
    theme: "mytheme", // тема по умолчанию
    favicon: "/favicon.svg",
    ogImage: "/assets/img/og-image.jpg",
    ogUrl: "/",
  },
  layout: {
    // "basic",
    header: true,
    footer: true, // если не нужен — просто убрать
    drawer: true,
    modal: true,
  },
  // --- вот здесь массив
  sections: [
    // "iconsPreview",
    "hero",
    "advantages",
    "categories",
    "bannerWash",
    "bannerVacuum",
    "bannerKitchen",
    "linkSection",
    // "testimonials",
    // "slider",
    // "test",
    // "about",
    // "price",
    // "form",
  ],
};
