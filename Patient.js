const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  details: {
    name: String,
    age: Number,
    dob: String,
    bloodGroup: String,
    weight: Number,
  },
  history: [
    {
      doctor: String,
      date: String,
      prescription: String,
    },
  ],
  medicines: [
    {
      name: String,
      dosage: String,
      time: String,
    },
  ],
  reports: [
    {
      name: String,
      url: String,
    },
  ],
});

module.exports = mongoose.model("Patient", patientSchema);