// ააწყეთ პროდუქტების ქრადი სადაც გამოიყენეთ routes შეეცადეთ გააკეთოთ users.route.js და users.service.js ფაილი, და შექმენით მიდდლიერი რომელიც რაღაც ლოგიკით ან გაატარებს ან დაბლოკავს იუზრების რესურსს.
// const express = require("express");
// const usersRouter = require("./Users/users.router");
// const app = express();
// app.use(express.json());
// app.use("/users", usersRouter);

// app.listen(3000, () => {
//   console.log("server running on http://localhost:3000");
// });

// შექმენით middleware რომელიც ყოველი რექუესთისას დალოგავს მომხმარებლის user-agent-ს.

// const express = require("express");
// const { userAgetMiddleware } = require("./middleware/user.agent.middleware");
// const app = express();
// app.use(express.json());
// app.use(userAgetMiddleware);

// app.listen(3000, () => {
//   console.log("server running on http://localhost:3000");
// });

// ბატონო დავით ამოაკომენტარეთ პირველი ქრადი და იქიდან გავაკეთე page ებიც
// ააწყეთ დინამიური ფეიჯი რომლეიც აიდით წამოიღებს ხარჯების ობიექტს

// const path = require("path");
// const { readFile } = require("./Users/utils");
// app.set("view engine", "ejs");
// app.get("/page/:id", async (req, res) => {
//   const { id } = req.params;
//   const data = await readFile("users.json");
//   console.log(data);
//   res.render(path.join(__dirname, "views", "pages", "pageOne.ejs"), {
//     id,
//     data,
//   });
// });

// ააწყეთ view გვერდი სადაც დარენდერდება ყველა დამატებული ხარჯი
// const path = require("path");
// const { readFile } = require("./Users/utils");
// app.set("view engine", "ejs");
// app.get("/pages", async (req, res) => {
//   const data = await readFile("users.json");
//   console.log(data);
//   res.render(path.join(__dirname, "views", "pages", "pageAll.ejs"), {
//     data,
//   });
// });
// ქულა: 2

// დედლაინი: 22/07/2024
