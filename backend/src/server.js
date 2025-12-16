const express = require('express');
const cors = require('cors');
require('dotenv').config();
var morgan = require('morgan')

const { sequelize } = require('./models');
const eventRoutes = require('./routes/eventRoutes');
const artistRoutes = require('./routes/artistRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Grande Soirée Gnawa API' });
});

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('✅ Database synced');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Database sync error:', err);
});