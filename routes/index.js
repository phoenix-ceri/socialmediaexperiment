const router = require('express').Router();
// Import all of the API routes from /api/index.js 
const apiRoutes = require('./api');

// adds the prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>Error 404 stuff not found</h1>');
});

module.exports = router;