const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.createBooking);
router.get('/code/:code', bookingController.getBookingByCode);
router.get('/email/:email', bookingController.getBookingsByEmail);

module.exports = router;