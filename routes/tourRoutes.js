const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');

const {
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour,
    checkId,
    checkBody,
} = tourController;

router.param('id', checkId);

// Check body middleware

router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
