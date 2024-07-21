const readFile = async (URL) => {
  const fs = require("fs/promises");
  try {
    const rawData = await fs.readFile(URL, "utf-8");
    const data = JSON.parse(rawData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async (URL, data) => {
  const fs = require("fs/promises");
  try {
    await fs.writeFile(URL, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { readFile, writeFile };
