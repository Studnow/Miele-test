import logo from "../components/logo";
import icon from "../components/icon";
import link from "../components/link";
import { socialLink } from "../components/link";
import accordion from "../components/accordion.js";

//data

import pageData from "../../../assets/assetsData.js";

const contactsData = pageData.footer.contacts;
const socialData = pageData.footer.social;
const workingHoursData = pageData.footer.workingHours;
const accordionData = pageData.footer.accordion;
const policyData = pageData.footer.copyright;

//lists
import list from "../components/list";

const payment = list;
const social = list;
const policy = list;
const contacts = list;

export default {
  template: "footer",
  containerClass:
    "footer responsive-container bg-base-300 text-base-100 text-center gap-0 p-10 divide-y md:divide-y-0 divide-base-300 [&>:first-child]:border-t md:[&>:first-child]:border-0 md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 md:grid-rows-[auto_1fr] max-w-full",
  // logo: { ...logo, containerClass: "link", text: "", icon: false },
  accordion: {
    ...accordion,
    section: false,
    title: true,
    listItems: accordionData.map((item) => ({
      title: item.title,
      items: item.navLinks.map((link) => ({
        ...link,
        text: link,
        class: "text-left",
        textClass: "text-base-100",
      })),
      class: " bg-base-300 collapse-arrow rounded-none md:collapse-open",
    })),
  },
  social: {
    ...social,
    variant: "list",
    title: false,
    class: "mb-2",
    listClass: "flex flex-row justify-between items-center gap-2",
    listItems: socialData.items.map((item) => ({
      ...socialLink,
      class: socialLink.class.concat(" w-12 h-12 px-0"),
      text: false,
      icon: item?.icon
        ? { ...socialLink.icon, id: item.icon?.id, w: "32", h: "32", class: "bg-base-100 rounded-full" }
        : false,
    })),
  },
  workingHours: {
    ...social,
    variant: "text",
    title: false,
    class: "flex flex-col items-center",
    listClass: "flex flex-col items-start gap-2",
    listItems: workingHoursData.items[0].text.map((item) => ({ text: item })),
  },
  contacts: {
    ...contacts,
    variant: "list",
    title: false,
    class: "flex flex-col items-center",
    listClass: "flex flex-col justify-between items-center gap-8 w-full",
    listItems: contactsData.items.map((item) => ({
      ...socialLink,
      class: socialLink.class.concat(" flex flex-row-reverse w-full text-base-100 no-underline px-0 w-full"),
      text: item.text,
      textWrapper: "flex flex-col items-start gap-2 relative top-4",
      textClass: "",
      customTextClass: "text-xl",
      url: item.phone ? `tel:${item.phone}` : "#",
      icon: item?.icon ? { ...socialLink.icon, id: item.icon?.id } : false,
    })),
  },
  policy: {
    ...policy,
    variant: "nav",
    title: false,
    class: "flex flex-col items-center",
    listClass: "flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between",
    listItems: policyData.items.map((item) => ({
      ...link,
      url: "/privacy-policy",
      text: item.text,
      textWrapper: "flex flex-col items-start relative top-4",
      class: "link no-underline hover:underline text-left",
      textClass: "text-left text-xs",
      icon: false,
    })),
    link: {
      ...link,
      text: policyData.link.text,
      url: "/privacy-policy",
      class: "link text-left text-xs no-underline border-0 border-b-2 border-base-200",
      icon: false,
    },
  },
  payment: {
    ...payment,
    variant: "",
    title: false,
    class: "flex flex-col items-center",
    listClass: "flex flex-row items-center gap-2 w-2/5 justify-end",
    listItems: [
      {
        ...link,
        url: "/privacy-policy",
        text: false,
        class: "link no-underline hover:underline mb-4",
        icon: { ...icon, id: "payment_mc", class: "w-16 h-12" },
      },
      {
        ...link,
        url: "/copyright",
        text: false,
        class: "link no-underline hover:underline mb-4",
        icon: { ...icon, id: "payment_visa", class: "w-16 h-12" },
      },
    ],
  },
};
