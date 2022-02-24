module.exports = (sequelize,DataTypes)=>{
    const PhdProg = sequelize.define("phdProg",{
        courseId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        coursename:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return PhdProg;
}