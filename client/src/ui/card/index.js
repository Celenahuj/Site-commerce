import { genericRenderer, htmlToFragment } from "../../lib/utils.js";
import template from "./template.html?raw";

const normalizeImageUrl = function (value) {
  if (!value) return "/logo.png";
  if (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/")) {
    return value;
  }
  return `/${value}`;
};

let CardView = {
  html: function (data) {
    let htmlString = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-items-center">';
    for (let obj of data) {
      const cardData = {
        ...obj,
        image: normalizeImageUrl(obj.image),
      };
      htmlString  += genericRenderer(template, cardData);
    }
    return htmlString + '</div>';
  },

  dom: function (data) {
    return htmlToFragment( CardView.html(data) );
  }

};

export { CardView };