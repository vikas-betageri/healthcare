const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vikasbetageri3:naveenambali18@healthcare.ky05ez0.mongodb.net/hospitalDB?retryWrites=true&w=majority&appName=Healthcare",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(" Connected to MongoDB Atlas");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;