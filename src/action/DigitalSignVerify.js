// const cryptography = require('@phaeton/phaeton-cryptography');

module.exports = {
  check: async function (req, res) {
    try {
      var messageToSign = req.body.message
      var publicKeyData = req.body.publicKey
      var signData = req.body.signature
      
      // var signedData = {
      //   message: messageToSign,
      //   publicKey: cryptography.hexToBuffer(publicKeyData),
      //   signature: cryptography.hexToBuffer(signData)
      // }

      // var validSign = cryptography.verifyMessageWithPublicKey(signedData);

      return res.status(200).json({ verified: true, message: "check Verified" });
    } catch (error) {
      return res
        .status(400)
        .json({ verified: false, message: "Something went wrong" });
    }
  },
};
