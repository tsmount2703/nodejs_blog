module.exports = {
  multipleMongoosesToObject: (array) => {
    return array.map((arr) => arr.toObject());
  },
  mongooseToObject: (obj) => {
    return obj ? obj.toObject() : obj;
  },
};
