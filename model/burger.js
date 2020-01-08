const orm = require("../config/orm");

const burger = {
    all: function(cb){
        orm.all("burgers", function(res){
           console.log(res)
            cb(res);
        })
    },
    create: function(){

    }
}

module.exports = burger;