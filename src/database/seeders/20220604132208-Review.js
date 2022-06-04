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
    return queryInterface.bulkInsert("Review", [
      {
        id: "review-1",
        idRestaurant: "resto-1",
        idAccount: "user-14",
        description:
          "Biasanya untuk cari suasana indah hrs ke daerah Dago dll.. Ini tengah kota tapi suasana ya ga kalah cantik.. Saya suka makanannya.. Suasana nya.. Rasanya.. Harga emang aga mahal tapi untuk kepuasan yg didapat.. Relaaaaa",
        rating: "4",
      },
      {
        id: "review-2",
        idRestaurant: "resto-1",
        idAccount: "user-1",
        description:
          "Yang menjadi point utama dari resto ini adalah penataan ruangan dan tamannya, walau areanya tidak terlalu luas untuk resort tetapi di atur dengan baik sehingga menjadi menarik dan cantikDuduk di dalam deket jendela udaranya masih sejuk.Steak Salmon dan sauce nya delicous.Begitu pula juice nya banyak pilihan..Ada musholla kecil yg cukup bersih.",
        rating: "5",
      },
      {
        id: "review-3",
        idRestaurant: "resto-1",
        idAccount: "user-9",
        description:
          "Lokasinya berada ditengah kota Bandung, Nuansanya romantis, ada live music, meskipun rasa makanan nya tidak istimewa.",
        rating: "4",
      },
      {
        id: "review-4",
        idRestaurant: "resto-1",
        idAccount: "user-3",
        description:
          "Datang dengan rombongan di sabtu malam minggu, venue sangat indah namun sayangnya pelayan tidak sigap dan beberapa order blm dibuat hingga kami bersiap pulang, yang menyebalkan adalah saat kami akan cancel order yg akan di take away TIDAK BOLEH dengan alasan sudah di proses SEDANGKAN saat bbrp order dine-in kami tidak diantar2 hingga kami mau pulang boleh di cancel krn kesalahan dari pihak restaurant,,, tidak fair dan sangat mengecewakan meskipun harga makanannya tidak murah juga... will not be back for sure :)",
        rating: "3",
      },
      {
        id: "review-5",
        idRestaurant: "resto-1",
        idAccount: "user-30",
        description:
          "tempatnya sangat bagus, pemandangannya super keren, perpaduan antara nuansa bandung dan bali, di bagian depan terdapat tempat makan dengan desain kursi dan meja berjejer rapi, sementara di bagian belakang terdapat saung-saung dengan pemandangan yang sangat bagus. ada live musicnya juga, cocok untuk romantic dinner. makanan yang ditawarkan yaitu perpaduan menu asia dan western, seperti steak, pasta, goulash, ada juga sop buntut, dll. saya memesan tenderloin steak australia, rasanya enak, dagingnya sangat lembut tetapi porsinya agak kecil. restaurant ini penuh pada malam minggu, yang menarik parkir disini ditawarkan dengan sistem vallet dengan membayar seikhlasnya.",
        rating: "5",
      },
      {
        id: "review-6",
        idRestaurant: "resto-1",
        idAccount: "user-32",
        description:
          "Senang makan di resstoran ini, banyak variasi menu yang ditawarkan. Mulai dari makanan sundaan hingga makanan eropaan. Mantap",
        rating: "5",
      },
      {
        id: "review-7",
        idRestaurant: "resto-1",
        idAccount: "user-16",
        description:
          "Cafe berlokasi di tengah kota, tempatnya cukup luas ,asik dan menyenangkan untuk berlama2 dengan sahabat.Kami memilih duduk di gazebo.Steaknya top, waktu itu kami pesan steak non local , rasanya enak dengan porsi sedang , harganya pun cukup mahal.Pelayanan standar.",
        rating: "5",
      },
      {
        id: "review-8",
        idRestaurant: "resto-1",
        idAccount: "user-8",
        description:
          "Pernah kesini sekitar tahun 2007, dan saya sangat terkesan.. Ketika diajak kembali, saya langsung tau akan memesan apa.. Steak!Tiba di cafe, saya masih terkesan dan terpukau dengan interios cafe yang cozy dan terlihat mewah. Dengan konsep outdoor dan romatis. Sayang sekali selalu kesini karena acara kantor.Pilihan steak saya Tenderloin Cafe de Paris. Sesuai dengan gambar di menu, makanan yang disajikan sesuai. Rasanya sangat enak. sesuai dengan kenangan tahun 2007 dulu...Semoga bisa kesini lagi....",
        rating: "5",
      },
      {
        id: "review-9",
        idRestaurant: "resto-1",
        idAccount: "user-5",
        description:
          "resto dengan taman air, lesehan, udara terbuka. Nyaman buat makan siang. Dan sepertinya berasa romantis untuk makan malam. Harga tergolong mahal, tapi porsinya besar untuk makanan yg saya pesan, yaitu bebek betutu dan bebek bukit tinggi. Kaya bumbu dan rasa. Sambal juga mantap. Jadi meski mahal, saya tidak kecewa.",
        rating: "4",
      },
      {
        id: "review-10",
        idRestaurant: "resto-1",
        idAccount: "user-36",
        description:
          "Makanan cukup beragam dari chinese food, eropean dan indonesian food. Biasa saya pesan chicken cordon blue dengan keju cair yang enak. Duduk di saung2 melihat kolam ikan diiringi live music memberikan suasana yang relaks",
        rating: "5",
      },
      {
        id: "review-11",
        idRestaurant: "resto-1",
        idAccount: "user-2",
        description:
          "Restoran ini cukup besar dan kita dapat memilih tempat di bagian paling bawah dekat panggung sering ada pertujukan musik di malam hari, jika naik keatas roof dapat menikmati pemandangan dan dibawah terdapat semacam pendopo yang sisinya terdapat kolam-kolam. Jika malam hari, lilin dan lampu kecil dipasang yang membuat suasana romantis. Cocok datang bersama pasangan. Makananya pun enak dan harganya worth it.",
        rating: "5",
      },
      {
        id: "review-12",
        idRestaurant: "resto-1",
        idAccount: "user-45",
        description:
          "atmosphere merupakan tempat yang tepat jika anda ingin makan malam baik bersama teman maupun kelurga, bahkan cocok untuk keluarga besar. Pilihan makanan nya lebih ke western dengan suasana yang sangat nyaman dan menyenangkan, jika ingin kesana saat weekend anda sepertinya perlu melakukan reservasi untuk memastikan kebagian tempat, seringkali ada live music juga",
        rating: "5",
      },
      {
        id: "review-13",
        idRestaurant: "resto-1",
        idAccount: "user-29",
        description:
          "Cafe ini cukup unik.. Dari pintu masuk terlihat seperti cafe biasa saja. Akan tetapi setelah masuk ke dalam suasananya berbeda sekali. Tersedia gazebo dalam ukuran besar sehingga utk hang out rame-rame juga muat. Trus ada juga meja kursi disamping kolam buatan yg dikelilingi tanaman hijau. Saya suka berada disini.. Hanya saja makanan nya kurang menurutku.. Menu makanan sangat banyak tetapi rasa dari tiap makanan rada kurang. Sayang sekali...",
        rating: "5",
      },
      {
        id: "review-14",
        idRestaurant: "resto-1",
        idAccount: "user-31",
        description:
          "Saya sangat suka dengan soup yang mereka sediakan, enak dan gurih. Harga makanan rata-rata berkisar IDR 90k perpax untuk makan dan minuman.",
        rating: "5",
      },
      {
        id: "review-15",
        idRestaurant: "resto-1",
        idAccount: "user-26",
        description:
          "Cahaya lilin, saung-saung yg berjauhan, dan kolam ikan di tengah memberikan suasana romantis bagi pasangan. Untuk makanan dan minuman sendiri, rasanya lumayan di lidah.",
        rating: "5",
      },
      {
        id: "review-16",
        idRestaurant: "resto-1",
        idAccount: "user-6",
        description:
          "Cafe sekaligus restaurant ini viewnya sangat bagus. Cocok utk para pasangan yg mau candle light dinner. Tp utk makana malam sama kluarga jg sangat direkomendasikan. Bandung memang banyak punya tempat yg bagus dan good view. Secara harga juga sesuai dgn view yg didapat",
        rating: "5",
      },
      {
        id: "review-17",
        idRestaurant: "resto-2",
        idAccount: "user-8",
        description:
          'Braga Permai merupakan restoran yang masih menjadi primadona di Jalan Braga. Suasana di sana memang juara. Tampak luar saja kita sudah bisa melihat suasana "Jadoel" nya Bandung di masa zaman Kolonialisme. Ada sisi luar dan sisi dalam. Sisi luar untuk smoking dan dalam non smoking. Tapi saya menyarankan untuk dapat duduk di sisi luar meskipun anda tidak merokok,krn tidak tercium bau asap rokok krn outdoor. Makan di bawah payung2 merah dan besar, bercahaya temaram dari lampu jalan Braga dan semilir angin sejuk Bandung di malam hari, begitu mengesankan. Live musik ada setiap hari, anda bisa request lagu2 kesukaan anda (bandnya juga bagus2 selalu). Untuk makanannya banyak pilihannya, menu Eropa, Chinese, dan Indonesia. Terakhir saya ke sana Agustus 2015 saya mencoba fillet Ikan Kakap (saya lupa nama menunya) piring besar, isi juga besar. 2 slice ikan kakap tebal dilumuri saus cream dan dimakan dengan mash potato dan salad. Saya jamin. Anda kenyang dgn 1 menu. Teman saya pesan ikan gurame goreng dan 1 nasi putih. Ikan gurame ada di bagian fish dan kami membayangkan ikannya di slice dan nasinya hanya 1 porsi yg sudah dicetak dgn mangkok.ternyata bayangan kami itu pupus, yang datang 1 ekor gurame besar dengan 1 piring besar isi penuh nasi putih yg bisa dimakan untuk 3 orang. Saat makana datang kami terbahak2 karena tak menyangka nasinya sebanyak itu. Pizza nya juga enak. Harga makanan di sini, TAK SEBANDING dengan besar dan rasanya. Rasa enak, porsi besar, suasana juara tapi harga MURAH. 1 orang makan tidak sampai 100rb. Jangan lupa coba ice cream nya yg populer itu. Favorit saya ice cream rum and raisin. Rumnya benar2 dengan rum jamaica asli yang dituangkan di atas ice cream raisin. Mantab untuk dessert yang dingin namun menghangatkan di tengah sejuknya Paris Van Java.',
        rating: "5",
      },
      {
        id: "review-18",
        idRestaurant: "resto-2",
        idAccount: "user-49",
        description:
          "Saya datang untuk pertama kalinya ke restoran ini,nuasanya nyaman, friendly, dan staffnya berpakaian jaman dulu.kami memesan nasi goreng, sop buntut, dan ice cream. Semuanya enak tetapi datang cukup lama dari jarak memesan hingga makanan datang.tempat ini tepat bagi anda yg ingin melihat kesibukan di jalan braga dengan menu yang mengenyangkan.",
        rating: "4",
      },
      {
        id: "review-19",
        idRestaurant: "resto-2",
        idAccount: "user-32",
        description:
          "Terpengaruh karena rekomendasi media mengenai suasana di restoran ini, jadinya saya dan keluarga memilih untuk menghabiskan waktu di sore hari di Braga Permai. Dan ternyata emang enak apalagi jika anda memilih tempat duduk di luar. Anda bisa nostalgia dan melihat Bandung tempoe doeloe. Saat itu, mereka memberikan free snack berupa cheese stick dan garlic bread, yang menurut saya agak keras. Kami memesan bitter ballen, ice cream dan minuman. Bitter ballen nya enak, lainnya tidak spesial. Harganya sedikit mahal but i bought the ambience. Pelayanannya cukup cepat. Anda harus bersabar jika datang pada saat malam minggu karena banyak peminat sehingga harus mengantri dan masuk waiting list.",
        rating: "4",
      },
      {
        id: "review-20",
        idRestaurant: "resto-2",
        idAccount: "user-10",
        description:
          "Braga permai cafe . Ini cafe jaman dulu . Tiap hari ramai banyak di kunjungi para tamu. Makan dan minuman umum nya okok lahhh. Hanya bangunan tua .",
        rating: "4",
      },
      {
        id: "review-21",
        idRestaurant: "resto-2",
        idAccount: "user-46",
        description:
          "Lokasi restoran ini di jalan Braga, tidak jauh dari Braga Citywalk. Jika anda penggemar kuliner dan rasa serta suasana merupakan prioritas...maka ini restoran yang tepat bagi anda. Pilihan menu nasi goreng spesial dapt anda pertimbangkan.",
        rating: "5",
      },
      {
        id: "review-22",
        idRestaurant: "resto-2",
        idAccount: "user-25",
        description:
          "jika kebetulan anda sedang berjalan jalan ke jalan braga, jangan lupa untuk mampir ke braga permai ini. yang terkenal dari braga permai ini adalah eskrim nya yang khas.. terletak di depan pintu masuk braga city walk, anda bisa menikmati wisata kota anda dengan puas disini.",
        rating: "5",
      },
      {
        id: "review-23",
        idRestaurant: "resto-2",
        idAccount: "user-39",
        description:
          "Pizzanya enaaaaakkk banget.. Nasi gorengnya juga.. tempatnya nyaman buat ngobrol.. dapet free appetizer pula.. pengen nyobain cakenya tapi ga keburu.. maybe next time..",
        rating: "5",
      },
      {
        id: "review-24",
        idRestaurant: "resto-2",
        idAccount: "user-6",
        description:
          "Salah satu destinasi keluarga ketika hang out ialah Braga Permai. Pilhan menunya banyak, khas dan sesuai dengan selera. Yang harus dipertahankan ialah layanan air putih gratis yang membuat harga menjadi kompetitif. Favorit terbaik ialah zupa-zupa",
        rating: "5",
      },
      {
        id: "review-25",
        idRestaurant: "resto-2",
        idAccount: "user-1",
        description:
          "Salah satu resto favorit saya dibandung,menu dan dekor interior yg masih bercitarasa tempo dulu,rasa makanan yg tidak berubah,makanan favorit saya adalah sop buntut dan kue yg berwarna putih,lupa namanya,jgn lupa kl berkunjung kesana , ambil tempat favorit diteras sambil melihat orang lalu lalang sepanjang jalan braga",
        rating: "5",
      },
      {
        id: "review-26",
        idRestaurant: "resto-2",
        idAccount: "user-4",
        description:
          "Sangat dekat dengan Braga Citywalk, tapi parkir di tepi jalan namun ad valet. Tempatnya strategis, banyak makanan lainnya. Meja makan banyak, suasana enak di tengah keramaian orang berjalan kaki di Braga. Pelayannya ramah, makanannya murah untuk western, pizzanya kurang dr 100rb semua, harga minuman juga murah, dan untuk cocktail diskon 50% d atas 6 p.m.Tempat yang nyaman untuk duduk2, atau makan malam atau bahkan cuman ngemil.",
        rating: "5",
      },
      {
        id: "review-27",
        idRestaurant: "resto-2",
        idAccount: "user-19",
        description:
          "tempat yang cocok untuk sekedar ngopi - ngopi ataupun bercanda gurau bersama keluarga atau teman. harga kopi yang murah",
        rating: "4",
      },
      {
        id: "review-28",
        idRestaurant: "resto-2",
        idAccount: "user-38",
        description:
          "Harga makanan disini relatif cukup mahal, namun porsi yang ditawarkan memang besar, sehingga untuk 1 porsi makanan dapat share dengan 2 orang. Di restaurant ini disediakan live music dengan suasana yang ramai dan mayoritas dikunjungi keluarga atau bepergian dengan teman.",
        rating: "4",
      },
      {
        id: "review-29",
        idRestaurant: "resto-2",
        idAccount: "user-5",
        description:
          "Terletak di jalan Braga yang legendaris di pusat kota Bandung. Restoran ini menawarkan pengalaman makan yang unik dengan menu khas Eropa dengan harga super miring. satu loyang pizzanya kurang dari 70.000 IDR. Setting-annya bernuansa dan ada live music menjelang malam. Dengan harga murah tidak berarti kualitas makanannya buruk dan pelayannya seadanya, Restoran ini menjungkirbalikkan stigma itu. Setiap ke Bandung dan main ke Braga, restoran ini wajib dikunjungi untuk pengalamanan makan yang berkesan dan tidak menguras kantong.",
        rating: "5",
      },
      {
        id: "review-30",
        idRestaurant: "resto-2",
        idAccount: "user-13",
        description:
          "Resto ini tempatnya masih sama dari dulu sampe sekarang, kalau ke resto ini jangan lupa beli makanan western nya, karena enak dan harga nya ga mahal",
        rating: "4",
      },
      {
        id: "review-31",
        idRestaurant: "resto-2",
        idAccount: "user-30",
        description:
          "Beberapa kali saya membawa teman untuk makan disini atau sekedar nongkrong sambil menikmati es krim dan snack, tak pernah mengecewakan!Sedikit mahal bagi turis lokal, tapi kebanyakan pengunjung sepertinya membeli suasana juga. Kami juga suka dengan dekorasinya yang mempertahankan kesan vintage dan klasik.Kualitas makanan juga sama sekali tidak buruk. Layanan sedikit diskriminatif, tapi mungkin karena kebanyakan turis asing suka berkunjung ke sini.Sangat direkomendasikan untuk mencoba kue-kue nya atau es krim, oh coklat truffle-nya juga! bila bersinggah di Braga Permai.",
        rating: "4",
      },
      {
        id: "review-32",
        idRestaurant: "resto-2",
        idAccount: "user-3",
        description:
          "Restoran legendaris di jalan Braga sejak jaman Belanda dulu, menyajikan menu masakan eropa dan indonesia. Steak adalah salah satu menu yang nikmat di restoran ini, selain itu kue2&coklat khas belanda juga patut dicoba karena memiliki cita rasa jaman kolonial.",
        rating: "4",
      },
      {
        id: "review-33",
        idRestaurant: "resto-2",
        idAccount: "user-20",
        description:
          "Jika ingin bernostalgia mendapatkan menu klasik yang otentik dan berkualitas, Braga Permai adalah jawabannya. Resto ini menyajikan menu dengan tetap menjaga cita rasa yang tidak berubah dari waktu ke waktu. Mulai dari nasi goreng sampai makanan Itali disajikan dengan porsi dan harga yang pas. Jangan lupa mencoba menu eskrim yang rasanya akan membuat anda ketagihan",
        rating: "5",
      },
      {
        id: "review-34",
        idRestaurant: "resto-3",
        idAccount: "user-40",
        description:
          "You must try Yamin manis komplit, it's a must ! Di dalamnya terdapat mie pastinya, baso, pangsit dan babat. Tempatnya sangat homie",
        rating: "5",
      },
      {
        id: "review-35",
        idRestaurant: "resto-3",
        idAccount: "user-32",
        description:
          "Memang saya harus bersyukur pada Allah karena menemukan resto ini. Ceritanya sebenarnya saya sekeluarga akan makan siang di tempat lain. Kami yang orang Jakarta tidak terlalu paham dengan jalan nonprotokol di Bandung jadi kami kesulitan menemukan alamat. Kami bahkan menanyakan alamat pada seorang penjual bakso tapi dia tidak tahu. Setelah mobil berjalan, saya sadar bahwa penjual bakso itu berdiri di samping sebuah cafe yang cukup bagus. Karena jalan di Bandung satu arah, kami harus berputar dulu. Barulah kami putuskan untuk makan di sini, di Cafe Halaman.Lokasinya di halaman sebuah rumah, pasti rumah pemiliknya. Sejak masuk, kami sudah suka dengan penataan cafe ini. Saat melihat menunya kami jadi tambah suka. Kami adalah penggemar ikan. Di sini menu Kakap ala Halaman benar-benar enak. Menu ini adalah ikan goreng tepung panir tapi perbandingan tepung dengan kakapnya tepat. Daging kakapnya sangat besar. Benar-benar kenyang memakannya. Disajikan dengan kentang & saus krim homemade jadi tambah enak. Saat itu cuaca sangat panas jadi saya pesan Mojito yang sejuk.That's why, Thank God I Found This Cafe",
        rating: "5",
      },
      {
        id: "review-36",
        idRestaurant: "resto-3",
        idAccount: "user-33",
        description:
          "Cafe halaman adalah cafe yang berada di halaman rumah pemilik nya yang di sulap menjadi tempat makan dan nongkrong yang sangat asik menu makanan di sini pun banyak dan bervariasi. Dan rasanya juga sangat enak selain itu pegawai nya juga sangat ramah sehingga membut kita betah berada di sini.",
        rating: "5",
      },
      {
        id: "review-37",
        idRestaurant: "resto-3",
        idAccount: "user-35",
        description:
          "Kafe ini cukup strategis kalau dari lokasi nya dan tidak jauh dari kamps ITB bandung, pas saya kesini kebetulan parkiran penuh dan sedih nya yang saya liat waktu itu tidak ada motor yang parkir di kafe halaman itu,saya pun langsung linglung sendiri cari2 parkiran motor ( tapi pas liat ga ada satupun yang parkir motor ,akhirnya memutuskan untuk parkir di mini Market sebelah nya kafe halaman) ,sempet denger2 kalau kafe halaman salah satu kafe yang di favoritkan sama artis2 lokal maupun ibukota Jakarta, pas mau masuk sempet ragu2 sih masuk,tp setelah masuk memang pantes sih kafe ini banyak di favoritin,suasana nyaman,makan dan minum nya juga enak2 dan satu hal yang bikin orang2 takut buat coba masuk kafe ini yaitu harga nya mahal,ternyata harga nya standar ko seperti kafe2 yang ada di bandung, paling beda 5-10 rb aja, selebihnya sama aja,So yang lagi di bandung / warga bandung yang mau masuk sini jangan takut dan ragu lagi kalau masalah harga dan kenyamanan puaslah,so ayo mampir ke sini, semoga manfaat ya",
        rating: "5",
      },
      {
        id: "review-38",
        idRestaurant: "resto-3",
        idAccount: "user-44",
        description:
          "Terdengar unik, cafe halaman. Yup Benar, cafe dengan konsep seperti di halaman rumah. Cafe ini memang untuk bersantai santai, baik dengan teman maupun keluarga. Tempatnya cukup nyaman berlama lama, dan termasuk luas untuk ukuran halaman. hehehe.Bandung emang gak ada matinya soal pilihan tempat dan makanan. di cafe halaman ini soal rasa hampir sama di cafe or restoran lain. Sayangnya untuk ukuran kamu adam, makanan disini relatif kurang nendang. Apalagi di kota Bandung sebagai surganya makanan, saya rasa makanan disini agak mahal untuk ukuran kota Bandung.Tapi harus di akui, di cafe ini tdk hanya menawarkan makanan tetapi kenyamanan juga yang di sajikan dalam satu paket.Untuk pelayanan disini cepat dan baik. Disarankan kesini sore hari, karena tempatnya akan terasa nyaman, berasa di halaman rumah sendiri.",
        rating: "5",
      },
      {
        id: "review-39",
        idRestaurant: "resto-3",
        idAccount: "user-36",
        description:
          "cafe ini memang bertema berada di halaman, seperti halnya halaman rumah cafe ini memang cocok untuk acara santai dengan teman maupun keluarga hidangan pembuka serta penutup yang lezat membuat anda ingin berkunjung lagi ke tempat ini",
        rating: "5",
      },
      {
        id: "review-40",
        idRestaurant: "resto-3",
        idAccount: "user-49",
        description:
          "Bandung memang tidak pernah habis dengan kreatifitas dan cita rasa. Salah satunya yang baru kemarin saya kunjungi, yaitu Cafe Halaman. Tempat berkumpul dan bersantap yang nyaman dan serasa dirumah sendiri.Dibangun dihalaman rumah pemiliknya dan menyajikan makanan yang sering kita temui dengan cita rasa yang lezat dan enak. Perpaduan antara cita rasa dan susana sangat pas sehingga menjadi kenyamanan tersendiri bagi siapapun yang datang, baik teman, keluarga maupun pasangan.Musik yang diberikan sangat pas dengan suasana karena mereka memutar light jazz music era 90an dan juga ada live music pada rabu malam dengan genre light jazz menjadikan suasana yang kental dengan persahabatan, kekeluargaan dan romantisme.Untuk makanan, cita rasanya lezat dengan harga yang sangat terjangkau.Akan menjadi tujuan tetap ketika berada di Bandung.",
        rating: "5",
      },
      {
        id: "review-41",
        idRestaurant: "resto-3",
        idAccount: "user-38",
        description:
          "Suasananya sangat adem dan nyaman. tapi makanannya sangat biasa saja!! nothing special, apalagi harganya lumayan mahal untuk ukuran Bandung!",
        rating: "5",
      },
      {
        id: "review-42",
        idRestaurant: "resto-3",
        idAccount: "user-5",
        description:
          "Caffe ini selalu menjadi pilihan untuk kegiatan meeting point jika ada kegiatan, karena lokasinya sangat strategis,tepat berada di jalan-jalan utama Kota Bandung dan rawan macet, yakni taman sari, djuanda dan dipatiukur. Selain itu makanannya pun enak, terutama untuk pilihan mie nya yang bervariasi. Meskipun berada di wilayah macet, tapi suasana caffe itu tidak terasa begitu memasuki caffe, karena desainya membuat orang cukup betah untuk berlama-lama.",
        rating: "5",
      },
      {
        id: "review-43",
        idRestaurant: "resto-3",
        idAccount: "user-29",
        description:
          "Indonesian foodnya enak, sop buntut atau mie tasik sangat saya rekomendasikan. cocok untuk pasangan atau keluarga karena tempatnya menyenangkan. weekend biasanya sangat penuh jd gunakan lah jasa Vallet untuk parkir kendaraan anda",
        rating: "5",
      },
      {
        id: "review-44",
        idRestaurant: "resto-3",
        idAccount: "user-3",
        description:
          "Dago memang punya banyak pilihan tempat makan. Salah satunya ya cafe halaman ini. Saya datang kesini saat sore menjelang malam. Karena udara dingin, maka makanan berkuah adalah pilihan saya saat itu. Sop buntutnya gurih. Bumbunya klop lah.",
        rating: "5",
      },
      {
        id: "review-45",
        idRestaurant: "resto-3",
        idAccount: "user-23",
        description:
          "Sesuai nama restorannya, makanan lebih enak dinikmati di halaman. Suasana malam, dengan temaram lampu dan lilin menciptakan atmosfer romantis untuk makan malam. Bersih, pelayanan cepat, makanan enak tapi agak mahal hehe.. Cocok untuk datang bersama pasangan, teman atau keluarga. Tapi harus pinter-pinter pilih menunya ya. Saya merasa ada penurunan rasa di cafe ini setelah beberapa kali datang. Semoga jadi bahan evaluasi restoran",
        rating: "5",
      },
      {
        id: "review-46",
        idRestaurant: "resto-3",
        idAccount: "user-26",
        description:
          "Sebenarnya tidak ada menu spesial di tempat ini. Lokasi yang strategis di belokan kanan menuju simpang Dago, membuat lokasi resto ini banyak dikunjungi konsumen. Bagi konsumen yang datang di hari ultah mereka dengan menunjukkan KTP akan mendapatkan kue gratis dari pihak cafe.",
        rating: "5",
      },
      {
        id: "review-47",
        idRestaurant: "resto-3",
        idAccount: "user-43",
        description:
          "Cafe yg sdh ada cukup lama, tempat nya ok untuk nongkrong.Sayang untuk bbrp menu yg kami pesan dengan keluarga kurang enak , juga menunggu pesanan agak lama ,sangat mengecewakan.Untuk harga standarlah.Msh byk tempat lain yg sejenis yg lbh ok",
        rating: "3",
      },
      {
        id: "review-48",
        idRestaurant: "resto-3",
        idAccount: "user-7",
        description:
          "Sekian kali tiap ke bandung mencari tempat yang bisa ngobrol sepuasnya sambil menikmati makanan dan minuman sampai pagi susah sekali. Tapi kemarin gak sengaja lewat wastu kencana menemukan cafe yang buka 24 jam dan menunya pun masih lengkap..akhirnya saya mencoba bersama keluarga dan beberapa orang teman..semua menu masih lengkap...dan rasanya juga oke tidak terlalu mahal tapi pas dilidah...pelayanannya juga oke ramah dan helpfull..alhasil karena sangat menikmati makanan dan minumannya sambil ngobrol..gak terasa tau2 sudah jam 3 pagi...nanti kalau kebandung lagi...pasti..kami kembali lagi..",
        rating: "5",
      },
      {
        id: "review-49",
        idRestaurant: "resto-3",
        idAccount: "user-4",
        description:
          "Wah ini salah satu restoran favorit saya sejak jaman dulu walaupun agak sedikit mahal tapi suasananya itu yang membuat keinginan kembali kesini lagi. Lebih cocok datang di malam hari karena suasana menjadi lebih romantis.Sangat direkomendasikan untuk berkunjung kesini dan lokasinya pun ada di sekitar dago, sehingga sangat mudah dijangkau. Sayang lahan parkir yang terbatas membuat parkir kendaraan menjadi sulit terutama ketika hari libur.",
        rating: "5",
      },
      {
        id: "review-50",
        idRestaurant: "resto-3",
        idAccount: "user-22",
        description:
          "Cafe halaman memiliki desain area makan yang hijau dan dikelilingi oleh banyak tumbuhan shg memberikan suasana yang fresh, nyaman, dam sejuk. Makanan cukup mahal namun rasanya enak. Saya senang bgt dgn kuah/sup sayur asam. Restoran ini jg selalu ramai dikunjungi orang. Worth it dah!",
        rating: "5",
      },
      {
        id: "review-51",
        idRestaurant: "resto-3",
        idAccount: "user-12",
        description:
          'terletak tepat di seberang hutan kota babakan siliwangi dan "persimpangan" jalan menuju arah simpang dago dan Kampus ITB. Lokasi ini menjadi sangat strategis buat anak muda (mahasiswa menengah ke atas) untuk nongkrong. Cafe yang benar-benar dibuat di halaman rumah tua nan antik ini memiliki menu yang variatif dengan harga relative terjangkau (meskipun tidak murah-murah sekali). Untuk rasa ya jangan membandingkannya dengan masakan para masterchef dengan bahan baku yang sangat premium ....come on ini cafe local yang berusaha memberikan service dan ambient yang unik khas kota kembang. saya pikir cuikup dapat dinikmati, sayang saja karena sangat strategis cafe ini seringkali kekurangan lahan untuk parkir terutama di waktu-waktu sibuk pada saat weekend. worth to try',
        rating: "4",
      },
      {
        id: "review-52",
        idRestaurant: "resto-3",
        idAccount: "user-18",
        description:
          "Menu favorite saya di resto ini adalah soup buntut, rasa soto nya yang segar, daging nya yang empuk membuat cita rasa nya semakin mantap.selain soup buntut, nasi goreng kampungnya tak perlu di ragukan lagi kelezatan nya. lokasi yang strategis, suasana yang menyenangkan membuat resto ini selalu ramai dikunjungi oleh para pelanggan. tempatnya pun cukup strategis dan romantis, jika wisatawan sedang berada di kota kembang Bandung, tak ada salahnya untuk mampir ke resto ini .)",
        rating: "5",
      },
      {
        id: "review-53",
        idRestaurant: "resto-3",
        idAccount: "user-16",
        description:
          "Saya memesan mie yamin asin dengan bakso pangsit, serta zuppa soup untuk anak saya. Zuppa soupnya enak. Mie yaminnya not bad. Ditambah mineral water dan ice mint tea total biaya Rp.94,000.- reasonable lah.Tempatnya enak buat hang out, hanya parking lotnya memang kecil.",
        rating: "4",
      },
      {
        id: "review-54",
        idRestaurant: "resto-3",
        idAccount: "user-11",
        description:
          "malam hari adalah waktu yang paling tepat untuk mencicipi makanan di cafe halaman, selain suasananya semakin romantis dengan lampu2 yang benderang, makanannya pun tidak kalah enak terutama nasi hainannya, namun tempat parkir yang sempit merupakan nilai minus dari restoran ini",
        rating: "5",
      },
      {
        id: "review-55",
        idRestaurant: "resto-3",
        idAccount: "user-39",
        description:
          "seperti judulnya, lebih baik datang dicafe ini malam hari ato sore, klo siang panas... karena suasana kafe ini outdoor...menurut saya soal makanannya biasa saja, tapi tempatnya cukup enak buat nongkrong...untuk harga lumayan lah...pesanan saya waktu itu : 1 nasi hainan 28rb, 1 nasi kakap asam manis 37rb, 1 ha kau 20rb, 2 es teh manis 15rb, 1 es campur 25rb totalnya 125rb + tax 10% dan service 5% jadi 143.750 rupiah.waktu itu saya makan pada siang hari dan ada segerombolan ibu-ibu ternyata lagi arisan disana...oh ya sekedar info saja, cafe ini tidak menyediakan tempat khusus bebas asap rokok, jadi klo mau kesini dengan anak kecil pikir-pikir saja dulu...",
        rating: "4",
      },
      {
        id: "review-56",
        idRestaurant: "resto-3",
        idAccount: "user-30",
        description:
          'Beberapa hari lalu saya ke kota Kembang dan teman saya merekomendasikan tempat hang out asik nuansa outdoor yang cukup "fresh" di Bandung.Cafe Halaman ini memberikan konsep outdoor serasa dirumah sendiri.Makanan dan minuman yang disuguhkan juga yummy dan fresh dengan harga yang cukup untuk kantong anak muda.Saya sampai lupa waktu untuk beranjak karena kenyamanan cafe ini,luar biasa!',
        rating: "5",
      },
      {
        id: "review-57",
        idRestaurant: "resto-3",
        idAccount: "user-8",
        description:
          "Restoran ini menyediakan menu makanan yg cukup beragam. Dimsum nya cukup rekomen, cocok untuk makan malam santai bersama keluarga. Tempatnya bagus dan nyaman",
        rating: "5",
      },
      {
        id: "review-58",
        idRestaurant: "resto-4",
        idAccount: "user-43",
        description:
          "Shuttle yang disiapkan berbayar, lumayan juga 20.000/pax. Sementara pelayanan shuttle dirasa masih kurang. Pengunjung harus menunggu untuk dapat melakukann perjalanan denganshuttle",
        rating: "2",
      },
      {
        id: "review-59",
        idRestaurant: "resto-4",
        idAccount: "user-12",
        description:
          "View bagus, ada sungai kecil anak-anak bisa bermain, ada permainan air juga. Makanan juga lumayan enak. Harga standar restoran sejenis.",
        rating: "5",
      },
      {
        id: "review-60",
        idRestaurant: "resto-4",
        idAccount: "user-15",
        description:
          "Di tempat ini saya pertama kunjungi saat di lembang, tempatnya sangat unik, dimana terdapat rumah rabit yang sangat lucu, seperti berada di negeri dongeng",
        rating: "5",
      },
      {
        id: "review-61",
        idRestaurant: "resto-4",
        idAccount: "user-1",
        description:
          "Tempat rekreasi yang cukup bagus untuk pergi bersama keluarga. Ada tempat main anak-anak, ada taman yang indah, dan tempat makan yang cukup banyak. Lingkungan yang asri dan menyenangkan.",
        rating: "5",
      },
      {
        id: "review-62",
        idRestaurant: "resto-4",
        idAccount: "user-39",
        description:
          "Ketika berkunjung ke Dusun Bambu, saya bersama keluarga makan di Restoran Burangrang, menurut saya rasa makanan standar dengan harga yang cukup mahal. Selain Burangrang terdapat beberapa restoran lagi disini seperti Lutung Kasarung dan Pasar Khatulistiwa. Di Dusun Bambu banyak spot fotogenic (tapi aslinya tidak seindah di foto). Sepertinya lebih indah mengunjungi Dusun Bambu di sore hari sampai dengan malam hari.",
        rating: "5",
      },
      {
        id: "review-63",
        idRestaurant: "resto-4",
        idAccount: "user-40",
        description:
          "karena menginap di resortnya maka kita memutuskan untuk makan malam disana, secara keseluruhan tidak ada yang special dari makanannya. Karena sudah malas keluar jadi kita coba restorannya.",
        rating: "4",
      },
      {
        id: "review-64",
        idRestaurant: "resto-4",
        idAccount: "user-45",
        description:
          "Untungnya kita kesini hari kerja, bkn long weekend kmrn, jd dpt parkir & ga penuh. Parkirnya ga terlalu luas & kita hrs naik shuttle ke dlm dusun bambu. Setelah liat review bnyk yg blg overprice food with less quality, kita niatkan kesini bukan untuk makan...tapi cm untuk liat2. Dgn byr 15rb, free shuttle & bs keliling2 jln kaki. Kl ga mo naik shuttle, bs jalan 4 menit di sepanjang pematang sawah. Kita di drop sm shuttlenya di Pasar khatulistiwa & lutung kasarung. Lutung kasarung itu tempat makan bentuknya spt sangkar burung bambu, lucuu & unik! Untuk foto2 di dalem, kena cas 100rb/jam (blm termasuk makanan), kl on budget spt saya, mending foto2 dr luar aja, hehehe. Paling suka sm lampion bambu yg ada di tengah2 Pasar Khatulistiwa, gaya tradisional yg dibalut modern. Pasa khatulistiwa ini semacam toko souvenir, snack, minuman, yg disampingnya ada food stall yg harsu pk kartu voucher.Turun lg ke bawah menuju danaunya yg dipinggir danau ada resto lesehan, di atasnya ada gedung restoran kaca2, jd seruu liatnya kl dr tengah danau, semua pemandangan dapet. jgn lupa selfie di tengah danau itu yaa. Selain liat yg ijo2 sm bunga2, dusun bambu jg nyediain area tempat duduk di tiap sudutnya. jd ga usah khawatir bwt yg cepet capek :D:D:DSelain liat pemandangan, ada aktivitas outdoor jg, ngayuh sampan, metik stroberi, camping, dan yg pastiii di dlm dusun bambu, ada Labirin, area bermain untuk batita & balita. wooww cool!",
        rating: "3",
      },
      {
        id: "review-65",
        idRestaurant: "resto-4",
        idAccount: "user-44",
        description:
          "Ketika saya berkunjung saat akhir pekan dan kondisi nya sangat ramai. suasan nya memang sangat menyenangkan, udara yang sejuk dan pemandangan yang indah. Namun menjadi sangan terbatas karena segala fasilitas serba penuh dan ketika hendak makan burangrang restaurant & caffe saya sudah dusuguhi dengan 2 lembar waiting list untuk dapat masuk ke restauran tersebut. Namun jika beruntung anda dapat menikmati pertunjukan angklung dipinggir danau .Jika ingin benar-benar menikmati suasana nya saya sarankan datang di hari kerja saja.",
        rating: "4",
      },
      {
        id: "review-66",
        idRestaurant: "resto-4",
        idAccount: "user-30",
        description:
          "Lebih baik datang tidak di musim peak season, karena terasa riuh rendah belum lagi perjuangan mencapai tempat ini dari kemacetan di Lembang. Hari biasa, pengunjung tak terlalu banyak jadi tempat yang nyaman untuk merenung, meresapi keindahan alam. Ada wahana bermain untuk anak-anak, ada tempat bersantap private menghadap danau, lakukan dulu reservasi beberapa hari sebelumnya. Bisa bersampan dengan orang yang kita cintai. ehem... Saya suka tempat ini dengan bunga-bunganya yang indah",
        rating: "5",
      },
      {
        id: "review-67",
        idRestaurant: "resto-4",
        idAccount: "user-35",
        description:
          "Sangat ramai pada musim liburan sehingga perlu bersabar untuk bisa bersantap dan bersantai... kalo beruntung bisa dapet seat di rumah pohon! Beli makanan dengan kupon, ribet juga euy",
        rating: "5",
      },
      {
        id: "review-68",
        idRestaurant: "resto-4",
        idAccount: "user-10",
        description:
          "Menuju Dusun Bambu sangat mudah, perlu bayar 15Rb untuk dapat masuk dan meikmati fasilitas shuttle dari area parkiran menuju area tempat makan, tersedia restoran, foodcourt, saung pinggir kolam dan sangkar-sangkaran yang dapat di sewa perjam, untuk makanan cukup enak, dengan harga termasuk mahal. Tersedia area outbound dan tempat bermain anak-anak yang dapat dinikmati dengan membayar tentunya. Lebih dapat dinikmati saat sore menjelang malam, udara dingin sudah terasa dan lampu-lampu sudah mulai menyala...Tq:)",
        rating: "5",
      },
      {
        id: "review-69",
        idRestaurant: "resto-4",
        idAccount: "user-37",
        description:
          "Tempat makan ini rame saat liburan.Tempatnya bagus dengan pemandangan yang sangat indah untuk foto-foto.Kekurangannya:Pada saat masuk dipungut tiket masuk,jika ingin makan di pinggir danau harus reservasi dulu sayangnya reservasi tidak bisa online,kupon yang ditukarkan tidak bisa diuangkan kembali,harga makanannya lumayan mahal.Tp overall lumayanlah karena lumayan banyak spot indah buat foto-foto",
        rating: "4",
      },
      {
        id: "review-70",
        idRestaurant: "resto-4",
        idAccount: "user-33",
        description:
          "untuk orang bandung sih malas kmbali ke sana 2 kali. cukup sekali. masul harus bayar. makanan mahal memang cocok untuk bermain anak sih. cocok untuk wisata keluarga. tapi tidak ada akses angkutan umum ke sini",
        rating: "3",
      },
      {
        id: "review-71",
        idRestaurant: "resto-4",
        idAccount: "user-46",
        description:
          "Pertama kesini dari jalan rumayan masuknya dengan jalan yg jelek..begitu sampai disana wooow..banyak bunga bertebaran serasa naik gunung di luar negri..:)) ada aliran kali kecilnya, feder ke atas pun ada...yg paling bagus itu resto sangkar burungnya walaupun harus antri reservasi dan tergolong maahhalll...dan satu lagi kalau kesini harus bawa kocek yang banyak soalnya makanan yang di jual disini muahaaallll...hehehe",
        rating: "5",
      },
      {
        id: "review-72",
        idRestaurant: "resto-4",
        idAccount: "user-22",
        description:
          "Fasilitas ok, anak sangat riang, ada atv, mini farm, danaunya bagus, makanan lengkap, layout taman alami dan tertata",
        rating: "5",
      },
      {
        id: "review-73",
        idRestaurant: "resto-4",
        idAccount: "user-2",
        description:
          "Dusun bambu ini tergolong baru di bandung.tempatnya yang deket banget sama almamater saya.membuat saya gampang cari ini tempat.pemandangannya bagus.banyak tempat makan yang enak - enak.beli nya nanti pake voucher.",
        rating: "5",
      },
      {
        id: "review-74",
        idRestaurant: "resto-4",
        idAccount: "user-48",
        description:
          'Dusun bambu punya restoran yang "all you can eat" tapi exclude minuman. Overall makanannya enak, tempatnya juga asik. Cocok untuk kumpul keluarga, atau acara reunian.',
        rating: "5",
      },
      {
        id: "review-75",
        idRestaurant: "resto-4",
        idAccount: "user-41",
        description:
          "sangat direkomendasikan jalan jalan kesini bareng keluargaa. ada taman yang luas banget, parkirnya ngga bingung, luas, ada restoran enak yang namanya Burangrang. Walaupun cukup jauh tempatnya, tapi untuk piknik kesini rasanya worth it ya :)",
        rating: "5",
      },
      {
        id: "review-76",
        idRestaurant: "resto-4",
        idAccount: "user-4",
        description:
          "Terletakndi punggung gunung Burangrang,Dusun Bambu menawarkan lokasi ideal utk bersantai bersama keluarga sekaligus makan dan belajar tentang alam. Indahnya landscape dan dominasi bebungaan menjadikan pikiran tercerahkan. Apalagi sambil menyeruput secangkir kopi dari kedai Yellow Truck yang tersedia di sana.",
        rating: "5",
      },
      {
        id: "review-77",
        idRestaurant: "resto-4",
        idAccount: "user-29",
        description:
          "Tempatnya memiliki view yang sangat bagus menurut saya. Disini ada beberapa tempat makan, dan ada foodcourtnya juga.",
        rating: "5",
      },
      {
        id: "review-78",
        idRestaurant: "resto-4",
        idAccount: "user-42",
        description:
          "Sejak melupakan pekerjaan di rmh mengurus ank2,bandung benar2 enak bwt jln,makan and shoping bagi yg hobi shoping,tmpt rekreasi nya jg bagus2 and bnyak pilihan,saya pergi jalan ke bandung dngan tmn2 arisan..jln ke dusun bambu wehhh tmpt nya dingin banget smpai lantai nya aj dingin apalagi air nya serasa kluar dari kulkas xixiixixi..benar2 tmpt yg menyenang kan..klau mau berkunjung sebaik nya jgn di hari weekend apa lagi longweekend emmm bisa di pasti kan dari dlm tol nya aj udh gak bergerak,enk berkunjung ke bandung di hari Senen-Kamis jarak tempuh Jkt-bandung kurang lebih 3 jam klau lancar Jaya di tol dlm kota nya.mdh2an saya bisa berkunjung lg ke bandung dngan tmpt yg lbh asik lg.",
        rating: "4",
      },
      {
        id: "review-79",
        idRestaurant: "resto-4",
        idAccount: "user-47",
        description:
          "tempat wisata yang satu ini memang benar2 menarik hati, dari cara penataan tempatnya saja sudah terlihat bahwa didlmnya pasti byk sesuatu yg menarik... jika kita lihat dari dpn nama dusun bambu mmg pas krn ada tugu bambu yg menjulang tinggi dan kuat. kita dibawa semakin dalam ke area dgn mobil yg dihias dgn bunga2 wrn warni.. kita mendpt fasilitas antar jemput.. atau jika kita ingin menikmati suasana alam..kita bisa berjalan kaki. sampai ke dalam kita akan disambut dgn 1 bangunan yg megah yg ternyata itu adalah restaurant.. ada 2 tipe resto yg pertama dgn tipe resto yg menunya hny milik resto tsb dan 1 lagi seperti food court dan kita hrs membyr dgn nominal seperti uang monopoli pecahan mulai dr 2000. itu kita hrs membeli seperti voucher istilahnya. dan setelah kita mendpt voucher itu kita bebas membeli mkanan apa yg kita inginkan. setelah selesai makan wktny melihat2 dan yg menjadi icon dr dusun bambu ini adalah krn t4 makannya yg terlihat seperti sangkar burung.. kita akan dibw keatas utk melihat t4 makan tsb dan hanya ada beberapa. yg baru saya tau adalah bhw jika kita ingin makan dsna kita hrs membyr dl sejumlah uang utk bisa menikmati makan disana... selain itu jg ada playground utk anak2 dan taman bunga juga...cuma 1 yg menjadi kendala adl krn t4nya yg lumayan jauh... dan daerahnya seperti terpencil... tapi utk yg lainnya saya rasa sudah cukup berkesan dan masih ingin mengulangi lagi main kesana .",
        rating: "5",
      },
      {
        id: "review-80",
        idRestaurant: "resto-4",
        idAccount: "user-16",
        description:
          "Dusun bambu mudah dijangkau dari lembang, menawarkan family leisure park yang bagus, restaurant nya berkonsep Foodcourt, banyak jenis makanan dari berbagai negara Dan daerah di Indonesia. Yang sangat menarik adalah adanya ruang makan yang dibuat seperti sarang burung, untuk menuju ke sarang burung harus melaluo jalan canopy kayu yang cukup panjang. Sangat menarik.",
        rating: "5",
      },
      {
        id: "review-81",
        idRestaurant: "resto-4",
        idAccount: "user-23",
        description:
          "Dusun Bambu dibuat dengan kreatiivitas yang unik, sebuah area wisata dengan konsep baru, tidak boleh membawa makanan-minuman dari luar (akan didenda), tetapi menyediakan aneka rumah makan dengan sajian yang baik. Tempat wisatanya cukup lengkap, ada kebun, paint ball, wisata air, resto yang menarik. Sangat tepat untuk wisata bersama keluarga atau reuni.",
        rating: "5",
      },
      {
        id: "review-82",
        idRestaurant: "resto-4",
        idAccount: "user-38",
        description:
          "Jika kalian pergi ke Bandung, sempatkanlah untuk mampir ke Dusun Bambu. Dusun bambu memiliki rumah pohon yang menjadi iconic. Harga sewanya Rp. 100.000 per jam, diluar harga pesanan makanan. Namun tersedia juga tempat makan seperti foodcourt yang tidak dikenakan biaya sewa. Selain teh, kopi, dan minuman hangat lainnya ada juga minuman dingin seperti milkshake & soft drink. Makanan yang disajikan pun cukup beragam, jangan lupa nikmati Kue Balok Original disini karena rasanya sangat enak.",
        rating: "5",
      },
      {
        id: "review-83",
        idRestaurant: "resto-4",
        idAccount: "user-25",
        description:
          "saya beberapa kali berkunjung ke dusun bambu dan sudah menikmati makan ala foodcourt dan makan di restonya. kalau di foodcourt, harus menukar uang dengan koin, makanan di foodcourt kebanyakan makanan sunda, cemilan, kue2 atau aneka mie, ada juga kue serabi. kalau makan di restonya Burangrang, makanan bervariasi, western, asian, indonesia dengan tampilan menarik namun harga yang lebih mahal daripada di foodcourtnya. bisa juga makan di atas sangkar di atas pohon yaitu lutung kasarung.",
        rating: "5",
      },
      {
        id: "review-84",
        idRestaurant: "resto-4",
        idAccount: "user-6",
        description:
          "kami sekeluarga (saya + Istri + sepasang buah hati) menginap di Camping Ground dengan tarif Rp. 2.010.250 / night..konsepnya sangat unik dengan lahan terbuka private area sekitar 100m2 dan Tenda Eiger sekitar 15m2 (didalam Tenda ada telepon untuk Room Service 24 jam)..malam ada free jagung bakar (langsung dibakar di private area kita oleh Buttler) dan free snack dan free buah segar..Buttler juga menyalakan Api Unggun di private area kita..asyik untuk back to the nature :)Kami makan malam di Caf?? Burangrang..ada promo setelah beli beberapa pilihan Steak, kita bisa mendapat makan buffet ala Western..kita pesan Rib Eye Steak dan Chicken Steak..diluar makan buffet saya juga memesan Nasi Goreng Dusun Bambu yang khas digoreng dengan ebi..overall untuk rasa cukup baik..suasana sekitar Dusun Bambu diwaktu malam juga sangat eksotis dan romantis..cocok buat pengantin baru nih..hehehe..view superrr sekaleee..Untuk yang tidak kuat dingin siap-siap bawa tambahan selimut..karena malam sampai pagi (terutama diatas jam 12 malam..) cuaca sangat dingin sekali..Breakfast kembali di Caf?? Burangrang cukup baik..Hidangan khas Sunda menjadi yang utama di buffet..pencuci mulut Red Velvet Cake cukup enak..view pagi juga luarrr biasssaaa indah..Untuk outdoor activity sangat banyak pilihan..dari naik perahu sampai hanya sekedar berjalan-jalan disekitar area yang sangat asri dan indah..seharian waktu cepat sekali berlalu..Overall servis cukup baik..view super duper mantap..buat yang hobi fotografi sepertinya sangat cocok..udara bersih dan sejuk..dingin gila diwaktu subuh terutama..perlu membawa tambahan extra selimut.. :) makanan terutama Hidangan Sunda cukup enak..harga reasonable..",
        rating: "5",
      },
      {
        id: "review-85",
        idRestaurant: "resto-4",
        idAccount: "user-9",
        description:
          "Tempatny nyaman tenang dan enak. Biza untuk foto2. Santay berzama keluarga menikmati angin sepoi sepoi.",
        rating: "5",
      },
      {
        id: "review-86",
        idRestaurant: "resto-4",
        idAccount: "user-50",
        description:
          "Suasana adem, asri bikin betah berlama-lama disana. Anginnya enak banget buat bersantai sampai seusai makan duduk di Sofa Restaurantnya saya terlelap tidup beberapa menit sambil memandang danau kecil yang indah. Bunga-bunga ditaman dengan sungai buatannya pun membuat tidak mau beranjak dari sana.",
        rating: "5",
      },
      {
        id: "review-87",
        idRestaurant: "resto-4",
        idAccount: "user-5",
        description:
          "Tidak terlalu jauh dari Lembang terletak di jalan Kolonel masturi dilalui oleh kendaraan umum, suasana khas pegunungan sangat sejuk, tersedia berbagai menu makanan dan toko- toko , juga bisa menikmati pemandangan persawahan",
        rating: "5",
      },
      {
        id: "review-88",
        idRestaurant: "resto-4",
        idAccount: "user-21",
        description:
          "Tempat cocok untuk bersantai, sayangnya pada saat weekend pengunjung sangat padat.Tempat parkir selalu penuh dan sangat berdebu pada saat kemarau..Makanan yang di jual kurang enak dan mahal",
        rating: "5",
      },
      {
        id: "review-89",
        idRestaurant: "resto-4",
        idAccount: "user-14",
        description:
          "Makanannya lumayan enak-enak diudara dingin dan banyak variasinya dari mulai restaurant burangrang,saung purbasari dan area foodcourtnya...",
        rating: "5",
      },
      {
        id: "review-90",
        idRestaurant: "resto-4",
        idAccount: "user-7",
        description:
          "saya dan keluarga sangat senang bisa berkunjung ke dusun bambu. Viewnya sangat bagus dengan pemandangan alam yaitu taman, sungai buatan, dan bukit2. Tempatnya sangat luas, ada playground untuk anak-anak dan area makannya juga banyak. Meskipun harga2 makannanya agak mahal, tapi sebandinglah dengan view yang diberikan. Ada jembatan panjang, ada danau buatan, sungai buatan dengan air yang mengalir, taman bunga yang rapi. Kalau sudah agak sore, ada api unggun dan lampu2 seperti obor. Sangat unik dan bagus",
        rating: "5",
      },
      {
        id: "review-91",
        idRestaurant: "resto-4",
        idAccount: "user-8",
        description:
          "Tempat main sekalian tempat makan banyak pilihan nya, harus beli voucer dulu, harga makanannya mahal bingit, danau buatannya bagus n suasana romantis",
        rating: "5",
      },
      {
        id: "review-92",
        idRestaurant: "resto-4",
        idAccount: "user-28",
        description:
          'Ada dua tipe restoran di dusun bambu ini, ada yang bertema foodcourt dan alacarte. saya makan di restoran alacarte yang bernama Burangrang. Restoran ini menyajikan masakan indonesia yang sangat baik, terutama ayam betutu yang disajikan dalam bambu. sangat recommended. Ada juga berbagai macam snack seperti pisang goreng caramel dan es" seperti es campur. Sangat layak dikunjungi terutama bersama keluarga.',
        rating: "5",
      },
      {
        id: "review-93",
        idRestaurant: "resto-4",
        idAccount: "user-24",
        description:
          "Beberapa Bulan lalu saya dan beberapa teman saya mengunjungi tempat ini dan ternyata ramai sekali dengan pengunjung untuk mencapai nya dari parkiran disediakan semacam mobil jemputan yang didekorasi lucu banget dah. nanti kita akan disuguhi dengan pemandangan alam yang indah dan udara sejuk selain landscape disini juga terdapat penyewaan sepeda bagi yang ingin mengexplor kawasan ini. sayangat direkomendasikan buat keluarga untuk mengisi liburan dan dekat dengan objek wisata Curug Cimahi. danaunya buatanya indah apalagi saat menjelang sore hari",
        rating: "5",
      },
      {
        id: "review-94",
        idRestaurant: "resto-4",
        idAccount: "user-13",
        description:
          "Tempat yang tepat untuk menikmati kesegaran dan nuansa alam yang indah di sekitar Bandung. Pengunjung akan dibawa menuju ke tempat makan maupun wisata (bersampan di danau, atv, permainan anak2) dengan menggunakan shuttle, sehingga tidak perlu repot mencari tempat parkir. Tariff masuk cukup wajar, sebesar Rp 15.000/orang dan setiap permainan akan dikenakan charge (harganya bervariasi). Untuk makanan, pengunjung perlu menukarkan kupon yang tidak dapat ditukarkan dengan uang kembali. Pandai-pandailah mengatur budget. Harga makanan standar (meskipun tidak bisa disebut murah), namun dari sisi rasa, tidak mengecewakan. Pemandangan danau serta taman yang penuh dengan bunga sangat indah dan asri, khas keindahan alam parahyangan, cocok untuk melepaskan stress di tengah rutinitas sehari-hari.",
        rating: "5",
      },
      {
        id: "review-95",
        idRestaurant: "resto-5",
        idAccount: "user-18",
        description:
          "sop burung daranya mantap.. udang mayonesnya unik sekali.. ga ada yang seenak di eastern.. dulu sih ada all u can eat. katanya sekarang uda ga",
        rating: "5",
      },
      {
        id: "review-96",
        idRestaurant: "resto-5",
        idAccount: "user-33",
        description:
          "Beberapa waktu lalu saya merayakan kelulusan salah seorang sahabat dekat saya dengan memesan restoran ini pada pukul 8 malam. Tidak terlalu ramai kecuali pada weekend. Kami memesan dimsum all you can eat. Makanan sangat enak dan banyak pilihan yang bisa anda pilih. Dimsum dan dessert nya adalah salah satu kelebihan restoran ini.Kelebihan:1. Porsi banyak cocok untuk makan bersama-sama2. Tempat bagus dan interiornya indah cocok untuk bersantai dan bersantap ria3. LapangKekurangan: apabila sedang ramai, pesanan agak lama datang",
        rating: "4",
      },
      {
        id: "review-97",
        idRestaurant: "resto-5",
        idAccount: "user-7",
        description:
          "Makananya semuanya enak. Paling suka sama udang mayonaisenya. Cocok buat merayakan kehidupan bersama teman-teman. Porsinya besar jadi lebih baik sharing aja makannya.",
        rating: "5",
      },
      {
        id: "review-98",
        idRestaurant: "resto-5",
        idAccount: "user-10",
        description:
          "Harus menunggu agak lama untuk dapat menikmati makanan di restoran yg terletak di istana plaza, krn restoran ini kalau malam hari penuh, terkecuali kita berkunjung pas jam buka restoran sekitar jam 11 pagi.Makanan yg disajikan lumayan enak, terutama udang telur asin, tp untuk cream soupnya terlalu encer tp cukup oke shg terbayarkan ketika sdh mengantri lama.",
        rating: "4",
      },
      {
        id: "review-99",
        idRestaurant: "resto-5",
        idAccount: "user-5",
        description:
          "menu special disini adalah udang goreng mayonaise, sapi lada hitam. Dim sum yang disajikan juga beraneka ragam. Jangan lupa datang lebih awal karena weekend antrian cukup panjang",
        rating: "4",
      },
      {
        id: "review-100",
        idRestaurant: "resto-5",
        idAccount: "user-43",
        description:
          "Di eastern ini makanan nya chinese food, saya paling suka sama udang mayonaise nya, enak sekali. Untuk porsi cukup besar, jadi bisa berbagi sama keluarga atau teman. Harga nya standard makanan chinese sih.disini juga ada all you can eat dimsum, tapi harga nya lumayan mahal, jadi kalau mau all you can eat sebaiknya kalau lagi benar-benar lapar aja.",
        rating: "4",
      },
      {
        id: "review-101",
        idRestaurant: "resto-5",
        idAccount: "user-32",
        description:
          "Kami suka tempat ini dan mengunjunginya sekali dalam beberapa bulan, terutama untuk makan siang.Makanannya cocok dengan selera kami dan saya pun bisa mengajak teman karena dimsum-nya halal. Selain kualitas makanan, juga kerjasama dengan bank/ promo kartu kredit menjadi pertimbangan kami untuk mengunjungi tempat ini.Masukan bagi Eastern mungkin agar meningkatkan pelayanan agar lebih baik lagi supaya klien/ pengunjung selalu puas dan ingin kembali di lain waktu.",
        rating: "5",
      },
      {
        id: "review-102",
        idRestaurant: "resto-5",
        idAccount: "user-2",
        description:
          "Pada saat saya datang Hari Minggu Pk.08.00 sepi tapi pada saat saya selesai banyak orang menunggu di luar. Rasa enak tapi dingin. Harga murah",
        rating: "4",
      },
      {
        id: "review-103",
        idRestaurant: "resto-5",
        idAccount: "user-31",
        description:
          "Salah satu restoran tiongkok favorit saya. Makanannya enak! Porsinya juga besar, dan pilihan masakannya enak. Restorannya cukup besar dan banyak tempat duduknya. Masakan favorit saya adalah kepiting sokanya dan juga tahu seafood. Restoran ini sangat cocok untuk makan bersama keluarga",
        rating: "5",
      },
      {
        id: "review-104",
        idRestaurant: "resto-5",
        idAccount: "user-24",
        description:
          "Menu yg tersedia sangat beragam mulai dari daging ayam, bebek, udang, , ikan, daging sapi dll yg diolah dgn cara digoreng atau dikukus. Tersedia jg berbagai macam bubur & bapau.Harga per porsi 15rb ke atas. Lebih baik datang di hari minggu atau hari libur karena menu yg tersedia lebih beragam & tinggal diambil di meja display sesuai dgn yg kita inginkan. Idealnya datang antara jam 8.30 - 9 pagi. Datang lbh siang, siap2 masuk waiting list krn tamunya sangat banyak.Di hari biasa utk menu tertentu kadang kita hrs order terlebih dahulu & menunggu cukup lama.Mknn yg patut dicoba sup burung dara.",
        rating: "5",
      },
      {
        id: "review-105",
        idRestaurant: "resto-5",
        idAccount: "user-22",
        description:
          "Dimsum terbaik di bandung? Menirutku ini jawabannya. Biasanya dua atau tiga bulan sekali mengunjungi ini bersama teman utk melupakan kepenatandi kampus. Hakaondan dimsum lainnya, sup burung dara, udang mayonaise, semuanta terbaik di Bandung. Mesti dicoba bagi pecinta makanan chinese.",
        rating: "5",
      },
      {
        id: "review-106",
        idRestaurant: "resto-5",
        idAccount: "user-38",
        description:
          "Resto ini umumnya ramai saat kami berkunjung. Saat datang di tahun baru jam 10.30 siang, masih ada 9 antrian di depan kami. Kami mencicipi 3 menu dimsum sebelum makan menu utama. Udang mayonnaise nya termasuk paling lezat dari resto yang kami kunjungi. Tahu spesial Easternnya (campuran tahu, sayuran dan jamur dengan saos tiram kental) lezat. Ikan gurami telornya asinnya cukup lezat, sayang masih ada sedikit bau tanah. Layanan stafnya ramah dan cukup cepat dalam kondisi semua meja terisi.",
        rating: "4",
      },
      {
        id: "review-107",
        idRestaurant: "resto-5",
        idAccount: "user-41",
        description:
          "Waktu itu saya pesan buncis dan menu lainnya. Saya lupa nama persis menunya tapi buncisnya enak banget! Dan dimsumnya juara di sini, semuanya enak-enak, apalagi kalau dimakan dengan minyak cabenya yang terkenal!",
        rating: "5",
      },
      {
        id: "review-108",
        idRestaurant: "resto-5",
        idAccount: "user-40",
        description:
          "Di restoran ini kita dapat menikmati Chinese Food dengan harga yang seimbang dengan kualitas dan servisnya memuaskan. Saya suka sekali dengan Sup Burung Dara-nya, menurut saya recommended! Apalagi Bebek Pekingnya. Enak sekali! Saya selalu ingin berkunjung kembali ke restoran ini.",
        rating: "5",
      },
      {
        id: "review-109",
        idRestaurant: "resto-5",
        idAccount: "user-39",
        description:
          "Menu yang ada disini adalah chinese food, tapi tanpa Babi. Dimsumnya enak, terutama siomaynya, yang merupakan campuran daging ayam dan udang. Sup Burung Daranya terkenal. Menu ala cartenya tinggal pilih yang ada dimeja. Harga perporsinya antara 20rb-30rb. Ada juga pilihan all you can eatnya dengan harga 175rb - 225 rban. All you can eat dimsumnya sekitar 100 rebuan.",
        rating: "5",
      },
      {
        id: "review-110",
        idRestaurant: "resto-5",
        idAccount: "user-14",
        description:
          "Pertama mencoba makan bersama keluarga di Eastern - Bandung yang saya dapatkan adalah rasa kecewa dan marah. Ketika memasuki restoran, saya sempat merasa nyaman dengan suasana dan tata letak meja dan kursi yang cukup lapang. Kami memesan beberapa makanan termasuk dimsum. Aneka ragam dimsum tersedia dan memang rasanya bisa dibilang nikmat. Lalu kami pun memesan beberapa makanan utama termasuk udang mayonnaise, sapi lada hitam, nasi goreng, sapo tahu seafood dan kwetiaw goreng cah sapi. Kami senang akan rasa makanan yang disediakan, semuanya berjalan lancar sampai ketika datanglah pesanan kwetiaw goreng cah sapi. It was overcooked and looks like a heap of leftovers! Dan mereka tidak mau mengganti pesanan tersebut dengan alasan makanan tidak bisa diganti kecuali ada rambut atau benda asing lain, kalaupun diganti mereka tetap akan memasaknya seperti apa yang telah disajikan. Sungguh tidak profesional dan sama sekali tidak ada empatinya. A big NO for Eastern - Bandung!",
        rating: "2",
      },
      {
        id: "review-111",
        idRestaurant: "resto-5",
        idAccount: "user-28",
        description:
          "Saya memesan banyak sekali menu, dan makanan yang baik. Aku mulai menu anggur merah... Harga sekitar 175k untuk semua anda dapat makan",
        rating: "4",
      },
      {
        id: "review-112",
        idRestaurant: "resto-5",
        idAccount: "user-9",
        description:
          "Ip mall ini berada di timur... jika anda ingin makan di sini... itu lebih baik bagi anda untuk datang lebih awal, karena jika anda datang di 'makan malam atau makan siang' waktu... anda harus menunggu cukup lama... terutama di akhir pekan atau hari libur.ini adalah lezat dim sum...Saya pikir semua itu adalah makanan yang baik...",
        rating: "4",
      },
      {
        id: "review-113",
        idRestaurant: "resto-6",
        idAccount: "user-50",
        description:
          "Tempat parkirnya sempit. Tempat makannya jg tidak tidak terlalu besar, meja makan terutama, kurang nyaman untuk makan lebih dari 2org. Harus digabung. Cocok untuk tempat hang out. Menu makanan banyak dan bervariasi, makanan enak dan porsinya besar, harga sesuai dengan porsi dan rasa, cake.. JempolSo far walaupun masih ada kekurangan untuk menu makan, minum dan dessert semua yg sya coba enak (jempol, jempol, jempol)",
        rating: "4",
      },
      {
        id: "review-114",
        idRestaurant: "resto-6",
        idAccount: "user-48",
        description:
          "Kenapa saya katakan breakfast ala rumah, karena kebetulan saya mengunjungi tempat ini untuk breakfast. Dan Hummingbird eatery yang ada dijalan Progo Bandung ini menawarkan tempat untuk bersantap seperti layaknya dirumah. Menu makanan nya cukup bervariasi (khususnya breakfast) dan presentasi makanan nya juga cukup menarik. Untuk harga menunya terbilang sedikit mahal atau menurut pendapat saya pribadi untuk kelas harga menengah",
        rating: "4",
      },
      {
        id: "review-115",
        idRestaurant: "resto-6",
        idAccount: "user-33",
        description:
          "Cafe ini terletak dijl progo 14 , sesuatu yg tidak disengaja. Luar cafe sangat biasa...namun setelah masuk benar benar nggak ingin keluar. Ruangan dengan dekorasi menarik full kehidupan burung...ada kursi berdua, ada yg 6 kursi...mau dmoking dan smoking dengan musik lembut...dan kedua makan paginya enak teman pesan sandwich dan saya nasi ...lezattt patut kesini kembali",
        rating: "5",
      },
      {
        id: "review-116",
        idRestaurant: "resto-6",
        idAccount: "user-15",
        description:
          "Tempatnya cukup unik dan cozy buat hang out....dengan tema kebun dan kitchen didalam ruangan,Makanannya disajikan dengan unik. cemilannya juga enak.saya kebetulan kesana untuk sekedar santai, disana tersedia kopi juga, shake, tea seperti biasanya. Pancake nya yummy juga",
        rating: "5",
      },
      {
        id: "review-117",
        idRestaurant: "resto-6",
        idAccount: "user-7",
        description:
          "Makanannya memuaskan lidah, suasananya nyaman, layanannya juga OK. Gini deh, 5x ke Bdg bisa 4x ke sini..",
        rating: "5",
      },
      {
        id: "review-118",
        idRestaurant: "resto-6",
        idAccount: "user-35",
        description:
          "hummingbird eatery ini sangat nyaman untuk ngobrol lama bersama teman teman karena suasana nya yang dingin dan tenang bkin betah banget an juga makanan dan minumannya recomended deh!",
        rating: "5",
      },
      {
        id: "review-119",
        idRestaurant: "resto-6",
        idAccount: "user-2",
        description:
          "salah satu tempat makan yang berada dijalan progo, jalan yang cukup terkenal dan dipadati oleh kunjungan wisata. Hummingbird Eatery menyuguhnya sensasi makan yang menurut saya itu adalah backyard whimsical yang cendrung dipakai di eropa.makananya yang cukup menggugah selera di tunjangan dengan beverage yang dibalut dengan gelas cantik. plating food & Beverage di tempat ini salah satu yang saya sukai, makan bukan hanya rasa bagi saya, tetapi visula juga harus menunjang untuk mendapatkan kepuasa dalam menyantap.pelayanan yang cukup bagus walaupun cukup susah untuk waiters menhampiri dikarenan kesibukan dan ngobrol untuk kita mengorder makanan, tetapi hal tersebut tidak mengurangi minat saya untuk terus kembali lagi ketempat ini",
        rating: "5",
      },
      {
        id: "review-120",
        idRestaurant: "resto-6",
        idAccount: "user-9",
        description:
          "Beberapa kali ke sini, ga pernah kecewa dengan makanan dan minuman nya. Selain tampilannya menggugah selera, rasa nya pun enak.Tapi wiken kemaren sy mampir lagi ke sini. Pesan breakfast panini. Entah kenapa rasa nya kurang memuaskan. Dingin dan hambar. Bahkan panini di food truck yg harga nya lbh murah rasanya lbh enak. Semoga ke depannya bisa diperbaiki kualitas nya.",
        rating: "4",
      },
      {
        id: "review-121",
        idRestaurant: "resto-6",
        idAccount: "user-47",
        description:
          'tempatnya nyaman bgt buat ngobrol sama teman"...banyak gambar dan pernak pernik burung.biasanya klu ksini pilih yg ringan..pizza dan pasta...bisa makan bareng.varian pizza nya enak enak...pasta nya jg enak.disini banyak varian makanannya...indonesia maupun western.oh ya....kentang goreng rasa rendangnya juaraaa...enak bgt.varian minumannya jg banyak.untuk harga ya standart cafe lah...oh ya....dsini jg ada penginapan nya...buat yg dari luar kota dan ingin nginap seputaran fo....bisa nih.',
        rating: "5",
      },
      {
        id: "review-122",
        idRestaurant: "resto-6",
        idAccount: "user-4",
        description:
          "Restorannya designnya unik, lokasinya bagus dan makanannya enak juga. Di atas restoran ini ada kamar penginapan juga. Designnya lucu dan unik tapi untuk menginap di sini disarankan jangan karena restorannya rameee sekali.",
        rating: "5",
      },
      {
        id: "review-123",
        idRestaurant: "resto-6",
        idAccount: "user-38",
        description:
          "Waiting list untuk duduk di bagian 'sangkarburung'.. Menu nya ternyata lumayan beragam dan rasanya enak. Harganya menengah keatas..staf nya cekatan.",
        rating: "4",
      },
      {
        id: "review-124",
        idRestaurant: "resto-6",
        idAccount: "user-26",
        description:
          "just good. ngga sampai extraordinary. sy pesan grilled salmon dan cukup enak tapi potongannya terlalu tebal",
        rating: "4",
      },
      {
        id: "review-125",
        idRestaurant: "resto-6",
        idAccount: "user-11",
        description:
          "Saya suka duduk berlama - lama di restoran ini. Tempatnya nyaman dan tenang. Menu makanannya cukup banyak dan enak - enak. Porsinya pas buat saya makan sendiri. Dengan porsi sebanyak ini, menurut saya wajar kalau harganya cenderung sedikit mahal. Kalau suka makanan sehat masa kini, mereka juga menyediakan makanan - makanan tersebut. Yang agak sulit tempat parkirnya aja.",
        rating: "5",
      },
      {
        id: "review-126",
        idRestaurant: "resto-6",
        idAccount: "user-49",
        description:
          "Harganya sedikit lebih mahal tapi ok lah masih lebih murah untuk ukuran Jakarta. Jangan lupa sisakan kapling di perut untuk waffle nya sebagai penutup.",
        rating: "5",
      },
      {
        id: "review-127",
        idRestaurant: "resto-6",
        idAccount: "user-10",
        description:
          "Tempat bagus namun sering penuh sehingga terlalu ramai untuk anda yang tidak suka suasana ramai. Harga agak mahal rasa biasa saja.",
        rating: "4",
      },
      {
        id: "review-128",
        idRestaurant: "resto-6",
        idAccount: "user-6",
        description:
          "Restoran Hummingbird merupakan restoran yang menyediakan berbagai makanan terutama makanan bergaya Western dengan cita rasa yang berkelas dan unik. Interior restoran juga ditata dengan sangat indah sehingga sangat nyaman untuk tempat hang out ataupun bersantai.",
        rating: "4",
      },
      {
        id: "review-129",
        idRestaurant: "resto-6",
        idAccount: "user-1",
        description:
          "paling enk ke sini sama teman-teman se genk. minumannya unik-unik. masakan enak. harga sesuai dengan kualitas dan rasa",
        rating: "5",
      },
      {
        id: "review-130",
        idRestaurant: "resto-6",
        idAccount: "user-36",
        description:
          "B&b yang menyenangkan, unik...makanan enak ..bersih kasur empuk..kerennnnn dan murahhhhhh...hanya saja sering full",
        rating: "5",
      },
      {
        id: "review-131",
        idRestaurant: "resto-7",
        idAccount: "user-7",
        description:
          "Disini lebih baik datangnya malam saja, karna suasananya dingin dan tempatnya bagus sih menurut saya. cuman untuk makanannya biasa saja. ngga ada spesial juga.... hanya tempatnya bagus untuk di kunjungin.",
        rating: "3",
      },
      {
        id: "review-132",
        idRestaurant: "resto-7",
        idAccount: "user-16",
        description:
          "Sesuai dengan namanya , suasana di kampung daun sanga asri sdengan konep pedesaan yang hening, sejuk dan indah . Suasananya sangat romastis dan menenangkan apalagi jika datang dimalam hari selain suasananya, makanan nya disajikan pun enak dan variatif.",
        rating: "5",
      },
      {
        id: "review-133",
        idRestaurant: "resto-7",
        idAccount: "user-3",
        description:
          "Kl mlm hari suasana kampung daun lebih ok, tapi terkadang lebih ramai. Saya lebih suka table yang diatas, agak capek sih, tapi lebih private. Jujur makanannya biasa aja, gak ada yang istimewa. Tapi tempatnya ok banget.",
        rating: "4",
      },
      {
        id: "review-134",
        idRestaurant: "resto-7",
        idAccount: "user-27",
        description:
          "Suasana kampung daun pada malam hari keren banget!! Perasaan seperti dibawa ke pasar malam yg ada di desa.... Good job!x Untuk makanan, sorry ya, standar saja... Banyak yg jauh lebih enak. Mungkin saya akan kembali membawa teman atau kerabat dari luar negeri utk datang ke sana... Lupakan sejenak mengenai rasa masakan... Rasakan suasananya.. Awesome!!",
        rating: "5",
      },
      {
        id: "review-135",
        idRestaurant: "resto-7",
        idAccount: "user-30",
        description:
          "Tempatnya sejuk dan asri...bny yh rela antri u/bisa makan disini. Makanannya lumayan dan hrg sedikit mahal..tp klo bwt relax bsm keluarga rekomended bgt",
        rating: "4",
      },
      {
        id: "review-136",
        idRestaurant: "resto-7",
        idAccount: "user-35",
        description:
          "Suasana lembah dg air terjun kecil yg luar biasa dg makanan yg kualitasnya OK, serta harga yg pantas. Hidangan masakan tradisional yg cukup mewakili Jawa barat.",
        rating: "5",
      },
      {
        id: "review-137",
        idRestaurant: "resto-7",
        idAccount: "user-33",
        description:
          "Kampung daun lokasi nya di ujung dan dalam perunahan. Kita masuk ke lokasi kampung daun dari luar jalan sudah banyak jualan di punggir kiri kanan jalan seperti jajanan z kemudian baru restoran nya umumnya masakan sunda. Madajan nya biasa-biasa tak ada yg special pelayanan biasa saja.",
        rating: "3",
      },
      {
        id: "review-138",
        idRestaurant: "resto-7",
        idAccount: "user-24",
        description:
          "Kami berkunjung ke restauran ini pada malam hari. Wow, tempatnya sangat romantis. Lilin, jalan mendaki, konsep lesehan di tengah suara air terjun yang cukup dekat membuat suasana makan lebih nikmat.Jika anda datang ke tempat ini sebaiknya booking dulu karena waktu kami ke sana, kami menunggu 5 menit-an sebelum kami dapat tempat makan. Menuju ke dalam tempat makan, kami berjalan naik, sebelah kiri dan kanan banyak tumbuhan seperti makan di tengah hutan. Sesampainya di tempat makan, konsep lesehan dengan disediakan bantal agar lebih nyaman. Bisa tiduran juga karena tempat makan cukup besar.Memesan makanan dengan menggunakan kentongan untuk memanggil petugas. Pesanan kami tidak terlalu lama datangnya.Kami pesan dengan makan untuk 3 orang dewasa dan 2 anak-anak. Sedikit terkejut karena satu porsi cukup banyak untuk satu orang dewasa. Makanannya enak-enak dan bervariasi. Menurut kami harga yang ditawarkan tergolong wajar. Mungkin yang sedikit mahal adalah kerak telor.Bagi yang membawa anak-anak pasti senang karena mereka bisa menyaksikan air terjun dari dekat sambil makan.Sewaktu pulang kami ditawarkan brokoli dengan harga yang terbilang wajar dan patut dibeli jika anda suka dengan brokoli.Lain waktu kami pasti akan mampir ke Kampung Daun",
        rating: "5",
      },
      {
        id: "review-139",
        idRestaurant: "resto-7",
        idAccount: "user-46",
        description:
          "Nyaman, bersih, makanan yang enak, dan sejuk ! Saung-saung yang nyaman lengkap dengan bantal dan guling, suara air mengalir juga alunan musik sunda. selain tempat dan makanan yg enak, yang berkesan dari tempat ini adalah petugas toilet yang sangat ramah.. :)",
        rating: "5",
      },
      {
        id: "review-140",
        idRestaurant: "resto-7",
        idAccount: "user-25",
        description:
          "Tempat yang wajib dikunjungi di daerah Lembang Bandung, termasuk restoran mewah dengan berbagai variasi makanan, tempat gubukan2 yang begitu nyaman dengan kucuran air mancur sehingga membuat kami betah berlama lama disini",
        rating: "5",
      },
      {
        id: "review-141",
        idRestaurant: "resto-7",
        idAccount: "user-41",
        description:
          "kampung daun ini sangat bagus untuk dikunjungi pada malam hari saat ada di lembang karena suasana sangat asri sekali, dan dingin, pokoknya cocok untuk habiskan waktu dengan keluarga",
        rating: "5",
      },
      {
        id: "review-142",
        idRestaurant: "resto-7",
        idAccount: "user-13",
        description:
          "Ke Bandung tentu tidak boleh lupa menyantap masakan Sunda. Nah, masakan Sunda terbaik saat ini dapat ditemukan di Kampung Daun. Suasana rumah makannya homy, menu sangat bervariasi dan dihidangkan dengan cepat. Rasa dijamin kelezatannya.",
        rating: "5",
      },
      {
        id: "review-143",
        idRestaurant: "resto-7",
        idAccount: "user-22",
        description:
          "Tempatnya alami dan menyatu dengan alam. Makanannya enak walaupun mahal tp worthed. Tenang suasananya, ditambah suara air sungai semakin membuat rileks dan berlama-lama disana.",
        rating: "5",
      },
      {
        id: "review-144",
        idRestaurant: "resto-7",
        idAccount: "user-17",
        description:
          "Setiap ke bandung saya selalu ksini t4nya bagus dan nyaman. Udara disini dingin. Alamnya kerasa banget. Makanannya lumayan",
        rating: "5",
      },
      {
        id: "review-145",
        idRestaurant: "resto-7",
        idAccount: "user-9",
        description:
          "Salah satu dari sekian banyak restaurant khas sunda yang rasa masakanya enak, bervariasi, dengan tepat yang sangat sejut dan nyaman. sangat cocok untuk menu keluarga.",
        rating: "5",
      },
      {
        id: "review-146",
        idRestaurant: "resto-8",
        idAccount: "user-25",
        description:
          "Tempat hang out yang cukup baik dan penyajian makanan nya ada yang unik. Sayang antrean selalu panjang.",
        rating: "3",
      },
      {
        id: "review-147",
        idRestaurant: "resto-8",
        idAccount: "user-41",
        description:
          "Porsi cukup besar buat saya, rasa ok lah dan harga masih cukup diterima dompet, asal ga setiap hari saja. Interior so so macam di dapur nenek sesuai dengan varian menu yang ditawarkan. Kalau ke bandung layak untuk dicoba.",
        rating: "5",
      },
      {
        id: "review-148",
        idRestaurant: "resto-8",
        idAccount: "user-5",
        description:
          "kami makan siang di karnivor setelah malam sebelumnya datang tapi antri panjang sekali sehingga harus kembali esok harinya. Steak dengan cita rasa tinggi dan harganya cukup murah. Jika ingin mkan malam sebaiknya memesan tempat terlebih dahulu",
        rating: "5",
      },
      {
        id: "review-149",
        idRestaurant: "resto-8",
        idAccount: "user-43",
        description:
          "Setiap kali maen ke kota Bandung, makan di Karnivor selalu menjadi tujuan utama. Menu menu grill (daging bakar) disini selalu menggugah selera. Mulai dari berbagai steak (sapi atau ayam) berbagai ukuran (ukuran normal Dan monster). Harganya juga terjangkau banget. Satu porsi sirloin steak hanya 59 ribu saja.. Dan 1 porsi monster steak (daging sapi 1kg) hanya 299ribi saja. Minuman favorit untuk menemani makan steak yaitu gorilla punch (jeruk soda dengan biji selasih) dengan harga 39K saja. Namun kota harus bersabar ketika makan di resto ini ketika musim liburan, karena sudah dipastikan mengantri. Tetapi lamanya antrian akan terbayar dengan hidangan yang disajikan.",
        rating: "5",
      },
      {
        id: "review-150",
        idRestaurant: "resto-8",
        idAccount: "user-23",
        description:
          "Saya berkunjung kesini saat sedang berwisata dengan teman. Salah satu sahabat saya lalu merekomendasikan Karnivor untuk makan malam. Suasana di resto ini sangat cozy dan nyaman. Selain itu, semua menu yang kami pilih ternyata sangat enak, Steak nya sangat empuk dan well made. Saya paling suka Donut Steak nya yang mensubtitusi burger bun dengan sugar glazed donut. So yummy!",
        rating: "5",
      },
      {
        id: "review-151",
        idRestaurant: "resto-8",
        idAccount: "user-49",
        description:
          "Lokasinya di Jalan Riau, venuenya lumayan ok, decornya bergaya hutan. Waktu saya kesini lagi ramai bgt.Untuk makanannya saya suka Sirloin Steaknya, enak. Harganya juga murah menurut saya.",
        rating: "4",
      },
      {
        id: "review-152",
        idRestaurant: "resto-8",
        idAccount: "user-24",
        description:
          "Kapan lagi nih bisa makan steak seberat 1kg hanya dengan 200rb'an.. harga pas di kantong dan suasana yang mendukung membuat sisi keganasan manusia kita keluar. Selain steak 1kg juga ada sosis yang beratnya juga 1kg. pas dibuat nongkrong bareng temen atau berdua dengan kekasih.",
        rating: "5",
      },
      {
        id: "review-153",
        idRestaurant: "resto-8",
        idAccount: "user-29",
        description:
          "Bagi orang sekitar Jakarta mungkin biasa dengan Holicow! nya untuk pilihan hidangan steak. Di Bandung restoran ini mungkin memiliki konsep mirip dengan holicow!.Makanan utama yang disediakan utamanya adalah steak dengan berbagai pilihan. harga juga standarLokasi cukup strategis di kawasan Factory Outlet jalan Riau. Jadi setelah puas berbelanja dapat mampir kesini untuk mengisi energi.Suasanya cukup nyaman serta staf restoran yang sangat membantu.",
        rating: "5",
      },
      {
        id: "review-154",
        idRestaurant: "resto-8",
        idAccount: "user-42",
        description:
          "Terletak di jalan Riau, sebelah Nanny's. Steaknya cukup empuk. Saya memesan steak yang 1kg untuk 4 orang ternyata kelebihan. Cukup untuk 6 orang tapi karbohidrat nya cuma 4 potong potato wedges. Sayurannya terlalu sedikit dan saucenya dikit banget buat sekilo. Harganya worth it dan pelayanannya ramah banget:)",
        rating: "5",
      },
      {
        id: "review-155",
        idRestaurant: "resto-8",
        idAccount: "user-21",
        description:
          "Lapar ketika malam hari, saya saat melintas jalan Riau melihat restoran yang sangat ramai akhirnya saya memutuskan untuk mampir. Saya cukup kaget karena harga sirloin hanya Rp 45 ribu, Saya pikir porsinya akan kecil, ternyata dugaan saya salah, rasanya enak dan porsinya cukup.",
        rating: "5",
      },
      {
        id: "review-156",
        idRestaurant: "resto-8",
        idAccount: "user-10",
        description:
          "Ketika saya liburan ke bandung tepatnya di jl. Progo. Saat makan malam saya berjalan menikmati indahnya kota bandung. Saya menemukan restoran dengan view lumayan menantang.sangat bagus restorannya semuanya di desaib rapi dan bersih. Baik food and beverage nya sangat enak fresh dan variasi. Sangat bagus untuk kalangan tongkrongan teman2. Great restaurant in bandunh",
        rating: "5",
      },
      {
        id: "review-157",
        idRestaurant: "resto-8",
        idAccount: "user-22",
        description:
          "Suasana restoran didesain seperti halloween, sangat menarik di malam hari. Cocok untuk makan bersama teman-teman. Sayangnya ketika siang hari agak gerah.",
        rating: "4",
      },
      {
        id: "review-158",
        idRestaurant: "resto-8",
        idAccount: "user-38",
        description:
          "Karnivor yang berlokasi di Jalan Riau (Martadinata) adalah salah satu resto favorit saya di Kota Bandung. Kapanpun waktu berkunjungnya, parkirannya selalu penuh, membuktikan betapa larisnya tempat ini. Ambience di Karnivor sangat menyenangkan, mengambil tema jaman batu ala-ala Flintstone dengan penerangan lampu yang temaram, dipisahkan pula area smoking dan non-smoking. Rekomendasi saya adalah tenderloin steak (49k) dan t-rex bone / rib eye (79k) dengan saus mushroom dan kentang keriting (kentang dipotong tipis lalu digoreng, rasanya seperti potato chips), dessert favorit adalah ORO yaitu roti goreng dengan isian oreo yang diberi topping keju dan meises, sedangkan untuk minumannya cobalah gorilla punch yaitu minuman menyegarkan dengan citarasa markisa yang disajikan dalam pitcher.",
        rating: "4",
      },
      {
        id: "review-159",
        idRestaurant: "resto-8",
        idAccount: "user-2",
        description:
          'Tidak ada kata lain selain memuaskan setiap kali berkunjung ke karnivor. Makanan yg variatif menjauhkan dari kata bosan apabila akan berkunjung ke karnivor. Karnivor menyediakan makanan utk personal maupun utk bersama dgn porsi "monster". Steak dan sosisnya enak sekali. Pizzanya pun ga bikin eneg. Kalo mau datang disarankan sblm jam makan siang atau anda akan menunggu. Tempatnya pun sangat nyaman sehingga tak heran pengunjung betah berlama2 di karnivor :)',
        rating: "5",
      },
      {
        id: "review-160",
        idRestaurant: "resto-8",
        idAccount: "user-47",
        description:
          "Karnivor steak ini berlokasi di jalan riau/martadinata bandung. Steak nya enak sekali! terutama menu Tenderloin steak with mash potato dengan kuah barbeque! U must come to karnivor if u ever drop in bandung",
        rating: "5",
      },
      {
        id: "review-161",
        idRestaurant: "resto-8",
        idAccount: "user-31",
        description:
          "Dateng kesini buat buka puasa, rameeeee banget. Nunggu sejam lebih, tapi maklum soalnya jam buka puasa dan banyakan ^^ Steaknya renak dan ga terlalu mahal, makanan selain steak dan minumannya juga beragam. Recommended",
        rating: "5",
      },
      {
        id: "review-162",
        idRestaurant: "resto-8",
        idAccount: "user-18",
        description:
          "Jika datang ke tempat ini disarankan jangan weekend, menghindari antrian panjang. Saya dan suami datang kesini saat malam minggu, kami menunggu hampir 30 menit baru dapat tempat duduk. Harganya terjangkau. Porsinya besar dan rasanya enak. Letaknya di jalan RE martadinata.",
        rating: "5",
      },
      {
        id: "review-163",
        idRestaurant: "resto-8",
        idAccount: "user-44",
        description:
          "Cari steik yang ukuran normal... ya Karnivor! Biasa dan sudah jarang tempat jualan steik di Bandung yang dihidangkan dengan berat 200gram di Karnivor tetap dan jangan pernah di rubah...",
        rating: "5",
      },
      {
        id: "review-164",
        idRestaurant: "resto-8",
        idAccount: "user-7",
        description:
          "Saya dan pasangan sedang mencari-cari teman untuk merayakan anniversary kami. Kami sempat bingung untuk mencari tempat. Setelah menjelajah, kami memutuskan untuk makan di tempat ini. Tempatnya unik karena nuasana ethnic yang kental. Soal harga terjangkau karena porsi yang ditawarkan besar. Menu yang terkenal di sini adalah monster steak, monster sosis dan minumannya adalah gorilla punch. Semua bisa disantap bersama-sama dengan keluarga. Steaknya juga enak dan lembut. Silahkan mampir saja letaknya di jalan riau",
        rating: "5",
      },
      {
        id: "review-165",
        idRestaurant: "resto-8",
        idAccount: "user-14",
        description:
          "Saya dan pasangan setiap pergi ke Bandung pasti dan harus makan disini. Dengan harga yang reasonable tapi kita bisa menikmati Steak yang enak dengan pilihan yang oke.Saya biasanya pesan T-Rex Bone dan Coffee Rubbed Steak + Gorilla Punch, pasangan saya selalu Tenderloin + Ice Tea. Besok2 saya mau coba menu yang raksasa hahaha...Oiya resto ini terkenal dengan menu raksasanya alias menu kelaperan, ada 1kg steak, beef tower dll..Mantablah...",
        rating: "5",
      },
      {
        id: "review-166",
        idRestaurant: "resto-8",
        idAccount: "user-17",
        description:
          "porsi makanan disini super sekali, banyak dan enak. untuk porsi sebanyak itu, harga cukup terjangkau. makanannya banyak daging, wajib coba steaknya :)",
        rating: "5",
      },
      {
        id: "review-167",
        idRestaurant: "resto-8",
        idAccount: "user-11",
        description:
          "Karnivor ada di Jalan Riau, Kalo dari FO, terus aja deh jangan sungkan-sungkan. Sebelahan sama nanny's pavilion. Pertama dateng, waiting list, n aga ribet sistemnya, n pelayannya aga judes, mungkin krn rame bgt. Tempatnya sumpek bgt, sbnrnya interiornya menarik tp krn mrk mgkin mau muat banyak, jd sumpek kaya warteg. Tp ane udh ultimatum mas nya, gamau di tempat yg sumpek gt, ane milih tempat. Jd dpt tempat yg mendingan deh. Mood agak bete di awal. wkwkwk. Mereka suguhin makanan western, which is makanannya sih enak. Tp cuma di enak ga pake banget. Yg ane suka itu porsinya banyak n murahh. Termasuk murah dibanding harga di jkt yah. Disini ada burger n pizza super besar jg. Krn ane sm BF aja kesananya pasti ga muat soalnya. Ane beli kebab kambing, krn yg beef adanya jam 3 (kan dah ane bilang sistemnya ribet). BF beli apa ya... lupa... kaya pizza stuffed daging gt. porsinya banyak bgt. Additional dish nya beef cordon bleu, ane curious aja pgn tau, krn biasanya kan chicken, tp ga enak ternyata. Drinks nya mojito nya enakkk... berdua kita cmn abis 250rbuan kmrn. kenyaanggg bgt.",
        rating: "4",
      },
      {
        id: "review-168",
        idRestaurant: "resto-8",
        idAccount: "user-48",
        description:
          "Buat kamu pecinta steak, mungkin ini salah satu resto yang harus kamu kunjungi. Steaknya ukuran besar, rasanya lumayan enak sih, dan harganya terjangkau banget men! Untuk saus steaknya paling suka sama yang lada hitam, trus kentangnya mashpotato tapi sering keabisan sedih. Ribs nya juga recommended! Suka kesini kalo ke bandung karna tempatnya juga enak buat nongkrong sama temen-temen.",
        rating: "5",
      },
      {
        id: "review-169",
        idRestaurant: "resto-9",
        idAccount: "user-48",
        description:
          "Saya datang kesini sore hari, pemandangannya sangat bagus, kita bisa naik lift ke rooftopnya. Kebetulan pas saya kesini tidak terlalu ramai. Makanannya lebih banyak western, rasanya juga enak. Saya coba steak and eggnya. Servicenya ok, dan harganya juga terjangkau.",
        rating: "4",
      },
      {
        id: "review-170",
        idRestaurant: "resto-9",
        idAccount: "user-4",
        description:
          "malam wedding anniversary kami rayakan disini. suasana hujan, jadi bagian outdoor lantai serta meja kursi bsah. kami mengambil tempat yang ada kasur mini. lumayan bisa rebahan. Tempatnya enak. Banyak anak muda kaya kesini. Kami pesan sop konro dan iga bakar. Rasanya enak. harganya pas. makanan berat diatas 50ribu. cuma dia juga jual alkohol. mudah-mudahan masakannya halal",
        rating: "4",
      },
      {
        id: "review-171",
        idRestaurant: "resto-9",
        idAccount: "user-3",
        description:
          "Tempatnya bagus, selain menyediakan makanan yg enak, tempat ini juga menyediakan view kota bandung. Tapi sayangnya saya datang pada malam hari dan pada saat hujan, jadi tidak terlalu terlihat oleh kamera",
        rating: "4",
      },
      {
        id: "review-172",
        idRestaurant: "resto-9",
        idAccount: "user-15",
        description:
          "cafe yg cukup indah namun sangat kotor untuk ukuran cafe saya mendapati banyak kotoran dibagian depan dibagian kasur untuk rasa standar dan harga pun tergolong standar",
        rating: "1",
      },
      {
        id: "review-173",
        idRestaurant: "resto-9",
        idAccount: "user-38",
        description:
          "Makan malam disini salah satu yang terbaik menurut sayaBaik dari pilihan makanan dan tentu saja dari pemandangan yang anda dapat di resto ini Udara dingin menambah suasana makan malam anda lebih seruSerta pilihan menu yang sangat beragam yang ditawarkan di tempat ini",
        rating: "4",
      },
      {
        id: "review-174",
        idRestaurant: "resto-9",
        idAccount: "user-45",
        description:
          "Kami mengunjungi maja house untuk grup dinner. Pada saat sampai di tempat parkir,udara di luar sangat fresh akan tetapi di dalam restorannya sendiri udara tidak fresh dan bau rokok,banyak orang merokok. Mungkin karena tempatnya memang untuk nongkrong. Untuk makanan,rasanya standar tapi porsinya kecil. Satu hal lagi yang mengganggu adalah meja untuk makannya berdebu. Pelayanan ok dan makanan cepat datang.",
        rating: "3",
      },
      {
        id: "review-175",
        idRestaurant: "resto-9",
        idAccount: "user-36",
        description:
          "Tempat ini mudah dicari karena terletak di pinggir jalan utama. Cukup menarik dan nyaman untuk sekedar menghabiskan waktu bersama teman atau keluarga. Makanan dan minuman yang disajikan lumayan. Harga juga tidak terlalu mahal.",
        rating: "4",
      },
      {
        id: "review-176",
        idRestaurant: "resto-9",
        idAccount: "user-40",
        description:
          "Lokasi tidak terlalu jauh dari jalan utama, view di malam hari ok tuk melepas penat dari jakarta... makanan rasanya biasa saja karena memang yang dijual pemandangan dan interior restaurant.",
        rating: "3",
      },
      {
        id: "review-177",
        idRestaurant: "resto-9",
        idAccount: "user-21",
        description:
          'Saya memesan bookingan untuk ulang tahun saya, dan tanpa ada konfirmasi staff Maja House langsung meng"cancel"kan bookingan saya. Setelah ditanya "Saya Pikir", Orang yang bekerja di perhotelan atau service tidak mengenal istilah "asumsi" semua harus jelas dan pasti. setelah itu berlanjut dengan pemesanan makanan, 3 tamu saya tidak mendapakan makanan sementara makanan kami sudah selesai dan dinyatakan "sold out" tanpa ada konfirmasi, worse case adalah mereka charge makanan yang tidak keluar dan minuman yang tidak keluar...think about it when you are going there, I feel like cheat it by them....',
        rating: "1",
      },
      {
        id: "review-178",
        idRestaurant: "resto-9",
        idAccount: "user-37",
        description:
          "Saya datang bersama dengan teman2 ke bandung dimana kami mampir di maja house untuk menikmati makan malam sambil ditemani dengan dinginnya kota bandung. KAmi pesan pizza dan beberapa makanan pletter lainnya. Serta minuman beer dan coffee. Untuk rasa makanannya overall cukup enak dan minumannya juga berasa. Dimana untuk suasananya cukup bagus. Akan tetapi harganya sedikit agak mahal.",
        rating: "4",
      },
      {
        id: "review-179",
        idRestaurant: "resto-9",
        idAccount: "user-29",
        description:
          "Awal Juli saya menginap di hotel Stevie G yg bersebelahan dgn resto Maja House...tempat yg nyaman tuk makan malam, romantis, makanan yg enak dan harga tdk terlalu mahal.Yang unik ada bale bisa buat tiduran menghadap ke pemandangan gunung malam hari.Menjadikan makan malam yg berkesan bersama istri tercinta.",
        rating: "4",
      },
      {
        id: "review-180",
        idRestaurant: "resto-9",
        idAccount: "user-43",
        description:
          'Hmmmm, akses tidak terlalu susah cuma, hati-hati yang bawa orang tua sepuh penuh dengan "trap"cukup tinggi menuju restauranya.sesampai di restaurannya, wuooow good enough, suasana yang menyenangkan . Terbagi menjadi 3 style : ada restaurant style, Cafe style dan lesehan. Makanan cukup variatif , tease OK,, but too small portion .Yang saya pesan Iga bakar daging over cook, terlalu empuk .Pa Deny mungkin "head" di tempat itu cukup cooperative,dan cukup ramah .Recomended deh ....',
        rating: "4",
      },
      {
        id: "review-181",
        idRestaurant: "resto-9",
        idAccount: "user-13",
        description:
          "Menginap di Stevie G Hotel saya memilih untuk makan malam di Maja House yang cukup tersohor. Pilihan makanan bervariasi dari Indonesia, Asia hingga Internasional. Saya memesan mixed grill yang berisikan lamb, beef, sausage, chicken dengan harga 80 ribuan, cukup murah untuk restoran yang berada di atas. Saya duduk di sofa bed yang menghadap ke pemandangan. Sangat nyaman untuk berdua dengan pasangan.",
        rating: "4",
      },
      {
        id: "review-182",
        idRestaurant: "resto-9",
        idAccount: "user-7",
        description:
          "Hal positif dari tempat ini adalah kita bisa melihat bandung dari atas. Udaranya yang sejuk membuat tempat ini semakin terasa nyaman. Hal negatif menurut saya adalah sulit untuk mendapatkan tempat duduk yang bisa melihat pemandangan kota bandung karena ramainya pengunjung",
        rating: "5",
      },
      {
        id: "review-183",
        idRestaurant: "resto-9",
        idAccount: "user-2",
        description:
          "Worth for the price. wktu ksana banyak anak mahasiswa n sma, ga tll cocok kl buat family. Tempat duduk di balcony jg terlalu bdekatan satu sama lain.",
        rating: "3",
      },
      {
        id: "review-184",
        idRestaurant: "resto-9",
        idAccount: "user-25",
        description:
          "Ini kali pertama saya sempatkan datang ke Maja House. Resto ini saudah sangat dikenal sebagai tempat hang out ataupun dine in.Saya datang saat siang hari dan berencana untuk lunch. Tetapi dari beberapa pilihan menu, kami kurang tertarik karna tidak ada yang cukup khas.Akhirnya kami hanya memesan food platters yang ternyata mengenyangkan untuk dimakan berdua. Kami memesan minuman green tea latte dan teh tarik. Disajikan dengan gelas yang besar tetapi rasa minuman terlalu manis dan terasa kurang original.Saya suka sekali duduk di sisi sampig yang menghadap ke pemandangan bukit. Sofa bed yang nyaman dengan angin yang sejuk, benar2 asik untuk bersantai.",
        rating: "3",
      },
      {
        id: "review-185",
        idRestaurant: "resto-9",
        idAccount: "user-39",
        description:
          "Resto ini cocok untuk bersantai dan foto-foto. Udaranya sejuk. Pemandangan dari resto ini bagus karena lokasinya yang sedikit tinggi. Desain resto nya juga unik. Jadi ga cuma bisa melihat pemandangan indah tapi juga desain interior resto nya memberi kesan khas tersendiri. Ada hotel juga di area ini dengan desain unik. Kalau mau refreshing dan mencari udara segar, restoran ini dapat memberikan suasana segar, melepas penat. Pemandangan alam indah sejauh mata memandang, desain unik di dalam resto untuk bersantai.",
        rating: "4",
      },
      {
        id: "review-186",
        idRestaurant: "resto-9",
        idAccount: "user-14",
        description:
          "Tempat nya nyaman, pemandangan bagus, harga terjangkau.untuk makanannya menurut saya enak, tapi minuman cocktail nya kurang enak, bartendernya masih perlu belajar lagi sepertinya. :P",
        rating: "4",
      },
      {
        id: "review-187",
        idRestaurant: "resto-9",
        idAccount: "user-28",
        description:
          "Suasana rumah banget deh asli! Tempatnya enak banget kalo buat santai bareng keluarga, nongkrong sama temen ngemil2 ganteng cantik recommended deh! Kalo udah malem biasanya buat anak hacep bandung kesini nih hehe. Makanan enak enak kok tapi sayang nih pelayanannya lama tapi sambil nunggu makanan dateng biar gak bosen foto-foto deh! Nice view banget haha",
        rating: "5",
      },
      {
        id: "review-188",
        idRestaurant: "resto-9",
        idAccount: "user-8",
        description:
          "Saya kesini atas rekomendasi dr tmn suami.saya mencari tempat ini melalui GPS.jalan menuju restoran ini kecil dan menanjak tapi begitu sampai...wow...baguss!!!Tempatnyaa romantis..viewnyaa pemandangan kota bandungUntuk harga makanan trmasuk standar..tidak begitu mahal dan tidak terlalu murah jugaUntuk cita rasaa...lumayan enak Kalo saya ke bandung lagi..saya pasti mampir kesinii :)",
        rating: "5",
      },
      {
        id: "review-189",
        idRestaurant: "resto-9",
        idAccount: "user-30",
        description:
          "Saya mampir ke sini, tidak disengaja. Awalnya tujuan kami ke kampung gajah, tapi karna sudah terlampau lapar,kami pun mampir ke maja house ini. Ketika kami disuguhi menunya, ternyata harganya membuat kami terpukau, mahal euy(bagi saya lho). Tapi memang suasana di sini membuat resto ini beda. Apalagi kalau ke sini senja sampai malam hari. Untuk makanan, spaghetinya enak. Tapi bagi muslim hati-hati dalam memesan makanan, karena ada beberapa makanan yang menggunakan wine.",
        rating: "3",
      },
      {
        id: "review-190",
        idRestaurant: "resto-9",
        idAccount: "user-47",
        description:
          "Maja house menyediakan view and makanan yg cukup bervariasi. Cobalah makanan yg di grill (steak) sepertinya bisa mjd menu favorit. Minuman juga cukup lengkap, dari yg dingin smp minuman hangat. Lokasinya yg cukup tinggi memberikan pemandangan yg tak terlupakan.",
        rating: "3",
      },
      {
        id: "review-191",
        idRestaurant: "resto-9",
        idAccount: "user-20",
        description:
          "Karena letaknya yang tinggi, pemandangn resto ini juara sekali. Design restorannya juga bagus dan sangat anak muda. Ada pilihan untuk duduk di kursi atau lesehan di atas sofa lebar seperti kasur. Untuk mengobrol lama bersama teman di resto ini sangat enak. Menu yang tersedia pilihannya lengkap dari Indonesia sampai western. Namun dari segi rasa biasa saja. Pelayanannya juga agak lama dan kurang responsif.",
        rating: "3",
      },
      {
        id: "review-192",
        idRestaurant: "resto-9",
        idAccount: "user-16",
        description:
          "Maja house cukup asyik, meskipun makanan dan minuman mahal namun suasana cafe sungguh menarik...Di sebelah maja haouse ada stevie g art hotel yang menarik karena hotelnya masing2 kamar punya konsep yang berbeda beda. Di maja house, hati2 ketika malam sangat dingin karena angin berhembus cukup kencang",
        rating: "3",
      },
      {
        id: "review-193",
        idRestaurant: "resto-9",
        idAccount: "user-6",
        description:
          "Datang menunggu sunset adalah pilihan yang tepat untuk maja house, selain itu tersedia hotel di sampingnya, konsepnya yang unik dengan makan di atas tempat tidur sangat unik",
        rating: "4",
      },
      {
        id: "review-194",
        idRestaurant: "resto-9",
        idAccount: "user-41",
        description:
          "tempatnya mudah dijangkau. dekorasinya cukup simpel dan hommy sehingga sangat nyaman untuk berkumpul bersama teman-teman. resto ini sangat menonjolkan pemandangan yang bagus. untuk makanannya sendiri biasa saja namun tetap enak..",
        rating: "4",
      },
      {
        id: "review-195",
        idRestaurant: "resto-10",
        idAccount: "user-2",
        description:
          "datang bersama keluarga, ada cake shop kecil, agak mahal untuk cake tapi enak. Beberapa menu makanan enak, porsi cukup, harga diatas rata-rata tapi suasana sangat menyenangkan, terutama kalau datang beramai-ramai, ada playground diluar & didalam, anak-anak kecil tidak akan bosan.....",
        rating: "5",
      },
      {
        id: "review-196",
        idRestaurant: "resto-10",
        idAccount: "user-1",
        description:
          "Datang ke Miss Bee pagi hari ternyata sudah ramai untuk sarapan. Terletak di ketinggian, Miss Bee memberikan suasana sejuk, tersedia beberapa ruangan untuk makan, yang unik tentu di rumah kaca. Keseluruhan menu sangat bervariasi termasuk makanan Indonesia dan barat. Menu sarapan juga cukup variasi, porsi cukup besar, rasanya cukup enak, selain sarapan di tempat, saya pun memesan makanan untuk dibawa pulang. Ada rabbit hole dan sekitar 5 kelinci yang dilepas, sangat lucu dan menarik perhatian anak kecil, juga terdapat area bermain anak. Sangat menyenangkan",
        rating: "5",
      },
      {
        id: "review-197",
        idRestaurant: "resto-10",
        idAccount: "user-21",
        description:
          "kami sekeluarga (5 dewasa dan 1 anak balita) berkesempatan untuk duduk di rumah kaca. walaupun siang hari tetapi tak terasa terik dan panas.semua makanan western enak, tetapi untuk masakan iga bakar agak keras dagingnya.anak bisa bermain perosotan dan jungkat jungkit.sayang saat weekday kelinci-nya tidak dikeluarkan dari kandang, jadi anak tidak bisa berinteraksi dengan hewan",
        rating: "5",
      },
      {
        id: "review-198",
        idRestaurant: "resto-10",
        idAccount: "user-34",
        description:
          "Disini menu pilihannya banyak. Udaranya segar. Tempatnya cantik. Makanannya enak-enak terutama Fish n Chips nya. Patut dicoba. Cakenya setelah jam 6 sore beli 2 gratis 1 (hari minggu saja)",
        rating: "5",
      },
      {
        id: "review-199",
        idRestaurant: "resto-10",
        idAccount: "user-49",
        description:
          "Setelah kamu mengunjungi Padma Hotel Bandung, tempat ini harus kamu kunjungin. Pas bgt untuk quality time bareng keluarga, pacar, dan sahabat. Banyak spot2 untuk foto. Pelayanan ramah & cepat tanggap.",
        rating: "5",
      },
      {
        id: "review-200",
        idRestaurant: "resto-10",
        idAccount: "user-36",
        description:
          "Setiap ke Bandung pasti menyemptkan diri untuk kesini. Suasana resto nya menyenangkan, dekorasi bagus, dan tersedia playground kecil untuk anak-anak bermain di bagian belakang. Untuk rasa makanan, cukup enak. Porsi dan harga sebanding...",
        rating: "5",
      },
      {
        id: "review-201",
        idRestaurant: "resto-10",
        idAccount: "user-25",
        description:
          "Karena antrian untuk makan disini cukup panjang, jangan coba-coba unutk datang langsung tanpa reservasi karena akan lama untuk Anda dapat tempat duduk, terutama di saat akhir pekan. Hidangannya berupa menu fusion Asia-Western dengan cita rasa yang bervariasi dan enak. Minumannya juga banyak yang menarik. Kopinya lumayan.Rumah kaca dan tempat bermain anak yang menjadi daya tarik tempat ini juga.",
        rating: "4",
      },
      {
        id: "review-202",
        idRestaurant: "resto-10",
        idAccount: "user-32",
        description:
          "Saya kesini karena penasaran dengan tempatnya dan ternyata benar, tempatnya bagus dan makanannya enak2 semuaaaaaSaya pesen Melted Chiken Rosti dan Hot Lemon Tea, untuk dessert saya pilih Baileys Mudslide dan ini rasanya enak sekali duhhh bikin pengen lagi. Harganya masih reasonable untuk ukuran resto di Bandung. Tempatnya asik banget kayak di perumahan gitu jadi sepi dari suara kendaraan.",
        rating: "5",
      },
      {
        id: "review-203",
        idRestaurant: "resto-10",
        idAccount: "user-18",
        description:
          "Makanan enak, porsi lumayan besar, namun di menu tdk ada explainnya sehingga harus bertanga ke waiternga. Cake juga enak. Puas pokoknya!!",
        rating: "5",
      },
      {
        id: "review-204",
        idRestaurant: "resto-10",
        idAccount: "user-46",
        description:
          "Lokasinya cukup di dalam gang, di daerah ciumbuleuit. Jika anda menginap di Padma Hotel, lokasi Miss Bee tidak jauh dari sana.Untuk menghindari antrian, sebaiknya lakukan reservasi terlebih dahulu karena tempat ini selalu ramai.Makanannya kebanyakan western namun rasa cukup enak. Coba oesan Salmon Cream Pasta dan kopi affogato nya. Di belakang juga ada area playground, jadi sangat cocok untuk dikunjungi bersama keluarga.",
        rating: "5",
      },
      {
        id: "review-205",
        idRestaurant: "resto-10",
        idAccount: "user-50",
        description:
          "resto ini gak keliatan dari jalan besar karena tempatnya masuk-masuk ke jalan kecil, dari rumah nampak seperti rumah begitu masuk, konsepnya lucukkk... di dalamnya seperti dibagi beberapa bagian dengan berbeda konsep, ada bagian yang seperti di rumah, ada bagian yg berkonsep seperti di rumah kaca atau cafe modern minimalis, ada yg konsep seperti di taman, dan ada juga konsep seperti di teras belakang rumah. terdapat play ground dan dapurnya juga berkonsepkan open kitchen. biasanya seperti yang udah-udah saya datangi resto atau coffee ship yang berkonsep biasanya makanannya tidak terlalu enak, tapi di miss bee dari ke empat makanan yang saya pesan itu enak semuaaaa dan fresh! minumannya juga enak2. tapi sayangnya agak susah memanggil waitersnya karena tempatnya terlalu luas dan ber-part part jadi kita mesti jalan cari waitersnya dulu karena tidak disediakan lonceng atau bell pemanggil waitersnya. oiya kalo kesini jgn kaget ya klo gak langsung dapat tempat duduk. karena ramai dan biasanya orang-orang yang makan agak lama atau semacam leyeh-leyeh dulu",
        rating: "5",
      },
      {
        id: "review-206",
        idRestaurant: "resto-10",
        idAccount: "user-7",
        description:
          "Saya datang ke sini karena tertarik dengan foto-foto yang diposting sebelumnya, kesannya tempatnya bagus dan luas, cocok untuk bersantai dan menikmati makanan.Saya dan keluarga datang ke sini pada waktu makan siang. Tempatnya agak terpencil dan tidak seluas yang dibayangkan. Untuk ukuran rumah, tempat ini luas tapi untuk ukuran resto tempat ini kecil, tidak dapat menampung orang banyak dan harus ngantri untuk mendapatkan tempat duduk. Saat itu, kami tidak langsung dapet tempat duduk, tapi waiting list ke-7. Menunggu sekitar 30 menit. Setelah order makanan, kami tidak menunggu terlalu lama sampai makanan terhidang. Staf ramah tapi sedikit sehingga sukar untuk meminta bantuan.Steaknya gak enak, hambar, tapi grill salmon n lasagnanya enak. Minuman dihidangkan dalam gelas besar.Secara keseluruhan, saya tidak merekomendasikan resto ini jika anda datang dalam keadaan lapar apalagi jika datang bersama keluarga besar atau bersama teman dalam jumlah banyak. Acara anda akan dimulai dengan keadaan yang tidak menyenangkan karena harus menunggu. Saya kira masih banyak resto yang menyediakan tempat luas dengan makanan yang enak. Saat saya pulang, di halaman depan banyak orang menunggu dan tempat parkir sangat penuh. Tidak menyenangkan.",
        rating: "4",
      },
      {
        id: "review-207",
        idRestaurant: "resto-10",
        idAccount: "user-11",
        description:
          "Tertarik kesini karena dekat dg hotel tempat kami menginap dan decornya yg homey.kami datang dan menunggu masuk karena waiting list.kemudian setelah duduk kami order makanan dan minuman.1.minum datang dlm waktu 15 menit (ok mungkin krn rame kami maklum)2.steak yg dipesan suami saya datang dlm waktu 30 menit dan burger pesanan saya belum disajikan. Sayangnya steaknya ga worth it untuk dipesan,sangat sangat keras dan hambar (pesen lokal steak bukan berarti harus dapet steak kaya sendal karet gini lah)3. Hampir 1 jam saya kembali reminder ke mereka krn makanan saya blm dateng dan terpaksa harus ke dapur karena ga ada pegawai yg menjawab dg memuaskan atau mmberi solusi4. Total waktu yg saya butuhkan utk menunggu makanan saya yang berup bur geradalah 1.5 jam!!!bagusnya adl rasanya jauh lebih enak dari steak sendal karet Semoga manajemen miss bee baca review saya dan dapat memperbaiki manajemen di sana dan kualitaspegawainya.",
        rating: "3",
      },
      {
        id: "review-208",
        idRestaurant: "resto-10",
        idAccount: "user-43",
        description:
          "Suasananya enak n adem, tentram, makanan eropa nya enak2, bangunan jaman belanda dulu, terletak di jalan ciumbuleuit ke kanan",
        rating: "5",
      },
      {
        id: "review-209",
        idRestaurant: "resto-10",
        idAccount: "user-35",
        description:
          "Letaknya aga terpencil harus masuk perumahan dulu tapi gampang dicari. Makanannya eropa kebanyakan, segrup sama hummingbird. Cocok dilidah saya makanannya dan dessert nya enak-enak. suka waiting list tapi bisa sambil main di tamannya dan photoable hahaha.",
        rating: "5",
      },
      {
        id: "review-210",
        idRestaurant: "resto-10",
        idAccount: "user-30",
        description:
          "Restaurant yang terletak di kota Bandung ini, tepatnya di daerah Ciumbeluit yang terkenal dengan Universitas Parahiyangan. Restaurant yang mengusung tema family resto ini memiliki tempat yang sanga cozy, ciri khas yang membuat restaurant ini unik adalah ada bangunan restaurant yang terbuat dari rumah kaca. Soal rasa di restaurant ini jangan khawatir, harga sangat seuai dengan kualitas dan rasa makanan. makanan di tempat ini jangan",
        rating: "5",
      },
      {
        id: "review-211",
        idRestaurant: "resto-10",
        idAccount: "user-26",
        description:
          "Tempat yang menyenangkan, homie, tenang, sejuk dan menyajikan makanan yang enak.......cocok untuk makan-makan dengan keluarga, layak untuk dicoba",
        rating: "5",
      },
      {
        id: "review-212",
        idRestaurant: "resto-10",
        idAccount: "user-19",
        description:
          "Lokasi ini cukup unik, saya n keluarga memilih untuk makan di rumah kaca miss bee providore. Pelayanan sangat baik..pembayaran bisa debit. Yang kurang dr tempat ini hanyalah rasa, menurut saya rasa makanan ditempat ini kurang kuat seperti black pepper n salt n rempah y..dan tidak dikasih sambal (bukan saos sambal yaa) atau cabai agar ada cita rasa pedas.sehingga menurut saya ada yg kurang..",
        rating: "5",
      },
      {
        id: "review-213",
        idRestaurant: "resto-10",
        idAccount: "user-4",
        description:
          "tempat makan yang nyaman, dengan playground indoor and outdoor, makananny harganya standar cafe tapi dengan kualitas dan rasa yang memuaskan ^^",
        rating: "5",
      },
      {
        id: "review-214",
        idRestaurant: "resto-10",
        idAccount: "user-5",
        description:
          "Lokasi cafe ini di daerah Bandung utara jadi hawa nya cukup menyegarkan. Yang unik dari cafe ini design tempat makan yang asalnya rumah tinggal dirubah jadi cafe jadi terasa nyaman seperti dirumah. Makanan cukup enak2 banyak variasinya, apalagi dessert nya cukup untuk menggugah selera ingin makan terus.",
        rating: "5",
      },
      {
        id: "review-215",
        idRestaurant: "resto-10",
        idAccount: "user-41",
        description:
          "Berkunjung pada hari Senin siang, sangat sepi dan bersyukur karena belakangan kami tahu bahwa tempat makan ini selalu ramai (mungkin pada malam hari).Datang bersama keluarga kecil + bayi mungil dan kami dipersilahkan untuk duduk di kursi sofa yang lebar beserta tv layar datar tepat didepannya.Memesan Mac & Cheese + Mozza Calzone untuk makanan dan Berry Good + Water Melon Strawberry untuk minuman walaupun pada akhirnya kami harus membawa bungkus sisa makanan Mozza Calzone karena perut yang kenyang.Waktu penyajian cepat (mungkin karena sepi) dan kualitas makanan kami rasa baik, unsur keju di kedua makanan terasa sekali di mulut ditambah lingkungan tempat makan yang (sepertinya) memiliki beberapa tema menambah suasana santai.Pada saat meninggalkan tempat makan, kami lihat banyak kursi-kursi yang berjajar di halaman, saya kira kursi-kursi tersebut digunakan bagi pengunjung waiting list :)Saran untuk perbaikan:Agar disediakan gambar dari masing-masing menu atau minimal ada beberapa gambar menu unggulan, sangat berguna bagi pengunjung yang baru mengenal tempat makan ini, sehingga waktu yang dibutuhkan saat memilih makanan dan minuman tidak lama.",
        rating: "5",
      },
      {
        id: "review-216",
        idRestaurant: "resto-10",
        idAccount: "user-38",
        description:
          "Homey and comfy adalah yang saya rasakan saat makan di restaurant ini, kebetulan kami datang saat makan siang dan tidak perlu antri untuk mendapatkan meja. Rasa dari makanan lumayan namun tidak istimewa, fasilitas bermain untuk anak merupakan kelebihan paling menonjol dari restaurant ini, sedangkan untuk harga terjangkau...",
        rating: "5",
      },
      {
        id: "review-217",
        idRestaurant: "resto-10",
        idAccount: "user-14",
        description:
          "sering penuh..ada rumah kacanya..ada playground untuk anak-anak..harga agak mahal dan rasa lumayan lah..",
        rating: "4",
      },
      {
        id: "review-218",
        idRestaurant: "resto-11",
        idAccount: "user-18",
        description:
          "Restorannya bagus, tempatnya nyaman dan makanannya juga enak-enak. Viewnya bagus, ada kolam ikan yang ikannya gede-gede. Lokasinya lumayan strategis, dekat dari pintu tol pasteur. Cocok untuk tempat makan bareng keluarga",
        rating: "5",
      },
      {
        id: "review-219",
        idRestaurant: "resto-11",
        idAccount: "user-39",
        description:
          "Makanan biasa aja.nggak mahal juga nggak murah.kurang sreg bumbunya.minumnya juga biasa aja.nggak ada yang istimewA",
        rating: "2",
      },
      {
        id: "review-220",
        idRestaurant: "resto-11",
        idAccount: "user-32",
        description:
          "Tempat yang bagus, bisa melihat kolam ikan koi, boleh coba gurame goreng garing yang terkenal. Daging gurame yang difillet lalu digoreng satu per satu sangat enak. Cumi bakar isi cukup terkenal disini",
        rating: "5",
      },
      {
        id: "review-221",
        idRestaurant: "resto-11",
        idAccount: "user-35",
        description:
          "Kami sekuarga sering juga ke raja rasa sea food restoran ini . Makanan nya enak yang biasa oesan afalah udang windu bakar nya",
        rating: "5",
      },
      {
        id: "review-222",
        idRestaurant: "resto-11",
        idAccount: "user-4",
        description:
          "Kayanya seperti Rumah yang diubah jadi tempat makan. Namun tempat makan berupa lesehan . makanan sih Sunday plus seafood",
        rating: "3",
      },
      {
        id: "review-223",
        idRestaurant: "resto-11",
        idAccount: "user-24",
        description:
          "restoran untuk kalangan menengah ke atas...makanan dan minuman dengan harga yg tidak akan mungkin dicoba oleh MBR.tetapi, rasa tidak akan dapat dicundangi oleh harga.. bnyak tempat makan dengan harga terjangkau, namun dengan rasa istana.Utk Raja Rasa, memang makanannya seperti makan di istana (emang pernah makan di istana jang????)",
        rating: "4",
      },
      {
        id: "review-224",
        idRestaurant: "resto-11",
        idAccount: "user-50",
        description:
          "Gak ngerti ya kenapa resto ini menduduki peringkat 12 dari 1800an resto yang ada dibandung. Harga mahal! Lokasi tersembunyi, dan rasa makanan biasa aja. Jangan terlalu percaya sama review yang menyesatkan lah.",
        rating: "2",
      },
      {
        id: "review-225",
        idRestaurant: "resto-11",
        idAccount: "user-8",
        description:
          "Seorang teman mengajak kami ke restoran sea food ini. Walaupun agak susah mencarinya di kawasan SUkajadi. Namun setelah menikmati makanannya kami tidak menyesal. Hidangan lautnya banyak pilihan dan bumbunya lua biasa. Selain itu ada angklung elektik yang bisa bernyanyi sendiri.",
        rating: "4",
      },
      {
        id: "review-226",
        idRestaurant: "resto-11",
        idAccount: "user-23",
        description:
          "Makanan di Raja Rasa sangat memuaskan. Resto Raja Rasa terletak di sebelah hotel Zodiak Sutami. Makanan sunda mengadi kegemeran saya. Seafood di Raja Rasa sangat segar dan saya pasti akan ke sini lagi. Terima Kasih",
        rating: "5",
      },
      {
        id: "review-227",
        idRestaurant: "resto-11",
        idAccount: "user-40",
        description:
          "Saya kesini sama keluarga, makanan nya enak dan seafood nya segar, ga bau amis juga. Untuk harga bisa dibilang lumayan mahal",
        rating: "4",
      },
      {
        id: "review-228",
        idRestaurant: "resto-11",
        idAccount: "user-33",
        description:
          "Jika ke bandung anda tak ke raja rasa berarti kurang komplit. Tempat nya strategi, decorasi nya bagus. Dan Udang bakar , ayam goreng enak ....",
        rating: "5",
      },
      {
        id: "review-229",
        idRestaurant: "resto-11",
        idAccount: "user-19",
        description:
          "Lokasi agak sesikit tersembunyi do lawasan Sukajadi Bandung Utara. Namun restotan seafood ini merupakan salah satu tempat favorit untuk menjamu teman bisnis.Selain pilihan menu yang lengkap dan bervariasi dan tentu saja memanjakan lidah, suasana resto juga apik dengan pelayanan prima.Namun yang paling mengesankan adalah dekitasi serta adanya sebuah angklung elektronik yang bisa memainkan lagu-lagu secara otomatis. Merinding hayi dan jiwa mendengarkan lagu Rayuan Pulau Kelapa dari angklung hantu ini",
        rating: "4",
      },
      {
        id: "review-230",
        idRestaurant: "resto-11",
        idAccount: "user-34",
        description:
          "Saya membawa tamu saya dari Korea yang ingin mencoba makanan Indonesia. Raja Rasa memiliki suasana yang nyaman, variasi menu makanan Indonesia yang beragam (meskipun mayoritas adalah masakan Sunda dan Jawa), kualitas rasa yang baik, penyajian makanan yang menarik.Tamu saya merasa nyaman dengan tempat dan variasi makanan yang disajikan dan sangat terkesan dengan pedasnya cabe rawit yang luar biasa pedas.",
        rating: "5",
      },
      {
        id: "review-231",
        idRestaurant: "resto-11",
        idAccount: "user-5",
        description:
          "Raja rasa ini memang sesuai dengan judulnya, rasanya meraja. Restoran Sunda ini menyediakan berbagai masakan seperti cumi, udang, ikan dan ayam. Semua yang dipesan bumbunya meresap, gurih sekali. Suasanya restorannya penuh dengan dekorasi kayu sehingga nyaman. Ada paket untuk keluarga yang harganya lebih terjangkau lagi.",
        rating: "5",
      },
      {
        id: "review-232",
        idRestaurant: "resto-11",
        idAccount: "user-45",
        description:
          "Restoran ini menyajikan makanan khas Sunda dan cocok menjadi tempat makan untuk keluarga besar. Makanannya enak enak",
        rating: "5",
      },
      {
        id: "review-233",
        idRestaurant: "resto-11",
        idAccount: "user-43",
        description:
          "Makannanya enak dan tersedia paket makanan yang sangat variatif, bukan hanya makanan Sunda tetapi juga makanan Indonesia.Ruangannya luas dan lapang sehingga cocok untuk party maupun makan bersama keluarga besar.",
        rating: "5",
      },
      {
        id: "review-234",
        idRestaurant: "resto-11",
        idAccount: "user-31",
        description:
          "Bulan Nov lalu saat biz trip ke Bandungsaya sempat makan siang di restoran ini dengan variasi menu yg ok bangetada kepiting, udang, cumi dan ikan bakar yg ok ..dan disarankan mencoba juga juice strawberryyummy dan kentaljangan lupa juga untuk mencoba sayuran genjer .. tidak disemua tempat ada sayuran inidan hasil masakannya juga enak .. sayurnya masih kriuk2 dan tidak lembek ^__^(jadi pengen maem lagi)restoran ini juga ok dengan konsep arsitektur yang menarik .. tradisional hanya disarankan bila membawa orang tua atau orang yang susah untuk naik turun tanggabetter duduk dibawahkarena kamar mandi hanya ada di bawah",
        rating: "5",
      },
      {
        id: "review-235",
        idRestaurant: "resto-11",
        idAccount: "user-12",
        description:
          "Kami sekeluarga sering pergi ke Bandung dan salah satu yang dilakukan adalah wisata kuliner. untuk itu, karena di Bandung, maka kami sering pergi mencari restoran Sunda. Salah satu yang sering kami kunjungi adalah Raja Rasa, karena makanannya enak, restorannya nyaman, harganya juga terjangkau.selain itu lokasi tempat restoran tersebut juga sangat strategis.",
        rating: "5",
      },
      {
        id: "review-236",
        idRestaurant: "resto-11",
        idAccount: "user-17",
        description:
          "restoran yg cukup besar dan nyaman, memiliki dua 2 lantai. tempat makan brvariasi ada saung, kursi dan lesehan trdapat bnyak kolam ikan. dan ruangan khusus keluarga ataupun tempat meeting.. makanan yg di sajikan sangat beragam, dan khas sunda makanannya gak manis2.. dan pelayanannya sangat ramah...",
        rating: "5",
      },
      {
        id: "review-237",
        idRestaurant: "resto-11",
        idAccount: "user-6",
        description:
          "Restorannya sangat bersih dan apik, kita makan diiringi alunan angklung digital. Makanannya enak2 dan harganya sesuai dengan fasilitas yang disediakan.",
        rating: "5",
      },
      {
        id: "review-238",
        idRestaurant: "resto-11",
        idAccount: "user-25",
        description:
          "Restoran ini terletak tidak di tengah kota agak di pinggiran dekat Universitas Maranatha. Interiornya kayu dan ada tempat duduk lesehan. Suasananya cukup tenang. Makanan yang kami pesan adalah menu set yang cukup variatif dan rasanya enak. Selain itu, harganya cukup sesuai dengan porsi makanan yang diberikan. Pelayanan cukup cepat dan bagus. Secara keseluruhan saya merekomendasikan restoran ini.",
        rating: "5",
      },
      {
        id: "review-239",
        idRestaurant: "resto-11",
        idAccount: "user-36",
        description:
          "Ini adalah pertama kalinya bagi saya makan di restoran ini. Saat itu bersama rombongan teman kantor, kami mampir untuk makan siang sebelum melanjutkan perjalanan ke hotel. Ketika datang, makanan sudah tersedia dengan menu yang telah dipilih sebelumnya. Makanannya enak dan suasana yang enak pula, kami duduk berlesehan yang terletak di lantai 2. Tempat ini recommended sekali.",
        rating: "5",
      },
      {
        id: "review-240",
        idRestaurant: "resto-11",
        idAccount: "user-3",
        description:
          "Saya selalu mampir kesini setiap ke bandung, keluar exit Pasteur tinggal belok kiri sebelum check in ke hotel. Duduk di saung dekat kolam ikan sangat menyenangkan, apalagi kalau anda bepergian dengan anak-anak. Selalu cek tagihan anda sebelum membayar, beberapa kali kami menemukan tagihan yang tidak sesuai dengan yang dipesan",
        rating: "5",
      },
      {
        id: "review-241",
        idRestaurant: "resto-11",
        idAccount: "user-41",
        description:
          "Tempatnya bagus, 2 lantai dengan pilihan meja atau lesehan. Dikelilingi kolam dengan ikan besar besar. Diiringi musik sunda, makan udang bakar, pete goreng dan bandrek panas benar benar mantap. Apalagi waktu kita makan cuaca sedang gerimis. Hati hati jangan ikuti petunjuk peta dari google map. Ngacau... lokasinya dibelakang hotel Zodiak.",
        rating: "5",
      },
      {
        id: "review-242",
        idRestaurant: "resto-11",
        idAccount: "user-14",
        description:
          "Saya kesini bulan desember 2013. Tempat pertama yg saya datangi waktu sampai di bandung. Tempatnya memang agak nyempil tapi semua jadi mudah jika anda pengguna smartphone. Tempatnya seperti rumah besar. Didalamnya banyak diberikan hiasan-hiasan berseni yang menurut saya nyaman untuk dilihat. Soal makanan menurut saya masih standar menengah lah. . Saya pesan nasi ulam ikan krapu sudah lengkap dengan nasi, tahu goreng, ikan bakar krapu, bala-bala udang, gado-gado dan krupuk hanya Rp.39.000,- tambah teh manis deh Rp.6000.. Heheh. . Tambah menu sampingan yaitu cumi goreng tepung telur asin. . Rp.45000 porsi besar. Tempatnya dan peralatan makannya dibuat sedemikian rupa sehingga membuat kesan fresh from the oven. . Terlihat bahwa mereka menyiapkan makanan dengan baik. Buktinya tahu dan bala-bala masih panas ketika dihidangkan.. Cocoklah buat makan siang. . Walau tempatnya gedongan tapi harga bersahabat kok..",
        rating: "5",
      },
      {
        id: "review-243",
        idRestaurant: "resto-11",
        idAccount: "user-37",
        description:
          'Di suatu sabtu siang, saya dan keluarga memutuskan untuk makan siang bersama di luar. Tetapi karena pada setiap akhir pekan kota bandung didera oleh kemacetan yang parah, akhirnya kami memilih restoran Raja Rasa yang letaknya memang tidak jauh dari Rumah Kami.Sesampainya disana, saya sangat terkesan dengan atmosfer dari restoran ini. Arsitektur bangunan, ornamen-ornamen, dan hiasan-hiasan dalam dekorasinya, membangun suatu perasaan yang sangat nyaman dan damai. Atau istilah kerennya "Mood Booster". Hehehe.Kami memilih di tempat yang agak di pojok. Setelah melihat-lihat menu yang ada, akhirnya kami memesan Ikan Baronang Bakar dan Kerapu Bakar, serta tidak lupa Cah kangkung nya donk sebagai sayurannya. Tertarik dengan Kepiting Telurnya, akhirnya saya pun berhasil meluluhkan hati orang tua saya untuk memesan Kepiting Telur. Hehehehe.Setelah menunggu sekitar setengah jam, pesanan kami pun datang. Yang saya hargai disini adalah pesanan kami datengnya berbarengan. Sehingga kami bisa menikmatinya dengan lengkap. Ikan Laut bakarnya (baronang+kerapu) sangat gurih dan enak, dan sangat segar. Kesegaran ini lah kunci utama dari rasa sebuah masakan Seafood. Bumbunya juga sangat menyerap. Kenikmatan tersebut ditemani dengan nikmatnya cah kangkung yang kami pesan, yang ternyata disajikan dalam Hot Plate, sehingga memberikan sensasi yang berbeda. Cukup kenyang dengan main course tadi, akhirnya saya mengalihkan perhatian ke menu "Saved The Best For Last" alias Kepiting Telur yang dimasak dengan bumbu khusus. Beuhhh, luar biasa deh pokoknya rasanya. Bagai ke awang-awang. Kepitingnya jumbo banget, bumbunya juga sangat meresap, serta telurnya, juga berlimpah. Pokoknya bener2 the best Crab ever deh!!Akhir kata, Raja Rasa ini memang benar-benar rajanya masakan seafood. Enak, gurih, segar, nikmat, dan mantabbbb!!',
        rating: "5",
      },
      {
        id: "review-244",
        idRestaurant: "resto-11",
        idAccount: "user-9",
        description:
          "cumi telor asin, karaka saos padang, udang galah bakar, semuanya enak!! pengen kesana lagi sama keluarga. sangat memuaskan.",
        rating: "5",
      },
      {
        id: "review-245",
        idRestaurant: "resto-11",
        idAccount: "user-1",
        description:
          "pertama kali tau mengenai restaurant ini dari website kuliner. tapi saat mencoba sendiri, benar2 puas. makanannya enak, tempatnya sangat nyaman. ada pilihan duduk di meja atau lesehan. makanannya dapat dipilih satuan ataupun secara paket sesuai jumlah yang makan. biasanya lebih ramai menjelang sore. cocok untuk acara keluarga, pasangan, arisan, dll",
        rating: "5",
      },
      {
        id: "review-246",
        idRestaurant: "resto-11",
        idAccount: "user-47",
        description:
          "Awalnya aku males juga buat pergi ke raja rasa karena tempatnya yang jauh dari tempat tinggalku.Kebetulan nih aku dapet voucher ,ya udah aku usahain juga datang ke raja rasa.Gak nyesel deh jauh-jauh datang ke Raja Rasa,ternyata tempatnya enak banget.Pelayanannya juga bagus.Aku memilih tempat lesehan di lantai atas,tempatnya bersih.Anakku suka lihat ikan2nya,pelayannya ramah-ramah,nawarin anakku buat kasih makan ikan segala(lumayan ada yang ngasuh ^_^)Menu yang aku pilih ini katanya pelayannya menu baru yaitu nasi ayam Ma'Keke,lalu aku juga pesan nasi ulam ikan bakar dan karedok.Semua menunya enak.Daging ayam ma'keke nya enak dan empuk sausnya gurih tapi buat aku pedasnya masih kurang.Sementara Ikan bakarnya dagingnya lembut banget.Terakhir nih karedoknya fresh banget deh....Untuk minumannya aku pilih lemon squah yang seger banget dan strawberry float yang rasanya strawberrynya benar terasa banget.Gak nyesel deh aku jauh -jauh datang ke Raja Rasa.Ini pengalaman pertamaku tapi gak bakalan jadi yang terakhir ^_^.Tunggu aku kembali ke sana yah Raja rasa.....",
        rating: "5",
      },
      {
        id: "review-247",
        idRestaurant: "resto-11",
        idAccount: "user-42",
        description:
          "Makan di Raja Rasa adalah pengalaman yang menyenangkan. Tempatnya antik, unik, gallerynya keren. Di setiap ruangan, banyak fosil-fosil, lukisan, hiasan dinding, dan lain-lain. Di lantai atas, ada kolam ikan yang terpelihara. Musiknya juga menyenangkan dan khas Sunda banget! :)Makanan di raja rasa, bumbunya mantap. Kami waktu itu membeli Gurame asam manis,Gurame Bakar Jimbaran, Sate, Ayam Panggang, Karedok, dan Soup Asparagus. Gurame asam manisnya lebih enak difillet, karena makannya jadi lebih asik, dengan mencocol bumbu asam manisnya. Terus, sate dan gurame bakarnya juga sedap, rasanya meresap dengan baik. Karedok, soup, dan ayam bakarnya juga lumayan. Karedoknya agak terlalu manis sedikit, tetapi secara keseluruhan, semuanya enak. :9Terus, tempat-tempat menyajikan makanan dan minumannya juga lucu-lucu. Khas Sunda. Saya paling suka gelas berbentuk seperti kelapa muda. Gelasnya imutSaran saya, sebaiknya kalo ke Raja Rasa, pesan seafoodnya. Paling khas dari sini adalah seafoodnya. Hmmm... jadi pengen lagi ke raja rasa nih^^",
        rating: "5",
      },
      {
        id: "review-248",
        idRestaurant: "resto-11",
        idAccount: "user-16",
        description:
          "Bien pour pas cher a essayer le repas soundanais / Hidangan khas sunda yg disajikan penuh pesona dan selera...",
        rating: "5",
      },
      {
        id: "review-249",
        idRestaurant: "resto-11",
        idAccount: "user-46",
        description:
          "thx raja rasa.. Kemaren saya kesana bareng sama keluarga semua.. Makanan nya mantep banget.. Apalagi kerupuk nya, suka banget.. Dari awal dateng sampe pulang, udah ga kepikiran yang laen, kec nikmatin semua makanan yang ada disana.. Mantep bgt.. Thx raja rasa..",
        rating: "5",
      },
      {
        id: "review-250",
        idRestaurant: "resto-11",
        idAccount: "user-49",
        description:
          'Setiap kali melewati Raja Rasa di Jl. Setra Ria ini, saya selalu penasaran ingin mencoba makan disana, Eksteriornya terlihat sangat nyaman dan mewah. Awalnya saya agak takut harga makanannya terlampau mahal, tapi beruntung saat bulan Juni tahun lalu, saya menemukan sebuah promo paket di Raja Rasa (dari Lapar.com). Kebetulan Papah saya berulang tahun bulan itu, jadi saya memutuskan mengajak keluarga saya untuk merayakannya di Raja Rasa.LOKASISaya memilih Raja Rasa di Jl. Setra Ria ini karena lokasinya yang strategis. Raja Rasa (depan Setra Sari Mall) ini dapat dijangkau hanya beberapa menit dari pintu tol Pasteur, Bandung dan bebas macet. Maklum Papah saya tidak suka jika harus menempuh jarak terlalu jauh dan kemacetan hanya untuk makan. Walaupun hari itu hari minggu, kami dapat tiba dengan cepat dan lancar tanpa terhambat kemacetan.SUASANABegitu memasuki Raja Rasa mengalun musik tradisional Sunda yang menenangkan. Kami langsung diantar ke lantai dua, dimana terdapat lesehan. Di sekitar lesehan terdapat kolam ikan yang asri dan indah. Udara yang sejuk, suara gemericik air, dan alunan musik berpadu sempurna menciptakan suasana yang sangat nyaman untuk melepas lelah bersama keluarga, setelah seminggu penuh beraktivitas. Apalagi pemandangannya saat senja pun sangat indah. Apabila Anda membawa anak kecil, anak Anda pasti senang karena dapat secara langsung melihat ikan-ikan yang berenang di kolam dan memberi makan ikan.FASILITASJika tidak suka duduk di lesean, di lantai 1 terdapat meja makan yang tak kalah nyaman. Di bagian belakang area lesehan di lantai 2 tersedia pula beberapa ruangan terpisah (VIP room), jika Anda menginginkan suasana yang lebih privasi. Ruangan - ruangan tersebut cocok untuk mengadakan rapat bersama rekan atau klien Anda.MAKANAN DAN MINUMANTak terasa saat asyik menikmati suasana di lesehan, makanan dan minuman telah tersaji di meja. Penyajiannya sangat menggoda untuk makan. Saya mulai dengan mencoba Gurame Bakar Cobeknya. Bumbunya meresap sempurna ke dalam daging ikan yang lembut. Tidak terasa sama sekali "bau tanah" ataupun bau amis yang biasa terdapat dalam sajian ikan. Rasa ikannya semakin segar ketika dicocolkan ke dalam Sambal Mangga Mudanya mad (jika kurang Anda bisa meminta pelayan untuk mengisinya kembali). Setelah puas dengan Gurame Bakar Cobeknya, saya mencicipi Cumi Goreng Tepung. Teksturnya pas, tidak terlalu kering ataupun terlalu basah. Cumi di dalamnya pun tidak terasa amis dan alot, ini membuat saya sulit berhenti untuk makan Cumi Goreng Tepungnya. Tak lupa Kangkung Cah Saus Tiramnya. Di tempat lain yang menyajikan sea food, kangkung mungkin hanya pelengkap sehingga rasanya biasa saja. Tapi kangkung di Raja Rasa tak bisa dilupakan. Kangkungnya disajikan diatas hotplate lengkap dengan irisan daging sapi dan telur puyuh. Pengolahannya sempurna, sehingga kangkung yang biasa menjadi luar biasa. Mamah saya yang biasanya tidak menyukai daging sapi saja dapat melahapnya dengan nikmat.HARGA DAN PORSITernyata anggapan saya salah bahwa makan di Raja Rasa itu mahal. Memang saya beruntung mendapatkan promo di Lapar.com sehingga harganya menjadi sangat murah. Namun karena ingin segera kembali makan di Raja Rasa tanpa menunggu promo, saya iseng mengintip daftar menu. Tanpa promo pun harga paket serupa untuk ber-4 dengan tambahan lotek atau karedok dan ayam goreng hanya berkisar Rp. 200ribu. Lagipula porsi yang disajikan cukup besar, saya beserta keluarga saya makan sampai puas bahkan kekenyangan. Baru terpikir oleh saya ketika berusaha menghabiskan makanan yang ada untuk mengajak satu orang lagi untuk makan bersama kami, karena makanannya masih tersisa cukup banyak. Jadi menurut saya harga tersebut memang pantas untuk makanan yang berkualitas, lezat dan juga porsi yang memuaskan. lolPELAYANANSebuah resto tidak akan lengkap tanpa pelayanan yang baik. Saya enggan untuk kembali ke tempat makan yang sekalipun rasanya enak, namun pelayanannya mengecewakan. Lain halnya dengan Raja Rasa, pelayanan di Raja Rasa sangat baik. Kami disambut dengan sapaan dan senyuman ramah para pelayannya. Seluruh staf disana terlatih baik mulai dari pelayan, kasir, sampai dengan petugas parkirnya. Kami diperlakukan bak raja. smileKESELURUHANRAJA RASA, memang rajanya rasa dengan pelayanan yang luar biasa. Tempat makan yang layak dicoba untuk para pecinta kuliner. Tidak sabar deh tongue untuk merayakan ulang tahun saya tahun ini di RAJA RASA. I\'ll be back..',
        rating: "5",
      },
      {
        id: "review-251",
        idRestaurant: "resto-11",
        idAccount: "user-11",
        description:
          "Lokasi, Ambient, Rasa, Harga.... Harus gurame Bakar Raja Rasa, Gurame Goreng Bumbu Raja Rasa, Kerang Hijau Lada Hitam, Cumi Goreng Kering Bumbu Asam Manis, Jangan lupa pesen tahu goreng bumbu yang buanyaaak.... Slurp",
        rating: "5",
      },
      {
        id: "review-252",
        idRestaurant: "resto-11",
        idAccount: "user-10",
        description:
          'Restoran Raja Rasa seafood memang restoran favorit keluarga kami. Selain lokasinya yang mudah dijangkau dan dekat dengan tempat tinggal kami, pelayanannya pun sangat memuaskan. Saat kami datang, kami sudah disambut oleh 2 orang pegawai yang sangat ramah, dan langsung diarahkan menuju tempat duduk kami. Kemudian sewaktu menunggu makanan kami datang, kami disuguhkan kerupuk untuk camilan. Suasana yang nyaman, ditemani dengan ikan koi, sehingga kami pun bisa mengobrol santai sambil menunggu makanan datang. Akhirnya, yang ditunggu-tunggu pun datang, Cumi Goreng Telur Asin dan Kangkung Hotplate cah Sapi plus Tahu Berbumbu! Yummy! Cumi telur asinnya terasa sekali, gurih dan nikmat! Dan yang satu ini memang makanan fav keluarga kami, Kangkung Hotplate cah Sapi. Daging sapinya benar" empuk, tak kalah empuk dengan kangkungnya =P Nah, kalo ge pesen Raja Rasa juice, ga afdol rasanya. Segar dan menyehatkan! Pokonya kalo sedang berkunjung ke Bandung, harus mampir ke Raja Rasa Restaurant (Jl. Setrasari). Very recommended!! ^ ^',
        rating: "5",
      },
      {
        id: "review-253",
        idRestaurant: "resto-11",
        idAccount: "user-22",
        description:
          "Rasanya enak,porsi cukup banyak dan mempunyai harga yang layak....",
        rating: "5",
      },
      {
        id: "review-254",
        idRestaurant: "resto-12",
        idAccount: "user-7",
        description:
          "Pertama kali saya ke sushi tei di TSM Bandung. Saya kesini pada hari minggu, antriannya cukup banyak namun kebetulan saya datang sendiri dan oleh pelayannya dengan cepat diarahkan ke sushi bar. Menu favorit saya adalah salmon sashimi, kacang edamamenya enak, juga menu roll sushinya yang juga enak ditambah free ocha yang bisa di refill sama sperti di restoran sushi tei dimanapun yang pernah saya kunjungi.",
        rating: "4",
      },
      {
        id: "review-255",
        idRestaurant: "resto-12",
        idAccount: "user-50",
        description:
          "Pertama kali belajar makan sushi ya disini, sushi tei. Deg2an karena takut aneh rasanya. Apalagi yg mentah. Tapiiiii, pertama nyoba ternyata enak bgt. Pertama emang rekomen temen katanya kalau mau makan sushi pertama kali makan dulu yang mateng. Udah terbiasa baru coba sashimi. Dannnn, memang enakkk. Dari situ rajin dateng ke sushi tei. And addict... :D selama ini aku emang makan sushi cuma di sushi tei. Belum nyoba yang lain. Percaya karena rasa dan kesegarannya. So i recommended :)",
        rating: "5",
      },
      {
        id: "review-256",
        idRestaurant: "resto-12",
        idAccount: "user-28",
        description:
          "ini adalah restoran sushi favorit anak saya..cabang paling sering saya kunjungi adalah yang di TSM atau yang di Sukajadi..onigiri yakiniku menjadi menu yang wajib dibeli..bisa habis 5 porsi sendirian itu sangking enaknya..ini sushi terbaik..makyus wis pokoknya..tempat nyaman..hanya kadang kalau terlalu penuh pelayanan menjadi kurang baik..perlu ditingkatkan di sektor SDM terutama pelayanan dan service..",
        rating: "5",
      },
      {
        id: "review-257",
        idRestaurant: "resto-12",
        idAccount: "user-17",
        description:
          "Paling TOP sushinya. Pelayanannya pun cepat. Disini aneka roll nya maknyus. Nebayaki udon dan salad-nya juga bikin nagih.",
        rating: "4",
      },
      {
        id: "review-258",
        idRestaurant: "resto-12",
        idAccount: "user-8",
        description:
          "Sushie tei... aku suka makan ditempat ini bareng istri.. seringnya yg dijalan sumatera sama yang di tsm.. lebih enak makan di sushi bar nya... kita bisa pilih menu sesuai yg kita mau.. menu favoritnya fuji roll.. baby octopus.. dinamite roll.. makanannya sendiri saya rasakan fresh n delicious..",
        rating: "5",
      },
      {
        id: "review-259",
        idRestaurant: "resto-12",
        idAccount: "user-41",
        description:
          "Ini restoran kesukaan kami kalau lagi bingung makan dimana. Sushinya pilihannya banyak dan relatif murah dibanding di resto jepang dgn kualitas yang sama. Nabeyaki udonnya jg top!",
        rating: "4",
      },
      {
        id: "review-260",
        idRestaurant: "resto-12",
        idAccount: "user-12",
        description:
          "Kami sekeluarga sering sekali berkunjung ke Shushi tei japanise restoran ini . Untuk saya pribadi hanya pesan nya beef teriyaki . Cucu. Anak saya lebih suka salmon nya .",
        rating: "4",
      },
      {
        id: "review-261",
        idRestaurant: "resto-12",
        idAccount: "user-19",
        description:
          "Klo mau makan sushi wajib ke sushi tei..menu kesukaan saya fried salmon skin,fried garlic rice with chicken, pastiny dilengkapi sama sushi..ga pernah bosen deh makan di sushi tei..",
        rating: "5",
      },
      {
        id: "review-262",
        idRestaurant: "resto-12",
        idAccount: "user-16",
        description:
          "Tempat paling pas buat pengemar masakan Jepang, rasanya enak, tempatnya asik dan yang pasti harga terjangkau. Dan Teh Oca nya kita bebas isi ulang.",
        rating: "4",
      },
      {
        id: "review-263",
        idRestaurant: "resto-12",
        idAccount: "user-38",
        description:
          "Ini tempat makan kesukaan saya dari dulu sampai sekarang. Sushi roll nya enak-enak. Sayang baru kali ini saya dapat sushi roll yg ukurannya lebih kecil dari biasanya dan chicken katsu currynya nasinya keras dan sudah dingin. Biasanya nasinya masih panas dan empuk.",
        rating: "3",
      },
      {
        id: "review-264",
        idRestaurant: "resto-12",
        idAccount: "user-5",
        description:
          "Bagi anda yang sangat suka dengan masakan khas Jepang terutama Sushi, anda bisa mengunjungi Sushi Tei. Resto ini bisa ditemukan di banyak daerah, biasanya ada di dalam mall atau store tersendiri. Nuansa resto dibuat khas Jepang, makanannya cukup beragam tidak hanya sushi. Harganya tergolong menengah, mungkin dikarenakan tempatnya ya kebanyakan terdapat di mall.",
        rating: "4",
      },
      {
        id: "review-265",
        idRestaurant: "resto-12",
        idAccount: "user-21",
        description:
          "Selalu tidak mengecewakan. Seaweed saladnya enak. Salmon crispy mentai sushinya juara. Salmon sashiminya harganya tidak terlalu mahal.",
        rating: "5",
      },
      {
        id: "review-266",
        idRestaurant: "resto-12",
        idAccount: "user-30",
        description:
          "Beberapa hari lalu habis dari Sushi Tei, ke Sushi Tei bisa sampai 2 atau 3 kali sebulan, sukaaaa banget sama sushinya! sushi favoritku Spicy Salmon, their Hand rolls are great too! Spicy miso ramen super duper enak, sendirian suka ga abis, karena porsinya gedeee~ :D minumannya enak semua, karena menyegarkan, soalnya kl abis makan sushi ga bisa langsung dimakan semua, harus istirahat dan minum haha. definitely will come again! <3xx oh and their sushi is not so expensive",
        rating: "5",
      },
      {
        id: "review-267",
        idRestaurant: "resto-12",
        idAccount: "user-24",
        description:
          "venue-nya nyaman. terletak di pusat kota. sayangnya jika datang di jam makan malam seringkali harus antri nunggu giliran karena tempat duduknya kurang. demikian juga kalau takeaway tetap harus nunggu lama. tapi pelanyanannya cukup baik",
        rating: "4",
      },
      {
        id: "review-268",
        idRestaurant: "resto-12",
        idAccount: "user-15",
        description:
          "Kali ini datang ke Sushi Tei u/ merayakan ulang tahun saudara, dapat free sushi.. Sushi yg lain juga enak, terutama salmon cheese roll nya.. Favorit kali ini..",
        rating: "3",
      },
      {
        id: "review-269",
        idRestaurant: "resto-12",
        idAccount: "user-3",
        description:
          "Minggu lalu baru ke Sushi Tei.Tempatnya enak, suasananya juga cozy, menu makanan bervariasi.Kemarin saya mencoba Tuna Salad Crispy Mentai, Fuji Roll dan satu lagi lupa namanya.Semuanya enak, pas di lidah. Ice cream blueberrynya juga enak banget.Defineltely will come here again",
        rating: "4",
      },
      {
        id: "review-270",
        idRestaurant: "resto-12",
        idAccount: "user-36",
        description:
          "sushi dan sashiminya segar dan dengan harga yang tidak terlalu mahal, sushinya banyak jenisnya. berbagai macam masakan jepang",
        rating: "4",
      },
      {
        id: "review-271",
        idRestaurant: "resto-13",
        idAccount: "user-25",
        description:
          "Saya sangat suka sekali suasana di resto ini, sangat comfy apalagi di malam hari. Staffnya ramah, menyempatkan becanda dengan anak2 saya. Walaupun agak sedikit mahal compare to others, tapi enak. Pastinya akan kembali lagi kesini.",
        rating: "4",
      },
      {
        id: "review-272",
        idRestaurant: "resto-13",
        idAccount: "user-47",
        description:
          "Sempat bingung juga menemukan restoran ini karena malam dan hujan..kami mendapatkan tempat duduk sofa dengan pemandangan kota lembang. Saat datang kami lsg disambut oleh pelayan dan menyodorkan menu. Makanannya pun cepat datang. Pelayanannya juga saat itu cekatan dan ramah. Hanya saja menu nya mungkin harus lbh diperbanyak agar lbh variatif.rasanya buat saya lumayan enak.overall kami senang makan malam di sini.",
        rating: "5",
      },
      {
        id: "review-273",
        idRestaurant: "resto-13",
        idAccount: "user-1",
        description:
          "Ingin merasakan sensasi makan malam diatas bukit dengan pemandangan kota bandung yang gemerlap layaknya barisan bintang? The Peak jawabannya. Resto mewah yang di konsep sangat eleghan ini cocok untuk dinner romantis bagi pasangan, tetapi bisa juga untuk bersantai bersama sahabat atau keluarga. Sayangnya makanan di resto ini tidak cukup beragam, dan memiliki rate harga yang tinggi namun terbayar dengan kualitas pelayanan yang baik.",
        rating: "5",
      },
      {
        id: "review-274",
        idRestaurant: "resto-13",
        idAccount: "user-9",
        description:
          "Resto ini cukup luas, suasana sangat menyenangkan, pengunjung dapat melihat pemandangan kota Bandung. Menu makanan western dan Indonesian food. Harga sesuai kualitas dan pelayanan.",
        rating: "5",
      },
      {
        id: "review-275",
        idRestaurant: "resto-13",
        idAccount: "user-8",
        description:
          "Terletak di tepi bukit, tempatnya luas, menyenangkan dan nyaman. Memiliki pemandangan yang memanjakan mata, seperti gunung, perkebunan, dan kota Bandung jika dilihat dari atas.Pegawainya cekatan dan ramah.Menu makanan di dominasi oleh menu steak walaupun ada juga menu nasi goreng, gurame, dll.Untuk rasa, tergolong standar, dengan harga yang cukup mahal.Restoran yang direkomendasikan untuk dikunjungi ketika datang ke Bandung.Terimakasih.",
        rating: "4",
      },
      {
        id: "review-276",
        idRestaurant: "resto-13",
        idAccount: "user-4",
        description:
          "Sangat cocok untuk tempat makan sambil ngobrol dengan teman atau keluarga, jika hendak melihat pemandangan lampu Bandung di waktu malam juga cocok, di sediakan berbagai menu makanan dan minuman, juga minuman beralkohol",
        rating: "5",
      },
      {
        id: "review-277",
        idRestaurant: "resto-13",
        idAccount: "user-50",
        description:
          "Tempat romantis buat berduaan dengan pemandangan kota bandung di malam hari yg indah, makanan eropa nya pun enak rasa nya,",
        rating: "5",
      },
      {
        id: "review-278",
        idRestaurant: "resto-13",
        idAccount: "user-49",
        description:
          "Suasana disini sangat enak, makan diatas tebing dan udara yang dingin , dengan lantar belakang lampu-lampu kota bandung. restaurant ini sangat terkenal dibandung, untuk menu favoriteku beef steak karena steak disini real tanpa MSG",
        rating: "5",
      },
      {
        id: "review-279",
        idRestaurant: "resto-13",
        idAccount: "user-30",
        description:
          "restoran yg cukup indah namun pelayanan yg kurang maksimalsaya harus beberapa kali memanggil pelayan untuk memesanuntuk rasa standar dan harga cukup tinggi",
        rating: "3",
      },
      {
        id: "review-280",
        idRestaurant: "resto-13",
        idAccount: "user-23",
        description:
          "The peak, salah satu resto di daerah Lembang Kab bandung yg ingin sekali kami coba.Bersama suami kami sempat tersesat krn memang kami kesana malam hari dengan jalan sempit dan gelap akhirnya kami menemukannya.Tempatnya terkesan suram kurang menarik, staf yg cuek, malah mengobrol tanpa memperdulikan kehadiran kami, setelah duduk agak lama, tidak ada yg menyodorkan daftar menu, akhirnya kami pergi mencari resto lainnya yg sangat banyak di kota bandung, dan staf yg sangat ramah untuk kami datangi",
        rating: "1",
      },
      {
        id: "review-281",
        idRestaurant: "resto-13",
        idAccount: "user-38",
        description:
          "suasana resto cozy modern.. jenis makanan western..rasanya oke, harga premium.. karna letak resto diatas, udaranya jadi agak dingin apalagi kalau malam..",
        rating: "5",
      },
      {
        id: "review-282",
        idRestaurant: "resto-13",
        idAccount: "user-13",
        description:
          "Untuk menuju ke The Peak memang terasa sangat jauh dari pusat kota bandung, dan aksesnya yang agak membingungkan dan jalan kecil berkelok-kelok. Namun Anda mungkin tidak akan tersesat karena hampir di tiap belokan ada signage menuju ke The Peak. Tempatnya sangat bagus untuk Anda yang mencari suasana malam romantis, dengan pemandangan malam kota yang menakjubkan. Interior restaurant mungkin dapat lebih diperbaharui, karena terkesan agak tua dan kurang modern. Kebersihan taplak meja dan sofa juga patut diperhatikan, untuk menjaga kualitas restauran fine dining. Makanan dan pilihan wine/ minuman cukup memuaskan. Overall, a great escape to celebrate something romantic with your beloved person.",
        rating: "5",
      },
      {
        id: "review-283",
        idRestaurant: "resto-13",
        idAccount: "user-19",
        description:
          "Makan dan minum di tempat ini dengan suasana santai dan menyenangkan bersama dengan orang-orang dekat, khususnya keluarga, adalah salah satu tempat terbaik di Bandung. Lokasi memang cukup jauh dari Bandung, tetapi layak dicoba untuk menikmati pemandangan Bandung dan Lembang pada malam hari serasa sedang terbang di angkasa. Makanan dan minuman juga nikmat, didukung dengan cuaca yang sejuk.",
        rating: "4",
      },
      {
        id: "review-284",
        idRestaurant: "resto-13",
        idAccount: "user-20",
        description:
          "Lokasinya oke banget buat foto-foto....datang pada saat sore menjelang malam ketika lampu-lampu akan dinyalakan.....romantis sekali. makanannya biasa aja tidak ada yang special",
        rating: "4",
      },
      {
        id: "review-285",
        idRestaurant: "resto-13",
        idAccount: "user-26",
        description:
          "Cafe dan Restorant The Peak lokasi ny di bandung utara. pmandangan nyake kota bandung Indah sekali, apa lagi di malam hari , dengan warna lampu yangkedap kedip. makanan dan minuman nya sih okok . tidak ada yang istimwa.",
        rating: "4",
      },
      {
        id: "review-286",
        idRestaurant: "resto-13",
        idAccount: "user-46",
        description:
          "Pertama kali mendengar restoran the peak terasa seperti restoran yang mewah enak elegan dan sebagainya. Namun ketika saya sampai kesana semua pandangan tersebut berubah total menjadi buruk. Jalan akses yang sangat jauh juga jalan masuk yang rawan pada malam hari. Masuk kedalam restoran meja-meja tampil sederhana dengan sedikit sambutan yang diberikan oleh pelayan. Saya bersama keluarga ingin mencoba steik karena seperti biasa restoran seperti ini seharusnya enak di bidang masakan ini namun sesuai hasil steik yang saya minta welldone datang dengan bentuk daging yang sangat keras dan maish tetap ada berapa bagian yang masih mentah, juga halnya dengan chicken steik yang saya pesan masih bau amis. Hanya satu point yang dapat diambil dari uang yang saya bayarkan yaitu view pegunungan tidak selebihnya.",
        rating: "2",
      },
      {
        id: "review-287",
        idRestaurant: "resto-13",
        idAccount: "user-28",
        description:
          "Sebenernya kami ke The Peak ini cuma karena penasaran karena pemandangannya bagus. Setelah menempuh sekitar 1 jam perjalanan dr Bandung kota dan melewati jalan yang naik turun kaya kehidupan gw hahaha... Sampe deh kami di TKP, sekilas dr luar sih biasa tapi begitu masuk kedalam ternyata sama aja hahaha...Menurut kami biasa aja seperti resto atau cafe di tempat lainnya tapi katanya mereka punya view yang oke...Naiklah kami ke lantai 3 yang ternyata Reserved Only dan ada minimum chargenya 350rb/orang...Dengan kualitas makanan yang biasa aja dan agak over price (menurut kami), kami tidak menyarankan bagi yang lapar berat makan dsini...Tapi buat yang penasaran sama lokasi dan view nya ya silahkan saja tapi jangan nyesel ya kalo udah dsana karena menurut kami masih banyak lokasi di Bandung yang lebih bagus seperti Sierra, Lawang Wangi, The Valley atau Dusun Bambu",
        rating: "2",
      },
      {
        id: "review-288",
        idRestaurant: "resto-13",
        idAccount: "user-41",
        description:
          "Kami sampai di The Peak sekitar pukul 5 sore untuk menghindari kemacetan. ternyata selain menawarkan keindahan pemandangan malam kota bandung, pemandangan di kala matahari terbenam nya pun tidak kalah bagus.Makanan yang disajikan enak dengan harga sesuai dan pelayanannya juga ramah. Worth to try !",
        rating: "5",
      },
      {
        id: "review-289",
        idRestaurant: "resto-13",
        idAccount: "user-18",
        description:
          "Tempat ini berada di ketinggian, sehingga dapat melihat kota Bandung dari atas. Sajian sekoteng pas sekali paduan kayu manis dan jahe",
        rating: "3",
      },
      {
        id: "review-290",
        idRestaurant: "resto-13",
        idAccount: "user-44",
        description:
          "Lokasi agak jauh dari kota Bandung dan sekarang ada 2 'gerbang pembayaran' untuk bisa ke The Peak dengan total 5000 Rupiah. Ini seperti pemaksaan untuk pungutan liar karena Anda tidak akan bisa ke The Peak tanpa melewati kedua gerbang ini. Makanan cukup enak walaupun harga mahal (88k untuk pasta dan makanan standard lainnya, 150-300k untuk steak). Pemandangan cukup bagus, tapi bila di Indoor, pemandangan akan terhalang kaca. Service sangat baik. Pastikan Anda memakai krim anti nyamuk untuk menikmati makan malam di sana.",
        rating: "3",
      },
      {
        id: "review-291",
        idRestaurant: "resto-13",
        idAccount: "user-29",
        description:
          "Tempat ini benar benar sangat bagus buat pasangan yang ingin makan malam atau fine dinning.Makanan disini biasa saja, namun yang menjadi paling favorit merupakan suasana dan viewnya yang cukup bagus.",
        rating: "4",
      },
      {
        id: "review-292",
        idRestaurant: "resto-13",
        idAccount: "user-10",
        description:
          "Pergi ke sini pas udah malem berangkat sekitar jam 9an, agak serem juga jalannya karna sepi dan gelap. Agak2 takut salah jalan sih, tp akhirnya ngeliat plang The Peak jadi yakin deh kalo ga sesat.Setelah belok ikutin plang The Peak, kiranya udah sampai, yah ternyata masih jauhhhh lagi sekitar 3km baru nyampe ke restonya. Untung jg sih banyak plang plang penunjuk arah jdnya yakin.Karna maren perginya hari Minggu, open till 12 pm aja, dan msuk eh sepiii restonya. Saya milih d outdoor, duduk di sofa rotan yang berbantal. Untuk suasana romantis sih, enak, tp lebih ke fine dining sepertinya.Kemudian saya memesan Nasi Goreng The Peak(kalau ga salah), standar bangett untuk rasanya. Nasi gorengnya ad potongan ayam di nasinya, terus 2 tusuk sate yang cuman dibakar dikit doang karna ga brasa dibakar, terus krupuk sama apalagi lupa deh ga kefoto juga. Untuk harga nasgornya 88k kalau ngga salah.Setelah pulang, salah lewat jalan ntah namanya apaan, kalo baru kluar dr restonya tar ad plang kiri ke Bandung lwt Sersan Bajuri, kanan lewat apagitu lupaa tp krna nih Google Maps rada2 malah nyuruh lewat kanan dan alhasil serem book tengah malam lewatin jalan yang kecil, perumahan yang dempet2 sama sawah!",
        rating: "4",
      },
      {
        id: "review-293",
        idRestaurant: "resto-13",
        idAccount: "user-5",
        description:
          "The Peak Resort Dinning adalah salah satu restoran yang terletak di bukit dengan ketinggian 1200m dari permukaan laut, dari the peak bisa melihat kota bandung secara keseluruhan dan hamparan perkebunan yang ada disekitarnya, bahkan bisa melihat gunung tangkuban perahu.Selain pemandangan yang menakjubkan dan makanan yang enak, the peak mempunyai suasana yang romantis",
        rating: "5",
      },
      {
        id: "review-294",
        idRestaurant: "resto-13",
        idAccount: "user-40",
        description:
          "Konsep fine romantic dining dengan gazebo dan sofa sangat menyenangkan, cita rasa makannya agak unik (saya pesan steak ala resto) dan minumannya sangat menyegarkan. Kami berkunjung saat malam hari dan sebaiknya membawa pakaian hangat karena sangat dingin. Kekurangannya adalah live music saat kami disana tidak cocok dengan konsep restoran.",
        rating: "5",
      },
      {
        id: "review-295",
        idRestaurant: "resto-13",
        idAccount: "user-3",
        description:
          "Saya mengunjungi The Peak di Bandung pada Selasa siang, 02 Jun 2015. Aksesnya mudah sebab banyak penunjuk jalan di jalanan yang mengarahkan ke tempat ini. Masuk ke kawasan ini, saya dikutip uang masuk Rp 3.000 oleh penduduk sekitar yang menyampaikan merupakan akses ke wahana wisata, padahal tidak ada plang tempat wisata. Saya berkeliling masuk di komplek ini, dan banyak penduduk lokal naik motor dan ada yang melihat dari perbukitan. Saya berhenti dan ikut melihat. Tampak tidak ada yang bagus hanya tampak rumah kecil di kejauhan. Saya masuk ke Peak dan menemukan restorannya, dan memutuskan untuk balik kembali sebab tidak tampak ada pemandangan yang spesial.",
        rating: "1",
      },
      {
        id: "review-296",
        idRestaurant: "resto-13",
        idAccount: "user-43",
        description:
          "tempat makan yang bagus..dari restoran kita bisa menikmati pemandangan kota bandung..harga makanan agak mahal tapi rasa ..tempat ini cocok dikunjungi saat malam dengan lampu2 yang menerangi..",
        rating: "3",
      },
      {
        id: "review-297",
        idRestaurant: "resto-13",
        idAccount: "user-34",
        description:
          "waktu kesana malam hari, viewnya ke kota bandung dengan latar lampu lampu rumah penduduk.untuk harga makanan mahal",
        rating: "3",
      },
      {
        id: "review-298",
        idRestaurant: "resto-13",
        idAccount: "user-33",
        description:
          "Dinner di the peak mungkin bisa menjadi salah satu pilihan bagi yang sedang berkunjung ke Bandung. Udara yang dingin dan pemandangan yang bagus menjadi salah satu nilai plus dari restoran ini. Hanya saja perjalanan menuju restoran ini kurang penerangan lampu yang membuat kita harus hati-hati dalam berkendara.. but so far so romantic....",
        rating: "4",
      },
      {
        id: "review-299",
        idRestaurant: "resto-14",
        idAccount: "user-27",
        description:
          "Desain Cafenya unik, staffnya ramah, masakannya enak, plus kami dapat souvenir udeng keren khas Sunda. Dinner dengan remang cahaya lilin dan pemandangan kota Bandung dari atas yang Indah luar biasa :) I'd love to come back whenever I go to Bandung :D sayang akses jalannyabaja sih yang kecil dan padat.",
        rating: "5",
      },
      {
        id: "review-300",
        idRestaurant: "resto-14",
        idAccount: "user-8",
        description:
          "Resto ini menyediakan menu makanan Indonesia & western dan juga minumanannya sangat lengkap, suasana makan menyenangkan di Saung sambil melihat pemandangan kota Bandung. Pelayanan menyenangkan, harga sesuai kualitas dan pelayanan.",
        rating: "5",
      },
      {
        id: "review-301",
        idRestaurant: "resto-14",
        idAccount: "user-24",
        description:
          "tempat makan yang menyenangkan sambil menikmati pemandangan alam dan kota bandung dari atas bukit dago, akan tetapi makanannya cukup mahal akan tetapi rasa yang diberikan sangat lezat dan enak",
        rating: "4",
      },
      {
        id: "review-302",
        idRestaurant: "resto-14",
        idAccount: "user-31",
        description:
          "Kami tiba di Stone Cafe pukul 17:30. Karena baru pertama kesini, jadi kami harus banyak bertanya. Ternyata Stone Cafe berbentuk saung2. Perpaduan yang menarik antara tradisional dan international. Kenapa begitu, karena sebagian besar bentuk Stone Cafe yang saung, tetapi dengan hidangan dan minuman international. Cocok sekali untuk hang out bersama saudara dan teman dengan suasana cafe yang berbeda. Tersedia wifi gratis, hanya saja tidak stabil. Apalagi pada saat itu kami mendapatkan saung nomor 12, dimana posisinya menghadap ke panggung live music. Putra kami yang memang suka live music sangat antuasias. Hanya saja, sound yang dikeluarkan terbilang kecil, sangat disayangkan, tetapi apabila dilihat dari sekitar, masih ada pemukiman yang pasti akan terganggu apabila music terdengar kencang.Untuk harga makanan dan minuman, relatif masuk akal. Kalaupun memang agak mahal, anggap saja kita membeli suasana yang berbeda untuk ke cafe",
        rating: "4",
      },
      {
        id: "review-303",
        idRestaurant: "resto-14",
        idAccount: "user-32",
        description:
          "cocok banget buat kumpul2 sama teman .. tempatnya cozy , makanannya enak2 banget .. ada wine dll juga . sangat recomended resto di bandung .. ada tempat lesehannya juga yang mewah tentunya .",
        rating: "5",
      },
      {
        id: "review-304",
        idRestaurant: "resto-14",
        idAccount: "user-36",
        description:
          "Makanannya enak semua, dari snack, makanan utama sampai makanan penutup nya enak dan porsi mengenyangkan!Udara nya sejuk, tempatnya terang cocok untuk keluarga atau Acara kantor.",
        rating: "5",
      },
      {
        id: "review-305",
        idRestaurant: "resto-14",
        idAccount: "user-3",
        description:
          "Tempat romantis. Cocok untuk memberikan kejutan untuk pasangan. Makanan enak. Semua makanan menggugah selera. Tetapi tetap siapkan kocek yg banyak juga hehhe",
        rating: "4",
      },
      {
        id: "review-306",
        idRestaurant: "resto-14",
        idAccount: "user-1",
        description:
          "Tempat sangat mudah di capai, makan enak, tempat sangat bersih dan rapi, pelayanan sangat ramah dan yg terpenting pesanan cepat tdk lelet",
        rating: "5",
      },
      {
        id: "review-307",
        idRestaurant: "resto-14",
        idAccount: "user-37",
        description:
          "......restourant pinggir kota Bandung yg letaknya di arah pas pintu masuk dago Pakar.....duduk di spot paling pinggir sisi jalan ..bisa lihat pemandangan kota bandung..menunya full variasi bisa pesan selera..klo sy sih tetep menu sundaan....over all good resto .... ...",
        rating: "5",
      },
      {
        id: "review-308",
        idRestaurant: "resto-14",
        idAccount: "user-9",
        description:
          "Kami sekeluarga sering2 ke stone cafe . Duduk disana , menghadap ke selatan , pemandangan nya kota bandung .- apa lagi di mslam hari . Sinar lampy gemelanpan , makan nya nya okok",
        rating: "5",
      },
      {
        id: "review-309",
        idRestaurant: "resto-14",
        idAccount: "user-5",
        description:
          "Seperti banyak resto di daerah dago, view bandung jg bisa dilihat di restoran ini..klo untuk makan rasanya biasa aj..untuk yg pakai mobil harus bersabar karena susah dapet tempat parkir..",
        rating: "4",
      },
      {
        id: "review-310",
        idRestaurant: "resto-14",
        idAccount: "user-34",
        description:
          "Makan dengan temen2 arisan sangat menyenangkan walaupun pelayanan sedikit lama dan harganya yg cukup mahal tapi pemandangan untuk foto2 bagus banget.",
        rating: "3",
      },
      {
        id: "review-311",
        idRestaurant: "resto-14",
        idAccount: "user-2",
        description:
          "Lokasi gampang akses+ Makanannya enak (walaupun mahal)+ Suasananya cozy + wifi cepet+ cocok buat couple maupun keluarga",
        rating: "5",
      },
      {
        id: "review-312",
        idRestaurant: "resto-14",
        idAccount: "user-45",
        description:
          "Cafe stone cocok utk sekedar hang out bersama reman ataupun keluargaHarga makanan Dan minuman worth it",
        rating: "5",
      },
      {
        id: "review-313",
        idRestaurant: "resto-14",
        idAccount: "user-16",
        description:
          "Rata2 resto d dago menang view nyatapi ini pizza nya n makanannya enak2kl pas dpt view bgt ok jg tp kl d bawah paling live music ajakalau wiken pasti antri bgt",
        rating: "4",
      },
      {
        id: "review-314",
        idRestaurant: "resto-14",
        idAccount: "user-15",
        description:
          "Berbuka puasa di restaurant ini pada minggu lepas, tempat nya di atas bukit, sangat sejuk pada waktu malam. tempat makan nya yang sangat romantik dan cantik. authentic indonesian style and food. tempat yang sesuai utk makan sambil menikmati pemandangan yang cantik.",
        rating: "5",
      },
      {
        id: "review-315",
        idRestaurant: "resto-14",
        idAccount: "user-46",
        description:
          "Rasa makanan biasa saja dan pemandangan rata-rata. Live musiknya oke. Sehingga sekali kedatangan sudah cukup.",
        rating: "2",
      },
      {
        id: "review-316",
        idRestaurant: "resto-14",
        idAccount: "user-12",
        description:
          "Lokasi di Dago atas sebelum pintu masuk ke Resort Dago pakar, ini tempat favorit yg sering kami datangi, sejak cafe ini dibuka bbrp tahun lalu. Udara dingin, view indah apalagi kl malam hari kita bisa melihat kota bandung dengan titik2 lampu , suasananya romantis . Makanannya lumayan enak tp sekarang kl mau datang hrs reservasi terlebih dahulu, krn selalu full apalagi kl hari libur",
        rating: "4",
      },
      {
        id: "review-317",
        idRestaurant: "resto-14",
        idAccount: "user-4",
        description:
          "Restaurant ini letaknya tinggi di atas bukit dago, tersedia saung diluar resto yg romantis dgn view kota bandung dan kerlap kerlip lampu kota. Menu makanan bervariasi ada indonesia dan western, tp rasanya standard. Harganya juga overated krn terlalu mahal. Suasana di cafe ini santai dan cuaca dingin kota bandung menjadi salah satu daya tariknya.",
        rating: "4",
      },
      {
        id: "review-318",
        idRestaurant: "resto-14",
        idAccount: "user-25",
        description:
          "The Stone Cafe ini memiliki view Indah dan makanan yang enak. Asiknya, apada saar kami mengunjungi kafe ini, makan malam kami diiringi dengan para penyanyi musik klasik.",
        rating: "5",
      },
      {
        id: "review-319",
        idRestaurant: "resto-14",
        idAccount: "user-21",
        description:
          "Stone Cafe merupakan salah satu pilihan resto yang berada di daerah Dago atas. Tempat nya bagus dan ditata dengan bentuk2 saung yang nyaman, dimana kita sembari makan merasakan suasana yang santai, dan juga bisa menikmati nuansa Bandung dari atas dengan kerlap kerlip lampunya. Cocok untuk makan berdua dengan pasangan atau bersama keluarga. Makanannya juga cukup enak dan banyak pilihannya, dari mulai steak, nasi timbel atau nasi goreng.",
        rating: "5",
      },
      {
        id: "review-320",
        idRestaurant: "resto-14",
        idAccount: "user-20",
        description:
          "Suasana nyaman di daerah dago atas yang berhawa sejuk. Pelayanan ramah. Harga termasuk mahal, saat itu memesan nasi raos dengan harga sekitar Rp75.000. Untuk rasa cukup enak terutama ayam kampungnya mereka sangat pintar mengolahnya sehingga empuk dan enak. Sambal kurang",
        rating: "4",
      },
      {
        id: "review-321",
        idRestaurant: "resto-14",
        idAccount: "user-47",
        description:
          "Overall puas makan malam disini. Pelayanannya ok banget,saya kesana bersama rombongan & sudah booking jauh2 hari, begitu sampe sana makanan sudah siap jadi kami tidak perlu menunggu lama.Chicken gordon blue disini enak banget,extra cheese nya berasa banget,,, mmmm,nyam nyamKalau ke bandung lagi, mau mampir lagi kesini..",
        rating: "5",
      },
      {
        id: "review-322",
        idRestaurant: "resto-14",
        idAccount: "user-50",
        description:
          "Makan mlm kali ini kurang puas...kami dilayani seadanya...hufttt Mudah2an nanti jngan gini lg...Tamu adalah raja...",
        rating: "2",
      },
      {
        id: "review-323",
        idRestaurant: "resto-15",
        idAccount: "user-5",
        description:
          "Pemandangannya bagus sih tp makanannya biasa aza trus kita harus deposit dlu sebelum masuk, pelayanannya kurang frofesional mungkin karena mengambil dari warga sekitar maklum lokasinya lumayan jauh kalo haris ke pusat bandung.",
        rating: "4",
      },
      {
        id: "review-324",
        idRestaurant: "resto-15",
        idAccount: "user-49",
        description:
          "Salah satu tempat makan kesukaan kami. Harganya memang mahal sekali untuk ukuran Bandung. Tempatnya sangat nyaman dan romantis. Makanannya ada barat dan asia. Paling enak sup zuppanya dan kue-kuenya.",
        rating: "5",
      },
      {
        id: "review-325",
        idRestaurant: "resto-15",
        idAccount: "user-27",
        description:
          "Saya bersama adik saya sampai direstoran ini sekitar jam 6 sore dan sudah banyak pengunjung yang datang. Sangat ramai dikunjungi apalagi wekeend. Porsi makanan yang disajikan cukup besar sebanding dengan harganya yang cukup mahal. Pelayanan juga sangat baik. Sangat bagus kesini sore menjelang malam agar bisa menikmati suasana kota Bandung dari ketinggian.",
        rating: "5",
      },
      {
        id: "review-326",
        idRestaurant: "resto-15",
        idAccount: "user-37",
        description:
          "saya memilih malam hari mengunjungi the valley resto dengan alasan selain untuk santap malam suasana romantis juga dapat traveller dapatkan disini.duduk di teras adalah pilihan terbaik untuk mendapatkan view yg cantik akan kota bandung dan menikmati sejuknya udara.dari segi cita rasa kulier juga saya beri acungan jempol steak yg menjadi favorite saya disini.kesimpulan the valley adalah resto yg paling cocok bagi traveller yang mengejar suasana romantis dan cita rasa kulier yang enak.",
        rating: "5",
      },
      {
        id: "review-327",
        idRestaurant: "resto-15",
        idAccount: "user-40",
        description:
          "Makan disini enaknya saat malam hari. Saat udara dingin sambil memandang view kota Bandung. Majan zupa soup adalah saat yang nikmat. Harga makanan disini termasuk mahal. Atmosfir restaurant yang yahuuud..apalagi outdoor viewnya",
        rating: "5",
      },
      {
        id: "review-328",
        idRestaurant: "resto-15",
        idAccount: "user-42",
        description:
          "Buat Anda yang hunting resto dengan suasana yang romantic ga salah lagi kesini ajah... dan kalo budget Anda pas-pasan pesan aja menu yang ringan-ringan.... jangan terkecoh dengan picture di buku menu kalo gamau nyesel. Menu sukinya lebih ok tapi kayaknya ngapain yah jauh-jauh bermacet ria kesini cuma nyari itu... di kota lebih afdol kayaknya. View Bandung @ night nya megang banget",
        rating: "3",
      },
      {
        id: "review-329",
        idRestaurant: "resto-15",
        idAccount: "user-46",
        description:
          "Lokasi The Valley Suki Garden lebih masuk ke dalam lagi dari lokasi The Valley-nya sendiri. Di The Valley Suki Garden, Anda bisa menikmati paket All You Can Eat. Resto ini baru buka jam 5 sore.Bahan makanan yang disediakan cukup beragam dan rata-rata untuk daging sapi sudah diberi bumbu (barbeque, lada hitam, dll). Tempatnya cukup luas dan mejanya cukup banyak. Tapi untuk malam minggu, banyak orang yang sudah reservasi sebelumnya, jadi pastikan untuk menelpon sebelumnya.",
        rating: "4",
      },
      {
        id: "review-330",
        idRestaurant: "resto-15",
        idAccount: "user-24",
        description:
          "Makanannya mostly adalah makanan western, harganya memang cukup menguras kantong. Tapi memang restoran ini sangat romantis dengan pemandangannya yang sangat indah di malam hari",
        rating: "4",
      },
      {
        id: "review-331",
        idRestaurant: "resto-15",
        idAccount: "user-9",
        description:
          "Menikmati pemandangan kota Bandung malam hari dengan kelap kelip lampu dari kejauhan. Puncaknya Bandung ini mah......Makanannya juga lezat dengan harga yang terjangkau. Membeli suasana....itu yang The Valley tawarkan, kami hanya makan malam disana sambil bercengkerama dengan teman-teman dari Jakarta.",
        rating: "5",
      },
      {
        id: "review-332",
        idRestaurant: "resto-15",
        idAccount: "user-35",
        description:
          "Restoran yg cukup enak dan view yg bagus serta makanan yg enak, jika anda kesini mungkin anda harus mengeluarkan kocek yg lumayan banyak untuj menikmati makanan nya. Tp saya tidak kecewa dengan apa yg saya keluarkan karna terbayar semuanya suasana yg dapat dan makanan yg enak",
        rating: "5",
      },
      {
        id: "review-333",
        idRestaurant: "resto-15",
        idAccount: "user-25",
        description:
          "One of the best fine dining restaurant, makanannya enak2, view reato yg sangat bagus berada diatas bukit dan pemandangan kota bandung, namun jika akan berkunjung kesini pada saat weekend sebaiknya harus buat appointment dahulu dikarenakan resto sangat ramai, i think this is one of the best recomended restaurant in Bandung yg harus dikunjungi jika ke Bandung",
        rating: "5",
      },
      {
        id: "review-334",
        idRestaurant: "resto-15",
        idAccount: "user-17",
        description:
          "datang dengan rekan malam menjelang .. pilihan duduk di luar dengan view lampu kota bandung yang ciamik .. ditemani steak dan wine",
        rating: "5",
      },
      {
        id: "review-335",
        idRestaurant: "resto-15",
        idAccount: "user-31",
        description:
          "Saya sudah cukup sering kesini. Walaupun makanannya tidak bisa di bilang the best,harganya mahal, tapi saya suka venuenya. Sambil menikmati pemandangan, anak2 saya bisa main di playground kecilnya.",
        rating: "5",
      },
      {
        id: "review-336",
        idRestaurant: "resto-15",
        idAccount: "user-1",
        description:
          "Tempatnya luaaaas banget. All you can eat dan harganya cukup terjangkau.. cocok untuk acara yg orang2nya banyak..",
        rating: "5",
      },
      {
        id: "review-337",
        idRestaurant: "resto-15",
        idAccount: "user-39",
        description:
          "Bila sedang jalan-jalan ke Bandung, khususnya bila sedang mencari makan malam, saya selalu menyempatkan mengunjungi The Valley. Tempat makan ini memiliki pemandangan kota Bandung yang indah di waktu malam. Disamping tempatnya cozy, menu makanannya cukup bervariasi. Hanya saja, harus sabar menunggu pesanan datang, karena pengunjungnya selalu ramai di malam hari.",
        rating: "4",
      },
      {
        id: "review-338",
        idRestaurant: "resto-15",
        idAccount: "user-18",
        description:
          "Restaurant nya di atas tebing. Wohoo... Romantis banget. Makanan juga oke. Sendok garpunya agak agak vintage gitu. Keren. Hahahaha pengen kesana lagi kalo anak uda gedean",
        rating: "5",
      },
      {
        id: "review-339",
        idRestaurant: "resto-15",
        idAccount: "user-32",
        description:
          "Lokasi di dago dengan view bandung, datanglah malam karena lampu kota akan terlihat, makanan enak steak dan wine menu wajib disini, ambil spot diluar karena udara dingin dan sejuk",
        rating: "5",
      },
      {
        id: "review-340",
        idRestaurant: "resto-15",
        idAccount: "user-47",
        description:
          "harga makanannya mahal namun cukup sepadan dengan kualitas dan suasana restorannya. pemandangannya indah dan ada mainan anak kecil juga",
        rating: "4",
      },
      {
        id: "review-341",
        idRestaurant: "resto-15",
        idAccount: "user-2",
        description:
          "Resto ini di puncak ketinggian Dago, pemandangan indah melihat kota Bandung. Tempat makan indoor & outdoor. Kalau weekend & hari libur sangat ramai pengunjung. Suasana makan malam di Outdoor sangat menyenangkan. Harga sesuai kualitas dan pelayanan.",
        rating: "5",
      },
      {
        id: "review-342",
        idRestaurant: "resto-15",
        idAccount: "user-36",
        description:
          "Makan yng menarik banyak menu dan beragam rasannya lumayan enak keluarga saya juga senang makan di sana",
        rating: "5",
      },
      {
        id: "review-343",
        idRestaurant: "resto-15",
        idAccount: "user-14",
        description:
          "Pemandangan resto ini bagus banget. Suasana resto di sore hari terasa romantis, cantik banget. Cocok untuk pasangan, tetapi oke juga jika bersama keluarga. Banyak pilihan menu. Rasanya standar. Harga cukup mahal. Namun untuk bersantai sesekali bersama orang-orang yang anda cintai, resto ini perlu dicoba.",
        rating: "4",
      },
      {
        id: "review-344",
        idRestaurant: "resto-15",
        idAccount: "user-48",
        description:
          "Kuliner bandung sangat fantastis...saya sangat menyukai wisata kuliner d bandung...tempat nya nya sangat strategis harga harganya murah tapi rasanya fantastis..",
        rating: "5",
      },
      {
        id: "review-345",
        idRestaurant: "resto-15",
        idAccount: "user-23",
        description:
          "Tempatnya berada di atas kota Bandung.. tepatnya di Dago Pakar.. kesininya memang agak susah dan muter2.. cuman ketika sudah sampai.. tempatnya sungguh aduhai dan memanjakan mata... untuk makanannya lebih ke western.. cuman ada menu nasi2 juga.. yang harus kamu coba tentu menu steaknya.. selain gede... toppingnya juga banyak bingitsss... TOBB b-g-t dahh... oia kalo kesini jangan pas jam makan... pasti waiting list deh.. sampe belasan lebih kalo rame banget... males jadinya...",
        rating: "4",
      },
      {
        id: "review-346",
        idRestaurant: "resto-15",
        idAccount: "user-19",
        description:
          "Mengunjungi The Valley, Senin malam udaranya sejuk sekali, kalau kesini malam-malam harus bawa jaket kalau tidak mau masuk angin. Viewnya bagus, harga makanan yang mahal tidak sebanding dengan rasanya. Rasa makanannya biasa saja, tidak ada yang istimewa. Tempat makannya agak gelap, jadi tidak bisa terlihat jelas makanan yang disajikan.",
        rating: "3",
      },
      {
        id: "review-347",
        idRestaurant: "resto-15",
        idAccount: "user-30",
        description:
          "Dianjurkan datang pada malam hari dan nikmati indahnya cahaya lampu-lampu kota Bandung sambil menikmati aneka jenis menu yang ditawarkan. Makan malam bersama kekasih terasa sangat romantis disini. Pelayan restoran cukup ramah.",
        rating: "4",
      },
      {
        id: "review-348",
        idRestaurant: "resto-15",
        idAccount: "user-15",
        description:
          "Untuk acara besar dan menguras kocek.Cuma lu dapet banget keliatan kota bandungnya.Pilih yang paling ujung. Kalo bisa booking dulu kalo weekend. Dijamin ga dapet kursi.Disini termasuknya mahal. Cuma sebanding sih dengan rasanya.Mantab abiisss",
        rating: "5",
      },
      {
        id: "review-349",
        idRestaurant: "resto-15",
        idAccount: "user-29",
        description:
          "pemandangan sangat indah di cafe/restoran inimenu dari berbagai macam disajikan sungguh lengkap dan beberapa menu yang saya pesan sungguh nikmat namun dengan harga yg cukup tinggi untuk ukuran bandung",
        rating: "4",
      },
      {
        id: "review-350",
        idRestaurant: "resto-16",
        idAccount: "user-28",
        description: "Makanan Enak",
        rating: "5",
      },
      {
        id: "review-351",
        idRestaurant: "resto-16",
        idAccount: "user-8",
        description: "Buat yang bingungg mau dinner kemana",
        rating: "5",
      },
      {
        id: "review-352",
        idRestaurant: "resto-16",
        idAccount: "user-10",
        description:
          "Salah satu tempat terbaik di Bandung untuk makan steak yang sudah ada sejak lama (tahun 70an). Suasana yang romantis",
        rating: "5",
      },
      {
        id: "review-353",
        idRestaurant: "resto-16",
        idAccount: "user-39",
        description:
          "suasananya yg oldish banget manembah suasana romantis apalagi di malam hari. makanannya enak",
        rating: "5",
      },
      {
        id: "review-354",
        idRestaurant: "resto-16",
        idAccount: "user-3",
        description:
          "Suasana nya enak..bergaya tradisional kolonial ..cozy..bratwurst nya juara. Pizza terlalu tebal. Pelayanannya kurang ramah dan dingin. Banyak yg cemberut mungkin krn sudah lelah ??! Eclairnya juara banget!!!",
        rating: "5",
      },
      {
        id: "review-355",
        idRestaurant: "resto-16",
        idAccount: "user-47",
        description: "Tizi's memiliki tempat yang menarik.. Nyaman dan tenang",
        rating: "5",
      },
      {
        id: "review-356",
        idRestaurant: "resto-16",
        idAccount: "user-11",
        description:
          "Pertamakali berkunjung ke resto ini sejak masih di jln Hergamanah",
        rating: "5",
      },
      {
        id: "review-357",
        idRestaurant: "resto-16",
        idAccount: "user-7",
        description:
          "Rasa penasaran saya terbayarkan ketika mengunjungi restauran ini. Suasana takjub ketika memasuki dalam ruangan",
        rating: "5",
      },
      {
        id: "review-358",
        idRestaurant: "resto-16",
        idAccount: "user-14",
        description:
          "tempat ini sangat bagus. dekorasinya agak jadul tapi tetap emnarik. untuk makanannya favorit saya yaitu mushroom cream soupnya. enak banget pas lagi disajikan panas tambah campuran rotinya jadi pas banget",
        rating: "5",
      },
      {
        id: "review-359",
        idRestaurant: "resto-16",
        idAccount: "user-29",
        description:
          "Suasananya tidak pernah berubah sejak saya masih pemuda lajang 30 tahun lalu... begitu juga menu dan cita rasa makanan dan minumannya.... Jangan dilewatkan: shashlick alias sate sosis",
        rating: "5",
      },
      {
        id: "review-360",
        idRestaurant: "resto-16",
        idAccount: "user-23",
        description: "Mencari suasana nostalgia di Bandung",
        rating: "5",
      },
      {
        id: "review-361",
        idRestaurant: "resto-16",
        idAccount: "user-9",
        description: "tempatnya yang strategis",
        rating: "5",
      },
      {
        id: "review-362",
        idRestaurant: "resto-16",
        idAccount: "user-48",
        description:
          "Menu andalan disini adalah steak dan sachlick.. tersedia jg menu nasi + kebab setiap hari sabtu dan minggu mulai jam 18.00",
        rating: "5",
      },
      {
        id: "review-363",
        idRestaurant: "resto-16",
        idAccount: "user-37",
        description:
          "Saya dapat rekomendasi restoran ini dari teman saya. Katanya beliau bilang restoran ini bentuk",
        rating: "5",
      },
      {
        id: "review-364",
        idRestaurant: "resto-16",
        idAccount: "user-25",
        description:
          "Harus pesan schaschlik! Daging nya tebal dan juicy disiram dengan saus yg pekat dan gurih.Penutup yang direkomendasikan adalah apple crumble.. disajikan hangat dengan topping es krim vanila dan buah peach.Sayang untuk mushroom cream soup aroma dan rasa jamur nya kurang dominan.",
        rating: "5",
      },
      {
        id: "review-365",
        idRestaurant: "resto-16",
        idAccount: "user-33",
        description:
          "Tizi's merupakan salah satu restoran langganan keluarga saya. Tapi sudah lama saya sendiri tidak pernah makan di sini. Dulu sekali",
        rating: "5",
      },
      {
        id: "review-366",
        idRestaurant: "resto-16",
        idAccount: "user-24",
        description: "Steak disini salah satu yang paling enak di bandung",
        rating: "5",
      },
      {
        id: "review-367",
        idRestaurant: "resto-16",
        idAccount: "user-31",
        description:
          "Restoran yang tersembunyi di belakang BJB dekat Simpang Dago ini merupakan permata tersembunyi di Bandung. Parkir cukup luas",
        rating: "5",
      },
      {
        id: "review-368",
        idRestaurant: "resto-16",
        idAccount: "user-16",
        description: "Tizi merupakan restoran yang legendaris",
        rating: "5",
      },
      {
        id: "review-369",
        idRestaurant: "resto-16",
        idAccount: "user-45",
        description:
          "restoran ini sudah menjadi favorit keluarga sejak dahulu dan rasanya tidak berubah. tempatnya luas",
        rating: "5",
      },
      {
        id: "review-370",
        idRestaurant: "resto-16",
        idAccount: "user-35",
        description:
          "merupakan salah satu restoran yang sudah buka lama di Bandung.kemarin cobain t-bone dengan baked potato dan salad",
        rating: "5",
      },
      {
        id: "review-371",
        idRestaurant: "resto-16",
        idAccount: "user-32",
        description:
          "Ini merupakan resto legendaris di Bandung dengan menu utama steak ala eropa. Saya mengenal resto ini sejak jaman kuia dulu dan ketika menikmatiya pas libur lebaran tahun ini",
        rating: "5",
      },
      {
        id: "review-372",
        idRestaurant: "resto-16",
        idAccount: "user-19",
        description: "berkualitas",
        rating: "5",
      },
      {
        id: "review-373",
        idRestaurant: "resto-16",
        idAccount: "user-44",
        description: "Classic resto",
        rating: "5",
      },
      {
        id: "review-374",
        idRestaurant: "resto-16",
        idAccount: "user-13",
        description:
          'ini adalaha salah satu tempat makan yang wajib kami kunjungi setiap kali berlibur ke bandung. restourant ini menyediakan makanan western. menu favorit saya adalah tenderloin steak. dagingnya sangat empuk dan terasa "melt in your mouth". disana kita juga bisa menikmati cake n pastry khas jerman yang sangat enak',
        rating: "5",
      },
      {
        id: "review-375",
        idRestaurant: "resto-16",
        idAccount: "user-41",
        description: "Menu grill-nya enak-enak. Suka banget sama saus",
        rating: "5",
      },
      {
        id: "review-376",
        idRestaurant: "resto-17",
        idAccount: "user-26",
        description:
          "Saya datang ke Bandung untuk jalan-jalan bersama dengan pasangan. Dimana setelah kami tiba di Bandung mengunakan kereta api kami mampir ke Tempat ini untuk brunch. Pada saat kami sampai sempat agak binggung karena tulisan cafenya tertutup mobil parkir dibawah, sedangkan bagian atasnya ada sign salah satu agen properti. Kami masuk ke tempat ini dimana tempatnya cukup bagus interiornya dan ada dua bagian smoking area dan non smoking. Kami pilih non smoking kemudian kami pesan latte dan big brezzeky. Untuk lattenya cukup bagus dari sisi penyajiannya akan tetapi untuk rasanya agak terlalu banyak susunya. Kemudian untuk menu brunch kami big breezky nya menarik dari sisi penyajiannya. Untuk rasa roti, jamur, bacon dan sosisnya cukup enak. Sedangkan untuk rasa telurnya saat ini kami pilih untuk di poaced agak terlalu matang. Secara overall untuk cafe ini cukup menarik dan boleh di kunjungi saat anda di bandung.",
        rating: "4",
      },
      {
        id: "review-377",
        idRestaurant: "resto-17",
        idAccount: "user-40",
        description:
          "THF selalu menjadi tempat ngopi favorit saya di Bandung. Boleh mencoba kopi, teh, dan semua menu makanannya. Kalau anda penggemar teh, chai latte THF sangat harus dicoba.",
        rating: "5",
      },
      {
        id: "review-378",
        idRestaurant: "resto-17",
        idAccount: "user-36",
        description:
          "Tempatnya sangat nyaman dengan barista yang ramah juga informatif dengan kopi. Kebetulan saya kurang mengerti dengan kopi. Yang saya suka di sini adalah pemilihan kopi mereka selalu terbaik.",
        rating: "5",
      },
      {
        id: "review-379",
        idRestaurant: "resto-17",
        idAccount: "user-21",
        description:
          "Selain tempat yang nyaman, coffee shop ini sering menggunakan varian kopi dari coloumbia, kenya, dan berbagaijenis kopi luar lainnya. Secara langsung Two Hands Full memperkenalkan kita akan keunikan kopi-kopi dr negara penghasil kopi lainnya. Sangat menggugah anda untuk ikut mencari flavour yg dihasilkan pada setiap jenis kopi yg ada. Selain itu THF punya berbagai brunch yg akan memuaskan rasa lapar anda di pagi hari. Omega lovers jadi favorit saya & varian kopi ethiopia adalah yg terbaik. Anda bisa bertanya-tanya kepada sang owner dan barista karena mereka dengan senang hati akan berbagi ilmu dengan pelanggannya.",
        rating: "5",
      },
      {
        id: "review-380",
        idRestaurant: "resto-17",
        idAccount: "user-42",
        description:
          "Makanan breakfast nya ala eropa. Bratwurst dan bacon nya enak. Cara penyajian nya bagus. Menarik dan unik. Menu nya tidak terlalu banyak. Hanya mereka tidak menyediakan saus tomat. Hanya bumbu bumbu seperti garam dan merica.",
        rating: "4",
      },
      {
        id: "review-381",
        idRestaurant: "resto-17",
        idAccount: "user-16",
        description:
          "Kalau boleh dibilang, termasuk resto yang lain dari yang lain. Mungkin baru di sini saya menemukan barista yang tampang yang meragukan (masih muda banget!). Memang masih muda, tapi skillnya termasuk tidak amatiran. Mungkin dapat dikatakan satu dari sedikit restoran western yang menjual masakan non halal di Bandung. Walaupun menu yang ditawarkan terbatas dan termasuk mainstream (di Bandung sendiri sudah terdapat banyak resto yang menjual menu breakfast saja), sepertinya ada keseriusan untuk menjaga kualitas menu sehingga disukai oleh pengunjung. Beberapa menu dilengkapi roti yang mungkin menurut saya tidak dijumpai di tempat lain, sehingga menjadi salah satu keunikannya.Terdapat beberapa koleksi vinyl lawas dan pemutar vinyl pula. Entahlah boleh digunakan atau tidak yang jelas semuanya terlihat dalam kondisi yang terawat (saya yakin pasti masih bisa berfungsi).",
        rating: "5",
      },
      {
        id: "review-382",
        idRestaurant: "resto-17",
        idAccount: "user-30",
        description:
          "Kami ke Two Hands Full karena melihat review beberapa blogger tentang tempat ini dan menunya yang sophisticated. Memang! Tempat yang menyenangkan, juga layanan staf yang full senyum. Nggak lama menunggu, pesanan kami sudah siap.",
        rating: "5",
      },
      {
        id: "review-383",
        idRestaurant: "resto-17",
        idAccount: "user-19",
        description:
          "Enak banget buat ngopi dan nge-chillSuasana nya beda karena dekorasi nya seperti bangunan belom jadiMakanan nya enak dan most importantly, barista nya friendly.The downside: susah ditemuin karena plang nya kecil dan ketutup pohon",
        rating: "4",
      },
      {
        id: "review-384",
        idRestaurant: "resto-17",
        idAccount: "user-8",
        description:
          "Cafe two hand full yang paling enak adalah menu breakfast nya . Kopi nya juga ensk lahhhh . Saya seminggu bisa 2 X mampir disana",
        rating: "5",
      },
      {
        id: "review-385",
        idRestaurant: "resto-17",
        idAccount: "user-24",
        description:
          "Tempatnya menarik, dengan konsep yang sangat 'pabrik'.. sayangnya hamper seluruh menunya non halal..",
        rating: "3",
      },
      {
        id: "review-386",
        idRestaurant: "resto-17",
        idAccount: "user-11",
        description:
          "Saya berkunjung kesini atas rekomendasi seorang teman. Tempatnya oke, di lokasi strategis, konsep nya menarik. Cara penyajian/ presentasinya juga oke.Kualitas kopinya bagus & enak. Minuman disajikan dengan biskuit kecil, percis seperti yang biasa saya terima bila minum di luar negri.Tampaknya mereka serius mendalami seluk beluk 'perkopian' agar bisa menyajikan yang terbaik.Tempat ini cocok untuk dinikmati anak muda, walaupun saya lihat ada juga orang paruh baya berkunjung. Musiknya jangan terlalu keras supaya orang tetap bisa ngobrol dengan nyaman.",
        rating: "5",
      },
      {
        id: "review-387",
        idRestaurant: "resto-17",
        idAccount: "user-20",
        description:
          "Cafe two hand full letak nya persis di depan hotel Eldewes jl, sukajadi breakfast nya boleh dicoba .dengan capucino kopi nya",
        rating: "5",
      },
      {
        id: "review-388",
        idRestaurant: "resto-17",
        idAccount: "user-7",
        description:
          "Tempat ini dekat dari hotel karang setra dan berada di Hotel edelweiss. Tempat yang nyaman dan santai untuk sarapan. Menu sarapan bermacam2 saya mencoba big breakfast dan pulled pork (ya.. menu disini banyak yang memakai pork) rasanya enak dengan porsi yang besar. Harga makanan 50-60K. Kopinya juga enak, mencoba cappucino dan long black. Oke banget.",
        rating: "5",
      },
      {
        id: "review-389",
        idRestaurant: "resto-17",
        idAccount: "user-17",
        description:
          "Pertama kali nya saya datang kesini, tempatnya cukup ramai.Yang khas dari cafe ini adalah menu sarapan pagi bergaya amerika. Kebanyakan menu nya berupa Toast (Roti Tawar panggang), dengan telor, sosis, bacon, atau campuran lain nya.Range harga makanan dari 50rb - 70ribuan, menurut saya pantas untuk menu makanan seperti ini. Tersedia juga berbagai minuman kopi dari capucinno, latte, dll.Suasana ruangan agak remang2, kecuali Anda duduk dibagian dekat jendela.Sangat direkomendasikan untuk mencoba di tempat ini",
        rating: "5",
      },
      {
        id: "review-390",
        idRestaurant: "resto-17",
        idAccount: "user-47",
        description:
          "Tempatnya cukup enak hanya terlalu gelap dan kurang privasi karena semua customer berada di ruangan yang sama dan jarak antar mejanya cukup dekat. Dimaklumi karena luas area ga terlalu besar. Ada smoking room juga terpisah di area luar. Makanannya cukup enak. Harganya lumayan mahal. Kopinya enak. Ada fresh orange juice juga tanpa gula. Ok. Reccomended place.",
        rating: "5",
      },
      {
        id: "review-391",
        idRestaurant: "resto-17",
        idAccount: "user-2",
        description:
          "Jika mencari tempat kopi di daerah sukajadi, two hands full bisa menjadi pilihan. Konsepnya adalah industrial, jadi mungkin agak sedikit remang-remang. Jika bosan, ada pilihan bahan bacaan yang cukup bagus. Untuk pilihan kopi cukup banyak dan rasanya enak, jika ingin mengisi perut, kebanyakan menu makanannya adalah menu sarapan atau sandwich, rasanya cukup enak. Yang saya suka adalah dessert seperti carrot cakenya yang super enak!",
        rating: "5",
      },
      {
        id: "review-392",
        idRestaurant: "resto-17",
        idAccount: "user-33",
        description:
          "Makanannya enak sekali, pilihan makan paginya memang tidak terlalu banyak tapi cukup variatif&bisa memenuhi berbagai selera yang beda...jangan sampai kelewatan deh kalau mengunjungi bandung...",
        rating: "5",
      },
      {
        id: "review-393",
        idRestaurant: "resto-17",
        idAccount: "user-18",
        description:
          "Menu terbatas pada jenis makanan sarapan pagi ala western, dihidangkan sepanjang waktu. Menyajikan daging babi. Rasa makanan oke. waktu tunggu cepat. petugas ramah. tempat cukup unik dan nyaman. Rasa kopinya standar. Harga sesuai tempat dan terjangkau.",
        rating: "5",
      },
      {
        id: "review-394",
        idRestaurant: "resto-17",
        idAccount: "user-45",
        description:
          "Interiornya unik dan anak muda sekali apalagi yang melayani masih muda-muda. dekat dengan PVJ dan mudah dijangkau. Suasananya cozy sekali untuk sekedar ngopi dan sarapan. Mennya tidak terlalu banyak tapi menarik dan enak, terutama Big Breaky dengan baconnya dan porsi cukup besar. Pelayannya ramah dan helpful. Kalau sudah siang, beberapa menu sudah habis. Memang paling pas untuk brunch. Harga juga tidak terlalu mahal sehingga pas untuk anak muda.",
        rating: "5",
      },
      {
        id: "review-395",
        idRestaurant: "resto-18",
        idAccount: "user-38",
        description:
          "Saya datang masih dengan menu breakfastnya, setelah itu ngobrol2 dulu kebetulan tempatnya homie juga nyaman buat hangout, dan lanjut buat buat makan siangnya hehehe",
        rating: "5",
      },
      {
        id: "review-396",
        idRestaurant: "resto-18",
        idAccount: "user-50",
        description:
          "Warung pasta namanya tepat di depan Masjid salman ITB, sesuai dengan namanya menu warung ini banyak yang dari pasta, Lokasinya menarik dan design warungnya pas buat anak muda, untuk diskusi atau sekedar kongkow...",
        rating: "4",
      },
      {
        id: "review-397",
        idRestaurant: "resto-18",
        idAccount: "user-24",
        description:
          "Suka banget ama yang diskon-diskon haha. Selain bisa nongkrong sama temen. Tempat ini cocok buat para mahasiswa, karena ada potongan diskon hingga 20% lho !. Tinggal tunjukin KTM aja guys !",
        rating: "4",
      },
      {
        id: "review-398",
        idRestaurant: "resto-18",
        idAccount: "user-21",
        description:
          "Tempatnya cukup nyaman dan makanannya cukup enak. Harganya pun tidak terlalu mahal. Tempat yang enak untuk berkumpul bersama teman daripada keluarga. Menunya juga cukup unik dengan cara memesan bumbu yang diinginkan lalu memilih jenis pastanya. Menu favorit saya creamy bloody mary (baked). Sayang parkirnya cukup terbatas dan pengunjungnya banyak.",
        rating: "4",
      },
      {
        id: "review-399",
        idRestaurant: "resto-18",
        idAccount: "user-9",
        description:
          "Eggy scampy menawarkan perpaduan fusilli dengan udang dan telur asin. Meskipun mbaknya menyatakan bahwa porsi large = 2 porsi mie, porsi largenya terasa kurang nendang :) Green tea bubblenya tidak terekomendasi, selain harganya mahal, rasanya biasa aja dan bubblenya sedikit sekali, mending beli chat*me deh",
        rating: "4",
      },
      {
        id: "review-400",
        idRestaurant: "resto-18",
        idAccount: "user-32",
        description:
          "Lokasinya yang bersebelahan dengan Kampus ITB membuat cafe ini cukup ramai. Pilihan menu pastanya cukup variatif. Tempatnya juga nyaman dan luas dengan design yang menarik.",
        rating: "4",
      },
      {
        id: "review-401",
        idRestaurant: "resto-18",
        idAccount: "user-34",
        description:
          "Saya sering kesini Tempatnya cozy, makanan jg enak sesuai dengan harga pas buat kumpul bareng temen2. Cm terakhir kesana ada sedikit komplain, waitress kurang friendly n malah terkesan ' ngusir '. Mudah2n nanti ada perubahan",
        rating: "3",
      },
      {
        id: "review-402",
        idRestaurant: "resto-18",
        idAccount: "user-39",
        description:
          "Lokasi deket kampus itb. Pizza nya tipis tapi enak. Pastanya ada yg bake... rasanya enak banget. Minumnya bisa refil. Enak buat bareng temen temen.",
        rating: "4",
      },
      {
        id: "review-403",
        idRestaurant: "resto-18",
        idAccount: "user-16",
        description:
          "Pada bilang disini pastanya enak. Tapi setelah coba, dari 2 minuman dan 2 makanan, yang rasanya bener cuma 1 minuman. Pasta cream saucenya biasa aja dan kurang berasa. Thai tea nya aneh, pasta panggangnya ga jelas rasanya. Hanya kemakan 2 suap.",
        rating: "1",
      },
      {
        id: "review-404",
        idRestaurant: "resto-18",
        idAccount: "user-30",
        description:
          "Untuk yang tengah berada di sekitar Dago, Warung Pasta sangat cocok buat kita. Tidak peduli apakah untuk yang lagi pacaran atau untuk yang sudah berkeluarga bersama anak. Aneka jenis pasta ditawarkan di sini, juga interior yang dibuat juga cocok untuk kumpul bersama keluarga atau untuk yang ingin berdua-duaan atau bahkan kumpul untuk arisan atau reunii kecil bersama teman-teman.",
        rating: "5",
      },
      {
        id: "review-405",
        idRestaurant: "resto-18",
        idAccount: "user-37",
        description:
          "Saya mencoba makan malam di restoran ini. Menu pasta yang bervariasi menjadi nilai tambah restoran ini. Harganya cukup murah, mungkin karena lokasinya dekat dengan salah satu Universitas.",
        rating: "3",
      },
      {
        id: "review-406",
        idRestaurant: "resto-18",
        idAccount: "user-44",
        description:
          "Warung Pasta. Cafe yang menyajikan menu aneka olahan pasta yang ber lokasi di Jalan Ganesha, Bandung, ini pastinya udah banyak orang yang tahu. Bisa dibilang cafe ini sudah cukup lama berdiri. Karena berada di samping kampus ITB, tidak heran kebanyakan yang datang adalah kelompok mahasiswa. Tidak hanya pasta yang disajikan di sini, ada juga pizza, nasi keju, sup dan aneka camilan seperti calamaru dan lainnya. Ada juga menu yang bisa dibilang cukup jarang ditemukan di Bandung, yaitu Calzone. Ini semacam sandwich atau bentuknya mirip-mirip pastel kalo di Indonesia, hanya saja ukurannya lebih besar.harga cukup kompetitif dan masih dalam jangkauan anak muda atau bahkan mahasiswa",
        rating: "3",
      },
      {
        id: "review-407",
        idRestaurant: "resto-18",
        idAccount: "user-45",
        description:
          "Saya sudah sering ke bandung bersama keluarga untuk sarapan di Warung Pasta terutama lazana favorite saya, minuman, dan tempatnya enak dan cozy serta banyak pilihan menu dan kursi.",
        rating: "4",
      },
      {
        id: "review-408",
        idRestaurant: "resto-18",
        idAccount: "user-35",
        description:
          "Beberapa pastanya di sajikan dengan cara memasak yang berbeda dan untuk pertama kalinya tahu kalo sepageti itu jenisnya beragam ya di warung pasta ini, masih berasa dan suasana tempatnya yang nyaman, pernah juga beli paket yang free cheese cake avocado loveable bangeett",
        rating: "5",
      },
      {
        id: "review-409",
        idRestaurant: "resto-18",
        idAccount: "user-48",
        description:
          "Rasanya enak, dan letaknya mudah diakses. Ditambah, banyak pilihan untuk makanan jenis eropa di sini.",
        rating: "4",
      },
      {
        id: "review-410",
        idRestaurant: "resto-18",
        idAccount: "user-6",
        description:
          "Creamy cheese pizzanya enakkk..tiramissunyaa juara cobain! Harganya lumayan terjangkau karena deket kampus mungkin..",
        rating: "4",
      },
      {
        id: "review-411",
        idRestaurant: "resto-18",
        idAccount: "user-40",
        description:
          "Menu yang ditawarkan banyak macamnya, menarik khas kota Bandung yang terkenal dengan kekreatifannya. Ketika mampir disini selepas sholat Jum'at sangat penuh, untung rekan saya sudah pesan tempat duluan, jadi aman spot kami. Buat yang suka menu vegetarian pun disini tersedia. Minumannya juga lucu-lucu bentuk dan jenisnya. Seru buat tempat nongkrong bareng temen kampus/kantor.",
        rating: "3",
      },
      {
        id: "review-412",
        idRestaurant: "resto-18",
        idAccount: "user-31",
        description:
          "Namanya Warung Pasta, tp tempatnya sangat cozy, cocok buat nongkrong dgn teman, dekat kampus ITB .Berbagai macam pasta banyak ditawarkan , dengan harga murah menjadikan tempat ini selalu penuh, soal rasa sebenarnya biasa biasa saja, harga jg sedikit lbh mahal sekarang dibandingkan dulu wkt baru dibuka, msh menempati rumah tua di seberangnya, tp masih ok lah buat mereka penggemar pasta, dgn kantong terbatas ya disini tempatnya, tp kl bisa pertahankan spt rasa, menu dan harga seperti awal dulu, benar2 Warung Pasta murah meriah",
        rating: "3",
      },
      {
        id: "review-413",
        idRestaurant: "resto-18",
        idAccount: "user-23",
        description:
          "Restoran ini terletak dekat kampus ITB sehingga sering dijadikan tempat traktiran jika dapat nilai bagus. Sesuai judulnya resto ini menyajikan berbagai macam pasta. Untuk ukuran kantong mahasiswa harganya lumayan mahal sebenarnya. Porsinya agak banyak dan cukup mengenyangkan buat penggemar pasta. Untuk mengirit pilihlah minuman yang bisa direfill atau free flow",
        rating: "3",
      },
      {
        id: "review-414",
        idRestaurant: "resto-18",
        idAccount: "user-49",
        description:
          "Menu nya simple, pastanya banyak pilihan rasa, tempatnya enakeun, minuman juga banyak pilihan, ada dessert juga. Cuma porsinya makin ke sini makin dikit hehe.. Tmbah jadwal live music harusnya biar makin kece",
        rating: "4",
      },
      {
        id: "review-415",
        idRestaurant: "resto-18",
        idAccount: "user-15",
        description:
          "warpas tuh udah paling recommended harga yang rata-rata tapi makanannya luar biasa loh. Makanan yang paling saya pesen sih Rice and cheese sama Spaghetti Sweety Pow ih enak banget parah recommended hehe, ohiya kalo mau minum bisa refill loh milo refill recommended, tapi ini khusus perorang ya haha",
        rating: "5",
      },
      {
        id: "review-416",
        idRestaurant: "resto-18",
        idAccount: "user-26",
        description:
          "Jadi ceritanya saya sedang ingin makan spaghetti dengan meatball yang kalau menurut ekspektasi saya adalah bakso yang terbuat dr cingcang yang biasa digunakan di menu pasta, setelah sampai, ternyata bakso yang digunakan adalah bakso olahan yang biasa dipakai di tukang bakso, bahkan bentuknya tidak bulat",
        rating: "4",
      },
      {
        id: "review-417",
        idRestaurant: "resto-18",
        idAccount: "user-13",
        description:
          "Tidak hanya pasta yang disajikan di sini, ada juga pizza, nasi keju, sup dan aneka camilan lainnyasaya suka minumannya Ice Italian Chocolate dan makanannya Spicy Hot Pasta",
        rating: "4",
      },
      {
        id: "review-418",
        idRestaurant: "resto-18",
        idAccount: "user-10",
        description:
          "Warpas adalah singkatan dari Warung Pasta. Menunya tidak hanya pasta tetapi juga beberapa camilan seperti calamari. Pizzanya pun beragam jenis, ada yang asin dan manis",
        rating: "5",
      },
      {
        id: "review-419",
        idRestaurant: "resto-18",
        idAccount: "user-14",
        description:
          "Cafe ini menyediakan variatif makanan yg cukup banyak dan terdapat pilihan pasta, pizza, dan beragam dessert. Rasanya enak dan suasana cafe tenang, luas, dan nyaman. Bisa jd pilihan utk menghabiskan waktu bersama teman atau utk urusan bisnis.",
        rating: "4",
      },
      {
        id: "review-420",
        idRestaurant: "resto-18",
        idAccount: "user-47",
        description:
          "selesai makan sy bayar pake debit mandiri di edc bca, sempat gagal/error yang kedua berhasil. tapi di rek. sy terdebet dua kali. komplain sudah hampir seminggu tapi respon masih berbelit2 malah sy yg harus lapor ke bank. dari cara pelayanan keluhan konsumen yang payah seperti ini, bikin kapok makan disini. hati2 klo bayar pake non-tunai. pilih2 tempat makan yg responsif terhadap keluhan konsumen.",
        rating: "2",
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
