module.exports = (sequelize,DataTypes)=>{
    const DdIntProg = sequelize.define("ddIntProg",{
        courseId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        courseName:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return DdIntProg;
}