const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongo-exercises");

async function updateCourse(id) {
  const course = await updateCourse.findById(id);
  if (!course) return;
  course.isPublished = true;
  course.author = "Another Author";

  const result = await course.save();
  console.log(result);
}
updateCourse("6265fc521f295ac9fdf8dbf3");
