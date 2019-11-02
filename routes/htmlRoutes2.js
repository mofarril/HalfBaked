/////////////////////////////////////////////////////////////
//CLIENT SIDE - links to handlebars
//DEPENDANCIES

var db = require("../models");

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//EVENTS TABLE
//////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      console.log(dbEvents)
      res.render("index", {
        //msg: "Welcome!",
        Events: dbEvents
      });
    });
  });

  // Load Event page and pass in an Event by id, using handlebars template 
  app.get("/Event/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.render("Event", {
        Event: dbEvent
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Recipes TABLE
//////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
      db.Recipe.findAll({}).then(function(dbRecipes) {
        console.log(dbRecipes)
        res.render("index", {
          //msg: "Welcome!",
          Recipes: dbRecipes
        });
      });
    });
  
    // Load Recipe page and pass in an Recipe by id, using handlebars template 
    app.get("/Recipe/:id", function(req, res) {
      db.Recipe.findOne({ where: { id: req.params.id } }).then(function(dbRecipe) {
        res.render("Recipe", {
          Recipe: dbRecipe
        });
      });
    });
  
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
      res.render("404");
    });
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Participants TABLE
//////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
      db.Participant.findAll({}).then(function(dbParticipants) {
        console.log(dbParticipants)
        res.render("index", {
          //msg: "Welcome!",
          Participants: dbParticipants
        });
      });
    });
  
    // Load Participant page and pass in an Participant by id, using handlebars template 
    app.get("/Participant/:id", function(req, res) {
      db.Participant.findOne({ where: { id: req.params.id } }).then(function(dbParticipant) {
        res.render("Participant", {
          Participant: dbParticipant
        });
      });
    });
  
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
      res.render("404");
    });
  };