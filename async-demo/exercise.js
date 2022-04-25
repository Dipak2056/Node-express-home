// getCustomer(1, (customer) => {
//   console.log("Customer", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top Movies:", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log("customer", customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log("Top Movies:", movies);
    await sendEmail(customer.email, movies);
    console.log("Email Sent...");
  }
}
notifyCustomer();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Dipak",
        isGold: true,
        email: "email",
      });
    }, 2000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie"]);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
