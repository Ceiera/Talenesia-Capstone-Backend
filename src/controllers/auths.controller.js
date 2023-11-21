import usersService from "../services/users.service.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const payload = req.body;
    if (!(payload.email && payload.password)) {
      res
        .status(400)
        .send({ status: "error", message: "Missing Body", data: [] });
      return;
    }

    //cek email
    const result = await usersService.getUserByEmail(payload.email);
    if (result === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    const match = await bcrypt.compare(payload.password, result.userPassword);
    if (!match) {
      return res.status(400).send({
        status: "error",
        message: "Incorrect Password",
        data: [],
      });
    }
    const userEntity = {
      userId: result.userId,
      userRole: result.userRole,
      userEmail: result.userEmail,
      userFullName: result.userEmail,
      userFullName: result.userFullName,
      userName: result.userName,
    };
    const token = usersService.createJWT(userEntity);

    if (result === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Login Success",
      data: {
        user: userEntity,
        token: token,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
};

const authsController = {
  login,
};

export default authsController;
