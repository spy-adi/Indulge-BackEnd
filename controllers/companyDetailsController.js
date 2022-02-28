const db = require('../models');
const CompanyDetails = db.companyDetails;

// create

const addCompanyDetails = async(req,res)=>{
    try {
        const companyDetails = await CompanyDetails.create(req.body);
            res.status(200).json(companyDetails);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all CompanyDetails

const getAllCompanyDetails = async(req,res)=>{
    try {
        const companyDetails = await CompanyDetails.findAll({});
        res.status(200).json(companyDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single CompanyDetails

const getOneCompanyDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const companyDetails = await CompanyDetails.findOne({where:{id:id}});
        res.status(200).json(companyDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update CompanyDetails

const updateCompanyDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedCompanyDetails = await CompanyDetails.update(req.body,{where:{id:id}});
        res.status(200).json(updatedCompanyDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete CompanyDetails

const deleteCompanyDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        await CompanyDetails.destroy({where:{id:id}});
        res.status(200).json("companyDetails deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addCompanyDetails,
    getAllCompanyDetails,
    getOneCompanyDetails,
    updateCompanyDetails,
    deleteCompanyDetails
}

