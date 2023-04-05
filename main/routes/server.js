// const router = require('express').Router();
// const apiRoutes = require('.');

// router.use('/api', apiRoutes);


// router.use((req, res) => res.send('Wrong route!'));



// module.exports = router;


const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});