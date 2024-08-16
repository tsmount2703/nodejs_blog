class SiteController {
  // GET method /
  index(req, res) {
    res.render("home");
  }
  //GET method /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
