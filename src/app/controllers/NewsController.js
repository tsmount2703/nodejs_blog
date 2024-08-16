class NewsController {
  // GET method /news
  index(req, res) {
    res.render("news");
  }
  //GET method /news/:slug
  show(req, res) {
    res.send("NEWS DETAILS!!!");
  }
}

module.exports = new NewsController();
