import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import providerRoutes from './routes/provider.route.js';
import foodRoutes from './routes/fooodRoutes.js';
const app = express();


app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);
app.use("/api/providers",providerRoutes);
app.use("/api/foods", foodRoutes);


app.get('/',(req,res) => {
    res.send("you are on home page")
});

export default app;
