  
const tasks = require("../controllers/tasks.js");

module.exports = function(app){
    app.get("/tasks", function(req, res){
        tasks.index(req, res);
    });
    app.get("/:title", function(req, res){
        tasks.readtask(req, res);
    });

    app.get("/new/:title/:description/:completed", function(req, res){
        tasks.createtask(req, res);
    });
    app.get("/:id/:title/:description/:completed", function(req, res){
        tasks.updatetask(req, res);
    });
    app.get("/remove/:title", function(req, res){
        tasks.deletetask(req, res);
    });
}