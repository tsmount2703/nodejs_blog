const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./courses");
const meRouter = require("./me");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);

  // app.get("/", (req, res) => {
  //   res.render("home");
  // });

  //   app.get("/news", (req, res) => {
  //     console.log(req.query);
  //     res.render("news");
  //   });

  // app.post("/news", (req, res) => {
  //   console.log(req.query);
  //   res.render("news");
  // });

  // app.get("/search", (req, res) => {
  //   res.render("search");
  // });

  //   app.post("/search", (req, res) => {
  //     // console.log(req.body)
  //     res.send("");
  //   });
}

module.exports = route;
