const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var slug = require("mongoose-slug-updater");
var mongoose_delete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define the schema
const Course = new Schema(
  {
    // Auto-incremented _id field using mongoose-sequence
    _id: { type: Number },  // Auto-increment will handle this field
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },  // auto-generated slug from the name field
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt
  }
);

// Custom query helpers
Course.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);

    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};

// Add Plugins
mongoose.plugin(slug);  // Apply slug plugin

Course.plugin(AutoIncrement, { inc_field: '_id' });  // Auto-increment _id field
Course.plugin(mongoose_delete, { deletedAt: true, overrideMethods: ["delete", "restore"] });

// Export the model
module.exports = mongoose.model("Course", Course);
