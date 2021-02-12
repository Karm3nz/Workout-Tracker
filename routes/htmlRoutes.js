// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

//route for exercise page (fitness tracker)
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
//route for stats page (dashboard)
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;