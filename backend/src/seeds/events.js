const EventInfo = require("../models/EventInfo.js");

async function seedEvents() {
  await EventInfo.bulkCreate([
    {
      title: "La Grande Soirée Gnawa 2025",
      description: "A magical night celebrating traditional and modern Gnawa music in Agadir.",
      date: "2025-07-12",
      location: "Place Al Amal - Agadir",
      bannerUrl: "https://example.com/banners/gnawa-night-1.jpg",
      ticketPrice: 150.0
    },
    
  ]);

  console.log("EventInfo seeded successfully!");
}

seedEvents();

module.exports = seedEvents;
