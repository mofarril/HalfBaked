//creating a howToMakeIt table in my HalfBaked db
module.exports = function(sequelize, DataTypes) {
    var event = sequelize.define("bakeOffs", {
      //Name of event
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      //name of who's incharge/creating event
      poc: {
        type: DataTypes.string,
        allowNull: false,  
        validate: {
          len: [1]
        }
      },
      //description of event
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      //participants
      participant: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      //date created
      created: {
        type: DataTypes.DATEONLY,
        //do I need this here?
        allowNull: false,
        validate: {
          len: [1]
        }
      }
      
    });
  
    event.associate = function(models) {
      // We're saying that event should belong to a participant
      // A event can't be created without an participant due to the foreign key constraint
    event.belongsTo(models.participant, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return event;
  };
  