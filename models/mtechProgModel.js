module.exports = (sequelize,DataTypes)=>{
    const MtechProg = sequelize.define("mtechProg",{
        courseId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        coursename:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return MtechProg;
}