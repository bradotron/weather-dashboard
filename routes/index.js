var express = require("express");
var router = express.Router();

var postDataRouter = require("./POST/postDataRouter");

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get("/", (req, res) => {
  console.log(
    "trying to send react page: " +
      path.join(__dirname + "/client/build/index.html")
  );
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

router.use(postDataRouter);

module.exports = router;
