const { Router } = require("express");
const {
  usersCreate,
  usersGetAll,
  usersUpdate,
  usersDelete,
} = require("./users.service");

const usersRouter = Router();

usersRouter.get("/getAll", usersGetAll);
usersRouter.post("/create", usersCreate);
usersRouter.put("/update/:id", usersUpdate);
usersRouter.delete("/delete/:id", usersDelete);

module.exports = usersRouter;
