const router = require('express').Router();

//this imports all of the thought controller methods
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');


//with the thought controller methods imported we can now create the routes
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
