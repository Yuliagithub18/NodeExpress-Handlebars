const connection = require("./connection")

const orm = {
    all: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    },
    create: function(vals){
        var queryString = `insert into burgers (burger_name) values (${vals});`;
        connection.query(queryString, function(err){
          if (err) {
            throw err;
          }
          console.log("success")

        })


    },

    update: function(){}
};

module.exports = orm;