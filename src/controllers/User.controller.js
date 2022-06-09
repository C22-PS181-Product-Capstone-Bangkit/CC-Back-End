const { format } = require("util");
const UserService = require("../services/User.service");
const ReviewService = require("../services/Review.service");
const LikesService = require("../services/Likes.service");
const HistoryService = require("../services/History.service");
const RestaurantService = require("../services/Restaurant.service");
// const { sendEmail } = require("../libraries/Email");
const jwt = require("jsonwebtoken");

const expired = "30d";
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
  keyFilename: "src/config/google-key.json",
  projectId: "capstoneproject-352302",
});
const bucket = storage.bucket("cemil-profile-user");

module.exports = {
  register: async (req, res) => {
    try {
      const { email, name, password } = req.body;
      const user = await UserService().register(email, name, password);
      if (user === 0) {
        res.status(400).send({
          error: true,
          message:
            "Fill your name, email, and password",
        });
      }
      if (user === 1) {
        res.status(400).send({
          error: true,
          message: "Email is already registered. Please login",
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
        return res.status(400).json({
          error: true,
          message: "Wrong email/password",
        });
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
        return res.status(400).send({
          error: true,
          message: "User Not Found",
        });
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
              category: restaurant[index].category,
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
      const userData = await UserService().getUserById(user.id);
      if (!userData) {
        return res.status(400).send({
          error: true,
          message: "User Not Found",
        });
      }
      const { name, phone, email } = req.body;
      const result = await UserService().updateUserById(
        user.id,
        name,
        phone,
        email
      );
      if (result === 1)
        return res.status(201).send({
          error: true,
          message:
            "Email is already same before. Success update profile",
        });
      if (result === 2)
        return res.status(400).send({
          error: true,
          message:
            "Email is used by another user. Failed update profile",
        });
      if (result === 3)
        return res.status(201).send({
          error: false,
          message: "Success Edit Profile",
        });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  editFullProfile: async (req, res) => {
    try {
      const { user } = req;
      const userData = await UserService().getUserById(user.id);
      if (!userData) {
        return res.status(400).send({
          error: true,
          message: "User Not Found",
        });
      }
      const data = req.body;
      const image = req.file ? req.file : userData.profilePic;
      const name = data.name ? data.name : userData.name;
      const email = data.email ? data.email : userData.email;
      const phone = data.phone ? data.phone : userData.phone;

      if (image.originalname) {
        if (userData.profilePic) {
          await bucket.file(userData.profilePic.substring(50)).delete();
        }
        const blob = bucket.file(image.originalname);
        const blobStream = blob.createWriteStream({
          resumable: false,
        });
        blobStream
          .on("finish", async () => {
            const publicURL = format(
              `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );
            await UserService().updateProfilePic(user.id, encodeURI(publicURL));
            const result = await UserService().updateUserById(
              user.id,
              name,
              phone,
              email
            );
            if (result === 1)
              return res.status(201).send({
                error: true,
                message:
                  "Email is already same before. Success update profile",
              });
            if (result === 2)
              return res.status(400).send({
                error: true,
                message:
                  "Email is used by another user. Failed update profile",
              });
            if (result === 3)
              return res.status(201).send({
                error: false,
                message: "Success Edit Profile",
              });
          })
          .on("error", (error) => {
            return res.status(400).send({ message: error });
          });
        blobStream.end(req.file.buffer);
      } else {
        await UserService().updateProfilePic(user.id, encodeURI(image));
        const result = await UserService().updateUserById(
          user.id,
          name,
          phone,
          email
        );
        if (result === 1)
          return res.status(201).send({
            error: false,
            message:
              "Email is already same before. Success update profile",
          });
        if (result === 2)
          return res.status(400).send({
            error: false,
            message:
              "Email is used by another user. Failed update profile",
          });
        if (result === 3)
          return res.status(201).send({
            error: true,
            message: "Success Edit Profile",
          });
      }
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
    try {
      const { user } = req;
      const userData = await UserService().getUserById(user.id);
      if (!userData) {
        return res.status(400).send({
          error: true,
          message: "User Not Found",
        });
      }
      const image = req.file;
      if (!image) {
        return res.status(400).send({
          error: true,
          message: "Insert your picture",
        });
      }
      if (userData.profilePic) {
        await bucket.file(userData.profilePic.substring(50)).delete();
      }
      const blob = bucket.file(image.originalname);
      const blobStream = blob.createWriteStream({
        resumable: false,
      });
      blobStream
        .on("finish", async () => {
          const publicURL = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
          );
          await UserService().updateProfilePic(user.id, encodeURI(publicURL));
          const data = await UserService().getUserById(user.id);
          return res.status(200).json({
            user: {
              id: data.id,
              idFriend: data.idFriend,
              name: data.name,
              email: data.email,
              profilePic: data.profilePic,
              phone: data.phone,
            },
          });
        })
        .on("error", (error) => {
          return res.status(500).send({
            error: true,
            message: error,
          });
        });
      blobStream.end(req.file.buffer);
    } catch (error) {
      return res.status(500).send(error);
    }
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
        ? res.status(400).send({
            error: true,
            message: "User Not Found",
          })
        : result === 1
        ? res.status(400).send({
            error: true,
            message: "Fail Change Password. Check your current password",
          })
        : result === 3
        ? res.status(400).send({
            error: true,
            message:
              "Fail Change Password. Current password is already same with new password",
          })
        : res.status(201).send({
            error: false,
            message: "Success Change Password",
          });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { user } = req;
      const userData = await UserService().getUserById(user.id);
      if (!userData) {
        return res.status(400).send({
          error: true,
          message: "User Not Found",
        });
      }
      await ReviewService().deleteReviewByUserId(user.id);
      await HistoryService().deleteHistoryByUserId(user.id);
      await LikesService().deleteLikesByUserId(user.id);
      const result = await UserService().deleteUserById(user.id);
      if (result === 1) {
        return res.status(200).send({
          error: false,
          message: "Success Delete Account",
        });
      } else {
        res.status(500).send({
          error: true,
          message: "Account is not deleted. Please contact admin",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
