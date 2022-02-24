module.exports = (sequelize,DataTypes)=>{
    const MscProg = sequelize.define("mscProg",{
        courseId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        courseName:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        duration:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return MscProg;
}