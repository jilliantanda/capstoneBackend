const express = require("express");
const router = express.Router();
const User = require("../models/User");  // Import the User model
const admin = require("firebase-admin");

// Firebase Admin initialization (can be moved to a separate config file if needed)
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Route to store user profile in MongoDB after Firebase Authentication
router.post("/createUserProfile", async (req, res) => {
  const { uid, username, email } = req.body;  // Extract data from the request

  try {
    // Verify the Firebase token (sent from frontend)
    const decodedToken = await admin.auth().verifyIdToken(uid);
    const firebaseUid = decodedToken.uid;

    // Check if the user already exists in MongoDB
    let user = await User.findOne({ uid: firebaseUid });

    if (!user) {
      // Create a new user profile
      user = new User({
        uid: firebaseUid,  // Store Firebase UID
        username: username,  // Store the username
        email: email,  // Store the email
      });

      await user.save();  // Save the new user profile to MongoDB
      res.status(201).send("User profile created successfully.");
    } else {
      res.status(400).send("User already exists.");
    }
  } catch (error) {
    console.error("Error creating user profile:", error);
    res.status(500).send("Server error.");
  }
});

module.exports = router;