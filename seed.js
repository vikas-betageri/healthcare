const mongoose = require("mongoose");
const Patient = require("./Patient");
const connectDB = require("./db");

mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB").then(async () => {
  console.log("🌱 Seeding database...");

  await Patient.deleteMany({}); // clear old data

  const users = ({
    username: "naveenambali",
    password: "123456",
    details: {
      name: "naveen",
      age: 30,
      dob: "1994-05-21",
      bloodGroup: "A+",
      weight: "77kg",
    },
    history: [
      {
        doctor: "Dr. Jhatka",
        date: "2024-09-12",
        prescription: "Fever medicine prescribed",
      },
    ],
    medicines: [
      { name: "Paracetamol", dosage: "500mg", time: "Morning & Night" },
      { name: "Vitamin C", dosage: "1000mg", time: "Afternoon" },
    ],
    reports: [
      { name: "Blood Test Report", url: "http://localhost:5000/reports/blood-test.pdf" },
    ],
  });

  console.log(" Sample patient inserted");
  mongoose.connection.close();
});
