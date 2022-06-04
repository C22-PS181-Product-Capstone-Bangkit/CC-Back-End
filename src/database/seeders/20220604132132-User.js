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
    return queryInterface.bulkInsert("User", [
      {
        id: "user-1",
        idFriend: "MHCSL",
        name: "M Budi Anggara",
        email: "anggara.budi@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar1.jpg",
      },
      {
        id: "user-2",
        idFriend: "QADKU",
        name: "Ivan Leonard",
        email: "ocarinaoftime@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar2.jpg",
      },
      {
        id: "user-3",
        idFriend: "KLABG",
        name: "Faisal Suparmanto",
        email: "aigenerated@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar3.jpg",
      },
      {
        id: "user-4",
        idFriend: "YSSMZ",
        name: "Johann Fitzgerald",
        email: "johannrandom@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar4.jpg",
      },
      {
        id: "user-5",
        idFriend: "TIXOY",
        name: "Peony K Ruth",
        email: "peony1944@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar5.jpg",
      },
      {
        id: "user-6",
        idFriend: "XJJZE",
        name: "Rizki Dwi Syaifulrrahman",
        email: "xblazer@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar6.jpg",
      },
      {
        id: "user-7",
        idFriend: "FSWWB",
        name: "Hardi Gunawan",
        email: "damu.rahimah@agustina.info",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar7.jpg",
      },
      {
        id: "user-8",
        idFriend: "IHTVZ",
        name: "Cahya Habibi",
        email: "jasmin.puspita@utama.web.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar8.jpg",
      },
      {
        id: "user-9",
        idFriend: "BEXJB",
        name: "Prasetya Maryadi",
        email: "shania12@gmail.co.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar9.jpg",
      },
      {
        id: "user-10",
        idFriend: "MBGJP",
        name: "Dimaz Dabukke",
        email: "dutami@iswahyudi.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar10.jpg",
      },
      {
        id: "user-11",
        idFriend: "UHDWZ",
        name: "Caraka Waskita",
        email: "wahyudin.oliva@pertiwi.co",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar11.jpg",
      },
      {
        id: "user-12",
        idFriend: "BKDBB",
        name: "Daliono Widodo",
        email: "kadir.pudjiastuti@rahimah.web.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar12.jpg",
      },
      {
        id: "user-13",
        idFriend: "KLVZV",
        name: "Kasiran Hutagalung",
        email: "unjani93@purwanti.asia",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar13.jpg",
      },
      {
        id: "user-14",
        idFriend: "QIWQU",
        name: "Uda Widodo",
        email: "nugraha24@halim.tv",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar14.jpg",
      },
      {
        id: "user-15",
        idFriend: "LXHRK",
        name: "Daliman Rajasa",
        email: "cinthia.adriansyah@padmasari.net",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar15.jpg",
      },
      {
        id: "user-16",
        idFriend: "DFLED",
        name: "Widya Mandasari",
        email: "puspasari.galih@usamah.desa.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar16.jpg",
      },
      {
        id: "user-17",
        idFriend: "VFDXU",
        name: "Natalia Suartini",
        email: "dadap03@santoso.asia",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar17.jpg",
      },
      {
        id: "user-18",
        idFriend: "NSTPH",
        name: "Ella Anggraini",
        email: "qmaryati@nurdiyanti.name",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar18.jpg",
      },
      {
        id: "user-19",
        idFriend: "IEARS",
        name: "Jane Astuti",
        email: "halim.jaga@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar19.jpg",
      },
      {
        id: "user-20",
        idFriend: "CHUZV",
        name: "Pia Hariyah",
        email: "alika52@gmail.co.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar20.jpg",
      },
      {
        id: "user-21",
        idFriend: "IYGXC",
        name: "Amalia Wahyuni",
        email: "esamosir@hassanah.mil.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar21.jpg",
      },
      {
        id: "user-22",
        idFriend: "NSEPS",
        name: "Irma Lestari",
        email: "prayoga.bala@habibi.go.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar22.jpg",
      },
      {
        id: "user-23",
        idFriend: "ORYAJ",
        name: "Alika Fujiati",
        email: "ppurwanti@yahoo.co.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar23.jpg",
      },
      {
        id: "user-24",
        idFriend: "VZRSX",
        name: "Eva Safitri",
        email: "kacung.andriani@rahimah.web.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar24.jpg",
      },
      {
        id: "user-25",
        idFriend: "OSXVD",
        name: "Queen Uyainah",
        email: "ika13@ardianto.my.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar25.jpg",
      },
      {
        id: "user-26",
        idFriend: "OFWVK",
        name: "Vinsen Prasetya",
        email: "qpuspasari@rajasa.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar26.jpg",
      },
      {
        id: "user-27",
        idFriend: "UUSPO",
        name: "Hafshah Nasyidah",
        email: "jarwi91@yahoo.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar27.jpg",
      },
      {
        id: "user-28",
        idFriend: "NUWSH",
        name: "Melinda Yulianti",
        email: "jaka.salahudin@adriansyah.asia",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar28.jpg",
      },
      {
        id: "user-29",
        idFriend: "AGGIC",
        name: "Yoga Budiman",
        email: "usyi.winarsih@yahoo.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar29.jpg",
      },
      {
        id: "user-30",
        idFriend: "SQBUY",
        name: "Salwa Maryati",
        email: "lidya.hartati@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar30.jpg",
      },
      {
        id: "user-31",
        idFriend: "DADAW",
        name: "Vanesa Namaga",
        email: "icha.wibowo@firmansyah.name",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar31.jpg",
      },
      {
        id: "user-32",
        idFriend: "NMXFS",
        name: "Jaswadi Iswahyudi",
        email: "wahyuni.setya@prakasa.go.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar32.jpg",
      },
      {
        id: "user-33",
        idFriend: "CEFJG",
        name: "Bambang Pangestu",
        email: "ozy.safitri@pradipta.in",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar33.jpg",
      },
      {
        id: "user-34",
        idFriend: "XOHMJ",
        name: "Kasiran Zulkarnain",
        email: "nwijayanti@oktaviani.co.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar34.jpg",
      },
      {
        id: "user-35",
        idFriend: "DHAPC",
        name: "Okta Prakasa",
        email: "mnatsir@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar35.jpg",
      },
      {
        id: "user-36",
        idFriend: "GLPEK",
        name: "Hari Suwarno",
        email: "kfirgantoro@usada.co",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar36.jpg",
      },
      {
        id: "user-37",
        idFriend: "AKPAD",
        name: "Bakianto Saefullah",
        email: "kiandra.pradipta@hutapea.info",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar37.jpg",
      },
      {
        id: "user-38",
        idFriend: "LWZTD",
        name: "Lega Wijaya",
        email: "rama.hassanah@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar38.jpg",
      },
      {
        id: "user-39",
        idFriend: "RNWBK",
        name: "Maryadi Pangestu",
        email: "ifa13@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar39.jpg",
      },
      {
        id: "user-40",
        idFriend: "IJTGR",
        name: "Kajen Winarno",
        email: "virman97@pangestu.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar40.jpg",
      },
      {
        id: "user-41",
        idFriend: "GFPWL",
        name: "Cornelia Palastri",
        email: "onugroho@usada.desa.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar41.jpg",
      },
      {
        id: "user-42",
        idFriend: "TXINX",
        name: "Cindy Riyanti",
        email: "dimaz.zulaika@hidayanto.ac.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar42.jpg",
      },
      {
        id: "user-43",
        idFriend: "YSSGE",
        name: "Intan Kuswandari",
        email: "paiman70@gmail.co.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar43.jpg",
      },
      {
        id: "user-44",
        idFriend: "TJKLY",
        name: "Fitriani Mayasari",
        email: "oni.maheswara@pradipta.co",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar44.jpg",
      },
      {
        id: "user-45",
        idFriend: "OEGDI",
        name: "Jasmin Lestari",
        email: "wasita.gambira@yahoo.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar45.jpg",
      },
      {
        id: "user-46",
        idFriend: "VZEJU",
        name: "Maimunah Pratiwi",
        email: "hidayat.tiara@nugroho.asia",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar46.jpg",
      },
      {
        id: "user-47",
        idFriend: "QMICE",
        name: "Zelaya Pudjiastuti",
        email: "hari.padmasari@hutasoit.org",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar47.jpg",
      },
      {
        id: "user-48",
        idFriend: "NQZRH",
        name: "Putri Permata",
        email: "gandi74@simbolon.net",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar48.jpg",
      },
      {
        id: "user-49",
        idFriend: "IOKSF",
        name: "Febi Halimah",
        email: "xsihotang@yahoo.co.id",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar49.jpg",
      },
      {
        id: "user-50",
        idFriend: "FCQCK",
        name: "Devi Rahayu",
        email: "bsamosir@gmail.com",
        password: "123",
        profilePic:
          "https://storage.googleapis.com/cemil-profile-user/avatar50.jpg",
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
