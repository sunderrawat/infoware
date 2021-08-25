const User = require("./../model/userModel");

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    res.status(201).json({
      status: "success",
      statusCode: 201,
      message: "user successfully signup",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      statusCode: 500,
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      res.status(401).json({
        status: "success",
        statusCode: 401,
        message: "Incorrect email or password",
      });
    } else {
      res.status(200).json({
        status: "success",
        statusCode: 200,
        data: user,
        message: "successfully login",
      });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      statusCode: 500,
      message: err,
    });
  }
};