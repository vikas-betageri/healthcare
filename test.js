const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vikasbetageri3:naveenambali18@healthcare.ky05ez0.mongodb.net/hospitalDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ Connection Error:", err.message));