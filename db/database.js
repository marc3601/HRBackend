const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hrmanager", "node", "node", {
  host: "localhost",
  dialect: "mysql",
});

exports.connectDatabase = connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database established successfully!");
  } catch (error) {
    console.error("Error: ", error);
  }
};
