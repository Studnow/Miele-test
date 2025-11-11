import heading from "../../data/components/heading.js";
import {sectionStyles} from "../defaultStyles/sectionStyle.js";
import { card } from "../../data/components/card.js";
import button from "../../data/components/button.js";

export default {
  template: "section",
  fullWidth: false,
  style: sectionStyles.default,
  heading,
  colClass: "col-span-3",
  components: {
    colClass: "col-span-3",
    items: [card, button],
  },
  footer: false,
};

export const customSection = {}