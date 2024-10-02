const Course = require("../models/Courses");
const { multipleMongoosesToObject } = require("../../util/mongoose");
class SiteController {
  // GET method /
  // async index(req, res) {
  //   try {
  //     const courses = await Course.find({});
  //     res.json(courses);
  //   } catch (error) {
  //     res.status(400).json({ error: "ERROR!!!!" });
  //   }
  //   // res.render("home");
  // }

  //Viet code ngan gon hon

  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        // console.log("Courses data: ", courses);
        // Khi goi course luc dau tu phien ban handlebars 4.5.0 tro len se co bao mat nen khong the goi truc tiep cac object trong course duoc
        // courses = courses.map((course) => course.toObject());
        res.render("home", { courses: multipleMongoosesToObject(courses) });
      })
      // .catch((error) => next(error));
      .catch(next);
  }
  //GET method /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
