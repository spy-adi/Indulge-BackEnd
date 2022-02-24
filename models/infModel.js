module.exports = (sequelize,DataTypes)=>{
    const Inf = sequelize.define("inf",{
        duration:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        intern_designation:{
            type:DataTypes.TEXT
        },
        intern_description:{
            type:DataTypes.TEXT
        },
        mode:{
            type:DataTypes.ENUM,
            values:["Physical","Virtual"]
        },
        place_of_posting:{
            type:DataTypes.TEXT
        },
        graduation_year:{
            type:DataTypes.TEXT
        }
    });
    return Inf;
}