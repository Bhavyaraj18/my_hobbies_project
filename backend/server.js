const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET = "secretkey";
const DB_URL = "http://localhost:3001"; // fixed

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const users = await axios.get(`${DB_URL}/users`);
  const user = users.data.find(
    (u) => u.email === email
  );

  if (!user) {
    return res.status(404).send("User not found");
  }

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid) {
    return res.status(401).send("Invalid password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// REGISTER
app.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  const hashed = await bcrypt.hash(
    password,
    10
  );

  const newUser = {
    email,
    password: hashed,
    role: role || "customer"
  };

  const response = await axios.post(
    `${DB_URL}/users`,
    newUser
  );

  res.json(response.data);
});

app.listen(5000, () =>
  console.log("Backend running on 5000")
);