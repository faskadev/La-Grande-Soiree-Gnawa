const { Booking, EventInfo } = require('../models');
const crypto = require('crypto');

const generateConfirmationCode = () => {
  return crypto.randomBytes(4).toString('hex').toUpperCase();
};

exports.createBooking = async (req, res) => {
  try {
    const { fullName, email, phone, ticketCount } = req.body;
    
    const event = await EventInfo.findOne();
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const totalPrice = parseFloat(event.ticketPrice) * ticketCount;
    const confirmationCode = generateConfirmationCode();

    const booking = await Booking.create({
      fullName,
      email,
      phone,
      ticketCount,
      totalPrice,
      confirmationCode
    });

    const out = booking.toJSON ? booking.toJSON() : booking;
    out.code = out.confirmationCode;
    res.status(201).json(out);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookingByCode = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      where: { confirmationCode: req.params.code }
    });
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookingsByEmail = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { email: req.params.email },
      order: [['createdAt', 'DESC']]
    });
    
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};