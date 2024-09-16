const admin = require("firebase-admin");

const serviceAccount = require("./jamsphere-af57a-firebase-adminsdk-ss7rb-21192d32d7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
