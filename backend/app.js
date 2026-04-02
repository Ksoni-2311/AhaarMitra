import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import dotenv from "dotenv";
import OTP from './routes/otp.js';
import vendorRoutes from './routes/vendor.routes.js';

dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/user",userRoutes);
app.use("/api/vendor",vendorRoutes);



app.get('/',(req,res) => {
    res.send("you are on home page")
});

export default app;
