// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");
//
// var kimchi = {
//   selectAll: function(cb) {
//     orm.selectAll("kindsOfKimchi", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   newKimchi: function(cols, vals, cb) {
//     orm.newKimchi("kindsOfKimchi", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   updateKimchi: function(objColVals, condition, cb) {
//     orm.updateKimchi("kindsOfKimchi", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   deleteKimchi: function(condition, cb) {
//     orm.deleteKimchi("kindsOfKimchi", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// Export the database functions for the controller (kimchi_controllers.js).
module.exports = function(sequelize, DataTypes) {
  var kindsOfKimchi = sequelize.define("kindsOfKimchi", {
    kimchi_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
      gobbled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  });
  return kindsOfKimchi;
};
