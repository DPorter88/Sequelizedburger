module.exports = function(sequelize, DataTypes) {
    // Define the Burger Sequelize model
    var Burger = sequelize.define("Burger", 
      {
        //  identifying the burger
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        // boolean
        devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
      }, {
        classMethods: {
          associate: function(models) {
            // Burger is associated with one customer
            Burger.belongsTo(models.Customer, {
              onDelete: "CASCADE",
              foreignKey: {
                allowNull: true
              }
            });
          }
        }
      });
  
    return Burger;
  };