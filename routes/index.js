var express = require('express');
var router = express.Router();
var apiRouter = require('./apiRouter');

router.use('/api', apiRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = router;
