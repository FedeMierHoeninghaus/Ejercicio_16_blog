const { Model, DataTypes, Sequelize } = require("sequelize");

class Article extends Model {
    static initModel(sequelize) {
        Article.init(
            {
                id: {
                    type: DataTypes.BIGINT.UNSIGNED,
                    primaryKey: true,
                    autoIncrement: true,
                },
                title: {
                    type: DataTypes.STRING,
                },
                content: {
                    type: DataTypes.TEXT,
                },
                img: {
                    type: DataTypes.STRING,
                },
                creationDate: {
                    type: DataTypes.DATE,
                },
            },
            {
                sequelize,
                modelName: "article",
            },
        );

        return Article;
    }
}

module.exports = Article;
