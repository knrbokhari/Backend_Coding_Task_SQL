const RatingsModel = (sequelize, DataTypes) => {
  const Ratings = sequelize.define('ratings', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tconst: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    averageRating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numVotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });

  return Ratings;
};
export default RatingsModel;
