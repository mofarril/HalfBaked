//////////////////////////////////////////
//SERVER SIDE 
//DEPENDANCIES

var db = require("../models");

//////////////////////////////////////////////////////////////////////////////
//EVENTS TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = function(app) {
  // Get all events
  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Create a new Event
  app.post("/api/events", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Delete an Event by id
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
};
////////////////////////////////////////////////////////////////////////////
//RECIPES TABLE
////////////////////////////////////////////////////////////////////////////////////////
module.exports = function(app) {
    // Get all Recipes
    app.get("/api/Recipes", function(req, res) {
      db.Recipe.findAll({}).then(function(dbRecipe) {
        res.json(dbRecipe);
      });
    });
  
    // Create a new Recipe
    app.post("/api/Recipes", function(req, res) {
      db.Recipe.create(req.body).then(function(dbRecipe) {
        res.json(dbRecipe);
      });
    });
  
    // Delete an Recipe by id
    app.delete("/api/Recipes/:id", function(req, res) {
      db.Recipe.destroy({ where: { id: req.params.id } }).then(function(dbRecipe) {
        res.json(dbRecipe);
      });
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////
  //PARTICIPANTS TABLE
  /////////////////////////////////////////////////////////////////////////////////////////////////
  module.exports = function(app) {
    // Get all Participants
    app.get("/api/Participants", function(req, res) {
      db.Participant.findAll({}).then(function(dbParticipant) {
        res.json(dbParticipant);
      });
    });
  
    // Create a new Participant
    app.post("/api/Participants", function(req, res) {
      db.Participant.create(req.body).then(function(dbParticipant) {
        res.json(dbParticipant);
      });
    });
  
    // Delete an Participant by id
    app.delete("/api/Participants/:id", function(req, res) {
      db.Participant.destroy({ where: { id: req.params.id } }).then(function(dbParticipant) {
        res.json(dbParticipant);
      });
    });
  };