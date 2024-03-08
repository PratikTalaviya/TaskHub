module.exports = {
  secretKey: process.env.JWT_SECRET || "679404fdd87a372a873aa636f9bba12b398e53785c1c6c25004315ffd33d3452",
  mongoURI: "mongodb://localhost:27017/taskhub",
  google: {
    clientID: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    callbackURL: "http://localhost:3000/api/auth/google/callback",
  },
};
