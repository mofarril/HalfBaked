//creating a recipeSniptIt table in my HalfBaked db (no ingredients or instructions)
module.exports = function(sequelize, DataTypes) {
    var recipeSnipIt = sequelize.define("recipeSnipIt", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      author: {
        type: DataTypes.string,
        allowNull: false,  
        validate: {
          len: [1]
        }
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      baked: {
        type: DataTypes.DATEONLY,
        //do I need this here?
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    recipeSnipIt.associate = function(models) {
      // We're saying that a recipeSnipIt should belong to an HowtoMakeIt
      // A recipeSnipIt can't be created without an HowtoMakeIt due to the foreign key constraint
      recipeSnipIt.belongsTo(models.HowToMakeIt, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return recipeSnipIt;
  };
  