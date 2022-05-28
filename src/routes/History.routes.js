const express = require('express');
const historyController = require('../controllers/History.controller');
const validateToken = require('../libraries/Auth')
const router = express.Router();

router.get("/", historyController.getHistory);
router.get("/:id", historyController.getHistoryDetail);
router.delete("/:id", validateToken, historyController.deleteHistory);
router.put("/:id", validateToken, historyController.editHistory);
router.post("/", validateToken, historyController.postHistory);

module.exports = router;