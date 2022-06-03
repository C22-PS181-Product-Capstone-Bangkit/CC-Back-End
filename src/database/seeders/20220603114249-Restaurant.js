"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Restaurant", [
      {
        id: "resto-1",
        name: "Atmosphere Resort Cafe, Bandung",
        category: "Western, Asian",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/atmosphere1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/atmosphere2.png",
        location: "Jl. Lengkong Besar No. 97, Lengkong, Bandung",
        openHour: "Mon-Fri, Sun (11:00 - 24:00 WIB)",
        price: "Rp 250.000 / 2 person",
        contact: "62224262815",
      },
      {
        id: "resto-2",
        name: "Braga Permai Resto, Bandung",
        category: "Indonesian, Asian, Western",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/braga1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/braga2.png",
        location: "Jl. Braga No. 58, Braga, Bandung",
        openHour: "Mon-Sun (09:00 - 24:00 WIB)",
        price: "Rp 150.000 / 2 person",
        contact: "62224233778",
      },
      {
        id: "resto-3",
        name: "Cafe Halaman, Bandung",
        category: "Indonesian, Asian, Western",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/cafe-halaman1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/cafe-halaman2.png",
        location:
          "Paris Van Java, Resort Level, Jl. Sukajadi No. 131-139, Sukajadi, Bandung",
        openHour: "Mon-Sun (09:00 – 01:00 WIB)",
        price: "Rp 160.000 / 2 person",
        contact: "62222512350",
      },
      {
        id: "resto-4",
        name: "Dusun Bambu, Bandung",
        category: "Sundanese, Indonesian",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/dusun-bambu1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/dusun-bambu2.png",
        location:
          "Dusun Bambu, Jl. Kolonel Masturi KM 11, Sersan Bajuri, Bandung",
        openHour: "Mon-Sun (00:00 – 20:00 WIB)",
        price: "Rp 300.000 / 2 person",
        contact: "622282782020",
      },
      {
        id: "resto-5",
        name: "Eastern, Bandung",
        category: "Chinese",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/eastern1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/eastern2.png",
        location:
          "Istana Plaza, Lantai Ground, Jl. Pasirkaliki No. 121-123, Cicendo, Bandung",
        openHour: "Mon-Sun (10:00 – 14:00 WIB, 18:00 – 22:00 WIB)",
        price: "Rp 200.000 / 2 person",
        contact: "62226046778",
      },
      {
        id: "resto-6",
        name: "Hummingbird Eatery, Bandung",
        category: "Indonesian, Western, Italian, American, Bakery",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/hummingbird1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/hummingbird2.png",
        location: "Jl. Progo No. 14, Riau, Bandung",
        openHour: "Mon-Sun (07:00 – 23:00 WIB)",
        price: "Rp 200.000 / 2 person",
        contact: "62224212582",
      },
      {
        id: "resto-7",
        name: "Kampung Daun, Bandung",
        category: "Indonesian, Sundanese",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/kampung-daun1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/kampung-daun2.png",
        location: "Jl. Sersan Bajuri No. 88, Sersan Bajuri, Bandung",
        openHour: "Mon-Sun (10:00 – 22:00 WIB)",
        price: "Rp 250.000 / 2 person",
        contact: "62222787915",
      },
      {
        id: "resto-8",
        name: "Karnivor, Bandung",
        category: "Western, Grill",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/karnivor1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/karnivor2.png",
        location: "Jl. L.L.R.E. Martadinata No. 127, Riau, Bandung",
        openHour: "Mon-Sun (11:00 – 21:00 WIB)",
        price: "Rp 250.000 / 2 person",
        contact: "62227103111",
      },
      {
        id: "resto-9",
        name: "Maja House, Bandung",
        category: "Western",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/maja-house1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/maja-house2.png",
        location: "Jl. Sersan Bajuri No. 72, Sersan Bajuri, Bandung",
        openHour: "Mon-Sun (01:00 – 23:00 WIB, 00:00 – 02:00 WIB)",
        price: "Rp 200.000 / 2 person",
        contact: "62222788196",
      },
      {
        id: "resto-10",
        name: "Miss Bee Providore, Bandung  ",
        category: "Asian, Western",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/miss-bee1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/miss-bee2.png",
        location: "Jl. Rancabentang No. 11A, Ciumbuleuit, Bandung",
        openHour: "Mon-Sun (07:00 – 23:00 WIB)",
        price: "Rp 150.000 / 2 person",
        contact: "62222033613",
      },
      {
        id: "resto-11",
        name: "Raja Rasa, Bandung ",
        category: "Sundanese, Seafood, Chinese",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/raja-rasa1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/raja-rasa2.png",
        location: "Jl. Tubagus Ismail Raya No. 15, Dago, Bandung",
        openHour: "Mon-Sun (13:00 – 23:00 WIB)",
        price: "Rp 100.000 / 2 person",
        contact: "6281289176666",
      },
      {
        id: "resto-12",
        name: "Sushi Tei, Bandung",
        category: "Japanese, Sushi",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/sushi-tei1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/sushi-tei2.png",
        location:
          "Trans Studio Mall, Lantai Ground, Jl. Jendral Gatot Subroto No. 289, Buahbatu, Bandung",
        openHour: "Mon-Sun (10:00 – 22:00 WIB)",
        price: "Rp 250.000 / 2 person",
        contact: "622291092229",
      },
      {
        id: "resto-13",
        name: "The Peak, Bandung ",
        category: "Western, Grill",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/peak1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/peak2.png",
        location:
          "The Peak Resort, Jl. Desa Karyawangi Ciwaruga No.338, Sersan Bajuri, Bandung",
        openHour: "Mon-Sun (09:00 – 24:00 WIB)",
        price: "Rp 600.000 / 2 person",
        contact: "62222700759",
      },
      {
        id: "resto-14",
        name: "The Stone Cafe, Bandung ",
        category: "Western, Asian, Indonesian",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/stone-cafe1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/stone-cafe2.png",
        location: "Jl. Rancakendal Luhur No. 5, Dago Pakar, Bandung",
        openHour: "Mon-Sun (11:00 – 23:00 WIB)",
        price: "Rp 300.000 / 2 person",
        contact: "62222500577",
      },
      {
        id: "resto-15",
        name: "The Valley, Bandung",
        category: "Western, Asian",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/valley1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/valley2.png",
        location:
          "The Valley, Jl. Lembah Pakar Timur No. 28, Dago Pakar, Bandung",
        openHour: "Mon-Sun (11:00 – 23:00 WIB)",
        price: "Rp 300.000 / 2 person",
        contact: "62222511450",
      },
      {
        id: "resto-16",
        name: "Tizi's, Bandung",
        category: "Western, Asian",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/tizi1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/tizi2.png",
        location: "Jl. Kidang Pananjung No. 3, Dago, Bandung",
        openHour: "Mon-Sun (10:00 – 24:00 WIB)",
        price: "Rp 200.000 / 2 person",
        contact: "62222504963",
      },
      {
        id: "resto-17",
        name: "Two Hands Full, Bandung ",
        category: "Coffee, Cafe",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/two-hands1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/two-hands2.png",
        location: "Ir. H. Juanda No. 113, Dago, Bandung",
        openHour: "Mon-Sun (08:00 – 22:00 WIB)",
        price: "Rp 100.000 / 2 person",
        contact: null,
      },
      {
        id: "resto-18",
        name: "Warung Pasta, Bandung",
        category: "Italian",
        photoPlaces:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/warung-pasta1.png",
        profilePic:
          "https://storage.googleapis.com/cemil-c22-ps181/restaurant/warung-pasta2.png",
        location: "Jl. Ganesa No. 4, Dago, Bandung",
        openHour: "Mon-Sun (07:00 – 23:00 WIB)",
        price: "Rp 100.000 / 2 person",
        contact: "62222500416",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
