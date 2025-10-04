const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 1. Connect to MongoDB
mongoose.connect("mongodb+srv://vikasbetageri3:naveenambali18@healthcare.ky05ez0.mongodb.net/?retryWrites=true&w=majority&appName=Healthcare")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(" Error connecting:", err));

// 2. Define Schema
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

// 3. Create Model
const Patient = mongoose.model("Patient", patientSchema);

// 4. Routes

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const patient = await Patient.findOne({ username, password });
    if (!patient) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      username: patient.username,
      details: patient.details,
      history: patient.history || [],
      medicines: patient.medicines || [],
      reports: patient.reports || [],
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ADD PATIENT
app.post("/patients", async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.json({ message: "Patient added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL PATIENTS
app.get("/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ONE PATIENT
app.get("/patients/:username", async (req, res) => {
  try {
    const patient = await Patient.findOne({ username: req.params.username });
    if (patient) res.json(patient);
    else res.status(404).json({ message: "Patient not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Start server
app.listen(5000, () => {
  console.log(" Server running on port 5000");
});