var orm = require("./config/orm.js");

// Select all from the table burgers.
    orm.selectAll("burgers");

// Insert one burger into the table burgers.
    orm.insertOne("ChickenCheese Sandwich");
    
// Update one burger from the burgers table.
// Syntax = (newBurgername, oldBurgerName)
    orm.updateOne("ChickenCheese Sandwich", "YEETO");
