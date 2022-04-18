console.log("Before");
getUser(1, function (user) {
  console.log("User", user);
});
console.log("After");

//we have 3 patterns to deal with the asynchronous code

//callback
function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading the user from database..");
    callback({ id: id, gitHubUsername: "dipak" });
    return;
  }, 2000);
}
//promises
//Async//await
