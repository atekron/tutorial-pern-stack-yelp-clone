require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    // `SELECT * FROM restaurants WHERE id = ${req.params.id}` - never do this!
    // string templating or concatenation make your db vulnerable
    const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
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
