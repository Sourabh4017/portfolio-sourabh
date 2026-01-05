// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import contactRoutes from './routes/contactRoutes.js';

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api/contact', contactRoutes);


// // Health
// app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date() }));

// // Connect MongoDB and start server
// const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log('Server running on port', PORT));
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     app.listen(PORT, () => console.log('Server running (no DB) on port', PORT));
//   });

//*************************************8 */

//   import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// import contactRoutes from "./routes/contactRoutes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/contact", contactRoutes);


// Connect MongoDB and start server
// const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log('Server running on port', PORT));
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     app.listen(PORT, () => console.log('Server running (no DB) on port', PORT));
//   });

//***************************************** */

// Load environment variables FIRST
import dotenv from "dotenv";
dotenv.config();

// Core imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Routes
import contactRoutes from "./routes/contactRoutes.js";

// App init
const app = express();

// =======================
// Middleware
// =======================
app.use(cors({
  origin: [
    "http://localhost:5173",           // local frontend
    "http://localhost:3000",
    "https://portfolio-sourabh.onrender.com" // 👉 replace with your real Vercel URL
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// Routes
// =======================
app.use("/api/contact", contactRoutes);

// Health check (VERY IMPORTANT for Render)
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    serverTime: new Date()
  });
});

// =======================
// MongoDB + Server Start
// =======================
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);

    // Still start server so health route works
    app.listen(PORT, () => {
      console.log(`⚠️ Server running WITHOUT DB on port ${PORT}`);
    });
  });
