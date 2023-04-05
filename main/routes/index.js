// const router = require('express').Router();
// const thoughtRoutes = require('./api/thoughtRoutes');
// const userRoutes = require('./api/userRoutes');

// router.use('/users', userRoutes);
// router.use('/thoughts', thoughtRoutes);

// module.exports = router;




// router.use((req, res) => res.send('Wrong route!'));

// module.exports = router;

const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

