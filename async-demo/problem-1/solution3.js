const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongo-exercises");

//now to define the schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  price: Number,
});
//this is the model
const Course = mongoose.model("Course", courseSchema);
//since we have the model ready we need now to query the data
// to find all the courses that are published
async function getCourses() {
  return await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by*./i }]) //here we are getting the course that are greater than or equal to 15 and name contains by anywhere and the search is case insensitive
    .sort({ name: -1 })
    .select({ name: 1, author: 1, price: 1 });
}
async function run() {
  const courses = await getCourses();
  console.log(courses);
}
run();
