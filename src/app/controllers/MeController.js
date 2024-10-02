const Course = require("../models/Courses");
const { multipleMongoosesToObject } = require("../../util/mongoose");
class MeController {
  //GET method /stored/courses
  storedCourses(req, res, next) {
    // $ne co nghia là khong phai, khong bang
    

    Promise.all([Course.find({ deleted: { $ne: true } }).sortable(req), Course.countDocuments({ deleted: true })])
      //Array result chua 2 bien courses, deletedCount
      // .then((result)=>{
      //   res.render("/me/stored-courses", {
      //     deletedCount: result[1],
      //     courses: multipleMongoosesToObject(result[0]),
      //   })
      // })

      // Distracting mang result
      .then(([courses, deletedCount]) => {
        res.render("me/stored-courses", {
          courses: multipleMongoosesToObject(courses),
          deletedCount,
        });
      })
      .catch(next);

    // Course.countDocuments({ deleted: true })
    //   .then((deletedCount) => {
    //     console.log(deletedCount);
    //   })
    //   .catch(next);

    // Course.find({ deleted: { $ne: true } })
    //   .then((courses) =>
    //     res.render("me/stored-courses", {
    //       courses: multipleMongoosesToObject(courses),
    //     })
    //   )
    //   .catch(next);
  }

  //GET method /trash/courses
  trashCourses(req, res, next) {
    Course.find({ deleted: true })
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongoosesToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
