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
    res.status(201).json({
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
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(202).send({
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

//updeate restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(203).send({
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

delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE FROM restaurants WHERE id = $1",
      [req.params.id]
    );
    res.status(204).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurant: results.rows[0],
      },
    });
    res.send("hello");
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
