const checkoutSchema = require("../model/checkoutSchema");
const {validationResult} = require("express-validator");
const CheckoutService = async (req, res) => {
  const {
    userName,
    emailAddress,
    companyName,
    phoneNumber,
    orderNote,
    price,
    service,
    plan,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const checkoutData = await new checkoutSchema({
      userName,
      emailAddress,
      companyName,
      phoneNumber,
      orderNote,
      price,
      service,
      plan,
    });
    await checkoutData.save();
    return res.status(200).send({
      message: "The data of checkout stored in database ",
      data: checkoutData,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Server Error ${err.message}`,
    });
  }
};

module.exports = {
  CheckoutService,
};
