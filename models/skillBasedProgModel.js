module.exports = (sequelize,DataTypes)=>{
    const skillBasedProg = sequelize.define("skillBasedProg",{
        skillId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        skillName:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return skillBasedProg;
}