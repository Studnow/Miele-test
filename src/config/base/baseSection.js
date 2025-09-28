import heading from "../../data/components/heading.js";
import style from "../defaultStyles/sectionStyle.js";
import { card } from "../../data/components/card.js";
import button from "../../data/components/button.js";

export default {
  template: "section",
  fullWidth: false,
  style,
  heading,
  colClass: "col-span-3",
  components: {
    colClass: "col-span-3",
    items: [card, button],
  },
  footer: false,
};
