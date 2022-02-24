module.exports = (sequelize,DataTypes)=>{
    const BtechProg = sequelize.define("btechProg",{
        courseId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        courseName:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return BtechProg;
}