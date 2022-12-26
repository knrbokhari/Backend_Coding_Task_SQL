const MoviesModel = (sequelize, DataTypes) => {
  const Movies = sequelize.define('movies', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tconst: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    titleType: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    primaryTitle: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    runtimeMinutes: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },

  });

  return Movies;
};
export default MoviesModel;

// eslint-disable-next-line max-len
//   CREATE TABLE `moviesDB`. ( `tconst` VARCHAR(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL , `titleType` VARCHAR(9) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL , `primaryTitle` VARCHAR(57) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL , `runtimeMinutes` VARCHAR CHARACTER SET ucs2 COLLATE ucs2_general_ci NULL DEFAULT NULL , `genres` VARCHAR(11) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL ) ENGINE = InnoDB;
