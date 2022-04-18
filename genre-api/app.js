const { query } = require("express");
const express = require("express");
const app = express();
//here we are writing the genres stored as object in the genre
const genres = [
  { id: 1, name: "pop" },
  { id: 2, name: "folk" },
  { id: 3, name: "country" },
  { id: 4, name: "jazz" },
];

app.get("/api/genre", (req, res) => {
  res.send(genres);
});
//this is the line of code to gt the singal genre from the service
app.get("/api/genre/:id", (req, res) => {
  const genre = genres.find((item) => item.id === parseInt(req.params.id));
  if (!genre) res.status(404).send("the page you requested donot exists");

  res.send(genre);
});
//this is the post method we are going to add if there are any new genres to be added
app.post("/api/genre", (req, res) => {
  //now we are creating the new genre object to be added
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
    //inorder to req.body.name to work we need a json object because by default it is not enabledd in express
    //so for that to happen we want to ad
  };
});
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`listening on port ${port} `));
