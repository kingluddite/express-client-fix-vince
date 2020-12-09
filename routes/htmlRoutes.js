const path = require("path");
const router = require("express").Router();

router.get("/find", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/find.html"));
});
router.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/add.html"));
});
// "/notes" responds with the notes.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = router;
