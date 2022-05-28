const UserService = require("../services/User.service");
// const { sendEmail } = require("../libraries/Email");
const jwt = require("jsonwebtoken");

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
            idFriend: user.idFriend,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: expired,
          }
        );
        res.status(200).send({
          id: user.id,
          idFriend: user.idFriend,
          email: user.email,
          name: user.name,
          profilePic: user.profilePic,
          access_token: token,
        });
      }
    } catch (error) {
      res.status(500).send({ message: "Terjadi kesalahan sistem " + error });
    }
  },
  registerByGoogle: async (req, res) => {},

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await UserService().authenticate(email, password);
    if (!user) {
      return res.status(400).json({ message: "Email atau Kata sandi salah" });
    }
    const token = jwt.sign(
      {
        id: user.id,
        idFriend: user.idFriend,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: expired,
      }
    );
    return res.status(200).json({ access_token: token });
  },

  profile: (req, res) => {
    const { user } = req;
    return res.status(200).json(user);
  },

  uploadPic: (req, res) => {
    const { user } = req;
    return res.status(200).json(user);
  },

  resetPassword: async (req, res) => {
    const { user } = req;
    const { password } = req.body;
    const result = await UserService().resetPassword(user.id, password);
    result === 0
      ? res.status(500).send({ message: "Terjadi kesalahan sistem" })
      : result === 1
      ? res.status(200).send({ message: "Password Berhasil diganti" })
      : res
          .status(400)
          .send({
            message:
              "Password Masih Sama Seperti Sebelumnya. Tidak ada perubahan",
          });
  },
};
