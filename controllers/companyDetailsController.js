require("dotenv").config();
const db = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const CompanyDetails = db.companyDetails;

// create
const addCompanyDetails = async(req,res)=>{
    try {
        let company = CompanyDetails.findOne({where:{cemail:req.body.cemail}});
        if(company) return res.status(400).json({msg:"User already exists"});
        const salt = bcrypt.genSalt(10);
        let password = bcrypt.hash(req.body.password,salt);
        company = await CompanyDetails.create({...req.body,password});
        const payload = {
            company:{
                id:company.cid
            }
        }
        jwt.sign(payload,process.env.SECRET,{expiresIn:3600},(err,token)=>{
            if(err) throw err;
            res.json({token});
        })

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
        const companyDetails = await CompanyDetails.findOne({where:{cid:id}});
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
        const updatedCompanyDetails = await CompanyDetails.update(req.body,{where:{cid:id}});
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
        await CompanyDetails.destroy({where:{cid:id}});
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

