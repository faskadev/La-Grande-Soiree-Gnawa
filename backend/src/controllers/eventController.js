const { EventInfo } = require('../models');

exports.getEventInfo = async (req, res) => {
  try {
    const event = await EventInfo.findOne();
    if (!event) {
      return res.status(404).json({ message: 'Event info not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};