const dbConfig=require('../config/db.config');
const Sequelize=require('sequelize');
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect
});
const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.tutorials=require('./tutorial.model')(sequelize,Sequelize);
db.comments=require('./comment.model')(sequelize,Sequelize);
db.tutorials.hasMany(db.comments,{as:"comments"});
db.comments.belongsTo(db.tutorials,{
    foreignKey:'tutorialId',
    as:'tutorial',
});
module.exports=db;

