const UserService = require("../services/User.service");
const ReviewService = require("../services/Review.service");
const LikesService = require("../services/Likes.service");
const HistoryService = require("../services/History.service");
const RestaurantService = require("../services/Restaurant.service");
// const { sendEmail } = require("../libraries/Email");
const jwt = require("jsonwebtoken");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
  keyFilename: "src/config/capstoneproject-352302-85eede2f579b.json",
});
const bucket = storage.bucket("cemil-profile-user");

const expired = "30d";

module.exports = {
  register: async (req, res) => {
    try {
      const { email, name, password } = req.body;
      const user = await UserService().register(email, name, password);
      if (user === 0) {
        res.status(400).send({
          message:
            "Data kurang lengkap. Cek kembali email, nama, password Anda",
        });
      }
      if (user === 1) {
        res.status(400).send({
          message: "Email sudah registrasi. Silahkan login",
        });
      } else {
        // try {
        //   const subject = "Welcome Cemil: Choose Your Meal";
        //   const texting = `<div>
        //                   <h1 style="text-align:center;">Selamat datang ${user.name}</h1>
        //                   <p>Terima kasih telah mendaftar di Cemil: Choose your meal</p>
        //                   </div>
        //                   `;
        //   sendEmail(user.email, subject, texting);
        // } catch (error) {
        //   console.log(error);
        // }

        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: expired,
          }
        );
        return res.status(200).send({
          id: user.id,
          idFriend: user.idFriend,
          email: user.email,
          name: user.name,
          profilePic: user.profilePic,
          access_token: token,
        });
      }
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Terjadi kesalahan sistem " + error });
    }
  },
  registerByGoogle: async (req, res) => {},

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserService().authenticate(email, password);
      if (!user) {
        return res.status(400).json({ message: "Email atau Kata sandi salah" });
      }
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: expired,
        }
      );
      return res.status(200).json({ access_token: token });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  profile: async (req, res) => {
    try {
      const { user } = req;
      const userData = await UserService().getUserById(user.id);
      if (!userData) {
        return res.status(400).send({ message: "Data User tidak ditemukan" });
      }
      let history = [];
      history = await HistoryService().getHistoryByUserId(user.id);
      if (history.length > 0) {
        let restaurant = [];
        for (let i = 0; i < history.length; i++) {
          let data = await RestaurantService().getRestaurantById(
            history[i].idRestaurant
          );
          let count = await ReviewService().getCountReviewByRestaurantId(
            history[i].idRestaurant
          );
          let rating = await RestaurantService().getRating(
            history[i].idRestaurant
          );
          restaurant.push(data);
          restaurant[i]["countReview"] = count;
          restaurant[i]["rating"] = rating;
        }
        history = history.map((data, index) => {
          return {
            restaurant: {
              id: restaurant[index].id,
              name: restaurant[index].name,
              rating: restaurant[index].rating,
              countReview: restaurant[index].countReview,
              profilePic: restaurant[index].profilePic,
            },
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
          };
        });
      }
      let likes = [];
      likes = await LikesService().getLikesByUserId(user.id);
      if (likes.length > 0) {
        let restaurant = [];
        for (let i = 0; i < likes.length; i++) {
          let data = await RestaurantService().getRestaurantById(
            likes[i].idRestaurant
          );
          let count = await ReviewService().getCountReviewByRestaurantId(
            likes[i].idRestaurant
          );
          let rating = await RestaurantService().getRating(
            likes[i].idRestaurant
          );
          restaurant.push(data);
          restaurant[i]["countReview"] = count;
          restaurant[i]["rating"] = rating;
        }
        likes = likes.map((data, index) => {
          return {
            id: data.id,
            restaurant: {
              id: restaurant[index].id,
              name: restaurant[index].name,
              category : restaurant[index].category,
              rating: restaurant[index].rating,
              countReview: restaurant[index].countReview,
              profilePic: restaurant[index].profilePic,
            },
          };
        });
      }
      let review = [];
      review = await ReviewService().getReviewByUserId(user.id);
      if (review.length > 0) {
        let restaurant = [];
        for (let i = 0; i < review.length; i++) {
          let data = await RestaurantService().getRestaurantById(
            review[i].idRestaurant
          );
          let count = await ReviewService().getCountReviewByRestaurantId(
            review[i].idRestaurant
          );
          let rating = await RestaurantService().getRating(
            review[i].idRestaurant
          );
          restaurant.push(data);
          restaurant[i]["countReview"] = count;
          restaurant[i]["rating"] = rating;
        }
        review = review.map((data, index) => {
          return {
            restaurant: {
              id: restaurant[index].id,
              name: restaurant[index].name,
              rating: restaurant[index].rating,
              countReview: restaurant[index].countReview,
              profilePic: restaurant[index].profilePic,
            },
            description: data.description,
            rating: data.rating,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
          };
        });
      }
      return res.status(200).json({
        user: {
          id: userData.id,
          idFriend: userData.idFriend,
          name: userData.name,
          email: userData.email,
          profilePic: userData.profilePic,
          phone: userData.phone,
        },
        review,
        history,
        likes,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  editProfile: async (req, res) => {
    try {
      const { user } = req;
      const { name, phone, email } = req.body;
      const result = await UserService().updateUserById(
        user.id,
        name,
        phone,
        email
      );
      if (result === 0)
        return res.status(400).send({
          message: "Data User tidak ditemukan. Gagal diperbarui",
        });
      if (result === 1)
        return res.status(200).send({
          message: "Data User berhasil diperbarui",
        });
      if (result === 2)
        return res.status(400).send({
          message: "Email User sudah digunakan",
        });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  authToken: async (req, res) => {
    try {
      const { user } = req;
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  uploadPic: async (req, res) => {
    const { user } = req;
    // const { file } = req.formData;
    console.log(file);
    const [files] = await bucket.getFiles();
    let fileInfos = [];
    console.log(files);
    // files.forEach((file) => {
    //   fileInfos.push({
    //     url: file.metadata.mediaLink,
    //   });
    // });
    return res.status(200).json(user);
  },

  resetPassword: async (req, res) => {
    try {
      const { user } = req;
      const { oldPassword, password } = req.body;
      const result = await UserService().resetPassword(
        user.id,
        oldPassword,
        password
      );
      return result === 0
        ? res.status(500).send({ message: "User tidak ditemukan" })
        : result === 1
        ? res
            .status(401)
            .send({
              message: "Gagal mengganti password. Periksa password awal",
            })
        : res.status(200).send({
            message: "Password Berhasil Diubah",
          });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
