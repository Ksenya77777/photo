'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Photo.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'Cascade',
      },
      url: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return Photo;
};
