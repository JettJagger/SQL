const {DataTypes} = require("sequelize");
const connection = require("../db/connection");

const Authors = connection.define("Authors", {
    genre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

module.exports = Authors;