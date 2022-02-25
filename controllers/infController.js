const db = require('../models');
const Inf = db.inf;

// create

const addInf = async(req,res)=>{
    try {
        const inf = await Inf.create(req.body);
            res.status(200).json(inf);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all Inf

const getAllInf = async(req,res)=>{
    try {
        const inf = await Inf.findAll({});
        res.status(200).json(inf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single Inf

const getOneInf = async(req,res)=>{
    try {
        let id = req.params.id;
        const inf = await Inf.findOne({where:{id:id}});
        res.status(200).json(inf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update Inf

const updateInf = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedInf = await Inf.update(req.body,{where:{id:id}});
        res.status(200).json(updatedInf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete Inf

const deleteInf = async(req,res)=>{
    try {
        let id = req.params.id;
        await Inf.destroy({where:{id:id}});
        res.status(200).json("inf deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addInf,
    getAllInf,
    getOneInf,
    updateInf,
    deleteInf
}

