var express = require("express");
var router = express.Router();

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.post("/data", (req, res) => {
  console.log(req.body);
  res.status(200).send("Data Received");
});

module.exports = router;
