const express = require("express");
const router = express.Router();
const AssetController = require("../controller/AssetController");

router.get("/list", AssetController.list);
router.post("/add", AssetController.add);
router.delete("/delete", AssetController.delete);

module.exports = router;
