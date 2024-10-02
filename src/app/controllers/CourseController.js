const Courses = require("../models/Courses");
const {
  mongooseToObject,
  multipleMongoosesToObject,
} = require("../../util/mongoose");
class CourseController {
  //GET method /courses/:slug
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
    // res.send(" COURSES DETAILS!!!");
  }

  //GET method /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //POST method /courses/store(Create)
  store(req, res, next) {
    req.body.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Courses(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //GET method /courses/:id/edit
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  //PUT method /courses/:id
  update(req, res, next) {
    Courses.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //DELETE method /courses/:id
  delete(req, res, next) {
    Courses.delete({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //DELETE method /courses/:id
  forceDestroy(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/me/trash/courses"))
      .catch(next);
  }

  //PATCH method /courses/:id/restore
  restore(req, res, next) {
    Courses.restore({ _id: req.params.id })
      .then(() => res.redirect("/me/trash/courses"))
      .catch(next);
  }

  //POST method /courses/handle-actions-forms
  handleActionsForms(req, res, next) {
    switch (req.body.actions) {
      case "delete": {
        //$in giong nhu map de phan tach tung phan tu trong mang ra de chay
        Courses.delete({ _id: { $in: req.body.coursesIds } })
          .then(() => res.redirect("/me/stored/courses"))
          .catch(next);
        break;
      }
      default: {
        res.json({ message: "Action is invalid!!!" });
      }
    }
  }

  //POST method /courses/handles-trash-actions-forms
  handleTrashActionsForm(req, res, next) {
    switch(req.body.actions){
      case "restore": {
        Courses.restore({_id:{$in:req.body.coursesIds}})
        .then(()=>res.redirect("/me/trash/courses"))
        .catch(next);
        break;
      };
      case "destroy": {
        Courses.deleteMany({ _id: { $in: req.body.coursesIds } })
        .then(() => res.redirect("/me/trash/courses"))
        .catch(next);
        break;
      };
      default: {
        res.json({ message: "Action is invalid!!!" }); 
      }
    }
  }
}
//res.render() la dung duong dan theo handlebars trung voi ten file.hbs cua controller tuong ung
//res.redirect() la dung duong link cua routes duoc hien thi tren url
module.exports = new CourseController();
