const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("hrmanager", "node", "node", {
  host: "localhost",
  dialect: "mysql",
});

//Table definition

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Queries below

exports.createUser = async (name) => {
  await User.sync();
  console.log("The table for the User model was just (re)created!");

  const testUser = await User.create({
    firstName: name ? name : "Noname",
    lastName: "Nowak",
    job: "Office worker",
    city: "Pakosc",
  });
  console.log(name ? name : "Noname" + " ID is: ", testUser.id);
};

exports.readAllUsers = async () => {
  const users = await User.findAll();
  return JSON.stringify(users);
};
