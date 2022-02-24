module.exports = (sequelize,DataTypes)=>{
    const MbaProg = sequelize.define("mbaProg",{
        courseId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        courseName:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return MbaProg;
}