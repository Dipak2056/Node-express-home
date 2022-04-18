const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

//this method takes two argument :- path and the callback function
//callback function has two arguments req and res

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("this is t=not found");
  else res.send(course);
});

//using post method
app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
//http delete method
app.delete("/api/courses/:id", (req, res) => {
  //Look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  //not exisiting, return 404
  if (!course)
    return res
      .status(404)
      .send("the course you are trying to delete is not there");

  //delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  //return the same class
  res.send(course);
});
//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
