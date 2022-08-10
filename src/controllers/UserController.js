const express = require("express");
const router = express.Router();
const DigitalSignVerify = require("../action/DigitalSignVerify");

router.post(
  "/phaeton/verify",
  DigitalSignVerify.check
);

module.exports = router;
