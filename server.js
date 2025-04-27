import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Item from "./item.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch((err) => {
    console.error("Mongo connection error:", err);
    process.exit(1);
  });

// CRUD endpoints
app.post("/items", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/items", async (_req, res) => {
  const items = await Item.find().lean();
  res.json(items);
});

app.get("/items/:id", async (req, res) => {
  const item = await Item.findById(req.params.id).lean();
  item ? res.json(item) : res.status(404).end();
});

app.put("/items/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).lean();
  item ? res.json(item) : res.status(404).end();
});

app.delete("/items/:id", async (req, res) => {
  const result = await Item.findByIdAndDelete(req.params.id).lean();
  result ? res.status(204).end() : res.status(404).end();
});

// Run server
app.listen(PORT, () => console.log(`Listening on :${PORT}`));
