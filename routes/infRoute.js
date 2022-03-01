const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addInf,
    getAllInf,
    getOneInf,
    updateInf,
    deleteInf
} = require("../controllers/infController");
// const auth = require("../middleware/auth")

router.get("/getAllInf",getAllInf);
router.get("/addInf",addInf);
router.get("/:id",getOneInf);
router.put("/:id",updateInf);
router.delete("/:id",deleteInf);

module.exports = router;