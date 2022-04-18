const p = new Promise((resolve, reject) => {
  //kick of async work
  //..
  setTimeout(() => {
    // resolve(1);
    reject(new Error("MESSAGE"));
  }, 2000);
  //to show it there is any error
});

p.then((result) => console.log(result)).catch((err) =>
  console.log("Error", err.message)
);
