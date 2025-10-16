export default {
  meta: {
    title: "О нас",
    description: "Мы молоццы",
    favicon: "/favicon.svg",
    ogImage: "/assets/img/og-image.jpg",
    ogUrl: "/",
  },
  layout: [
    // "basic",
    "header",
    "footer", // если не нужен — просто убрать
    "drawer",
    "modal",
  ],
  // --- вот здесь массив
  sections: [
    // "testimonials",
    "slider",
    // "test",
    "hero",
    // "section",
    "cards",
    // "about",
    // "price",
    "form",
  ],
};
