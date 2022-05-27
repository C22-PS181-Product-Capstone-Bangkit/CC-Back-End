// const passport = require("../libraries/passport");
const UserService = require("../services/User.service");
const { sendEmail } = require("../libraries/Email");
// const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    const { email, name, password } = req.body;
    const user = await UserService().register(email, name, password);
    if (user) {
      const subject = "Welcome Cemil";
      const texting = `<div>
                      <h1 style="text-align:center;">Selamat datang ${user.name}</h1>
                      <p>Terima kasih telah mendaftar di Cemil: Choose your meal</p>
                      </div>
                      `;
      sendEmail(user.email, subject, texting);
      res.status(200).send({
        id: user.id,
        idFriend: user.idFriend,
        email: user.email,
        name: user.name,
        token: "",
      });
    } else {
      res
        .status(400)
        .send("Data kurang lengkap. Cek kembali email, name, password Anda");
    }
  },
  registerByGoogle : async (req, res) => {
    
  },
  login: async (req, res) => {
    const payload = req.body;
    const user = UserService().authenticate(payload.email, payload.password);
    //   const jwtToken = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_SECRET, {expiresIn: 86400*30});
    //   const userData = jwt.verify(jwtToken, process.env.JWT_SECRET);
    //   const token = jwt.sign(data, SECRET, {
    //     expiresIn: EXPIRES_IN,
    // });
    console.log(user);
    return res.status(200).json(user);
  },
  logout: (req, res) => {
    req.logout();
  },
};
