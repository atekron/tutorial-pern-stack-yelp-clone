require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "burger king"],
    },
  });
});

//get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  res.send(req.params.id);
});

//create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  res.send(req.body);
});

//updeate restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  res.send({ ...req.body, ...req.params });
});

//delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.send(`restoraunt with ID: ${req.params.id} was removed`);
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
