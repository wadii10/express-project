const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server run on port ${PORT}`)
);

// app.get("/services", (req, res) => {
//     res.sendFile(__dirname + "/public/services.html");
// });

//   const date = new Date();
//   const day = date.getDay();
//   const hours = date.getHours();

//   if (day > 0 && day <= 5 && hours >= 9 && hours <= 12) {

//         app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, "public", "home.html"));
//         });

//         app.get("/services", (req, res, next) => {
//             res.sendFile(path.join(__dirname, "public", "services.html"));
//         })

//         app.get("/about-us", (req, res) => {
//             res.sendFile(__dirname + "/public/contact.html");
//         });

//   } else {
//     app.get("/", (req, res) => {
//         res.send("we are closed");
//     });
//   }

app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();

  if (day > 0 && day <= 5 && hours >= 9 && hours <= 17) {
    next();
  } else {
    res.send("we are closed");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.use(express.static(path.join(__dirname, "public")));
