//creating a Recipe table in my HalfBaked db
module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
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
        type: DataTypes.BLOG,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      //this should be Ingredients and their measurements
      ingredients: { 
        type: DataTypes.BLOG,
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
      },
      //this should be recipe timestamp
      baked: {
        type: DataTypes.DATEONLY,
        //do I need this here?
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    return Recipe;
  };
  