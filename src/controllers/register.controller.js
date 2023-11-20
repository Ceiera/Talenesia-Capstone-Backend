import registerService from "../services/register.service.js";

const registerUser = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.userRole ||
        payload.userEmail ||
        payload.userPassword ||
        payload.userFullName ||
        payload.userName
      )
    ) {
      return res
        .status(400)
        .send({ status: "error", message: "Missing Body", data: [] });
    }
    const user = await registerService.registerUser(payload);
    if (user === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "User Succesfully Created",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const registerController = {
  registerUser,
};

export default registerController;
