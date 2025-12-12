const Artist = require("../models/Artist.js");

async function seedArtists() {
  await Artist.bulkCreate([
    {
      name: "Mahmoud Guinia",
      bio: "Legendary Maalem from Essaouira known for his deep Gnawa tradition.",
      photoUrl: "https://tinyurl.com/3h7yfu23",
      performanceTime: "19:00",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hamid Kasri",
      bio: "One of the most popular modern Gnawa masters blending fusion and tradition.",
      photoUrl: "https://tinyurl.com/yhzwrt5x",
      performanceTime: "19:30",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hassan Hakmoun",
      bio: "Maalem famous internationally for his American-Gnawa fusion.",
      photoUrl: "https://tinyurl.com/hrn3awh6",
      performanceTime: "20:00",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Abdelkebir Merchan",
      bio: "Known for his strong spiritual presence during lila ceremonies.",
      photoUrl: "https://tinyurl.com/mt7k7atp",
      performanceTime: "20:30",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Brahim El Makhfi",
      bio: "Gnawa musician from Marrakech with a unique qraqeb style.",
      photoUrl: "https://tinyurl.com/b7kumn48",
      performanceTime: "21:00",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Driss Benjelloun",
      bio: "Young rising artist representing modern Gnawa fashion movement.",
      photoUrl: "https://tinyurl.com/yberd4ze",
      performanceTime: "21:30",
      genre: "Gnawa Fusion",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Yassine Touzani",
      bio: "Combines traditional guembri with electronic music.",
      photoUrl: "https://tinyurl.com/yc264zrk",
      performanceTime: "22:00",
      genre: "Gnawa Electronic",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Saad Ait Lahcen",
      bio: "Classic Gnawa player known for his mastery of rhythms.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "22:30",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Othman Tazi",
      bio: "Performer mixing African and Moroccan Gnawa elements.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "23:00",
      genre: "Gnawa Fusion",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Redouane Amrani",
      bio: "Traditionalist artist keeping old Essaouira style alive.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "23:30",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ismail Berrada",
      bio: "Known for strong vocals during derdeba ceremonies.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "00:00",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Imad Fellah",
      bio: "Fusion artist mixing Gnawa with jazz and world music.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "00:30",
      genre: "Gnawa Fusion",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Khalid Moujahid",
      bio: "Expert qraqeb player famous in Agadir’s festival scene.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "01:00",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Abdelali El Ghazi",
      bio: "Traditional guembri master performing in Moroccan lilas.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "01:30",
      genre: "Gnawa",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Youssef Fassi",
      bio: "Modern Gnawa performer focusing on artistic fashion visuals.",
      photoUrl: "https://tinyurl.com/4eue77br",
      performanceTime: "02:00",
      genre: "Gnawa Fusion",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  console.log("Artists seeded successfully!");
}

seedArtists();

module.exports = seedArtists;
