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
    {
      title: "Gnawa Fusion Live",
      description: "A concert mixing classic Gnawa rhythms with contemporary fusion.",
      date: "2025-07-15",
      location: "Théâtre de Verdure - Agadir",
      bannerUrl: "https://example.com/banners/gnawa-fusion.jpg",
      ticketPrice: 120.0
    },
    {
      title: "Nuit des Maalems",
      description: "Traditional Gnawa masters performing spiritual and rhythmic pieces.",
      date: "2025-08-01",
      location: "Corniche d’Agadir - Scène Ouverte",
      bannerUrl: "https://example.com/banners/maalem-night.jpg",
      ticketPrice: 0.0
    },
    {
      title: "Soirée Lila Traditionnelle",
      description: "A full lila ceremony with authentic Gnawa rituals.",
      date: "2025-08-05",
      location: "Complexe Culturel Abdelkrim El Khattabi - Agadir",
      bannerUrl: "https://example.com/banners/lila.jpg",
      ticketPrice: 80.0
    },
    {
      title: "Gnawa Heritage Show",
      description: "A showcase honoring the spiritual and musical legacy of Gnawa.",
      date: "2025-08-10",
      location: "La Médina Coco Polizzi - Agadir",
      bannerUrl: "https://example.com/banners/heritage.jpg",
      ticketPrice: 100.0
    },
    {
      title: "Young Gnawa Talents",
      description: "A concert featuring the new generation of Gnawa artists.",
      date: "2025-09-01",
      location: "Institut Français d’Agadir",
      bannerUrl: "https://example.com/banners/young-talents.jpg",
      ticketPrice: 60.0
    },
    {
      title: "Gnawa Fashion & Music Night",
      description: "A mix of modern Gnawa fashion and musical performances.",
      date: "2025-09-10",
      location: "Salle Brahim Radi - Agadir",
      bannerUrl: "https://example.com/banners/fashion-music.jpg",
      ticketPrice: 90.0
    },
    {
      title: "World Music & Gnawa",
      description: "International artists joining Gnawa musicians for a world music fusion.",
      date: "2025-09-12",
      location: "Palais des Congrès - Agadir",
      bannerUrl: "https://example.com/banners/world-gnawa.jpg",
      ticketPrice: 200.0
    },
    {
      title: "Gnawa by the Marina",
      description: "An open-air concert at the beautiful Agadir Marina.",
      date: "2025-10-04",
      location: "Marina d’Agadir",
      bannerUrl: "https://example.com/banners/marina.jpg",
      ticketPrice: 70.0
    },
    {
      title: "Closing Night – Gnawa Stars",
      description: "The final night with some of the biggest Gnawa performers.",
      date: "2025-10-20",
      location: "Théâtre de Verdure - Agadir",
      bannerUrl: "https://example.com/banners/closing-night.jpg",
      ticketPrice: 180.0
    }
  ]);

  console.log("EventInfo seeded successfully!");
}

seedEvents();

module.exports = seedEvents;
