const Handlebars = require("handlebars")

module.exports = {
  sum: (a, b) => a + b, //Dung de tao ham giup do trong hbs (De tang so len)
  //Dung de sort
  sortable: (field, _sort) => {
    const sortType = field === _sort.column ? _sort.type : "default";
    let icons = {
      default: "bi bi-filter-square-fill",
      asc: "bi bi-sort-down-alt",
      desc: "bi bi-sort-down",
    };
    let types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };
    let icon = icons[sortType];
    let type = types[sortType];

    const href = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );

    const result = `<a href="${href}"><i class="
        ${icon}"></i></a>`;
    return new Handlebars.SafeString(result);
  },
};
