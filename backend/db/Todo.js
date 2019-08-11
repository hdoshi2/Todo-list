const Sequelize = require("sequelize");
const db = require("./db");

const Todo = db.define("todos", {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Todo;
