module.exports = function(sequelize, DataTypes) {
    var Participant = sequelize.define("Participant", {
      // Giving the Participant model a name of type STRING
      //Name of Participant
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      //baking?
      bake: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
 Participant.associate = function(models) {
      // Associating Participant with Posts
      // When an Participant is deleted, also delete any associated Posts
     Participant.hasMany(models.Event, {
        onDelete: "cascade"
      });
    };
  
    return Participant;
  };
  