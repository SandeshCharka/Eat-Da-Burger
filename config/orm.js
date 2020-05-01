// Retrieve from the connection.js file.
var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

var orm = {

    selectAll: function (tableName) {
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw (err);

            console.log(result);

        });
    },
    insertOne: function (burgerName) {

        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"

        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw (err);

            console.log(result);
        });
    },
    updateOne: function (newBurgerName, oldBurgerName) {
        // UPDATE moviePlans SET movie = ? WHERE id = ?
        var queryString = "UPDATE burgers SET burger_name = ? WHERE burger_name = ?"

        connection.query(queryString, [newBurgerName, oldBurgerName], function (err, result) {
            if (err) throw (err);

            console.log(result);
        });
    }
};


module.exports = orm;