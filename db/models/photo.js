'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Album }) {
      this.belongsTo(Album, { foreignKey: 'albumId' });
    }
  }
  Photo.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
      albumId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Albums',
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
