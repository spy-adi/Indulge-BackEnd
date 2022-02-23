module.exports = (sequelize,DataTypes)=>{
    const sample = sequelize.define("sampleModel",{
        name:{
            type:DataTypes.STRING
        }
    });
    return sample;
}