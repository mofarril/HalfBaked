//creating a howToMakeIt table in my HalfBaked db
module.exports = function(sequelize, DataTypes) {
    var howToMakeIt = sequelize.define("howToMakeIt", {
      //Name of Recipe
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      //name of who's contributing recipe
      author: {
        type: DataTypes.string,
        allowNull: false,  
        validate: {
          len: [1]
        }
      },
      //background/tips/tricks to change it make it better
      story: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      //this should be Ingredients and their measurements
      ingredients: { 
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      //this should be recipe steps
      instructions: { 
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            len: [1]
          }
      }
    });
  
    howToMakeIt.associate = function(models) {
      // We're saying that a howToMakeIt should belong to an recipeSnipIt
      // A HowToMakeIt can't be created without an recipeSnipIt due to the foreign key constraint
      howToMakeIt.belongsTo(models.recipeSnipIt, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return howToMakeIt;
  };
  