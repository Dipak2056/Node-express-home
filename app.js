const fs = require("fs");

const files = fs.readdir("./", function (error, files) {
  if (error) console.log("Error", error);
  else console.log("Result: ", files);
});
