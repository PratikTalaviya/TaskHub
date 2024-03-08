const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const authRoutes = require("./routes/auth");
const config = require("./config/config");
const session = require("express-session");
const passport = require("passport");
// const passport = require("./middleware/passport-setup");

const app = express();

// Middleware
app.use(express.json());

// CORS middleware configuration to allow requests from the frontend origin
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

// Session middleware
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
