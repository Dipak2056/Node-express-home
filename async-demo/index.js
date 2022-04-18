console.log("Before");
getUser(1, function (user) {
  console.log("User", user);
});
getRepositories("dipak", function (repositories) {
  console.log("Repos are", repositories);
});
getGenres("America", function (kind) {
  console.log("Kinds of genres in US are", kind);
});
console.log("After");

//we have 3 patterns to deal with the asynchronous code

//callback
function getUser(id) {
  return new Promise((resolve, reject) => {
    //kick of some async work
    setTimeout(() => {
      console.log("reading the user from database..");
      resolve({ id: id, gitHubUsername: "dipak" });
      return;
    }, 2000);
  });
}
//exercise
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    //kick of some async work
    setTimeout(() => {
      resolve({
        username: username,
        repositories: ["repo1", "repo2", "repoe3"],
      });
    }, 2000);
  });
}
//get the genres list
function getGenres(country) {
  return new Promise((resolve, reject) => {
    //kick off some async woek there
    setTimeout(() => {
      resolve({ country: country, genre: ["country", "london", "folk"] });
    });
  });
}
//promises

//Async//await
