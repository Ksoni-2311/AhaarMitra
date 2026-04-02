import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import vendorRoutes from './routes/vendor.routes.js';
import otpRouter from './routes/otp.routes.js';

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ exact frontend
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/vendor", vendorRoutes);
// app.use("/api/otp", otpRouter);

app.get('/', (req, res) => {
  res.send("you are on home page");
});

export default app;