'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Album, User }) {
      this.belongsTo(Album, { foreignKey: 'albumId' });
      this.belongsTo(User, { foreignKey: 'userId' });
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
