const { readFile, writeFile } = require("./utils");

const usersCreate = async (req, res) => {
  try {
    const { name, price } = req.body;
    const baseData = await readFile("users.json");
    console.log(baseData);
    const lastId = baseData[baseData.length - 1]?.id || 0;
    const newProduct = {
      id: lastId + 1,
      name,
      price,
    };
    baseData.push(newProduct);
    await writeFile("users.json", baseData);
    res.json({ success: true, message: "created successfully" });
  } catch (error) {
    console.log(error);
  }
};

const usersGetAll = async (req, res) => {
  try {
    const baseData = await readFile("users.json");
    res.json(baseData);
  } catch (error) {
    console.log(error);
  }
};

const usersUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const baseData = await readFile("users.json");
    const index = baseData.findIndex((el) => el.id === Number(id));

    index === -1 && res.json({ success: false, message: "can't update" });

    baseData[index] = {
      ...baseData[index],
      name,
      price,
    };
    await writeFile("users.json", baseData);
    res.json({ upDatedUser: baseData[index], updated: "successfully" });
  } catch (error) {
    console.log(error);
  }
};

const usersDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const baseData = await readFile("users.json");
    const index = baseData.findIndex((el) => el.id === Number(id));
    index === -1 && res.json({ success: false, message: "can't update" });

    const deletedProducts = baseData.splice(index, 1);
    await writeFile(baseData);
    return res.json({ deletedUser: deletedProducts, deleted: "successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { usersCreate, usersGetAll, usersUpdate, usersDelete };
