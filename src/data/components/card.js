import button from "./button.js"
import picture from "./picture.js"
import heading from "./heading.js"

export const card = {
  type: "card",
  cardClass: "w-full bg-base-100",
  cardFigureClass: "",
  cardBodyClass: "card-body h-full",
  cardPicture: true,
  cardActions: true,
  heading: {
    ...heading, titleClass: "text-h3-clamp", titleLevel: "3", description: "Карточка", descriptionClass: "text-body"
  },
  picture: {
    ...picture,
    class: "w-full",
    name: "waterfall",
    ext: "png",
    width: "300",
    height: "200",
  },
  button
};