import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import dotenv from "dotenv";

import vendorRoutes from './routes/vendor.routes.js';
import vendorServiceRoutes from './routes/vendor.config.routes.js';

dotenv.config();
const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ exact frontend
    credentials: true,
  })
);
app.use("/api/user",userRoutes);
app.use("/api/vendor",vendorRoutes);
app.use("/api/vendor", vendorServiceRoutes);



app.get('/',(req,res) => {
    res.send("you are on home page")
});

export default app;
