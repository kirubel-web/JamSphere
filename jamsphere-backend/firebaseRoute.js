const express = require("express");
const router = express.Router();
const admin = require("./firebaseAdmin"); // Firebase admin instance
const User = require("./models/User"); // Your MongoDB user model

// Google login endpoint
router.post("/auth/google-login", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { email, name, uid, picture } = decodedToken;

    // Check if user exists in the MongoDB database
    let user = await User.findOne({ email: email });
    if (!user) {
      // Create new user if not found
      user = new User({
        uid,                // Set UID from Firebase
        email,              // Use email from decoded token
        username: name,     // Save the user's name
        profilePicture: picture, // Save user's profile picture
        provider: "google", // Mark provider as Google
      });
      await user.save();
    }

    // Return user data (you can generate JWT or manage sessions here)
    res.json({ user });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).send("Invalid or expired token.");
  }
});

module.exports = router;

