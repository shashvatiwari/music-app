const express = require("express");
const { addSong, getAllSongs } = require("../controllers/songController");

const router = express.Router();

router.post("/", addSong);
router.get("/", getAllSongs);

module.exports = router;
