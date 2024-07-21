const userAgetMiddleware = (req, res, next) => {
  const data = req.headers;
  const { password } = data;
  const PASSWORD = "backnode5";
  console.log(password);
  if (data["password"] !== PASSWORD) {
    throw new Error("Access Denied");
  }
  res.json(data["user-agent"]);
};
module.exports = { userAgetMiddleware };
